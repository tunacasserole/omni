FactoryGirl.define do  factory :rule, :class => Omni::Rule do |o|
    o.rule_id                           'rule_id'
    o.display                           'display'
    o.ruleset_id                        'ruleset_id'
  end
end
