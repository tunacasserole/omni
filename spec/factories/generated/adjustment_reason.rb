FactoryGirl.define do  factory :adjustment_reason, :class => Omni::AdjustmentReason do |o|
    o.adjustment_reason_id              'adjustment_reason_id'
    o.display                           'display'
    o.ruleset_id                        'ruleset_id'
  end
end
