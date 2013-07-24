FactoryGirl.define do  factory :program_style, :class => Omni::ProgramStyle do |o|
    o.program_style_id                  'program_style_id'
    o.display                           'display'
    o.program_product_id                'program_product_id'
    o.style_id                          'style_id'
  end
end
