class Omni::Grade < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :grades
  self.primary_key  = :grade_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  validates    :gradeset,                        :lookup      => 'GRADESET',                   :allow_nil => true  
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :grade_id,                         :override  =>  false,        :with  => :guid              
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "#{m.gradeset} - #{m.grade_name}"}
  default      :grade_order,                      :override  =>  false,        :to    => 0                  
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
  has_many     :order_details,                   :class_name => 'Omni::OrderDetail',             :foreign_key => 'grade_id'
  has_many     :program_products,                :class_name => 'Omni::ProgramProduct',          :foreign_key => 'grade_id'
  has_many     :site_enrollments,                :class_name => 'Omni::SiteEnrollment',          :foreign_key => 'grade_id'
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
    string   :gradeset do |x| Buildit::Lookup::Manager.display_for('GRADESET', x.gradeset) end
    string   :grade_order
 
    text     :gradeset_fulltext, :using => :gradeset
    text     :grade_order_fulltext, :using => :grade_order
  end 
  # INDEXING (End)



  # STATES (Start) ====================================================================

  # STATES (End)

end # class Omni::Grade

