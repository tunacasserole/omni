FactoryGirl.define do  factory :address, :class => Omni::Address do |o|
    o.address_id                        'address_id'
    o.display                           'display'
    o.addressable_id                    'addressable_id'
    o.addressable_type                  'addressable_type'
    o.line_1                            'line_1'
    o.city                              'city'
    o.zip                               'zip'
    o.address_type                      'address_type'
  end
end
