class Desk::Guide < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.establish_connection       Buildit::Util::Data::Connection.for 'BUILDIT'
  self.table_name                 = :guides
  self.primary_key                = :guide_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # ATTRIBUTES (Start) ==================================================================
  #
  # :guide_id,                        :string,            :null  =>  false,   :limit   => 32
  # :guideable_id,                    :string,            :null  =>  false,   :limit   => 32
  # :guideable_type,                  :string,            :null  =>  false,   :limit   => 200
  # :owner_id,                        :string,            :null  =>  true,    :limit   => 32
  # :guide_name,                      :string,            :null  =>  true,    :limit   => 200
  # :description,                     :string,            :null  =>  true,    :limit   => 4000
  # :guide_location,                  :string,            :null  =>  true,    :limit   => 200
  # :gem_name,                        :string,            :null  =>  true,    :limit   => 200
  #
  # ATTRIBUTES (End)


  # VALIDATIONS (Start) =================================================================
  validates :guide_id,                        presence: true, uniqueness: true
  validates :guide_nbr,                       presence: true, uniqueness: true
  validates :guide_name,                      presence: true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default :guide_id,                          :with           => :guid
  default :owner_id,                          :to => lambda{ |m| Buildit::User.current.user_id if Buildit::User.current}
  default :guide_nbr,                         :override  =>  false,        :with  => :sequence,   :named=>"GUIDE_NBR"
  default :guideable_type,                    to: 'Omni::Project'
  default :guideable_id,                      to: lambda { |m| Desk::Project.omni_project.project_id }
  # DEFAULTS (End)


  # ASSOCIATIONS (Start) ================================================================
  belongs_to  :owner,                            :class_name     => 'Buildit::User',              :foreign_key    => :owner_id
  has_many    :notes,                             :as             => :notable
  has_many    :attachments,                       :as             => :attachable
  # ASSOCIATIONS (End)


  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :owner_display,                         :to             => 'owner.full_name'
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
  searchable do
    string   :guide_id
    string   :guideable_id
    string   :guideable_type
    string   :owner_id
    string   :guide_name
    string   :guide_nbr
    string   :description
    string   :guide_location

    text     :guide_name_text,                   :using   => :guide_name,                   :boost => 2.0
    text     :owner_display_text,                :using   => :owner_display,                :boost => 1.0
    text     :description_text,                  :using   => :description,                  :boost => 1.0
    text     :guide_location_text,               :using   => :guide_location,               :boost => 1.0
  end
  order_search_by :guide_nbr => :desc
  # INDEXING (End)


  # HOOKS (Start) =======================================================================

  # HOOKS (End)


  # STATES (Start) ====================================================================
  # STATES (End)


  # HELPERS (Start) =====================================================================
  def display_as
    self.guide_name
  end
  # HELPERS (End)

end # class Desk::Guide
