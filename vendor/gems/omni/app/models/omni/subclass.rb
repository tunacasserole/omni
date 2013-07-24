class Omni::Subclass < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :subclasses
  self.primary_key  = :subclass_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  validates    :classification_id,               :presence    => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :subclass_id,                      :override  =>  false,        :with  => :guid              
  default      :subclass_nbr,                     :override  =>  false,        :with  => :sequence,         :named=>"SUBCLASS_NBR"
  default      :markup_percent_high_limit,        :override  =>  false,        :to    => 0                  
  default      :markup_percent_low_limit,         :override  =>  false,        :to    => 0                  
  default      :is_destroyed,                     :override  =>  false,        :to    => false              
  # DEFAULTS (End)


  # REFERENCE (Start) ===================================================================
  reference do
    display_attribute  :display
    query_attribute    :display
    item_template      '{display}'
  end
  # REFERENCE (End)


  # ASSOCIATIONS (Start) ================================================================
  has_many     :styles,                          :class_name => 'Omni::Style',                   :foreign_key => 'subclass_id'
  # has_many     :skus,                            :class_name => 'Omni::Sku',                     :foreign_key => 'subclass_id'
  belongs_to   :classification,                  :class_name => 'Omni::Classification',          :foreign_key => 'classification_id'
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :classification_display,                 :to => 'classification.display'
  end
  # MAPPED ATTRIBUTES (End)

  # COMPUTED ATTRIBUTES (Start) =========================================================
  # COMPUTED ATTRIBUTES (End)

  # TEMPORARY ATTRIBUTES (Start) ========================================================
  # TEMPORARY ATTRIBUTES (End)


  # ORDERING (Start) ====================================================================
  order_search_by :display => :asc
  # ORDERING (End)


  # HOOKS (Start) =======================================================================
  # HOOKS (End)

  # HELPERS (Start) =======================================================================
  def skus
    skus = []
    self.styles.each { |style| skus << style.skus}
    skus
  end

  def sku_locations
    sku_locations = []
    self.styles.each do |style|
      style.sku_locations.each do |sl|
        sku_locations << sl
      end
    end
    sku_locations
  end
  # HELPERS (End)


  # INDEXING (Start) ====================================================================
  searchable do
    string   :display
    string   :subclass_nbr
    string   :classification_display do classification.display if classification end
    integer  :markup_percent_high_limit
    integer  :markup_percent_low_limit
 
    text     :display_fulltext, :using => :display
    text     :subclass_nbr_fulltext, :using => :subclass_nbr
    text     :classification_display_fulltext, :using => :classification_display
    text     :markup_percent_high_limit_fulltext, :using => :markup_percent_high_limit
    text     :markup_percent_low_limit_fulltext, :using => :markup_percent_low_limit
  end 
  # INDEXING (End)


end # class Omni::Subclass

