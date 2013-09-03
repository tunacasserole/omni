class Omni::SupplierRatingSubject < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :supplier_rating_subjects
  self.primary_key  = :supplier_rating_subject_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  validates    :supplier_rating_subject_type,    :lookup      => 'SUPPLIER_RATING_SUBJECT_TYPE',:allow_nil => true  
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :supplier_rating_subject_id,       :override  =>  false,        :with  => :guid              
  default      :weighting_percent,                :override  =>  false,        :to    => 0                  
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
  has_many     :notes,                           :class_name => 'Buildit::Note',                     :foreign_key => 'notable_id',       :as => :notable
  has_many     :supplier_ratings,                :class_name => 'Omni::SupplierRating',          :foreign_key => 'supplier_rating_subject_id'
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  # MAPPED ATTRIBUTES (End)

  # COMPUTED ATTRIBUTES (Start) =========================================================
  # COMPUTED ATTRIBUTES (End)

  # TEMPORARY ATTRIBUTES (Start) ========================================================
  # TEMPORARY ATTRIBUTES (End)


  # SCOPES (Start) ======================================================================

  # SCOPES (End)


  # HOOKS (Start) =======================================================================
  # HOOKS (End)


  # INDEXING (Start) ====================================================================
  searchable do
    string   :display
    string   :description
    string   :supplier_rating_subject_type do |x| Buildit::Lookup::Manager.display_for('SUPPLIER_RATING_SUBJECT_TYPE', x.supplier_rating_subject_type) end
    integer  :weighting_percent
 
    text     :display_fulltext, :using => :display
    text     :description_fulltext, :using => :description
    text     :supplier_rating_subject_type_fulltext, :using => :supplier_rating_subject_type
    text     :weighting_percent_fulltext, :using => :weighting_percent
  end 
  # INDEXING (End)


end # class Omni::SupplierRatingSubject

