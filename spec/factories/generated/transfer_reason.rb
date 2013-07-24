FactoryGirl.define do  factory :transfer_reason, :class => Omni::TransferReason do |o|
    o.transfer_reason_id                'transfer_reason_id'
    o.display                           'display'
  end
end
