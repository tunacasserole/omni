class Omni::ProgramProduct < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :program_products
  self.primary_key  = :program_product_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  supports_fulltext    
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  validates    :program_id,                      :presence    => true
  validates    :product_id,                      :presence    => true
  validates    :from_grade_id,                   :presence    => true
  validates    :thru_grade_id,                   :presence    => true
  validates    :uniform_source,                  :lookup      => 'UNIFORM_SOURCE',             :allow_nil => true  
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :program_product_id,               :override  =>  false,        :with  => :guid              
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "#{m.program_display} - #{m.product_display}"}
  default      :is_required_male,                 :override  =>  false,        :to    => false              
  default      :is_required_female,               :override  =>  false,        :to    => false              
  default      :is_optional_male,                 :override  =>  false,        :to    => false              
  default      :is_optional_female,               :override  =>  false,        :to    => false              
  default      :is_includes_logo,                 :override  =>  false,        :to    => false              
  default      :discount_percent,                 :override  =>  false,        :to    => 0                  
  default      :is_active,                        :override  =>  false,        :to    => false              
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
  has_many     :program_styles,                  :class_name => 'Omni::ProgramStyle',            :foreign_key => 'program_product_id'
  belongs_to   :program,                         :class_name => 'Omni::Program',                 :foreign_key => 'program_id'
  belongs_to   :product,                         :class_name => 'Omni::Product',                 :foreign_key => 'product_id'
  belongs_to   :from_grade,                      :class_name => 'Omni::Grade',                   :foreign_key => 'from_grade_id'
  belongs_to   :thru_grade,                      :class_name => 'Omni::Grade',                   :foreign_key => 'thru_grade_id'
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :program_display,                        :to => 'program.display'
    map :product_display,                        :to => 'product.display'
    map :from_grade_display,                     :to => 'from_grade.display'
    map :thru_grade_display,                     :to => 'thru_grade.display'
    map :category_id,                            :to => 'product.category.id'
  end
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
    string   :program_id
    string   :product_display do product.display if product end
    string   :from_grade_display do from_grade.display if from_grade end
    string   :thru_grade_display do thru_grade.display if thru_grade end
    string   :uniform_source do |x| Buildit::Lookup::Manager.display_for('UNIFORM_SOURCE', x.uniform_source) end
    boolean  :is_required_male
    boolean  :is_required_female
    boolean  :is_optional_male
    boolean  :is_optional_female
    boolean  :is_includes_logo
    integer  :discount_percent
    boolean  :is_active
 
    text     :product_display_fulltext, :using => :product_display
    text     :from_grade_display_fulltext, :using => :from_grade_display
    text     :thru_grade_display_fulltext, :using => :thru_grade_display
    text     :uniform_source_fulltext, :using => :uniform_source
    text     :discount_percent_fulltext, :using => :discount_percent
  end 
  # INDEXING (End)



  # STATES (Start) ====================================================================

  # STATES (End)

end # class Omni::ProgramProduct

