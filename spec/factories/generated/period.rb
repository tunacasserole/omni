FactoryGirl.define do  factory :period, :class => Omni::Period do |o|
    o.period_id                         'period_id'
    o.display                           'display'
    o.start_date                        
    o.end_date                          
    o.year_number                       'year_number'
    o.period_number                     'period_number'
  end
end
