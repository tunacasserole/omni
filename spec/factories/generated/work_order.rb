FactoryGirl.define do  factory :work_order, :class => Omni::WorkOrder do |o|
    o.work_order_id                     'work_order_id'
    o.production_location_id            'production_location_id'
    o.work_order_type                   'work_order_type'
  end
end
