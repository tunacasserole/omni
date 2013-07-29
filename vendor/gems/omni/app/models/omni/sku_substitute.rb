class Omni::SkuSubstitute < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :sku_substitutes
  self.primary_key  = :sku_substitute_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  validates    :sku_substitute_type,             :lookup      => 'SKU_SUBSTITUTE_TYPE',        :allow_nil => true  
  validates    :substitute_sku_id, uniqueness: { scope: :sku_id, message: "Substitute already exists for this SKU." }  
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :sku_substitute_id,                :override  =>  false,        :with  => :guid              
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "#{m.sku_display} - #{m.substitute_sku_display}"}
  default      :priority,                         :override  =>  false,        :to    => 0                  
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
  belongs_to   :sku,                             :class_name => 'Omni::Sku',                     :foreign_key => 'sku_id'
  belongs_to   :substitute_sku,                  :class_name => 'Omni::Sku',                     :foreign_key => 'substitute_sku_id'
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :sku_display,                            :to => 'sku.display'
    map :substitute_sku_display,                 :to => 'substitute_sku.display'
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


  # INDEXING (Start) ====================================================================
  # searchable do
  #   string   :sku_id    
  #   string   :sku_display do sku.display if sku end
  #   string   :substitute_sku_display do substitute_sku.display if substitute_sku end
  #   string   :sku_substitute_type do |x| Buildit::Lookup::Manager.display_for('SKU_SUBSTITUTE_TYPE', x.sku_substitute_type) end
  #   date     :effective_date
  #   date     :end_date
  #   integer  :priority
  #   string   :display
    
  #   text     :sku_display_fulltext, :using => :sku_display
  #   text     :substitute_sku_display_fulltext, :using => :substitute_sku_display
  #   text     :sku_substitute_type_fulltext, :using => :sku_substitute_type
  #   text     :priority_fulltext, :using => :priority
  # end 
  # INDEXING (End)


end # class Omni::SkuSubstitute

