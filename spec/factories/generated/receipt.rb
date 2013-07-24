FactoryGirl.define do  factory :receipt, :class => Omni::Receipt do |o|
    o.receipt_id                        'receipt_id'
    o.display                           'display'
  end
end
