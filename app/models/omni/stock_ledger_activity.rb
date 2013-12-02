class Omni::StockLedgerActivity < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.table_name   = :stock_ledger_activities
  self.primary_key  = :stock_ledger_activity_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  # validates    :stockable_type,                  :presence    => true
  # validates    :stockable_id,                    :presence    => true
  # validates    :ruleset_id,                      :presence    => true
  # validates    :sku_id,                          :presence    => true
  # validates    :location_id,                     :presence    => true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :stock_ledger_activity_id,         :override  =>  false,        :with  => :guid
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "#{m.sku_display} - #{m.location_display} - #{m.activity_date}"}
  default      :units,                            :override  =>  false,        :to    => 0
  default      :cost,                             :override  =>  false,        :to    => 0
  default      :retail,                           :override  =>  false,        :to    => 0
  default      :is_destroyed,                     :override  =>  false,        :to    => false
  # default      :stockable_id,                     :override  =>  false,        :to    => :sku_id
  # default      :stockable_type,                   :override  =>  false,        :to    => "Omni::StockLedgerActivty"
  # DEFAULTS (End)

  # REFERENCE (Start) ===================================================================
  reference do
    display_attribute  :display
    query_attribute    :display
    item_template      '{display}'
  end
  # REFERENCE (End)

  # ASSOCIATIONS (Start) ================================================================
  belongs_to   :stockable,                :polymorphic => true
  belongs_to   :stockable,                       :class_name => 'Omni::PickTicket',              :foreign_key => 'stockable_id'
  belongs_to   :ruleset,                         :class_name => 'Omni::Ruleset',                 :foreign_key => 'ruleset_id'
  belongs_to   :sku,                             :class_name => 'Omni::Sku',                     :foreign_key => 'sku_id'
  belongs_to   :location,                        :class_name => 'Omni::Location',                :foreign_key => 'location_id'
  belongs_to   :supplier,                        :class_name => 'Omni::Supplier',                :foreign_key => 'supplier_id'
  belongs_to   :customer,                        :class_name => 'Omni::Customer',                :foreign_key => 'customer_id'
  belongs_to   :site,                            :class_name => 'Omni::Site',                    :foreign_key => 'site_id'
  belongs_to   :stockable,                       :class_name => 'Omni::WorkOrder',               :foreign_key => 'stockable_id'
  has_many     :stock_ledger_activity_logs,      :class_name => 'Omni::StockLedgerActivityLog',  :foreign_key => 'stock_ledger_activity_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :ruleset_display,                        :to => 'ruleset.display'
    map :sku_display,                            :to => 'sku.display'
    map :location_display,                       :to => 'location.display'
    map :supplier_display,                       :to => 'supplier.display'
    map :customer_display,                       :to => 'customer.display'
    map :site_display,                           :to => 'site.display'
  end
  # MAPPED ATTRIBUTES (End)

  # ORDERING (Start) ====================================================================
  order_search_by :activity_date => :desc
  # ORDERING (End)

  # HOOKS (Start) =======================================================================
  # hook :after_create, :validate_ruleset, 10
  hook :after_create, :apply_rules, 20
  # hook :after_create, :set_sla_state, 30

  def apply_rules
    puts "\n\n *************- ruleset: #{self.ruleset.display.yellow}, rules: #{self.ruleset.rules.count.to_s.yellow}\n\n"
    self.ruleset.rules.select {|x| x.is_active}.each do |r|
      puts ('RULE: ' + r.rule_action + ' ' + r.input_attribute + ' from ' + r.model_name + '.' + r.attribute_name).cyan
      update_row = ('Omni::' + r.model_name).constantize.where(:sku_id => self.sku_id, :location_id => self.location_id).first || ('Omni::' + r.model_name).constantize.create(:sku_id => self.sku_id, :location_id => self.location_id)
      update_row.save
      case r.rule_action
      when 'SUBTRACT'
        new_value = update_row.send(r.attribute_name) - self.send(r.input_attribute)
        # puts "*** SUBTRACTING #{self.send(r.input_attribute)} from #{update_row.send(r.attribute_name)} = #{new_value}"
      when 'ADD'
        new_value = update_row.send(r.attribute_name) + self.send(r.input_attribute)
        # puts "*** ADDING #{update_row.send(r.attribute_name)} plus #{self.send(r.input_attribute)} = #{new_value}"
      when 'DATE'
        # puts "*** SETTING DATES ***"
        new_value = Date.today
      end
      # puts "**** new value: " + new_value.to_s
      update_row.send(r.attribute_name + '=', new_value)
      update_row.save

      row_id = 'none' || update_row.send(r.model_name.tableize.foreign_key)
      Omni::StockLedgerActivityLog.create(:stock_ledger_activity_id => self.stock_ledger_activity_id, :model_name => r.model_name, :attribute_name => r.attribute_name, :row_id => row_id, :rule_action => r.rule_action)
      puts "**** FINISHED SAVE ****"
    end
    puts "**** POSTING SLA ****"
    self.posted_date = Date.today
    self.save
  end
  # HOOKS (End)


  # INDEXING (Start) ====================================================================
  searchable do
    string   :ruleset_display do ruleset.display if ruleset end
    string   :supplier_display do supplier.display if supplier end
    string   :customer_display do customer.display if customer end
    string   :site_display do site.display if site end
    integer  :units
    integer  :cost
    integer  :retail
    date     :activity_date
    string   :stockable_id
    string   :stockable_type

    text     :ruleset_display_fulltext, :using => :ruleset_display
    text     :supplier_display_fulltext, :using => :supplier_display
    text     :customer_display_fulltext, :using => :customer_display
    text     :site_display_fulltext, :using => :site_display
    text     :units_fulltext, :using => :units
    text     :cost_fulltext, :using => :cost
    text     :retail_fulltext, :using => :retail
  end
  # INDEXING (End)



end # class Omni::StockLedgerActivity

