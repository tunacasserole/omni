class Omni::StyleColor < ActiveRecord::Base

  # METADATA (Start) ====================================================================
  self.table_name   = :style_colors
  self.primary_key  = :style_color_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :color_id, uniqueness: { scope: :style_id, message: "Color already exists for this style." }
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :style_color_id,                   :override  =>  false,        :with  => :guid
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "#{m.style_display} - #{m.color_display}"}
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
  has_many     :style_color_sizes,               :class_name => 'Omni::StyleColorSize',          :foreign_key => 'style_color_id'
  belongs_to   :style,                           :class_name => 'Omni::Style',                   :foreign_key => 'style_id'
  belongs_to   :color,                           :class_name => 'Omni::Color',                   :foreign_key => 'color_id'
  has_many     :program_colors,                  :class_name => 'Omni::ProgramColor',            :foreign_key => 'style_color_id'
  has_many     :style_supplier_colors,           :class_name => 'Omni::StyleSupplierColor',      :foreign_key => 'style_color_id'
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :style_display,                          :to => 'style.display'
    map :color_display,                          :to => 'color.display'
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

  hook  :before_create,      :validate_style_size_group,             10
  hook  :after_create,       :add_style_color_sizes,                 10

  # HOOKS (End)

  # STATES (Start) ====================================================================
  state_machine :state, :initial => :active do

  ### CALLBACKS ###
    after_transition :on => :activate, :do => :after_activate
    after_transition :on => :deactivate, :do => :after_deactivate

  ### EVENTS ###
    event :activate do
      transition :inactive => :active
    end

    event :deactivate do
      transition :active => :inactive
    end


  end
  # STATES (End)

  # STATE HANDLERS (Start) ====================================================================
  def after_activate

  end

  def after_deactivate

  end
  # STATE HANDLERS (End)


  # INDEXING (Start) ====================================================================
  searchable do
    string   :style_display do style.display if style end
    string   :color_display do color.display if color end
    string   :color_id
    string   :short_name
    string   :concatenated_name
    string   :style_id
    string   :state
    string   :display

    text     :style_display_fulltext, :using => :style_display
    text     :color_display_fulltext, :using => :color_display
    text     :short_name_fulltext, :using => :short_name
    text     :concatenated_name_fulltext, :using => :concatenated_name
    text     :state_fulltext, :using => :state
  end
  # INDEXING (End)


  # HELPERS (Start) =====================================================================
  def validate_style_size_group

  end

  def add_style_color_sizes
    #
    #  Get sizes by reading size_group_details for style.size_group_id.
    #  Add style_color_sizes row for added color and each size in the size group
    #
    if self.style && self.style.size_group_id
      sizes = Omni::SizeGroupDetail.where(:size_group_id => self.style.size_group_id)
      sizes.each do |s|
        x = Omni::StyleColorSize.new
        x.style_color_id = self.style_color_id
        x.size_id = s.size_id
        x.sku_name = "#{self.display}-#{s.size_display}"
        x.pos_name = "#{self.style.pos_name} #{self.color.concatenated_name} #{s.size.concatenated_name}".truncate 100
        x.save
      end
    end

  end


  # HELPERS (End)

end # class Omni::StyleColor

