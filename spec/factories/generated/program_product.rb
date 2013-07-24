FactoryGirl.define do  factory :program_product, :class => Omni::ProgramProduct do |o|
    o.program_product_id                'program_product_id'
    o.display                           'display'
    o.program_id                        'program_id'
    o.product_id                        'product_id'
    o.from_grade_id                     'from_grade_id'
    o.thru_grade_id                     'thru_grade_id'
  end
end
