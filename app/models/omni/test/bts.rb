class Omni::Test::Bts < Omni::Test::Base

  def self.go
    create_bts_data
    test_bts
  end

  def self.test_bts
    # if base data was created and relationship exists, the bts should have 3 details
    x=Omni::Bts.where(:bts_id => '4D594A1C193611E3A22D20C9D047DBTS').first
    test_it('It creates one with details', 3, x.bts_details.count)

    # if detail rows were succesfully destroyed, there should be no detail rows
    x.bts_details.each {|x| x.delete}
    test_it('it destroys all details', 0, x.bts_details.count)

    # RUNNING THE BTS SHOULD:
    x.run
    test_it('It sets the state to done','done',x.state)

    x=Omni::Bts.where(:bts_id => '4D594A1C193611E3A22D20C9D047DBTS').first
    test_it('it creates a detail row for every inventory',1,x.bts_details.count)
    # test_it('it creates a bts detail for every sku location',4,x.bts_details.count)
  end

  def self.create_bts_data
    @@model_name = 'Bts'
    @@model_action = 'Run'
  end

end
