class Omni::ProgramStyle < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :program_styles
  self.primary_key  = :program_style_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  supports_fulltext    
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  validates    :program_product_id,              :presence    => true
  validates    :style_id,                        :presence    => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :program_style_id,                 :override  =>  false,        :with  => :guid              
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "#{m.program_product_display} - #{m.style_display}"}
  default      :retail_price,                     :override  =>  false,        :to    => 0                  
  default      :price_units,                      :override  =>  false,        :to    => 0                  
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
  belongs_to   :program_product,                 :class_name => 'Omni::ProgramProduct',          :foreign_key => 'program_product_id'
  belongs_to   :style,                           :class_name => 'Omni::Style',                   :foreign_key => 'style_id'
  has_many     :program_colors,                  :class_name => 'Omni::ProgramColor',            :foreign_key => 'program_style_id'
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :program_product_display,                :to => 'program_product.display'
    map :style_display,                          :to => 'style.display'
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
    string   :style_display do style.display if style end
    integer  :retail_price
    string   :program_id    
 
    text     :style_display_fulltext, :using => :style_display
    text     :retail_price_fulltext, :using => :retail_price
  end 
  # INDEXING (End)



  # STATES (Start) ====================================================================

  # STATES (End)

end # class Omni::ProgramStyle

