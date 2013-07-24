FactoryGirl.define do  factory :order, :class => Omni::Order do |o|
    o.order_id                          'order_id'
    o.location_id                       'location_id'
    o.customer_id                       'customer_id'
    o.order_date                        
    o.order_source                      'order_source'
  end
end
