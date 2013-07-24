FactoryGirl.define do  factory :stock_ledger_activity_log, :class => Omni::StockLedgerActivityLog do |o|
    o.stock_ledger_activity_log_id      'stock_ledger_activity_log_id'
    o.display                           'display'
    o.stock_ledger_activity_id          'stock_ledger_activity_id'
    o.activity_log_nbr                  'activity_log_nbr'
    o.model_meta_id                     'model_meta_id'
    o.attribute_meta_id                 'attribute_meta_id'
    o.row_id                            'row_id'
  end
end
