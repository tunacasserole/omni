FactoryGirl.define do  factory :week, :class => Omni::Week do |o|
    o.week_id                           'week_id'
    o.display                           'display'
    o.start_date                        
    o.end_date                          
    o.year_number                       'year_number'
    o.period_number                     'period_number'
    o.week_number                       'week_number'
  end
end
