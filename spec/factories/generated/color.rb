FactoryGirl.define do  factory :color, :class => Omni::Color do |o|
    o.color_id                          'color_id'
    o.display                           'display'
    o.concatenated_name                 'concatenated_name'
    o.color_family                      'color_family'
  end
end
