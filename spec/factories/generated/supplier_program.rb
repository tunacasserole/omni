FactoryGirl.define do  factory :supplier_program, :class => Omni::SupplierProgram do |o|
    o.supplier_program_id               'supplier_program_id'
    o.display                           'display'
    o.supplier_id                       'supplier_id'
    o.supplier_program_name             'supplier_program_name'
  end
end
