FactoryGirl.define do  factory :daily_result, :class => Omni::DailyResult do |o|
    o.daily_result_id                   'daily_result_id'
    o.display                           'display'
    o.sku_id                            'sku_id'
    o.location_id                       'location_id'
    o.date                              
  end
end
