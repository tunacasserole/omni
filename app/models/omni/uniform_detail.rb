class Omni::UniformDetail < ActiveRecord::Base
# METADATA (Start) ====================================================================
  self.table_name   = :uniform_details
  self.primary_key  = :uniform_detail_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :uniform_detail_id,               presence: true
  validates    :uniform_detail_nbr,              presence: true, uniqueness: true
  validates    :display,                         presence: true, uniqueness: true
  # validates    :style_id,                        presence: true
  # validates    :color_id,                        presence: true
  validates    :style_color_id,                  presence: true
  # validates    :from_grade_id,                   presence: true
  # validates    :thru_grade_id,                   presence: true
  validate     :check_grades
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :uniform_detail_id,                override: false,        with: :guid
  default      :uniform_detail_nbr,               override: false,        with: :sequence, named: "UNIFORM_DETAIL_NBR"
  default      :from_grade_id,                    override: false,        to: lambda{|m| "#{m.uniform.account.from_grade_id}" if m.uniform && m.uniform.account}
  default      :thru_grade_id,                    override: false,        to: lambda{|m| "#{m.uniform.account.thru_grade_id}" if m.uniform && m.uniform.account}
  default      :display,                          override: false,        to: lambda{|m| "#{m.uniform_display} - #{m.style_color_display} - #{m.uniform_detail_nbr}"}
  # default      :discount_amount,                  override: false,        to: 0
  default      :is_destroyed,                     override: false,        to: false
  default      :is_required_male,                 override: false,        to: false
  default      :is_required_female,               override: false,        to: false
  default      :is_optional_male,                 override: false,        to: false
  default      :is_optional_female,               override: false,        to: false
  default      :is_includes_logo,                 override: false,        to: false
  default      :is_requires_logo,                 override: false,        to: false
  # DEFAULTS (End)

  # REFERENCE (Start) ===================================================================
  reference do
    display_attribute  :display
    query_attribute    :display
    item_template      '{display}'
  end
  # REFERENCE (End)

  # ASSOCIATIONS (Start) ================================================================
  has_many     :lookups,                          class_name: 'Omni::UniformLookup',      foreign_key: 'uniform_id'#, :dependent => :delete_all
  belongs_to   :uniform,                          class_name: 'Omni::Uniform',            foreign_key: 'uniform_id'
  belongs_to   :style,                            class_name: 'Omni::Style',              foreign_key: 'style_id'
  belongs_to   :color,                            class_name: 'Omni::Color',              foreign_key: 'color_id'
  belongs_to   :style_color,                      class_name: 'Omni::StyleColor',         foreign_key: 'style_color_id'
  belongs_to   :from_grade,                       class_name: 'Omni::Grade',              foreign_key: 'from_grade_id'
  belongs_to   :thru_grade,                       class_name: 'Omni::Grade',              foreign_key: 'thru_grade_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :uniform_display,                  to: 'uniform.display'
    map :style_display,                    to: 'style.display'
    map :color_display,                    to: 'color.display'
    map :style_color_display,              to: 'style_color.display'
    map :from_grade_display,               to: 'from_grade.display'
    map :thru_grade_display,               to: 'thru_grade.display'
  end
  # MAPPED ATTRIBUTES (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :display
    string   :uniform_id

    text     :display_fulltext, using: :display
  end


 # STATES (Start) ====================================================================
  state_machine :state, initial: :draft do

  ### STATES ###
    state :draft do
    end

    state :active do
      # validate  :check_grades
      # validates :account_nbr,              :presence => true
    end

    state :closed do
      # validate  :validate_approve
    end

    ### CALLBACKS ###
    after_transition on: :activate, do: :do_activate
    after_transition on: :close, do: :do_close

    ### EVENTS ###
    # event :crash do
    #   transition all - [:parked, :stalled] => :stalled, :if => lambda {|vehicle| !vehicle.passed_inspection?}
    # end

    # event :repair do
    #   # The first transition that matches the state and passes its conditions
    #   # will be used
    #   transition :stalled => :parked, :unless => :auto_shop_busy
    #   transition :stalled => same
    # end

    event :review do
      transition :active => :draft # if current_user has privilege purchase_release
    end

    event :activate do
      transition draft: :active # if current_user has privilege purchase_release
    end

    event :close do
      transition [:draft, :active, :closed] => :closed
    end

  end
  # STATES (End)


  # STATE HELPERS (Start) =====================================================================
  def do_activate
    set_approval
    # create Uniform Lookup for each uniform detail row by bringing in every SKU that is active for the Style and Color in the Uniform Detail record.
    # in other words, when a Style Color is added to a Uniform, the system assumes all sizes of that Style Color are valid for the Uniform.
    grades = Omni::Grade.get_grades(self.from_grade,self.thru_grade)
    if self.style && self.style.skus.count > 0 && grades && grades.count > 0
      self.style.skus.each do |sku|
        grades.each do |g|
          l = new_lookup
          l.product_id = self.style.product_id
          l.category_id = self.style.product.category_id if self.style.product
          l.size_id = sku.size_id
          l.sku_id = sku.sku_id
          l.grade_id = g.grade_id
          l.save
          # TODO: populate mark_uniform_key, mark_stock_number, mark_grades, price_adjustment_1, price_adjustment_2,
        end
      end
    end
  end

  def set_style_color
    self.style_id = self.style_color.style_id if self.style_color
    self.color_id = self.style_color.color_id if self.style_color
  end

  def set_state
    self.state = 'draft' unless self.state_changed?
  end

  def set_approval
    # current_user = Buildit::User.current ? Buildit::User.current : Buildit::User.first
    # a=Desk::Approval.create(approvable_type: "Omni::UniformDetail", approvable_id: self.uniform_detail_id)
  end

  def set_grades
    self.from_grade_id = self.uniform.from_grade_id unless self.from_grade_id
    self.thru_grade_id = self.uniform.thru_grade_id unless self.thru_grade_id
  end

  def check_grades
    if self.uniform && self.uniform.account
      if self.from_grade_id
        is_valid = false
        self.uniform.account.grades.each do |x|
          is_valid = true if x.grade_id == self.from_grade_id
        end
        errors.add(:from_grade_id, 'from grade is not valid for this account') unless is_valid
      end
      if self.thru_grade_id
        is_valid = false
        self.uniform.account.grades.each do |x|
          is_valid = true if x.grade_id == self.thru_grade_id
        end
        errors.add(:thru_grade_id, 'from grade is not valid for this account') unless is_valid
      end
    end
  end

  def set_defaults
    # puts "setting defaults*********\n"
    set_style_color
    set_state
    # set_grades
  end

  def do_close
    # remove lookups
  end

  def new_lookup
    # puts "creating uniform lookup"
    Omni::UniformLookup.new(uniform_id: self.uniform_id, account_id: self.uniform.account_id, contract_id: self.uniform.contract_id, date_created: Date.today, style_id: self.style_id, color_id: self.color_id, is_required_male: self.is_required_male, is_required_female: self.is_required_female,  is_optional_male: self.is_optional_male, is_optional_female: self.is_optional_female, is_includes_logo: self.is_includes_logo, is_requires_logo: self.is_requires_logo, discount_percent: self.discount_percent, uniform_source: self.uniform_source)
  end


  # STATES HELPERS (End)

    # HOOKS (Start) =======================================================================
  hook :before_create, :set_defaults, 10
  hook :before_update, :set_defaults, 10
  # HOOKS (End)

end # class Omni::UniformDetail

