FactoryGirl.define do  factory :sku, :class => Omni::Sku do |o|
    o.sku_id                            'sku_id'
    o.display                           'display'
    o.generic_sku_id                    'generic_sku_id'
    o.add_on_sku_id                     'add_on_sku_id'
    o.site_id                           'site_id'
  end
end
