FactoryGirl.define do  factory :shipment_detail, :class => Omni::ShipmentDetail do |o|
    o.shipment_detail_id                'shipment_detail_id'
    o.display                           'display'
    o.shipment_id                       'shipment_id'
    o.pick_ticket_id                    'pick_ticket_id'
  end
end
