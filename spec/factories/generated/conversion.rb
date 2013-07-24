FactoryGirl.define do  factory :conversion, :class => Omni::Conversion do |o|
    o.conversion_id                     'conversion_id'
    o.display                           'display'
    o.conversion_type                   'conversion_type'
  end
end
