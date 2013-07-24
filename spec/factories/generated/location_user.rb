FactoryGirl.define do  factory :location_user, :class => Omni::LocationUser do |o|
    o.location_user_id                  'location_user_id'
    o.display                           'display'
    o.user_id                           'user_id'
    o.location_id                       'location_id'
  end
end
