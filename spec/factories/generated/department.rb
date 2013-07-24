FactoryGirl.define do  factory :department, :class => Omni::Department do |o|
    o.department_id                     'department_id'
    o.display                           'display'
    o.company_id                        'company_id'
  end
end
