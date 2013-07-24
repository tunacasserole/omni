FactoryGirl.define do  factory :location, :class => Omni::Location do |o|
    o.location_id                       'location_id'
    o.display                           'display'
    o.line_1                            'line_1'
    o.city                              'city'
    o.zip                               'zip'
    o.phone                             'phone'
    o.district_id                       'district_id'
  end
end
