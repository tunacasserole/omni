# # Price Book - national
# national_price_book = Omni::PriceBook.create(:price_book_id => '13952F369E0B11E2BA7820C9D047D700', :display => 'national price book 100 - test data', :price_book_type => 'NATIONAL')

# # Price Book - local
# location_price_book = Omni::PriceBook.create(:price_book_id => '13952F369E0B11E2BA7820C9D047D800', :display => 'location price book 200 - test data', :price_book_type => 'LOCAL')

# # System option
# system_option = Omni::SystemOption.create(:system_option_id => '13952F369E0B11E2BA7820C9D047D000', :display => 'price lookup system options', :price_book_id => '13952F369E0B11E2BA7820C9D047D700', :professional_discount_percent => 5)

# ## Company
# company = Omni::Company.create(:company_id => '13952F369E0B11E2BA7820C9D047D100', :display => 'company 100 - test data', :line_1 => '100 main', :city => 'test city',:phone => '1231231234', :zip=>'12345')

# # Department
# department = Omni::Department.create(:department_id => '13952F369E0B11E2BA7820C9D047D200', :display => 'department 100 - test data', :company_id => '13952F369E0B11E2BA7820C9D047D110')

# # Location with price book
# location = Omni::Location.create(:location_id => '13952F369E0B11E2BA7820C9D047D300', :display => 'location 100 - with price book', :price_book_id => '13952F369E0B11E2BA7820C9D047D700', :line_1 => '100 main', :city => 'test city',:phone => '1231231234',:district_id =>'123')

# # Location with no price book
# location = Omni::Location.create(:location_id => '13952F369E0B11E2BA7820C9D047D310', :display => 'location 200 - no price book', :line_1 => '200 main', :city => 'test city',:phone => '1231231234',:district_id =>'123')

# # Sku - active
# sku = Omni::Sku.create(:sku_id => '13952F369E0B11E2BA7820C9D047D400', :display => 'sku 100 - test data', :state => 'active', :sku_nbr => 100)

# # Sku - new
# sku = Omni::Sku.create(:sku_id => '13952F369E0B11E2BA7820C9D047D401', :display => 'sku 101 - test data', :state => 'new')

# # Sku Price
# sku_price = Omni::SkuPrice.create(:sku_price_id => '13952F369E0B11E2BA7820C9D047D410', :sku_id => '13952F369E0B11E2BA7820C9D047D400', :display => 'sku 100 prices - test data', :price_book_id => '13952F369E0B11E2BA7820C9D047D700',:effective_date => Time.new(2013,01,01,00,00,00), :retail_price => 25.00, :price_units => 1)

# # Sku Promo Price
# sku_price = Omni::SkuPromoPrice.create(:sku_promo_price_id => '13952F369E0B11E2BA7820C9D047D420', :sku_id => '13952F369E0B11E2BA7820C9D047D400', :display => 'sku 100 promo prices - test data', :price_book_id => '13952F369E0B11E2BA7820C9D047D700',:effective_date => Time.new(2013,01,01,00,00,00), :regular_units => 2, :promo_units => 3, :promo_amount => 15, :promo_price => 28, :maximum_promo_units => 10)

# # Sku Price Request
# sku_price_request = Omni::SkuPriceRequest.create(:sku_price_request_id => '13952F369E0B11E2BA7820C9D047D440', :sku_id => '13952F369E0B11E2BA7820C9D047D400', :display => 'sku price request 100 - test data', :price_book_id => '13952F369E0B11E2BA7820C9D047D700')

# # Sku Alias
# sku_alias = Omni::SkuAlias.create(:sku_alias_id => '13952F369E0B11E2BA7820C9D047D430', :sku_id => '13952F369E0B11E2BA7820C9D047D400', :sku_alias => 'sku alias 100 - test data', :sku_alias_type => 'UPC', :is_primary => true)

# # Customer - teacher
# customer = Omni::Customer.create(:customer_id => '13952F369E0B11E2BA7820C9D047D500', :last_name => 'customer 100 - test data')

# # Customer - employee
# customer = Omni::Customer.create(:customer_id => '13952F369E0B11E2BA7820C9D047D510', :last_name => 'customer 200 - employee for test data', :is_employee => true)

# # Site
# site = Omni::Site.create(:site_id => '13952F369E0B11E2BA7820C9D047D600', :display => 'site 100 - test data', :site_name => 'site 100 - test data', :site_type => 'SCHOOL', :line_1 => '100 main', :city => 'test city', :zip => '12345', :phone => '1231231234')

# # Site Discount
# #site = Omni::SiteDiscount.create(:site_discount_id => '13952F369E0B11E2BA7820C9D047D610', :site_id => '13952F369E0B11E2BA7820C9D047D600', :display => 'site discount 100 - test data', :site_name => 'site 100 - test data', :site_type => 'SCHOOL', :line_1 => '100 main', :city => 'test city', :zip => '12345', :phone => '1231231234')

# # Program
# program = Omni::Program.create(:program_id => '13952F369E0B11E2BA7820C9D047D620', :display => 'program 100 - test data', :site_id => '13952F369E0B11E2BA7820C9D047D600')

# # Order
# order = Omni::Order.create(:order_id => '13952F369E0B11E2BA7820C9D047D700', :location_id => '13952F369E0B11E2BA7820C9D047D300', :customer_id => '13952F369E0B11E2BA7820C9D047D500', :order_date => Date.today, :order_source => 'POS')

# # Order Details
# order_detail = Omni::OrderDetail.create(:order_detail_id => '13952F369E0B11E2BA7820C9D047D710', :order_id => '13952F369E0B11E2BA7820C9D047D700', :display => 'order detail 100 - test data', :sku_id => '13952F369E0B11E2BA7820C9D047D400', :sku_alias_id => '13952F369E0B11E2BA7820C9D047D500', :delivery_method => 'SEND')

# # Order Details
# order_detail = Omni::OrderDetail.create(:order_detail_id => '13952F369E0B11E2BA7820C9D047D720', :order_id => '13952F369E0B11E2BA7820C9D047D700', :display => 'order detail 100 - test data', :sku_id => '13952F369E0B11E2BA7820C9D047D400', :sku_alias_id => '13952F369E0B11E2BA7820C9D047D500', :delivery_method => 'SEND')

# # Pick Ticket - new
# #pt = Omni::PickTicket.create(:pick_ticket_id => '13952F369E0B11E2BA7820C9D047D800', :display => 'sku 101 - test data', :state => 'new')

