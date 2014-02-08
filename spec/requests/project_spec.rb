require 'spec_helper'

describe "Project" do
  describe "GET /project_create" do
    it "populates the project_id" does
      data = create(Desk::Project)
      data.project_id.should_not be_empty
    end
    it "populates the project_nbr" does
      data = create(Desk::Project)
      data.project_id.should_not be_empty
    end
  end
end
