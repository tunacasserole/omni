class Omni::BinSku < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :bin_skus
  self.primary_key  = :bin_sku_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
    supports_fulltext  
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  validates    :bin_id,                          :presence    => true
  validates    :sku_id,                          :presence    => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :being_received_units,             :override  =>  false,        :to    => 0                  
  default      :on_hand_units,                    :override  =>  false,        :to    => 0                  
  default      :due_in_units,                     :override  =>  false,        :to    => 0                  
  default      :due_out_units,                    :override  =>  false,        :to    => 0                  
  default      :is_destroyed,                     :override  =>  false,        :to    => false              
  default      :bin_sku_id,                       :override  =>  false,        :with  => :guid              
  default      :display,                          :override  =>  false,        :to    => lambda {|m| "#{m.bin_display} - #{m.sku_display}"}
  # DEFAULTS (End)


  # REFERENCE (Start) ===================================================================
  reference do
    display_attribute  :display
    query_attribute    :display
    item_template      '{display}'
  end
  # REFERENCE (End)


  # ASSOCIATIONS (Start) ================================================================
  belongs_to   :sku_alias,                       :class_name => 'Omni::SkuAlias',                :foreign_key => 'sku_alias_id'
  belongs_to   :bin,                             :class_name => 'Omni::Bin',                     :foreign_key => 'bin_id'
  belongs_to   :sku,                             :class_name => 'Omni::Sku',                     :foreign_key => 'sku_id'
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :sku_alias_display,                      :to => 'sku_alias.display'
    map :bin_display,                            :to => 'bin.display'
    map :sku_display,                            :to => 'sku.display'
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
    string   :sku_alias_display do sku_alias.display if sku_alias end
    date     :last_activity_date
 
    text     :sku_alias_display_fulltext, :using => :sku_alias_display
  end 
  # INDEXING (End)



  # STATES (Start) ====================================================================

  # STATES (End)

end # class Omni::BinSku

