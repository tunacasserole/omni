FactoryGirl.define do  factory :person_site, :class => Omni::PersonSite do |o|
    o.person_site_id                    'person_site_id'
    o.display                           'display'
    o.person_id                         'person_id'
    o.site_id                           'site_id'
  end
end
