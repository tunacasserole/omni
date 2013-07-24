FactoryGirl.define do  factory :customer_tag, :class => Omni::CustomerTag do |o|
    o.customer_tag_id                   'customer_tag_id'
    o.display                           'display'
    o.customer_id                       'customer_id'
    o.tag_id                            'tag_id'
  end
end
