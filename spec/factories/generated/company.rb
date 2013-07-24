FactoryGirl.define do  factory :company, :class => Omni::Company do |o|
    o.company_id                        'company_id'
    o.display                           'display'
    o.line_1                            'line_1'
    o.city                              'city'
    o.zip                               'zip'
    o.phone                             'phone'
  end
end
