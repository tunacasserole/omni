FactoryGirl.define do  factory :period_result, :class => Omni::PeriodResult do |o|
    o.period_result_id                  'period_result_id'
    o.display                           'display'
    o.sku_id                            'sku_id'
    o.location_id                       'location_id'
    o.period_id                         'period_id'
  end
end
