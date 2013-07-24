FactoryGirl.define do  factory :customer, :class => Omni::Customer do |o|
    o.customer_id                       'customer_id'
    o.display                           'display'
    o.customer_nbr                      'customer_nbr'
    o.last_name                         'last_name'
  end
end
