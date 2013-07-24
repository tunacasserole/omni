FactoryGirl.define do  factory :site_enrollment, :class => Omni::SiteEnrollment do |o|
    o.site_enrollment_id                'site_enrollment_id'
    o.display                           'display'
    o.site_id                           'site_id'
    o.school_year                       'school_year'
    o.grade_id                          'grade_id'
    o.gender                            'gender'
    o.enrollment                        123.00
  end
end
