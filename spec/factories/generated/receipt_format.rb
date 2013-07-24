FactoryGirl.define do  factory :receipt_format, :class => Omni::ReceiptFormat do |o|
    o.receipt_format_id                 'receipt_format_id'
    o.display                           'display'
  end
end
