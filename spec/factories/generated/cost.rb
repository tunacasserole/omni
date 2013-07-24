FactoryGirl.define do  factory :cost, :class => Omni::Cost do |o|
    o.display                           'display'
    o.sku_id                            'sku_id'
    o.cost_id                           'cost_id'
  end
end
