FactoryGirl.define do  factory :purchase, :class => Omni::Purchase do |o|
    o.purchase_id                       'purchase_id'
    o.display                           'display'
  end
end
