FactoryGirl.define do  factory :label, :class => Omni::Label do |o|
    o.label_id                          'label_id'
    o.display                           'display'
    o.label_type                        'label_type'
  end
end
