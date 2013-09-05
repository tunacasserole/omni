class Omni::StyleSupplierColor < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :style_supplier_colors
  self.primary_key  = :style_supplier_color_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  # validates    :color_id, uniqueness: { scope: :style_supplier_id, message: "Color already exists for this style supplier." }  
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :style_supplier_color_id,          :override  =>  false,        :with  => :guid              
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "#{m.style_supplier_display} - #{m.style_color_display}"}
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
  belongs_to   :style_supplier,                  :class_name => 'Omni::StyleSupplier',           :foreign_key => 'style_supplier_id'
  belongs_to   :style_color,                     :class_name => 'Omni::StyleColor',              :foreign_key => 'style_color_id'
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :style_supplier_display,                 :to => 'style_supplier.display'
    map :style_color_display,                    :to => 'style_color.display'
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
  searchable do
    string   :style_supplier_display do style_supplier.display if style_supplier end
    string   :style_color_display do style_color.display if style_color end
    string   :display
 
    text     :style_supplier_display_fulltext, :using => :style_supplier_display
    text     :style_color_display_fulltext, :using => :style_color_display
  end 
  # INDEXING (End)


end # class Omni::StyleSupplierColor
