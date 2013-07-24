FactoryGirl.define do  factory :tax_authority_rate, :class => Omni::TaxAuthorityRate do |o|
    o.tax_authority_rate_id             'tax_authority_rate_id'
    o.display                           'display'
    o.tax_authority_id                  'tax_authority_id'
  end
end
