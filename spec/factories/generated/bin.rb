FactoryGirl.define do  factory :bin, :class => Omni::Bin do |o|
    o.bin_id                            'bin_id'
    o.display                           'display'
    o.location_id                       'location_id'
    o.area_id                           'area_id'
  end
end
