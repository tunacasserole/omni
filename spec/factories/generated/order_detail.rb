FactoryGirl.define do  factory :order_detail, :class => Omni::OrderDetail do |o|
    o.order_detail_id                   'order_detail_id'
    o.sku_id                            'sku_id'
    o.sku_alias_id                      'sku_alias_id'
    o.delivery_method                   'delivery_method'
  end
end
