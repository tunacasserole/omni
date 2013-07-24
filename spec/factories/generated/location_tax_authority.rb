FactoryGirl.define do  factory :location_tax_authority, :class => Omni::LocationTaxAuthority do |o|
    o.location_tax_authority_id         'location_tax_authority_id'
    o.display                           'display'
    o.location_id                       'location_id'
    o.tax_authority_id                  'tax_authority_id'
  end
end
