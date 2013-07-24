FactoryGirl.define do  factory :size_group, :class => Omni::SizeGroup do |o|
    o.size_group_id                     'size_group_id'
    o.display                           'display'
    o.concatenated_name                 'concatenated_name'
  end
end
