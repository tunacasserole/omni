class Omni::BtsDetail < ActiveRecord::Base


  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  #self.establish_connection       Buildit::Util::Data::Connection.for 'BUILDIT'
  self.table_name                 = :bts_details
  self.primary_key                = :bts_detail_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  #supports_logical_delete
  #supports_audit
  #supports_revisioning
  supports_fulltext
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates :bts_detail_id,                        :presence      => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default :bts_detail_id,                          :with => :guid
  # DEFAULTS (End)


  # ASSOCIATIONS (Start) ================================================================
  belongs_to   :bts,                            :class_name => 'Omni::Bts',                    :foreign_key => 'bts_id'  
  belongs_to   :sku,                            :class_name => 'Omni::Sku',                    :foreign_key => 'sku_id'    
  belongs_to   :location,                       :class_name => 'Omni::Location',               :foreign_key => 'location_id'      
  # ASSOCIATIONS (End)


  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :sku_display,                            :to => 'sku.display'
    map :mark_stock,                             :to => 'sku.mark_stock'
    map :mark_size,                              :to => 'sku.mark_size'    
    map :buckhead_identifier,                    :to => 'sku.buckhead_identifier'
    map :grits_identifier,                       :to => 'sku.grits_identifier'    
    map :location_display,                       :to => 'location.display'
    map :style_id,                               :to => 'sku.style_id'
    map :style_display,                          :to => 'sku.style_display'   
  end
  # MAPPED ATTRIBUTES (End)


  # COMPUTED ATTRIBUTES (Start) =========================================================
  
  # COMPUTED ATTRIBUTES (End)


  # TEMPORARY ATTRIBUTES (Start) ========================================================
  
  # TEMPORARY ATTRIBUTES (End)


  # FILTERS (Start) =====================================================================
  
  # FILTERS (End)


  # ORDERING (Start) ====================================================================
  
  # ORDERING (End)


  # SCOPES (Start) ======================================================================
  
  # SCOPES (End)


  # INDEXING (Start) ====================================================================
  searchable do
    string   :bts_id
    string   :sku_display    
    string   :style_display
    string   :data_source
    string   :on_hand    
    string   :wip
    string   :mark_stock
    string   :mark_size
    string   :transit
    string   :allocated
    string   :ytd
    string   :py1
    string   :py2
    string   :projection

    text     :sku_fulltext, :using => :sku
    text     :style_fulltext, :using => :style_display
  end 
  # INDEXING (End)


  # HOOKS (Start) =======================================================================

  # HOOKS (End)


  # STATES (Start) ====================================================================
  
  # STATES (End)
  

  # HELPERS (Start) =====================================================================
  def transform_and_calculate
    #puts "transforming #{self.data_source} sku #{self.sku_display}"

    case self.data_source
      when 'PARKER'  
        #puts "--on hand--"        
        data = Omni::MarkInventory.where(:stock_nbr => self.mark_stock, :size => self.mark_size)
        data.each {|x| self.on_hand += x.qoh if x.qoh}
        #puts "--wip--"  
        data = Omni::MarkWip.where(:stock_nbr => self.mark_stock, :size => self.mark_size)
        data.each {|x| self.wip += x.cut_wip + x.plant_wip + x.cont_wip} 
        # data.each {|i| #puts "WIPS => #{self.cut_wip.to_s}, #{self.plant_wip.to_s}, #{self.cont_wip.to_s}"}          
        #puts "--allocated, in transit--"
        data = Omni::MarkTransferLine.where(:stock_nbr => self.mark_stock, :size => self.mark_size)
        data.each do |x|
          self.allocated += x.qty if [8,53].include? x.transfer_status
          self.transit += x.qty if x.transfer_status == 9
        end
        #puts "--ytd, py1, py2, projection--"
        data = Omni::MarkOrderReport.where(:stock_nbr => self.mark_stock, :size => self.mark_size)
        data.each do |x|
          self.ytd += x.qty if x.year_entered == Time.new.year
          self.py1 += x.qty if x.year_entered == Time.new.year-1
          self.py2 += x.qty if x.year_entered == Time.new.year-2                  
          self.projection = (self.py1 * 0.85) + (self.py2 * 0.15) if self.py1 && self.py2
        end

      when 'BUCKHEAD'
        #puts "--on_hand--"
        data = Omni::RmsItemDynamic.where(:ItemID => self.buckhead_identifier)
        data.each {|x| self.on_hand += x.SnapShotQuantity if x.SnapShotQuantity}
        #puts "--WIP, YTD, PY1, PY2, Projection--"
        data = Omni::RmsBts.where(:ItemID => self.buckhead_identifier)
        data.each do |x|
          self.wip += x.QOO
          self.ytd += x.TOT_2013
          self.py1 += x.TOT_2012
          self.py2 += x.TOT_2011
          self.projection = (self.py1 * 0.85) + (self.py2 * 0.15) if self.py1 && self.py2
        end

      when 'GRITS'
        #puts "--on_hand, wip, ytd, projection--"
        data = Omni::GritsBts.where(:tg_sku_id => self.grits_identifier)
        data.each do |x|
          self.on_hand += x.qoh_60 + x.qoh_61 + x.qoh_62 + x.qoh_63 + x.qoh_64 + x.qoh_65 + x.qoh_66
          self.wip += x.qoo_60 + x.qoo_61 + x.qoo_62 + x.qoo_63 + x.qoo_64 + x.qoo_65 + x.qoo_66
          self.ytd += x.sold_60 + x.sold_61 + x.sold_62 + x.sold_63 + x.sold_64 + x.sold_65 + x.sold_66
          self.projection += x.projected_60 + x.projected_61 + x.projected_62 + x.projected_63 + x.projected_64 + x.projected_65 + x.projected_66   
        end
    end

    ### TOTAL ON HAND ###    
    self.total_oh = self.on_hand + self.wip + self.allocated + self.transit      
    ### STANDARD DEVIATION OF SALES TO PROJECTED ###
    mean = (self.ytd+self.py1+self.py2)/3
    tot_dev = ((self.ytd-mean)**2) + ((self.py1-mean)**2) + ((self.py2-mean)**2)
    self.projection_dev = Math.sqrt(tot_dev)
    ### STANDARD DEVIATION % ###
    self.projection_dev_pct = self.projection_dev / self.projection unless self.projection == 0
    ### SMOOTHED PROJECTION ###
    self.projection_smooth = self.projection_dev + self.projection - self.ytd
    ### CONVERTED NEED ###
    self.converted_need = self.projection_smooth - self.allocated - self.py1
    ### GENERIC NEED ###
    self.generic_need = 0
    ### Unusable O/H inventory ###
    self.unuseable_oh = self.total_oh - self.complete_coverage if self.complete_coverage and self.complete_coverage > self.total_oh
    ### COMPLETE COVERAGE ###
    self.complete_coverage = self.generic_need + (self.unuseable_oh || 0)
    ### USEABLE OH ###
    if (self.complete_coverage - self.total_oh) < 0
      self.useable_oh = self.complete_coverage
    else
      self.useable_oh = self.total_oh
    end
    ### COMPLETE OO ###
    self.complete_oo = self.wip
    ### TRUE NEED ###
    self.need = self.complete_coverage - self.total_oh - self.complete_coverage
    return self
  end
  # HELPERS (End)

  # FILTERS (Start) =====================================================================
  filter :source_parker,           :with => {data_source: {equal_to: 'PARKER'}},       :priority => 10
  filter :source_buckhead,         :with => {data_source: {equal_to: 'BUCKHEAD'}},       :priority => 20
  filter :source_grits,            :with => {data_source: {equal_to: 'GRITS'}},       :priority => 30
  # FILTERS (End)

end # class Omni::BtsDetail