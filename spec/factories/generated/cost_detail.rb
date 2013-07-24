FactoryGirl.define do  factory :cost_detail, :class => Omni::CostDetail do |o|
    o.cost_detail_id                    'cost_detail_id'
    o.cost_model_id                     'cost_model_id'
    o.cost_detail_name                  'cost_detail_name'
  end
end
