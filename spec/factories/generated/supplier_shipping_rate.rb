FactoryGirl.define do  factory :supplier_shipping_rate, :class => Omni::SupplierShippingRate do |o|
    o.supplier_shipping_rate_id         'supplier_shipping_rate_id'
    o.supplier_id                       'supplier_id'
    o.sku_id                            'sku_id'
  end
end
