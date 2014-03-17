Omni::TaxAuthority.delete_all
Omni::TaxAuthority.create(:tax_authority_id => "1FE8AE3CA6C811ECITYTA00FF5OTOTO2",:display =>"Test City Tax Authority", short_name: 'City', state_code: 'TX')
Omni::TaxAuthority.create(:tax_authority_id => "1FE8AE3CA6C811ETESTTA00FF58D3222",:display =>"Test County Tax Authority", short_name: 'County', state_code: 'TX')
Omni::TaxAuthority.create(:tax_authority_id => "1FE5C802A6C811E2AE1800FF58D32228",:display =>"Test State Tax Authority", short_name: 'State', state_code: 'TX')
Omni::TaxAuthority.create(:tax_authority_id => "1FE5C802A6CTESTETET800FF58XXX228",:display =>"Test National Tax Authority", short_name: 'National', state_code: 'TX')
