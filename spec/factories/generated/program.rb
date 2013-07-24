FactoryGirl.define do  factory :program, :class => Omni::Program do |o|
    o.program_id                        'program_id'
    o.display                           'display'
    o.program_nbr                       'program_nbr'
    o.site_id                           'site_id'
  end
end
