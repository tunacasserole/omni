class Omni::CustomerSite < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :customer_sites
  self.primary_key  = :customer_site_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  validates    :customer_id,                     :presence    => true
  validates    :site_id,                         :presence    => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :customer_site_id,                 :override  =>  false,        :with  => :guid              
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "#{m.customer_display} - #{m.site_display}"}
  default      :is_site_contact,                  :override  =>  false,        :to    => false              
  default      :is_teacher,                       :override  =>  false,        :to    => false              
  default      :is_administrator,                 :override  =>  false,        :to    => false              
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
  belongs_to   :customer,                        :class_name => 'Omni::Customer',                :foreign_key => 'customer_id'
  belongs_to   :site,                            :class_name => 'Omni::Site',                    :foreign_key => 'site_id'
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :customer_display,                       :to => 'customer.display'
    map :site_display,                           :to => 'site.display'
  end
  # MAPPED ATTRIBUTES (End)

  # COMPUTED ATTRIBUTES (Start) =========================================================
  # COMPUTED ATTRIBUTES (End)

  # TEMPORARY ATTRIBUTES (Start) ========================================================
  # TEMPORARY ATTRIBUTES (End)


  # SCOPES (Start) ======================================================================

  # SCOPES (End)


  # HOOKS (Start) =======================================================================
  # HOOKS (End)


  # INDEXING (Start) ====================================================================
  searchable do
    string   :comment
    boolean  :is_site_contact
    boolean  :is_teacher
    boolean  :is_administrator
 
    text     :comment_fulltext, :using => :comment
  end 
  # INDEXING (End)



  # STATES (Start) ====================================================================

  # STATES (End)

end # class Omni::CustomerSite

