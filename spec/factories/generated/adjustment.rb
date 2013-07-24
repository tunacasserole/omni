FactoryGirl.define do  factory :adjustment, :class => Omni::Adjustment do |o|
    o.adjustment_id                     'adjustment_id'
    o.adjustment_nbr                    'adjustment_nbr'
    o.location_id                       'location_id'
    o.sku_id                            'sku_id'
    o.adjustment_reason_id              'adjustment_reason_id'
  end
end
