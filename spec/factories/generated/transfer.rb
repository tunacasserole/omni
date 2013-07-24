FactoryGirl.define do  factory :transfer, :class => Omni::Transfer do |o|
    o.transfer_id                       'transfer_id'
    o.requesting_location_id            'requesting_location_id'
    o.fulfillment_location_id           'fulfillment_location_id'
    o.sku_id                            'sku_id'
    o.transfer_reason_id                'transfer_reason_id'
  end
end
