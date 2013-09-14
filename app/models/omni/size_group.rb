class Omni::SizeGroup < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :size_groups
  self.primary_key  = :size_group_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  validates    :concatenated_name,               :presence    => true
  validates    :size_group_nbr,                  :uniqueness  => true,                         :allow_nil => true    
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :size_group_id,                    :override  =>  false,        :with  => :guid              
  default      :size_group_nbr,                   :override  =>  false,        :with  => :sequence,         :named=>"SIZE_GROUP_NBR"
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
  has_many     :styles,                          :class_name => 'Omni::Style',                   :foreign_key => 'size_group_id'
  has_many     :size_group_details,              :class_name => 'Omni::SizeGroupDetail',         :foreign_key => 'size_group_id'
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
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


  # INDEXING (Start) ====================================================================
  searchable do
    string   :display
    string   :size_group_nbr
    string   :description
    string   :short_name
    string   :concatenated_name
    string   :display
    
    text     :display_fulltext, :using => :display
    text     :size_group_nbr_fulltext, :using => :size_group_nbr
    text     :description_fulltext, :using => :description
    text     :short_name_fulltext, :using => :short_name
    text     :concatenated_name_fulltext, :using => :concatenated_name
  end 
  # INDEXING (End)


end # class Omni::SizeGroup

