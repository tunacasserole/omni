class Omni::ProgramColor < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :program_colors
  self.primary_key  = :program_color_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  validates    :program_style_id,                :presence    => true
  validates    :style_color_id,                  :presence    => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :program_color_id,                 :override  =>  false,        :with  => :guid              
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "#{m.program_style_display} - #{m.color_display}"}
  default      :is_active,                        :override  =>  false,        :to    => false              
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
  belongs_to   :program_style,                   :class_name => 'Omni::ProgramStyle',            :foreign_key => 'program_style_id'
  belongs_to   :style_color,                     :class_name => 'Omni::StyleColor',              :foreign_key => 'style_color_id'
  belongs_to   :style,                           :class_name => 'Omni::Style',                   :foreign_key => 'style_id'
  belongs_to   :color,                           :class_name => 'Omni::Color',                   :foreign_key => 'color_id'
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :program_style_display,                  :to => 'program_style.display'
    map :style_color_display,                    :to => 'style_color.display'
    map :style_display,                          :to => 'style.display'
    map :color_display,                          :to => 'color.display'
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
    string   :program_style_display do program_style.display if program_style end
    string   :style_color_display do style_color.display if style_color end
    boolean  :is_active
 
    text     :program_style_display_fulltext, :using => :program_style_display
    text     :style_color_display_fulltext, :using => :style_color_display
  end 
  # INDEXING (End)



  # STATES (Start) ====================================================================

  # STATES (End)

end # class Omni::ProgramColor

