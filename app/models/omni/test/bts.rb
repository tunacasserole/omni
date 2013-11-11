class Omni::Test::Bts < Omni::Test::Base

  def self.go
    @b = create_bts_data
    @b.run
    test_it('it creates a detail row for every inventory', 3, @b.bts_details.count)
  end

  def self.create_bts_data
    @@model_name = 'Bts'
    @@model_action = 'Run'
    Omni::BtsDetail.all.each {|x| x.delete}
    Omni::Bts.all.each {|x| x.delete}
    Omni::Bts.create(:bts_id => '4D594A1C193611E3A22D20C9D047DBTS', :department_id => '05A9CEBAAC5511E299E700FF58D32228', :state => 'active') unless Omni::Bts.where(:bts_id => '4D594A1C193611E3A22D20C9D047DBTS').first
    # Omni::Department.all.each {|d| Omni::Bts.create(state: 'draft', department_id: d.department_id)}
    # Omni::Inventory.where(department_id: '05A9CEBAAC5511E299E700FF58D32228').each {|s| Omni::BtsDetail.create(sku_id: i.sku_id, location_id: i.location_id)}

  end

end
