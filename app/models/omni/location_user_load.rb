class Omni::LocationUserLoad < ActiveRecord::Base
# METADATA (Start) ====================================================================
  self.table_name   = :location_users_load
  self.primary_key  = :id
  # METADATA (End)



  def display_as
    self.display
  end
end # class Omni::LocationUser

