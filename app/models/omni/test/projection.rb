class Omni::Test::Projection < Omni::Test::Base

  def self.go
    create_projection_data
    test_projection
  end

  def self.test_projection
    @@model_name = 'Projection'
    @@model_action = 'Event'

    @p=Omni::Projection.where(:projection_id => 'XXXXX1C193611E3A2B2D20C9D04PROJ1').first
    @pd=Omni::ProjectionDetail.where(:projection_detail_id => '4D594A1C193611E3A22D20CXXPRODET1').first

    x=@p
    test_it('It creates one with details', 3, x.projection_details.count)

    x.projection_details.each {|x| x.delete}
    test_it('it destroys all details', 0, x.projection_details.count)

    # close scenarios 1 - 4  not allowed for these states
    ['draft','new','forecast','complete'].each do |s|
      x.state = s
      x.save
      x.close
      test_it("it doesn't allow closing from #{s} state",s,x.state)
    end

  end

end
