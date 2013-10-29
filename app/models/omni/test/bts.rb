class Omni::Test::Bts < Omni::Test::Base

  def self.go
    test_bts
  end

  def self.test_bts
    # if base data was created and relationship exists, the bts should have 3 details
    x=Omni::Bts.where(:bts_id => '4D594A1C193611E3A22D20C9D047DBTS').first
    test_it('It creates a bts with bts details', 3, x.bts_details.count)

    # if detail rows were succesfully destroyed, there should be no detail rows
    x.bts_details.each {|x| x.delete}
    test_it('it destroys all bts details', 0, x.bts_details.count)

    x.run
    # RUNNING THE BTS SHOULD:
    test_it('It sets the state to running','running',x.state)
    test_it('it creates a bts detail for every sku location',4,x.bts_details.count)
    # test_it('it creates a bts detail for every sku location',4,x.bts_details.count)
  end

end
