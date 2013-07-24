FactoryGirl.define do  factory :customer_site, :class => Omni::CustomerSite do |o|
    o.customer_site_id                  'customer_site_id'
    o.display                           'display'
    o.customer_id                       'customer_id'
    o.site_id                           'site_id'
  end
end
