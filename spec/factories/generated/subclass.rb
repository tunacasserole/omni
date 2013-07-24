FactoryGirl.define do  factory :subclass, :class => Omni::Subclass do |o|
    o.subclass_id                       'subclass_id'
    o.display                           'display'
    o.classification_id                 'classification_id'
  end
end
