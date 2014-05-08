class Omni::PurchaseOption < ActiveRecord::Base


  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.establish_connection       Buildit::Util::Data::Connection.for 'BUILDIT'
  self.table_name                 = :purchase_options
  self.primary_key                = :purchase_option_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  # supports_logical_delete
  # supports_audit
  # supports_revisioning
  # supports_fulltext
  # supports_rest
  # supports_direct
  # supports_bookmarks
  # supports_global_search
  # BEHAVIOR (End)


  # ATTRIBUTES (Start) ==================================================================
  #
  # :purchase_option_id,              :string,            :null  =>  false,   :limit   => 32
  # :display,                         :string,            :null  =>  true,    :limit   => 200
  # :approver_1,                      :string,            :null  =>  true,    :limit   => 32
  # :approver_2,                      :string,            :null  =>  true,    :limit   => 32
  # :approver_3,                      :string,            :null  =>  true,    :limit   => 32
  # :approver_3_limit,                :integer,           :null  =>  true
  # :approver_1_limit,                :integer,           :null  =>  true
  # :approver_2_limit,                :integer,           :null  =>  true
  # :is_destroyed,                    :boolean,           :null  =>  true
  #
  # ATTRIBUTES (End)


  # VALIDATIONS (Start) =================================================================
  validates   :purchase_option_id,                :length         => {is: 32},                     :allow_nil      => false
  validates   :display,                           :length         => {in: 0..200},                 :allow_nil      => false
  # validates   :approver_1,                        :length         => {is: 32},                     :allow_nil      => true
  # validates   :approver_2,                        :length         => {is: 32},                     :allow_nil      => true
  # validates   :approver_3,                        :length         => {is: 32},                     :allow_nil      => true
  # validates   :approver_1_limit,                  :presence       => false
  # validates   :approver_2_limit,                  :presence       => false
  # validates   :approver_3_limit,                  :presence       => false

  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default     :purchase_option_id,                :with           => :guid
  default     :approver_1_limit,                  :to             => 0
  default     :approver_2_limit,                  :to             => 0
  default     :approver_3_limit,                  :to             => 0
  # DEFAULTS (End)


  # ASSOCIATIONS (Start) ================================================================
  belongs_to   :approver_1,            class_name: 'Buildit::User',           foreign_key: 'approver_1_id'
  belongs_to   :approver_2,            class_name: 'Buildit::User',           foreign_key: 'approver_2_id'
  belongs_to   :approver_3,            class_name: 'Buildit::User',           foreign_key: 'approver_3_id'

 #has_many    :notes,                             :as             => :notable
 #has_many    :attachments,                       :as             => :attachable
  # ASSOCIATIONS (End)


  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :approver_1_display,              to: 'approver_1.full_name'
    map :approver_2_display,              to: 'approver_2.full_name'
    map :approver_3_display,              to: 'approver_3.full_name'
  end
  # MAPPED ATTRIBUTES (End)


  # COMPUTED ATTRIBUTES (Start) =========================================================

  # COMPUTED ATTRIBUTES (End)


  # TEMPORARY ATTRIBUTES (Start) ========================================================

  # TEMPORARY ATTRIBUTES (End)


  # FILTERS (Start) =====================================================================

  # FILTERS (End)


  # ORDERING (Start) ====================================================================

  # ORDERING (End)


  # SCOPES (Start) ======================================================================

  # SCOPES (End)


  # INDEXING (Start) ====================================================================
  # searchable do
  #   string   :purchase_option_id
  #   string   :display
  #   string   :approver_1
  #   string   :approver_2
  #   string   :approver_3
  #   integer  :approver_3_limit
  #   integer  :approver_1_limit
  #   integer  :approver_2_limit
  #   text     :display_text,                      :using   => :display,                      :boost => 1.0
  #   text     :approver_1_text,                   :using   => :approver_1,                   :boost => 1.0
  #   text     :approver_2_text,                   :using   => :approver_2,                   :boost => 1.0
  #   text     :approver_3_text,                   :using   => :approver_3,                   :boost => 1.0
  # end
  # INDEXING (End)


  # HOOKS (Start) =======================================================================

  # HOOKS (End)


  # STATES (Start) ====================================================================
  # STATES (End)


  # HELPERS (Start) =====================================================================
  def display_as
    self.display
  end
  # HELPERS (End)

end # class Omni::PurchaseOption
