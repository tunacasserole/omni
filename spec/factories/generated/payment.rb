FactoryGirl.define do  factory :payment, :class => Omni::Payment do |o|
    o.payment_id                        'payment_id'
    o.payment_nbr                       'payment_nbr'
  end
end
