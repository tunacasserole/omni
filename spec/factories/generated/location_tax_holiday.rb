FactoryGirl.define do  factory :location_tax_holiday, :class => Omni::LocationTaxHoliday do |o|
    o.location_tax_holiday_id           'location_tax_holiday_id'
    o.display                           'display'
    o.location_id                       'location_id'
    o.short_name                        'short_name'
  end
end
