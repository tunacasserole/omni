class Omni::Test::Bts < Omni::Test::Base

  def self.go
    create_base_data

    test_bts

    reindex_data

    output_results
  end

  def self.test_bts
    # if base data was created and relationship exists, the bts should have 3 details
    x=@b
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
