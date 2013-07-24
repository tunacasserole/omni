FactoryGirl.define do  factory :state_code, :class => Omni::StateCode do |o|
    o.state_code_id                     'state_code_id'
    o.display                           'display'
    o.state_code                        'state_code'
  end
end
