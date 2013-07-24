FactoryGirl.define do  factory :supplier_rating, :class => Omni::SupplierRating do |o|
    o.supplier_rating_id                'supplier_rating_id'
    o.display                           'display'
    o.supplier_id                       'supplier_id'
    o.supplier_rating_subject_id        'supplier_rating_subject_id'
  end
end
