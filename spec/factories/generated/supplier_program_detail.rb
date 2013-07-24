FactoryGirl.define do  factory :supplier_program_detail, :class => Omni::SupplierProgramDetail do |o|
    o.supplier_program_detail_id        'supplier_program_detail_id'
    o.display                           'display'
    o.supplier_program_id               'supplier_program_id'
  end
end
