FactoryGirl.define do  factory :site_tax_authority, :class => Omni::SiteTaxAuthority do |o|
    o.site_tax_authority_id             'site_tax_authority_id'
    o.display                           'display'
    o.site_id                           'site_id'
    o.tax_authority_id                  'tax_authority_id'
  end
end
