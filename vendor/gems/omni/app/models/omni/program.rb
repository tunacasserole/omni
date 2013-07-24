class Omni::Program < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :programs
  self.primary_key  = :program_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  validates    :program_nbr,                     :presence    => true
  validates    :site_id,                         :presence    => true
  validates    :program_nbr,                     :uniqueness  => true,                         :allow_nil => false 
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :program_id,                       :override  =>  false,        :with  => :guid              
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "#{m.site_display}, Program: #{m.program_nbr} - #{m.effective_date}"}
  default      :program_nbr,                      :override  =>  false,        :with  => :sequence,         :named=>"PROGRAM_NBR"
  default      :is_exclusive,                     :override  =>  false,        :to    => false              
  default      :teacher_discount_percent,         :override  =>  false,        :to    => 0                  
  default      :administrator_discount_percent,   :override  =>  false,        :to    => 0                  
  default      :is_discount_in_store,             :override  =>  false,        :to    => false              
  default      :is_discount_on_web,               :override  =>  false,        :to    => false              
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
  has_many     :program_products,                :class_name => 'Omni::ProgramProduct',          :foreign_key => 'program_id'
  belongs_to   :site,                            :class_name => 'Omni::Site',                    :foreign_key => 'site_id'
  has_many     :notes,                           :class_name => 'Buildit::Note',                     :foreign_key => 'notable_id'
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :site_display,                           :to => 'site.display'
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
    string   :program_nbr
    string   :site_display do site.display if site end
    date     :effective_date
    date     :end_date
    boolean  :is_exclusive
    integer  :teacher_discount_percent
    integer  :administrator_discount_percent
    boolean  :is_active
 
    text     :program_nbr_fulltext, :using => :program_nbr
    text     :site_display_fulltext, :using => :site_display
    text     :teacher_discount_percent_fulltext, :using => :teacher_discount_percent
    text     :administrator_discount_percent_fulltext, :using => :administrator_discount_percent
  end 
  # INDEXING (End)



  # STATES (Start) ====================================================================

  # STATES (End)

end # class Omni::Program

