class Omni::Bts < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.table_name                 = :bts
  self.primary_key                = :bts_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  # supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :bts_id,                           :override  =>  false,        :with  => :guid
  # default      :display,                            :override  =>  true,        :to   => lambda{|m| "#{m.subclass_display if m.subclass} #{m.style_display} #{m.sku_display} #{m.user_display}"}
  default      :state,                            :override  =>  false,        :to => 'draft'
  default      :is_destroyed,                     :override  =>  false,        :to => false
  default      :plan_year,                        :override  =>  false,        :to => '2014'
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
  has_many     :bts_details,                     :class_name => 'Omni::BtsDetail',   :foreign_key => 'bts_id'
  belongs_to   :department,                      :class_name => 'Omni::Department',  :foreign_key => 'department_id'
  belongs_to   :user,                            :class_name => 'Buildit::User',     :foreign_key => 'user_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :department_display,                     :to => 'department.display'
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

  # HOOKS (Start) =======================================================================
  # HOOKS (End)

  # INDEXING (Start) ====================================================================
  # searchable do
  #   string   :department_display
  #   string   :display
  #   string   :state

  #   text     :department_display_fulltext, :using => :department_display
  #   text     :state_fulltext, :using => :state
  # end
  # INDEXING (End)

  # # STATES (Start) ====================================================================
  # state_machine :state, :initial => :new do

  # ### CALLBACKS ###
  #   after_transition :on => :run, :do => :do_run

  # ### EVENTS ###
  #   event :run do
  #     transition any => :active
  #     # transition any => :done
  #   end
  # end
  # # STATES (End)

  # STATE HANDLERS (Start) ====================================================================
  def run
    self.state = 'running'
    self.save
    self.gen_details.each do |d|
      puts 'CALCULATING'
      # populate sales history from inventories table
      d.ytd
      d.calculate
    end

  end

  def rake_run

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

  def gen_details
    # DEBUG: Start
    # Omni::Inventory.where(department_id: department_id, is_authorized: true).each {|i| puts "sku is #{i.sku_id} location is #{i.location_id} and bts_id is #{bts_id}"} # DEBUG
    # Omni::Inventory.where(department_id: department_id, is_authorized: true).each do |i|
    #   puts "x=Omni::BtsDetail.create(bts_id: #{bts_id}, sku_id: #{i.sku_id}, location_id: #{i.location_id}" # DEBUG
    #   Omni::BtsDetail.create(bts_id: bts_id, sku_id: i.sku_id, location_id: i.location_id)
    # end
    # DEBUG: End
    Omni::Inventory.where(department_id: department_id, is_authorized: true).each {|i| Omni::BtsDetail.create(bts_id: bts_id, sku_id: i.sku_id, location_id: i.location_id, ) unless Omni::BtsDetail.where(bts_id: bts_id, sku_id: i.sku_id, location_id: i.location_id).first} # ORIGINAL
    Omni::BtsDetail.where(bts_id: bts_id)
  end

  def fast_load_details
    # One time fast_load
    Omni::BtsDetail.delete_all(:bts_id => self.bts_id)
    Omni::BtsDetail.transaction do
      self.inventory.each_with_index do |x, i|
        puts "...created #{i.to_s} detail rows at #{Time.now.strftime("%H:%M:%S")}"# if i.to_s.end_with? '000' #|| i == 1
        Omni::BtsDetail.connection.execute "INSERT INTO bts_details (bts_detail_id, bts_id, sku_id, location_id) values ('#{SecureRandom.uuid.gsub('-','').upcase}','#{self.bts_id}', '#{x.sku_id}','#{x.location_id}')"
      end
    end
  end
  # STATE HANDLERS (End)

end #


  # def do_run
  #   self.state='running'
  #   self.save
  #   system("rake omni:bts[#{self.bts_id}] &")
  # end

