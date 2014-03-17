FactoryGirl.define do
 factory Buildit::Note do
  sequence(:detail) {|n| "test #{n}"}
 end
 factory Buildit::User do
  sequence(:email_address) {|n| "test #{n}"}
  sequence(:first_name) {|n| "test #{n}"}
  sequence(:last_name) {|n| "test #{n}"}
  sequence(:password) {|n| "test #{n}"}
  sequence(:password_confirmation) {|n| "test #{n}"}
 end
 # factory Buildit::Event do
 #  sequence(:event_type)
 #  sequence(:message)
 #  occurred_at Time.now
 #  # sequence(:email_address) {|n| "test #{n}"}
 #  # sequence(:first_name) {|n| "test #{n}"}
 #  # sequence(:last_name) {|n| "test #{n}"}
 #  # sequence(:password) {|n| "test #{n}"}
 #  # sequence(:password_confirmation) {|n| "test #{n}"}
 # end
end

FactoryGirl.define do
 factory Omni::Account do
  sequence(:account_name) {|n| "test #{n}"}
 end
 factory Omni::AccountGrade do
  account_id :account
  grade_id :grade
 end
 factory Omni::AccountTaxAuthority do
  account_id :account
  tax_authority_id :tax_authority
 end
 factory Omni::Adjustment do
  # sequence(:display) {|n| "test #{n}"}
  location_id :location
  sku_id :sku
  request_date Date.today
  adjustment_reason_id :adjustment_reason
 end
 factory Omni::AdjustmentReason do
  sequence(:display)
  ruleset_id :ruleset
 end
 factory Omni::Allocation do
  sequence(:display)
  allocation_profile_id :allocation_profile
  location_id :location
  sku_id :sku
 end
 factory Omni::AllocationDetail do
  allocation_id :allocation
 end
 factory Omni::AllocationProfile do sequence(:display) {|n| "test #{n}"} end
 factory Omni::Area do
  sequence(:display)
  sequence(:short_name) {|n| "test #{n}"}
  location_id :location
 end
 factory Omni::Bin do
  sequence(:display)
  location_id :location
  area_id :area
 end
 factory Omni::BinSku do
  bin_id :bin_id
  sku_id :sku_id
 end
 factory Omni::Bom do
  sequence(:display)
  bom_type ['CONVERSION','MANUFACTURING'].sample
 end
 factory Omni::BomDetail do sequence(:display) {|n| "test #{n}"} end
 factory Omni::Category do
  sequence(:display)
  category_code 'abc'
 end
 factory Omni::Classification do
  sequence(:display)
  department_id :department
 end
 factory Omni::Color do
  sequence(:display)
  sequence(:concatenated_name) {|n| "test #{n}"}
 end
 factory Omni::Company do
  sequence(:display)
  sequence(:line_1) {|n| "test #{n}"}
  sequence(:city) {|n| "test #{n}"}
  sequence(:zip) {|n| "#{n}#{n}#{n}#{n}#{n}"}
  sequence(:phone) {|n| "#{n}#{n}#{n}#{n}#{n}#{n}"}
 end
 factory Omni::Container do sequence(:display) {|n| "test #{n}"} end
 factory Omni::ContainerDetail do sequence(:display) {|n| "test #{n}"} end
 factory Omni::Contact do
  account_id :account
  sequence(:first_name) {|n| "test #{n}"}
  sequence(:last_name) {|n| "test #{n}"}
 end
 factory Omni::Contract do
  account_id :account
  # sequence(:display) {|n| "test #{n}"}
 end
 factory Omni::Cost do sequence(:display) {|n| "test #{n}"} end
 factory Omni::CostDetail do
  cost_id :cost
  sequence(:cost_detail_name) {|n| "test #{n}"}
 end
 factory Omni::Customer do
  sequence(:first_name) {|n| "test #{n}"}
  sequence(:last_name) {|n| "test #{n}"}
 end
 factory Omni::CustomerAccount do
  customer_id :customer
  account_id :account
 end
 factory Omni::DailyResult do sequence(:display) {|n| "test #{n}"} end
 factory Omni::Department do
  sequence(:display)
  company_id :company
 end
 factory Omni::District do
  sequence(:display)
  region_id :region
 end
 factory Omni::Donation do
  account_id :account
  # sequence(:display) {|n| "test #{n}"}
 end
 factory Omni::Enrollment do
  account_id :account
  school_year ['2013','2014','2015'].sample
  grade_id :grade
  gender ['MALE','FEMALE'].sample
  enrollment [0,1,10,100,1000,10000].sample
 end
 factory Omni::ForecastProfile do
  sequence(:display)
  forecast_formula 'SALES'
 end
 factory Omni::GlAccount do
  sequence(:display)
  gl_main_account '1234'
 end
 factory Omni::Grade do sequence(:grade_name) {|n| "test #{n}"} end
 factory Omni::Inventory do
  sku_id :sku
  location_id :location
 end
 factory Omni::Job do
  sequence(:display)
  production_location_id :location
  job_type ['CONVERSION (HEAT APPLY)','CONVERSION (SEWN)','ALTERATION','SPECIAL CUT'].sample
 end
 factory Omni::Label do
  sequence(:display)
  label_type ['PRICE','SHELF','PARKER_ID'].sample
end
 factory Omni::Location do
  sequence(:display)

 end
 factory Omni::LocationUser do
  # sequence(:display) {|n| "test #{n}"}
  location_id :location
  user_id :user
 end
 factory Omni::LocationTaxAuthority do
  # sequence(:display) {|n| "test #{n}"}
  location_id :location
  tax_authority_id :tax_authority
 end
 factory Omni::LocationTaxHoliday do
  sequence(:short_name) {|n| "test #{n}"}
  location_id :location
 end
 factory Omni::Order do
  # sequence(:display) {|n| "test #{n}"}
  location_id :location
  customer_id :customer
  order_date Date.today
  order_source ['POS','WEB','EMAIL','PHONE','MAIL','EVENT'].sample
  factory :order_with_details do
    after(:create) do |order, evaluator|
      create_list(Omni::OrderDetail, 5, order: order)
    end
  end
 end
 factory Omni::OrderDetail do
  sequence(:display)
  order_id :order
  sku_id :sku
  delivery_method ['SEND','TAKE','PICKUP'].sample
 end
 factory Omni::Payment do
  # sequence(:display) {|n| "test #{n}"}
 end
 factory Omni::PeriodResult do sequence(:display) {|n| "test #{n}"} end
 factory Omni::Period do
  sequence(:display)
  start_date Date.today
  end_date Date.today
  year_number '2014'
 end
 factory Omni::Pick do sequence(:display) {|n| "test #{n}"} end
 factory Omni::PriceBook do sequence(:display) {|n| "test #{n}"} end
 factory Omni::PriceChange do sequence(:display) {|n| "test #{n}"} end
 factory Omni::Product do
  sequence(:display)
  category_id :category
 end
 factory Omni::ProductType do sequence(:display) {|n| "test #{n}"} end
 factory Omni::Projection do
  forecast_profile_id :forecast_profile
  sequence(:display)
  plan_year '2014'
  department_id :department_id
 end
 factory Omni::ProjectionDetail do
  projection_id :projection
  sku_id :sku
  location_id :location
 end
 factory Omni::ProjectionLocation do sequence(:display) {|n| "test #{n}"} end
 factory Omni::ProjectionReason do sequence(:display) {|n| "test #{n}"} end
 factory Omni::Purchase do
  sequence(:display)
  supplier_id :supplier
  allocation_profile_id :allocation_profile
 end
 factory Omni::PurchaseAllocation do
  purchase_detail_id :purchase_detail
  sequence(:display)
end
 factory Omni::PurchaseDetail do
  purchase_id :purchase
  allocation_profile_id :allocation_profile
  sku_supplier_id :sku_supplier
  sku_id :sku
  sequence(:units_ordered) {|n| n}
end
 factory Omni::Receipt do sequence(:display) {|n| "test #{n}"} end
 factory Omni::ReceiptDetail do
  receipt_id :receipt
  sequence(:display)
 end
 factory Omni::ReceiptAllocation do
  receipt_id :receipt
  sequence(:display)
 end
 factory Omni::ReceiptFormat do
  sequence(:display)
 end
 factory Omni::ReceiptPurchase do
  receipt_id :receipt
  purchase_id :purchase
  sequence(:display)
 end
 factory Omni::Region do
  sequence(:display)
  company_id :company
 end
 factory Omni::Rule do
  sequence(:display)
  ruleset_id :ruleest
 end
 factory Omni::Ruleset do sequence(:display) {|n| "test #{n}"} end
 factory Omni::SeasonalIndex do
  sequence(:seasonal_index_name) {|n| "test #{n}"}
 end
 factory Omni::Shipment do
  sequence(:ship_name) {|n| "test #{n}"}
  location_id :location
  create_date Date.today
 end
 factory Omni::ShipmentDetail do
  shipment_id :shipment
  pick_id :pick
 end
 factory Omni::ShippingRate do
  sequence(:shipping_rate_name) {|n| "test #{n}"}
  supplier_id :supplier
 end
 factory Omni::Size do
  sequence(:display)
  sequence(:concatenated_name) {|n| "test #{n}"}
  size_type ['STANDARD','SPECIAL'].sample
 end
 factory Omni::SizeGroup do
  sequence(:concatenated_name) {|n| "test #{n}"}
  sequence(:display)
 end
 factory Omni::SizeGroupDetail do
  size_id :size
  size_group_id :size_group
 end
 factory Omni::Sku do sequence(:display) {|n| "test #{n}"} end
 factory Omni::SkuAlias do
  sequence(:display)
  sku_id :sku
 end
 factory Omni::SkuPrice do
  sequence(:display)
  sku_id :sku
 end
 factory Omni::SkuPriceRequest do
  sequence(:display)
  sku_id :sku
 end
 factory Omni::SkuPromoPrice do
  sequence(:display)
  sku_id :sku
 end
 factory Omni::SkuSubstitute do
  sequence(:display)
  sku_id :sku
 end
 factory Omni::SkuSupplier do
  sequence(:display)
  sku_id :sku
 end
 factory Omni::StockLedgerActivity do
  sequence(:display)
  stockable_type "Omni::PurchaseDetail"
  stockable_id :purchase_detail
  ruleset_id :ruleset
  sku_id :sku
  location_id :location
 end
 factory Omni::StockLedgerActivityLog do sequence(:display) {|n| "test #{n}"} end
 factory Omni::Style do
  sequence(:display)
  subclass_id :subclass
  size_group_id :size_group
 end
 factory Omni::StyleColor do
  style_id :style
  color_id :color
 end
 factory Omni::StyleColorSize do
  style_color_id :style_color
  size_id :size
 end
 factory Omni::StyleLocation do
  style_id :style
  sequence(:display)
 end
 factory Omni::StyleSupplier do
  style_id :style
  supplier_id :supplier
 end
 factory Omni::StyleSupplierColor do
  style_supplier_id :style_supplier
  style_color_id :style_color
 end
 factory Omni::Subclass do
  sequence(:display)
  classification_id :classification
 end
 factory Omni::Supplier do
  sequence(:supplier_name) {|n| "test supplier #{n}"}
 end
 factory Omni::SupplierContact do
  supplier_id :supplier
  sequence(:first_name) {|n| "test #{n}"}
  sequence(:last_name) {|n| "test #{n}"}
  sequence(:display)
 end
 factory Omni::SupplierRating do
  supplier_id :supplier
  supplier_rating_subject_id :supplier_rating_subject
  sequence(:display)
 end
 factory Omni::SupplierRatingSubject do
  sequence(:display)
 end
 factory Omni::SystemOption do
  price_book_id :price_book
  sequence(:display)
 end
 factory Omni::TaxAuthority do
  sequence(:display)
  state_code ['CA','CO','GA','TX'].sample
 end
 factory Omni::TaxAuthorityRate do
  tax_authority_id :tax_authority
 end
 factory Omni::Tender do
  sequence(:display)
  sequence(:short_name) {|n| "test #{n}"}
  sequence(:description) {|n| "test #{n}"}
  gl_account_id :gl_account
 end
 factory Omni::Terminal do
  # sequence(:display) {|n| "test #{n}"}
  location_id :location
  mac_address '123'
  local_server_ip '123'
  hq_server_url '123'
  receipt_printer_url '123'
  receipt_printer_ip '123'

 end
 factory Omni::Till do
  # sequence(:display) {|n| "test #{n}"}
  location_id :location
 end
 factory Omni::TillActivity do
  till_id :till
 end
 factory Omni::TillAudit do
  till_id :till
 end
 factory Omni::TillDetail do
  till_id :till
  tender_id :tender
 end
 factory Omni::Transfer do
  requesting_location_id :location
  fulfillment_location_id :location
  sku_id :sku
  transfer_reason_id :transfer_reason
 end
 factory Omni::TransferReason do sequence(:display) {|n| "test #{n}"} end
 factory Omni::Uniform do
  sequence(:display)
  account_id :account
 end
 factory Omni::UniformDetail do
  uniform_id :uniform
  style_id :style
  color_id :color
  style_color_id :style_color
  # from_grade_id :grade
  # thru_grade_id :grade
 end
 factory Omni::UniformLookup do
  uniform_id :uniform
  account_id :account
  category_id :category
  product_id :product
  style_id :style
  color_id :color
  size_id :size
  sku_id :sku
  grade_id :grade
 end
 factory Omni::Voucher do
  # sequence(:display) {|n| "test #{n}"}
  customer_id :customer
 end
end
