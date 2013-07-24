FactoryGirl.define do  factory :inventory, :class => Mark::Inventory do |o|
    o.inventory_id                      'inventory_id'
    o.display                           'display'
  end
end
