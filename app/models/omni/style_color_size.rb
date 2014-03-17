class Omni::StyleColorSize < ActiveRecord::Base

  # METADATA (Start) ====================================================================
  self.table_name   = :style_color_sizes
  self.primary_key  = :style_color_size_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :size_id, uniqueness: { scope: :style_color_id, message: "Size already exists for this style and color." }
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :style_color_size_id,              override: false,        with: :guid
  default      :display,                          override: false,        to: lambda{|m| "#{m.style_color_display}-#{m.size_display}"}
  default      :is_special_order,                 :override  =>  true,         to: false
  default      :is_not_available,                 :override  =>  true,         to: false
  default      :fabric_bom_adjust_percent,        :override  =>  true,         to: 0
  default      :is_destroyed,                     override: false,        to: false
  # DEFAULTS (End)

  # REFERENCE (Start) ===================================================================
  reference do
    display_attribute  :display
    query_attribute    :display
    item_template      '{display}'
  end
  # REFERENCE (End)

  # ASSOCIATIONS (Start) ================================================================
  belongs_to   :style_color,                     class_name: 'Omni::StyleColor',              foreign_key: 'style_color_id'
  belongs_to   :size,                            class_name: 'Omni::Size',                    foreign_key: 'size_id'
  belongs_to   :sku,                             class_name: 'Omni::Sku',                     foreign_key: 'sku_id'
  # belongs_to   :style,                           class_name: 'Omni::Style',                   foreign_key: 'style_id'
  # has_many     :skus,                            class_name: 'Omni::Sku',                     foreign_key: 'style_color_size_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :style_color_display,                    to: 'style_color.display'
    map :size_display,                           to: 'size.display'
    map :sku_display,                            to: 'sku.display'
    map :style_id,                               to: 'style_color.style_id'
    map :color_id,                               to: 'style_color.color_id'
  end
  # MAPPED ATTRIBUTES (End)

  # ORDERING (Start) ====================================================================
  order_search_by :display => :asc
  # ORDERING (End)


  # HOOKS (Start) =======================================================================
  # HOOKS (End)


  # STATES (Start) ====================================================================
  state_machine :state, initial: :active do

  ### CALLBACKS ###
    after_transition on: :deactivate,  do: :after_deactivate
    after_transition on: :activate,    do: :after_activate
    after_transition on: :generate,    do: :after_generate

    ## EVENTS ###

    event :activate do
      transition :inactive => :active
    end

    event :deactivate do
      transition :active => :inactive
    end

    event :generate do
      transition :active => :generated
    end

  end
  # STATES (End)


  # STATE HANDLERS (Start) ====================================================================

  def after_activate
    puts '--- done with activate ---'
    puts 'ready...'
  end

  def after_deactivate
    puts '--- done with deactivate ---'
    puts 'ready...'
  end

  def after_generate
    puts '--- done with generation ---'
    puts 'ready...'
  end

  # STATE HANDLERS (End)


  # FILTERS (Start) =====================================================================
  filter :state_active,            :with => {state: {equal_to: 'active'}},       :priority => 60
  filter :state_discontinued,      :with => {state: {equal_to: 'discontinued'}}, :priority => 70
  filter :state_generated,         :with => {state: {equal_to: 'generated'}},    :priority => 80
  # FILTERS (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :style_color_display do style_color.display if style_color end
    string   :size_display do size.display if size end
    string   :sku_display do sku.display if sku end
    string   :sku_name
    string   :pos_name
    string   :style_color_id
    string   :display
    string   :state

    text     :style_color_display_fulltext, using: :style_color_display
    text     :size_display_fulltext, using: :size_display
    text     :sku_display_fulltext, using: :sku_display
    text     :sku_name_fulltext, using: :sku_name
    text     :pos_name_fulltext, using: :pos_name
    text     :state_fulltext, using: :state

  end
end # class Omni::StyleColorSize

