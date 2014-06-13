class Desk::Data::Fix::Case

  def self.go(model_name)
    data = ActiveRecord::Base.connection.execute("select case_id, owner_id, reviewer_id, requestor_id from cases")
    bar = ProgressBar.new(data.count)
    data.each do |x|
      bar.increment!
      Desk::Team.create(teamable_type: 'Desk::Case', teamable_id: x[0], user_id: x[1])
      Desk::Team.create(teamable_type: 'Desk::Case', teamable_id: x[0], user_id: x[2])
      Desk::Team.create(teamable_type: 'Desk::Case', teamable_id: x[0], user_id: x[3])
    end
  end
end
