FactoryGirl.define do  factory :site_discount, :class => Omni::SiteDiscount do |o|
    o.site_discount_id                  'site_discount_id'
    o.display                           'display'
    o.site_id                           'site_id'
    o.classification_id                 'classification_id'
  end
end
