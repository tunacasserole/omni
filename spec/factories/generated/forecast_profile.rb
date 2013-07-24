FactoryGirl.define do  factory :forecast_profile, :class => Omni::ForecastProfile do |o|
    o.forecast_profile_id               'forecast_profile_id'
    o.display                           'display'
    o.forecast_profile_name             'forecast_profile_name'
  end
end
