FactoryGirl.define do  factory :site_donation, :class => Omni::SiteDonation do |o|
    o.site_donation_id                  'site_donation_id'
    o.display                           'display'
    o.site_id                           'site_id'
    o.donation_date                     
    o.donation_amount                   123.00
  end
end
