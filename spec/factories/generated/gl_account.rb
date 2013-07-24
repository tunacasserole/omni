FactoryGirl.define do  factory :gl_account, :class => Omni::GlAccount do |o|
    o.gl_account_id                     'gl_account_id'
    o.display                           'display'
    o.gl_main_account                   'gl_main_account'
  end
end
