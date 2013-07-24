FactoryGirl.define do  factory :phone, :class => Omni::Phone do |o|
    o.phone_id                          'phone_id'
    o.display                           'display'
    o.phoneable_id                      'phoneable_id'
    o.phoneable_type                    'phoneable_type'
    o.phone                             'phone'
    o.phone_type                        'phone_type'
  end
end
