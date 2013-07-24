FactoryGirl.define do  factory :area, :class => Omni::Area do |o|
    o.area_id                           'area_id'
    o.display                           'display'
    o.location_id                       'location_id'
    o.area_nbr                          'area_nbr'
    o.short_name                        'short_name'
  end
end
