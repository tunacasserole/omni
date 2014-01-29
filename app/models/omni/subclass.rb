class Omni::Subclass < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.table_name   = :subclasses
  self.primary_key  = :subclass_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  # validates    :display,                         :uniqueness    => true
  validates    :classification_id,               :presence      => true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :subclass_id,                      :override  =>  false,        :with  => :guid
  default      :subclass_nbr,                     :override  =>  false,        :with  => :sequence,         :named=>"SUBCLASS_NBR"
  default      :markup_percent_high_limit,        :override  =>  true,         :to    => 0
  default      :markup_percent_low_limit,         :override  =>  true,         :to    => 0
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
  # has_many     :skus,                            :class_name => 'Omni::Sku',                     :through => :styles
  belongs_to   :classification,                  :class_name => 'Omni::Classification',          :foreign_key => 'classification_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :classification_display,                 :to => 'classification.display'
    map :department_display,                     :to => 'classification.department.display'
  end
  # MAPPED ATTRIBUTES (End)

  # ORDERING (Start) ====================================================================
  order_search_by :display => :asc
  # ORDERING (End)

  # HOOKS (Start) =======================================================================
  # HOOKS (End)

  # HELPERS (Start) =======================================================================
  def skus
    skus = []
    self.styles.each do |style|
      style.skus.each do |sku|
        skus << sku
      end
    end
    return skus
  end

  def inventories
    inventories = []
    self.styles.each do |style|
      style.inventories.each do |i|
        inventories << i
      end
    end
    inventories
  end
  # HELPERS (End)


  # INDEXING (Start) ====================================================================
  searchable do
    string   :display
    string   :subclass_nbr
    string   :classification_id
    string   :classification_display do classification.display if classification end
    string   :department_display do department_display if department_display end
    # integer  :markup_percent_high_limit
    # integer  :markup_percent_low_limit

    text     :display_fulltext, :using => :display
    text     :subclass_nbr_fulltext, :using => :subclass_nbr
    text     :classification_display_fulltext, :using => :classification_display
    text     :department_display_fulltext, :using => :department_display
    # text     :department_display_fulltext, :using => :department_display
      # text     :markup_percent_high_limit_fulltext, :using => :markup_percent_high_limit
      # text     :markup_percent_low_limit_fulltext, :using => :markup_percent_low_limit
  end
  # INDEXING (End)


end # class Omni::Subclass

