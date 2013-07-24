FactoryGirl.define do  factory :stock_ledger_activity, :class => Omni::StockLedgerActivity do |o|
    o.stock_ledger_activity_id          'stock_ledger_activity_id'
    o.display                           'display'
    o.stockable_type                    'stockable_type'
    o.stockable_id                      'stockable_id'
    o.ruleset_id                        'ruleset_id'
    o.sku_id                            'sku_id'
    o.location_id                       'location_id'
  end
end
