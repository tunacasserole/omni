# Omni::Account.create(account_id: '0E5E192EAC5211E299E700FF58D32228', account_name: 'test account')
# Omni::Product.create( product_id: '3DC7C7B8FE1F11E28D2320C9D047DD15', display: 'test product')
# Omni::ProductType.create( product_type_id: 'B25227F6AC5611E299E700FF58D32228', display: 'test product type')

# Omni::Color.create(color_id: '0B7965A0AC5811E299E700FF58D32228', concatenated_name: 'TEST RED', display: 'TEST COLOR')
# Omni::SizeGroup.create(size_group_id: '636F7E9EAC5711E299E700FF58D32228', concatenated_name: 'TEST JUNIOR', display: 'TEST SIZE GROUP')
# Omni::Size.create(size_id: '41352886FE0711E280D020C9D047DD15', concatenated_name: 'TEST BIG', size_type: 'STANDARD', display: 'TEST SIZE')
# Omni::Company.create(company_id: '651A58C8AC3D11E2947800FF58D32228', display: 'test', city: 'test', zip: '90210', phone: '123')
# Omni::Department.create(department_id: '05C40DDEAC5511E299E700FF58D32228', display: '05C40DDEAC5511E299E700FF58D32228', company_id: '651A58C8AC3D11E2947800FF58D32228') unless Omni::Department.where(department_id: '05C40DDEAC5511E299E700FF58D32228').first
# Omni::Classification.create(classification_id: '54058C7AAC5511E299E700FF58D32228', display: 'WOVEN TOPS-BROADCLOTH&POPLIN', department_id: '05C40DDEAC5511E299E700FF58D32228') unless Omni::Classification.where(classification_id: '54058C7AAC5511E299E700FF58D32228').first
# Omni::Subclass.create(subclass_id: 'B1D7091EAC5511E299E700FF58D32228', display: 'GIRLS SHORT SLV', classification_id: '54058C7AAC5511E299E700FF58D32228') unless Omni::Subclass.where(subclass_id: 'B1D7091EAC5511E299E700FF58D32228').first
# Omni::Style.create(style_id: 'D4EB81EE0EC711E3BFA320C9D047DD15', display: '0010PKGRL-BU-391-BU391b1', concatenated_name: '*BLOUSE, SS, P-PAN', pos_name: '*BLOUSE, SS, P-PAN', size_group_id: '636F7E9EAC5711E299E700FF58D32228', style_nbr: '54504', description: '*BLOUSE, SS, P-PAN', subclass_id: 'B1D7091EAC5511E299E700FF58D32228', product_id: '3DC7C7B8FE1F11E28D2320C9D047DD15', product_type_id: 'B25227F6AC5611E299E700FF58D32228', fabric_content: '65% POLY 35% COTTON', initial_retail_price: 15.50, account_id: '0E5E192EAC5211E299E700FF58D32228', state: 'active', is_converted: true, conversion_type: 'MONOGRAM') unless Omni::Style.where(style_id: 'D4EB81EE0EC711E3BFA320C9D047DD15').first
# Omni::Sku.create(:sku_id => '285C928C0F3611E3BB7120C9D047DD15',:display =>'0010PKGRL-BU-391-BU391b1-WHT-GL',:sku_nbr=>'75886',:source=>'BUCKHEAD',:source_id=>'344',:design_code=>'BU391b1',:state=>'active',:account_id=>'0036FF32AC5211E299E700FF58D32228',:style_id=>'D4EB81EE0EC711E3BFA320C9D047DD15',:color_id=>'0B7965A0AC5811E299E700FF58D32228',:size_id=>'41352886FE0711E280D020C9D047DD15',:initial_retail_price => 15.50) unless Omni::Sku.where(:sku_id => '285C928C0F3611E3BB7120C9D047DD15').first

# Omni::OrderDetail.create(order_detail_id: '285C928C0FAOEUI3BB7120C9D047DD15',sku_id: '285C928C0F3611E3BB7120C9D047DD15', delivery_method: 'SEND')
# Omni::Pick.create(pickable_type: 'Omni::OrderDetail', pickable_id: '285C928C0FAOEUI3BB7120C9D047DD15')
# Omni::Job.create(jobable_type: 'Omni::OrderDetail', jobable_id: '285C928C0FAOEUI3BB7120C9D047DD15', job_type: 'ALTERATION', production_location_id: '1')
