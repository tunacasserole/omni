FactoryGirl.define do  factory :bin_sku, :class => Omni::BinSku do |o|
    o.bin_sku_id                        'bin_sku_id'
    o.display                           'display'
    o.bin_id                            'bin_id'
    o.sku_id                            'sku_id'
  end
end
