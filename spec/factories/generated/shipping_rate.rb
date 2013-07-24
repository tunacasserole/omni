FactoryGirl.define do  factory :shipping_rate, :class => Omni::ShippingRate do |o|
    o.shipping_rate_id                  'shipping_rate_id'
    o.display                           'display'
    o.supplier_id                       'supplier_id'
    o.shipping_rate_name                'shipping_rate_name'
  end
end
