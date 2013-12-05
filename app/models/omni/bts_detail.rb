class Omni::BtsDetail < ActiveRecord::Base

  # METADATA (Start) ====================================================================
  self.table_name                 = :bts_details
  self.primary_key                = :bts_detail_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates :bts_detail_id,                        :presence      => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default :bts_detail_id,                          :with => :guid
  default :is_destroyed,                           :override  =>  false,        :to    => false
  default :need,                :override => false,  :to => 0
  default :on_hand,             :override => false,  :to => 0
  default :wip,                 :override => false,  :to => 0
  default :on_order,            :override => false,  :to => 0
  default :allocated,           :override => false,  :to => 0
  default :transit,             :override => false,  :to => 0
  default :ytd,                 :override => false,  :to => 0
  default :py1,                 :override => false,  :to => 0
  default :py2,                 :override => false,  :to => 0
  default :py3,                 :override => false,  :to => 0
  # DEFAULTS (End)


  # ASSOCIATIONS (Start) ================================================================
  belongs_to   :bts,                            :class_name => 'Omni::Bts',                    :foreign_key => 'bts_id'
  belongs_to   :sku,                            :class_name => 'Omni::Sku',                    :foreign_key => 'sku_id'
  belongs_to   :inventory,                      :class_name => 'Omni::Inventory',              :foreign_key => 'inventory_id'
  belongs_to   :location,                       :class_name => 'Omni::Location',               :foreign_key => 'location_id'
  # ASSOCIATIONS (End)


  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :sku_display,                            :to => 'sku.display'
    map :source,                                 :to => 'sku.source'
    map :source_id,                              :to => 'sku.source_id'
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
    string   :on_hand
    string   :wip
    string   :source
    string   :source_id
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

  # HELPERS (Start) =======================================================================
  def self.source_hash
    etl_hash = {}
    ActiveRecord::Base.connection.execute("select bts_detail_id, location_id, sku_id from bts_details").each {|x| etl_hash["#{x[1]},#{x[2]}"] = x[0]} #MRI
    etl_hash
  end
  # HELPERS (End) =======================================================================

  # HELPERS (Start) =====================================================================
  def calculate
    puts "transforming #{source} sku #{sku_display}"

    case self.sku.source
      when 'Parker'
        # puts "stock is: #{self.source}   size is: #{self.mark_size}"
        # puts "--on hand--"
        self.on_hand = Omni::MarkInventory.where(:stock_nbr => self.source_id, :size => self.source_id).sum(:qoh)
        #puts "--wip--"
        data = Omni::MarkWip.where(:stock_nbr => self.source_id, :size => self.source_id)
        data.each {|x| self.wip += x.cut_wip + x.plant_wip + x.cont_wip}
        #puts "--allocated, in transit--"
        data = Omni::MarkTransferLine.where(:stock_nbr => self.source_id, :size => self.source_id)
        data.each do |x|
          self.allocated += x.qty if [8,53].include? x.transfer_status
          self.transit += x.qty if x.transfer_status == 9
        end
        #puts "--ytd, py1, py2, projection--"
        data = Omni::MarkOrderReport.where(:stock_nbr => self.source_id, :size => self.source_id)
        data.each do |x|
          self.ytd += x.qty if x.year_entered == Time.new.year
          self.py1 += x.qty if x.year_entered == Time.new.year-1
          self.py2 += x.qty if x.year_entered == Time.new.year-2
          self.projection = (self.py1 * 0.85) + (self.py2 * 0.15) if self.py1 && self.py2
        end

      when 'Buckhead'
        #puts "--on_hand--"
        data = Omni::RmsItemDynamic.where(:ItemID => self.source_id)
        data.each {|x| self.on_hand += x.SnapShotQuantity if x.SnapShotQuantity}
        #puts "--WIP, YTD, PY1, PY2, Projection--"
        data = Omni::RmsBts.where(:ItemID => self.source_id)
        data.each do |x|
          self.wip += x.QOO
          self.ytd += x.TOT_2013
          self.py1 += x.TOT_2012
          self.py2 += x.TOT_2011
          self.projection = (self.py1 * 0.85) + (self.py2 * 0.15) if self.py1 && self.py2
        end

      when 'Grits'
        #puts "--on_hand, wip, ytd, projection--"
        data = Omni::GritsBts.where(:tg_sku_id => self.source_id)
        data.each do |x|
          self.on_hand += x.qoh_60 + x.qoh_61 + x.qoh_62 + x.qoh_63 + x.qoh_64 + x.qoh_65 + x.qoh_66
          self.wip += x.qoo_60 + x.qoo_61 + x.qoo_62 + x.qoo_63 + x.qoo_64 + x.qoo_65 + x.qoo_66
          self.ytd += x.sold_60 + x.sold_61 + x.sold_62 + x.sold_63 + x.sold_64 + x.sold_65 + x.sold_66
          self.projection += x.projected_60 + x.projected_61 + x.projected_62 + x.projected_63 + x.projected_64 + x.projected_65 + x.projected_66
        end
    end

    self.projection = 0 unless self.projection
    ### TOTAL ON HAND ###
    self.total_on_hand = self.on_hand #+ self.wip + self.allocated + self.transit

    ### STANDARD DEVIATION OF SALES TO PROJECTED ###
    mean = (self.py1+self.py2)/3
    tot_dev = ((mean-self.py1)**2) + ((mean-self.py2)**2)
    self.standard_dev = Math.sqrt(tot_dev)

    ### STANDARD DEVIATION % ###
    self.standard_dev_pct = self.standard_dev / self.projection if self.projection > 0



    ### SMOOTHED PROJECTION ###
    self.projection_smoothed = self.standard_dev + self.projection - self.ytd
    ### CONVERTED NEED ###
    self.converted_need = self.projection_smoothed - self.allocated - self.py1
    ### GENERIC NEED ###
    self.generic_need = 0
    ### Unusable O/H inventory ###
    self.non_sellable_units = self.total_on_hand - self.complete_coverage if self.complete_coverage and self.complete_coverage > self.total_on_hand
    ### COMPLETE COVERAGE ###
    self.complete_coverage = self.generic_need + (self.non_sellable_units || 0)
    ### USEABLE OH ###
    if (self.complete_coverage - self.total_on_hand) < 0
      self.useable_on_hand = self.complete_coverage
    else
      self.useable_on_hand = self.total_on_hand
    end
    ### COMPLETE OO ###
    self.complete_oo = self.wip
    ### TRUE NEED ###
    self.need = self.complete_coverage - self.total_on_hand - self.complete_coverage
    return self
  end
  # HELPERS (End)

  # FILTERS (Start) =====================================================================
  filter :source_parker,           :with => {data_source: {equal_to: 'PARKER'}},       :priority => 10
  filter :source_buckhead,         :with => {data_source: {equal_to: 'BUCKHEAD'}},       :priority => 20
  filter :source_grits,            :with => {data_source: {equal_to: 'GRITS'}},       :priority => 30
  # FILTERS (End)

end # class Omni::BtsDetail
