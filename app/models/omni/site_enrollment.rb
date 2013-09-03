class Omni::SiteEnrollment < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :site_enrollments
  self.primary_key  = :site_enrollment_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  validates    :site_id,                         :presence    => true
  validates    :school_year,                     :presence    => true
  validates    :grade_id,                        :presence    => true
  validates    :gender,                          :presence    => true
  validates    :enrollment,                      :presence    => true
  validates    :school_year,                     :lookup      => 'SCHOOL_YEAR',                :allow_nil => false 
  validates    :gender,                          :lookup      => 'GENDER',                     :allow_nil => false 
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :site_enrollment_id,               :override  =>  false,        :with  => :guid              
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "#{m.site_display} - #{m.school_year} - #{m.grade_display} - #{m.gender}"}
  default      :enrollment,                       :override  =>  false,        :to    => 0                  
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
  belongs_to   :site,                            :class_name => 'Omni::Site',                    :foreign_key => 'site_id'
  belongs_to   :grade,                           :class_name => 'Omni::Grade',                   :foreign_key => 'grade_id'
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :site_display,                           :to => 'site.display'
    map :grade_display,                          :to => 'grade.display'
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
    string   :site_display do site.display if site end
    string   :school_year do |x| Buildit::Lookup::Manager.display_for('SCHOOL_YEAR', x.school_year) end
    string   :grade_display do grade.display if grade end
    string   :gender do |x| Buildit::Lookup::Manager.display_for('GENDER', x.gender) end
    integer  :enrollment
 
    text     :site_display_fulltext, :using => :site_display
    text     :school_year_fulltext, :using => :school_year
    text     :grade_display_fulltext, :using => :grade_display
    text     :gender_fulltext, :using => :gender
    text     :enrollment_fulltext, :using => :enrollment
  end 
  # INDEXING (End)


end # class Omni::SiteEnrollment

