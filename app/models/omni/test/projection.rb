class Omni::Test::Projection < Omni::Test::Base

  def self.go
    create_projection_data
    test_projection
  end

  def self.test_projection
    @@model_name = 'Projection'
    @@model_action = 'Event'

    @p=Omni::Projection.where(:projection_id => '4D594A1C193611E3A22D20C9D04PROJ1').first
    @pd=Omni::ProjectionDetail.where(:projection_detail_id => '4D594A1C193611E3A22D20CXXPRODET1').first

    x=@p
    test_it('It creates one with details', 3, x.projection_details.count)

    x.projection_details.each {|x| x.delete}
    test_it('it destroys all details', 0, x.projection_details.count)

    x.close
    test_it('It only allows Closing from the correct states', 'new', x.state)
  end

end
