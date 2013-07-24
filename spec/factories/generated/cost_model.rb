FactoryGirl.define do  factory :cost_model, :class => Omni::CostModel do |o|
    o.cost_model_id                     'cost_model_id'
    o.display                           'display'
    o.short_name                        'short_name'
  end
end
