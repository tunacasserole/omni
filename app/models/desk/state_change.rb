class Desk::StateChange < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.establish_connection       Buildit::Util::Data::Connection.for 'BUILDIT'
  self.table_name                 = :state_changes
  self.primary_key                = :state_change_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  # supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates :state_change_id,                        presence: true, uniqueness: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default :state_change_id,                          with: :guid

  # belongs_to :desk/state_transition
end
