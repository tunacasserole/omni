class Omni::ProjectionBuild
  @queue = :projection_queue

  def self.perform(projection_id)
	@queue = :projection_queue
    puts "\n******** PROJECTION BUILD QUEUEING ************\n"
    # puts projection_id
    Omni::Projection.do_build(projection_id)
    puts "\n******** END - PROJECTION BUILD QUEUEING ************\n"
  end
end
