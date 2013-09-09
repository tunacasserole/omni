class Omni::Region < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :regions
  self.primary_key  = :region_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  validates    :company_id,                      :presence    => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :region_id,                        :override  =>  false,        :with  => :guid              
  default      :region_nbr,                       :override  =>  false,        :with  => :sequence,         :named=>"REGION_NBR"
  default      :is_destroyed,                     :override  =>  false,        :to    => false              
  # DEFAULTS (End)


  # REFERENCE (Start) ===================================================================
  reference do
    display_attribute  :display
    query_attribute    :display
    item_template      '{display}'
  end
  # REFERENCE (End)


  # ASSOCIATIONS (Start) ================================================================
  belongs_to   :company,                         :class_name => 'Omni::Company',                 :foreign_key => 'company_id'
  belongs_to   :user,                            :class_name => 'Buildit::User',                     :foreign_key => 'user_id'
  has_many     :notes,                           :class_name => 'Buildit::Note',                     :foreign_key => 'notable_id',       :as => :notable
  has_many     :districts,                       :class_name => 'Omni::District',                :foreign_key => 'region_id'
  # ASSOCIATIONS (End)


  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :company_display,                        :to => 'company.display'
    map :user_display,                           :to => 'user.full_name'
  end
  # MAPPED ATTRIBUTES (End)

  # COMPUTED ATTRIBUTES (Start) =========================================================
  # COMPUTED ATTRIBUTES (End)

  # TEMPORARY ATTRIBUTES (Start) ========================================================
  # TEMPORARY ATTRIBUTES (End)


  # ORDERING (Start) ====================================================================
  order_search_by :display => :asc
  # ORDERING (End)


  # HOOKS (Start) =======================================================================
  # HOOKS (End)

  # HELPERS (Start) =======================================================================
  def locations
    locations = []
    self.districts.each do |d|
      d.locations.each do |l|
        locations << l
      end
    end
    locations
  end
  # HELPERS (End)


  # INDEXING (Start) ====================================================================
  searchable do
    string   :display
    string   :region_nbr
    string   :short_name
    string   :company_display do company.display if company end
    string   :user_display do user.full_name if user end
    string   :company_id
 
    text     :display_fulltext, :using => :display
    text     :region_nbr_fulltext, :using => :region_nbr
    text     :short_name_fulltext, :using => :short_name
    text     :company_display_fulltext, :using => :company_display
    text     :user_display_fulltext, :using => :user_display
  end 
  # INDEXING (End)


end # class Omni::Region

