FactoryGirl.define do  factory :tax_authority, :class => Omni::TaxAuthority do |o|
    o.tax_authority_id                  'tax_authority_id'
    o.display                           'display'
    o.state_code                        'state_code'
  end
end
