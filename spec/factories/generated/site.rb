FactoryGirl.define do  factory :site, :class => Omni::Site do |o|
    o.site_id                           'site_id'
    o.display                           'display'
    o.site_name                         'site_name'
    o.school_nbr                        'school_nbr'
    o.site_type                         'site_type'
    o.line_1                            'line_1'
    o.city                              'city'
    o.zip                               'zip'
    o.phone                             'phone'
  end
end
