FactoryGirl.define do  factory :supplier_contact, :class => Omni::SupplierContact do |o|
    o.supplier_contact_id               'supplier_contact_id'
    o.display                           'display'
    o.supplier_id                       'supplier_id'
    o.first_name                        'first_name'
    o.last_name                         'last_name'
  end
end
