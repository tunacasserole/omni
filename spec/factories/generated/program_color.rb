FactoryGirl.define do  factory :program_color, :class => Omni::ProgramColor do |o|
    o.program_color_id                  'program_color_id'
    o.display                           'display'
    o.program_style_id                  'program_style_id'
    o.style_color_id                    'style_color_id'
  end
end
