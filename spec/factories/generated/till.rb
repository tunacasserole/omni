FactoryGirl.define do  factory :till, :class => Omni::Till do |o|
    o.till_id                           'till_id'
    o.display                           'display'
    o.location_id                       'location_id'
  end
end
