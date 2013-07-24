FactoryGirl.define do  factory :size, :class => Omni::Size do |o|
    o.size_id                           'size_id'
    o.display                           'display'
    o.size_type                         'size_type'
    o.concatenated_name                 'concatenated_name'
  end
end
