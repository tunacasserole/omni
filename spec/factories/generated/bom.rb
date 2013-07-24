FactoryGirl.define do  factory :bom, :class => Omni::Bom do |o|
    o.bom_id                            'bom_id'
    o.display                           'display'
    o.bom_type                          'bom_type'
  end
end
