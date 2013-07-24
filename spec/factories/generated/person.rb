FactoryGirl.define do  factory :person, :class => Omni::Person do |o|
    o.person_id                         'person_id'
    o.display                           'display'
    o.first_name                        'first_name'
    o.last_name                         'last_name'
  end
end
