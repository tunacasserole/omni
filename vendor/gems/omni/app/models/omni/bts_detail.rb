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
  def transform(col_name, data_source)
    # puts "transforming #{data_source} #{col_name}"
    case col_name
    when 'on_hand'
      on_hand = 0
      case data_source
        when 'PARKER'  
          data = Omni::MarkInventory.where(:stock_nbr => self.mark_stock, :size => self.mark_size)
          data.each {|i| on_hand += i.qoh if i.qoh}
        when 'BUCKHEAD'
          data = Omni::RmsItemDynamic.where(:ItemID => self.buckhead_identifier)
          data.each {|i| on_hand += i.SnapShotQuantity if i.SnapShotQuantity}
        when 'GRITS'
          data = Omni::GritsBts.where(:tg_sku_id => self.grits_identifier)
          data.each {|i| on_hand += (i.qoh_60 + i.qoh_61 + i.qoh_62 + i.qoh_63 + i.qoh_64 + i.qoh_65 + i.qoh_66)}
      end
      return on_hand

    when 'wip'
      wip = 0
      case data_source
        when 'PARKER'  
          data = Omni::MarkWip.where(:stock_nbr => self.mark_stock, :size => self.mark_size)
          data.each {|i| wip += i.cut_wip + i.plant_wip + i.cont_wip}
        when 'BUCKHEAD'
          data = Omni::RmsBts.where(:ItemID => self.buckhead_identifier)
          data.each {|b| wip += i.qoo}
        when 'GRITS'
          data = Omni::GritsBts.where(:tg_sku_id => self.grits_identifier)
          data.each {|i| wip += i.qoo_60 + i.qoo_61 + i.qoo_62 + i.qoo_63 + i.qoo_64 + i.qoo_65 + i.qoo_66}
      end
      return wip

    when 'allocated' 
      allocated = 0
      if data_source == 'PARKER'
        data = Omni::MarkTransferLine.where(:stock_nbr => self.mark_stock, :size => self.mark_size, :status_id => 8)
        data.each {|l| allocated += l.qty if [8,53].include? l.transfer_status}
      end
      return allocated

    when 'transit'
      transit = 0
      if data_source == 'PARKER'
        data = Omni::MarkTransferLine.where(:stock_nbr => self.mark_stock, :size => self.mark_size, :status_id => 8)
        data.each {|li| transit += li.qty if li.transfer_status == 9}
      end
      return transit
    
    when 'ytd'
      ytd = 0
      case data_source
        when 'PARKER'  
          data = Omni::MarkOrderReport.where(:stock_nbr => self.mark_stock, :size => self.mark_size, :year_entered => Time.new.year)
          data.each {|o| ytd += o.qty}
        when 'BUCKHEAD'
          data = Omni::RmsBts.where(:ItemID => self.buckhead_identifier)
          data.each {|b| ytd += b.TOT_2013}
        when 'GRITS'
          data = Omni::GritsBts.where(:tg_sku_id => self.grits_identifier)
          data.each {|b| ytd += b.sold_60 + b.sold_61 + b.sold_62 + b.sold_63 + b.sold_64 + b.sold_65 + b.sold_66}
      end
      return ytd

    when 'py1'
      py1 = 0
      case data_source
        when 'PARKER'  
          data = Omni::MarkOrderReport.where(:stock_nbr => self.mark_stock, :size => self.mark_size, :year_entered => Time.new.year-1)
          data.each {|o| py1 += o.qty}
        when 'BUCKHEAD'
          data = Omni::RmsBts.where(:ItemID => self.buckhead_identifier)
          data.each {|b| py1 += b.TOT_2012}
        when 'GRITS'
        # How to calculate this??? 
      end
      return py1

    when 'py2'
      py2 = 0
      case data_source
        when 'PARKER'  
          data = Omni::MarkOrderReport.where(:stock_nbr => self.mark_stock, :size => self.mark_size, :year_entered => Time.new.year-2)
          data.each {|o|py2 += o.qty}
        when 'BUCKHEAD'
          data = Omni::RmsBts.where(:ItemID => self.buckhead_identifier)
          data.each {|b|py2 += b.TOT_2011}
        when 'GRITS'
        # How to calculate this??? 
      end
      return py2

    when 'projection'
      projection = 0
      case data_source
        when 'PARKER'  
          projection = (self.py1 * 0.85) + (self.py2 * 0.15) if self.py1 && self.py2 
        when 'BUCKHEAD'
          projection = (self.py1 * 0.85) + (self.py2 * 0.15) if self.py1 && self.py2
        when 'GRITS'
          data = Omni::GritsBts.where(:tg_sku_id => self.grits_identifier)
          data.each {|i| projection += i.proj_60 + i.proj_61 + i.proj_62 + i.proj_63 + i.proj_64 + i.proj_65 + i.proj_66}
      end
      return projection
    end

  end 

  def calculate
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
    self.save
  end
  # HELPERS (End)

  # FILTERS (Start) =====================================================================
  filter :source_parker,           :with => {data_source: {equal_to: 'PARKER'}},       :priority => 10
  filter :source_buckhead,         :with => {data_source: {equal_to: 'BUCKHEAD'}},       :priority => 20
  filter :source_grits,            :with => {data_source: {equal_to: 'GRITS'}},       :priority => 30
  # FILTERS (End)

end # class Omni::BtsDetail