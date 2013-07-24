FactoryGirl.define do  factory :voucher, :class => Omni::Voucher do |o|
    o.voucher_id                        'voucher_id'
    o.display                           'display'
    o.customer_id                       'customer_id'
    o.voucher_nbr                       'voucher_nbr'
  end
end
