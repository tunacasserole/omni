class Omni::Bts < ActiveRecord::Base


  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
 #self.establish_connection       Buildit::Util::Data::Connection.for 'BUILDIT'
  self.table_name                 = :bts
  self.primary_key                = :bts_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  # validates    :display,                          :uniqueness => true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :bts_id,                           :override  =>  false,        :with  => :guid
  default      :display,                          :override  =>  true,        :to   => lambda{|m| "#{m.subclass_display if m.subclass} #{m.style_display} #{m.sku_display} #{m.user_display}"}
  default      :is_destroyed,                     :override  =>  false,        :to    => false
  default      :plan_year,                        :override => true, :to => '2014'
  default      :user_id,                          :to   => lambda{|m| Buildit::User.current.user_id if Buildit::User.current}


  # DEFAULTS (End)

  # REFERENCE (Start) ===================================================================
  reference do
    display_attribute  :display
    query_attribute    :display
    item_template      '{display}'
  end
  # REFERENCE (End)

  # ASSOCIATIONS (Start) ================================================================
  has_many     :bts_details,              :class_name => 'Omni::BtsDetail',    :foreign_key => 'bts_id'
  has_many     :bts_styles,              :class_name => 'Omni::BtsStyle',    :foreign_key => 'bts_id'
  # has_many     :bts_locations,            :class_name => 'Omni::BtsLocation',  :foreign_key => 'bts_id'
  has_many     :logs,                            :class_name => 'Omni::Log',                 :foreign_key => 'logable_id' , :as => :logable
  belongs_to   :region,                          :class_name => 'Omni::Region',              :foreign_key => 'region_id'
  belongs_to   :district,                        :class_name => 'Omni::District',            :foreign_key => 'district_id'
  belongs_to   :location,                        :class_name => 'Omni::Location',            :foreign_key => 'location_id'
  belongs_to   :department,                      :class_name => 'Omni::Department',          :foreign_key => 'department_id'
  belongs_to   :classification,                  :class_name => 'Omni::Classification',      :foreign_key => 'classification_id'
  belongs_to   :subclass,                        :class_name => 'Omni::Subclass',            :foreign_key => 'subclass_id'
  belongs_to   :style,                           :class_name => 'Omni::Style',               :foreign_key => 'style_id'
  belongs_to   :sku,                             :class_name => 'Omni::Sku',                 :foreign_key => 'sku_id'
  belongs_to   :color,                           :class_name => 'Omni::Color',               :foreign_key => 'color_id'
  belongs_to   :user,                            :class_name => 'Buildit::User',     :foreign_key => 'user_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    # map :forecast_profile_display,           :to => 'forecast_profile.display'
    map :region_display,                     :to => 'region.display'
    map :district_display,                     :to => 'district.display'
    map :location_display,                     :to => 'location.display'
    map :department_display,                     :to => 'department.display'
    map :classification_display,              :to => 'classification.display'
    map :subclass_display,                     :to => 'subclass.display'
    map :style_display,                     :to => 'style.display'
    map :sku_display,                     :to => 'sku.display'
    map :color_display,                     :to => 'color.display'
    map :user_display,                            :to => 'user.full_name'
  end
  # MAPPED ATTRIBUTES (End)

  # COMPUTED ATTRIBUTES (Start) =========================================================
  # COMPUTED ATTRIBUTES (End)

  # TEMPORARY ATTRIBUTES (Start) ========================================================
  # TEMPORARY ATTRIBUTES (End)

  # ORDERING (Start) ====================================================================
  order_search_by :display => :asc
  # ORDERING (End)

  # eventful do
    # after :update,  :if => lambda {|m| m.state == 'built' or m.state == 'forecasted'}, :publish => lambda {|m| "#{m.display} ended at: " << Time.now.strftime("%H:%M:%S")}, :title => 'Btss'
    # after :update,  :if => lambda {|m| m.state.changed?}, :publish => lambda {|m| "#{m.display} state was changed at: " << Time.now.strftime("%H:%M:%S")}, :title => 'Bts State Changed'
  # end

  # HOOKS (Start) =======================================================================
  # after_save   :process_run, :if => proc{|m| m.state != 'running'}
  # HOOKS (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :department_display
    string   :subclass_display
    string   :classification_display
    string   :display
    string   :bts_id
    string   :state

    text     :department_display_fulltext, :using => :department_display
    text     :display_fulltext, :using => :display
    text     :subclass_display_fulltext, :using => :subclass
    text     :classification_display_fulltext, :using => :classification
    text     :state_fulltext, :using => :state
  end
  # INDEXING (End)

  # # STATES (Start) ====================================================================
  # state_machine :state, :initial => :new do

  # ### CALLBACKS ###
  #   after_transition :on => :run, :do => :process_run

  # ### EVENTS ###
  #   event :run do
  #     transition any => :active
  #     # transition any => :done
  #   end
  # end
  # # STATES (End)

  # STATE HANDLERS (Start) ====================================================================
  def run
    self.state='running'
    self.save
    rake_run
  end

  def process_run
    self.state='running'
    self.save
    system("rake omni:bts[#{self.bts_id}] &")
  end

  def rake_run
      Omni::BtsDetail.delete_all(:bts_id => self.bts_id)
      Omni::BtsDetail.transaction do
        self.inventory.each_with_index do |x, i|
          puts "...created #{i.to_s} detail rows at #{Time.now.strftime("%H:%M:%S")}"# if i.to_s.end_with? '000' #|| i == 1
          Omni::BtsDetail.connection.execute "INSERT INTO bts_details (bts_detail_id, bts_id, sku_id, location_id) values ('#{SecureRandom.uuid.gsub('-','').upcase}','#{self.bts_id}', '#{x.sku_id}','#{x.location_id}')"
        end
      end
      # puts "--reindexing bts details at #{Time.now.strftime("%H:%M:%S")}"
      # Omni::Bts.solr_reindex(:batch_size => 1000, :include => :bts_details)
      # puts "--finished reindexing bts_details at #{Time.now.strftime("%H:%M:%S")}"

    # puts "--transforming and calculating  at #{Time.now.strftime("%H:%M:%S")}"
    details = Omni::BtsDetail.where(:bts_id => self.bts_id)
    details.each_with_index do |bd,i|
      # puts "...transformed and calculated #{i.to_s} rows at #{Time.now.strftime("%H:%M:%S")}"# if i.to_s.end_with? '000' #|| i == 1
      # x=bd.transform_and_calculate
      # x.save
      # puts "--quantity on hand is: #{x.on_hand}, WIP is #{x.wip}, Allocated is #{x.allocated}, in transit is #{x.transit}"
      # puts "--ERRORS => #{x.errors if x.errors}"
    end
    # puts "--finished transforming and calculating at #{Time.now.strftime("%H:%M:%S")}"

    self.state = 'done'
    self.save
    # self.send_notice

    Omni::BtsDetail.reindex
    # puts "--bts finished with #{self.bts_details.count.to_s} detail rows at #{Time.now.strftime("%H:%M:%S")}"
  end

  def inventory
    Omni::Inventory.where(is_authorized: true)
  end
# STATE HANDLERS (End)

end #