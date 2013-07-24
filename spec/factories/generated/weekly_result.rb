FactoryGirl.define do  factory :weekly_result, :class => Omni::WeeklyResult do |o|
    o.weekly_result_id                  'weekly_result_id'
    o.display                           'display'
    o.sku_id                            'sku_id'
    o.location_id                       'location_id'
    o.week_id                           'week_id'
  end
end
