class Omni::Department < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.table_name   = :departments
  self.primary_key  = :department_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :uniqueness    => true
  validates    :company_id,                      :presence      => true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :department_id,                    :override  =>  false,        :with  => :guid
  default      :department_nbr,                   :override  =>  false,        :with  => :sequence,         :named=>"DEPARTMENT_NBR"
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
  belongs_to   :buyer_user,                      :class_name => 'Buildit::User',                 :foreign_key => 'buyer_user_id'
  belongs_to   :company,                         :class_name => 'Omni::Company',                 :foreign_key => 'company_id'
  has_many     :notes,                           :class_name => 'Buildit::Note',                 :foreign_key => 'notable_id',       :as => :notable
  has_many     :classifications,                 :class_name => 'Omni::Classification',          :foreign_key => 'department_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :buyer_user_display,                     :to => 'buyer_user.full_name'
    map :company_display,                        :to => 'company.display'
  end
  # MAPPED ATTRIBUTES (End)

  # COMPUTED ATTRIBUTES (Start) =========================================================
  # COMPUTED ATTRIBUTES (End)

  # TEMPORARY ATTRIBUTES (Start) ========================================================
  # TEMPORARY ATTRIBUTES (End)


  # ORDERING (Start) ====================================================================
  order_search_by :display => :asc
  # ORDERING (End)


  # HELPERS (Start) =====================================================================
  def generate_dept_number
    unless self.sku_number
      self.dept_number             = "T#{Buildit::Sequence.nextval('DEPT_NBR')}"
      self.save
    end
  end # def generate_task_number
  # HELPERS (End) =====================================================================

  # INDEXING (Start) ====================================================================
  searchable do
    string   :display
    string   :department_nbr
    string   :buyer_user_display do buyer_user.full_name if buyer_user end
    string   :company_display do company.display if company end

    text     :display_fulltext, :using => :display
    text     :department_nbr_fulltext, :using => :department_nbr
    text     :buyer_user_display_fulltext, :using => :buyer_user_display
    text     :company_display_fulltext, :using => :company_display
  end
  # INDEXING (End)


  # HELPERS (Start) =======================================================================
  def skus
    skus = []
    self.classifications.each do |classification|
      classification.subclasses.each do |subclass|
        subclass.styles.each do |style|
          style.skus.each {|sku| skus << sku}
        end
      end
    end
    skus
  end

  def sku_locations
    sku_locations = []
    # self.classifications.each do |classification|
    #   classification.subclasses.each do |subclass|
    #     subclass.styles.each do |style|
    #       style.sku_locations.each do |sl|
    #         sku_locations << sl
    #       end
    #     end
    #   end
    # end
    sku_locations
    Omni::SkuLocation.all
  end
  # HELPERS (End)

  # STATES (Start) ====================================================================

  # STATES (End)

end # class Omni::Department

