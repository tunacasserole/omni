class Omni::User < ActiveRecord::Base

  # METADATA (Start) ====================================================================
  self.table_name  = :users
  self.primary_key = :user_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  #supports_logical_delete(:via => :obsolete_flag)
  #supports_audit
  #supports_revisioning
  supports_fulltext
  # BEHAVIOR (End)

  # REFERENCE (Start) ===================================================================

  # REFERENCE (End)

  # VALIDATIONS (Start) =================================================================
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  # DEFAULTS (End)


  # ASSOCIATIONS (Start) ================================================================
  belongs_to  :user,                :class_name => 'Buildit::User',             :foreign_key  => :user_id
  # ASSOCIATIONS (End)


  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :user_full_name,             :to => 'user.full_name'
    map :first_name,                 :to => 'user.first_name'
    map :last_name,                  :to => 'user.last_name'
  end

  # MAPPED ATTRIBUTES (End)

  # COMPUTED ATTRIBUTES (Start) =========================================================

  # COMPUTED ATTRIBUTES (End)

  # TEMPORARY ATTRIBUTES (Start) ========================================================

  # TEMPORARY ATTRIBUTES (End)

  # SCOPES (Start) ======================================================================

  # SCOPES (End)

  # ORDERING (Start) ====================================================================

  # ORDERING (End)

  # FILTERS (Start) =====================================================================

  # FILTERS (End)


  # INDEXING (Start) ====================================================================
  searchable do
    string    :user_id
    string    :first_name
    string    :last_name

    text      :first_name_text,                :using => :first_name
    text      :last_name_text,                 :using => :last_name
  end
  # INDEXING (End)


  # HOOKS (Start) =======================================================================

  # HOOKS (End)

  # HELPERS (Start) =====================================================================

  # HELPERS (End)


end # class Omni::UserExtension


# EXTEND Buildit::User
#
class Buildit::User < ActiveRecord::Base

  has_one  :omni_user,      :class_name => 'Omni::User',    :foreign_key => 'user_id'

  mapped_attributes do
    # map :division,                :to => 'sbna_extension.division'
  end

  computed_attributes do
    # compute :project_approval,    :with => :compute_project_approval
  end


  def compute_distributor_ids
    # ids = []
    # self.distributors.each {|distributor| ids << distributor.distributor_id}
    # ids
  end # compute_distributor_ids


  def compute_project_approval
    # Omni::AgentRole.where(:SBNA_BUSINESS_APPROVAL => true, :agent_id => self.user_id).count > 0
  end # def compute_project_approval


end
