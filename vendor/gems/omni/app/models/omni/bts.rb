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
  validates    :display,                          :uniqueness => true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :bts_id,                           :override  =>  false,        :with  => :guid              
  # default      :display,                          :override  =>  false,        :to    => lambda{|m| "#{m.department_display} - #{m.plan_year} - #{m.version}"}
  default      :is_destroyed,                     :override  =>  false,        :to    => false              
  default      :plan_year,                        :override => true, :to => '2014'
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
  # belongs_to   :forecast_profile,                :class_name => 'Omni::ForecastProfile',     :foreign_key => 'forecast_profile_id'    
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
  # HOOKS (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :department_display
    string   :display
    string   :bts_id
    # string   :sku_id    
    string   :state
 
    text     :department_display_fulltext, :using => :department_display
    text     :display_fulltext, :using => :display
    text     :version_fulltext, :using => :version
    text     :state_fulltext, :using => :state
  end 
  # INDEXING (End)

  # STATES (Start) ====================================================================
  state_machine :state, :initial => :new do

  ### CALLBACKS ###
    after_transition :on => :run, :do => :process_run

  ### EVENTS ###
    event :run do
      transition any => :running
      transition :running => :done
    end
  end
  # STATES (End)

  # STATE HANDLERS (Start) ====================================================================
  def process_run
    if self.is_drop_data
      puts "\n\n\n"
      puts "--destroying pre-existing bts_details"
      self.bts_details.each {|det| det.destroy}
      puts "--finished destroying bts_details"
    end

    if self.is_create_detail
      puts "--creating bts_details at #{Time.now.strftime("%H:%M:%S")}"
      self.skus.each_with_index do |x, i|
        puts "...processed #{i.to_s} rows" if i.to_s.end_with? '000'
        Omni::BtsDetail.create(:data_source => 'PARKER',:bts_id => self.bts_id, :sku_id => x.sku_id) if self.is_source_parker and x.mark_stock
        Omni::BtsDetail.create(:data_source => 'BUCKHEAD',:bts_id => self.bts_id, :sku_id => x.sku_id) if self.is_source_buckhead and x.buckhead_identifier
        Omni::BtsDetail.create(:data_source => 'GRITS',:bts_id => self.bts_id, :sku_id => x.sku_id) if self.is_source_grits and x.grits_identifier
      end
      puts "--finished creating bts_details"
    end

    if self.is_on_hand
      puts "--populating quantity on hand at #{Time.now.strftime("%H:%M:%S")}"
      details = Omni::BtsDetail.where(:bts_id => self.bts_id)
      # details = self.bts_details
      details.each do |bd|
        bd.on_hand =  bd.transform 'on_hand', bd.data_source
        bd.save
      end
      puts "--finished populating quantity on hand at #{Time.now.strftime("%H:%M:%S")}"
    end
    
    if self.is_wip    
      puts "--populating wip at #{Time.now.strftime("%H:%M:%S")}"
      details = Omni::BtsDetail.where(:bts_id => self.bts_id)
      details.each do |bd|
        bd.wip =  bd.transform 'wip', bd.data_source
        bd.save
      end
      puts "--finished populating wip at #{Time.now.strftime("%H:%M:%S")}"
    end
  
    if self.is_allocated 
      puts "--populating allocated at #{Time.now.strftime("%H:%M:%S")}"
      details = Omni::BtsDetail.where(:bts_id => self.bts_id)
      details.each do |bd|
        bd.allocated =  bd.transform 'allocated', bd.data_source
        bd.save
      end
      puts "--finished populating allocated at #{Time.now.strftime("%H:%M:%S")}"
    end
  
    if self.is_transit    
      puts "--populating transit at #{Time.now.strftime("%H:%M:%S")}"
      details = Omni::BtsDetail.where(:bts_id => self.bts_id)
      details.each do |bd|
        bd.transit =  bd.transform 'transit', bd.data_source
        bd.save
      end
      puts "--finished populating transit at #{Time.now.strftime("%H:%M:%S")}"
    end
  
    if self.is_ytd
      puts "--populating ytd at #{Time.now.strftime("%H:%M:%S")}"
      details = Omni::BtsDetail.where(:bts_id => self.bts_id)
      details.each do |bd|
        bd.ytd =  bd.transform 'ytd', bd.data_source
        bd.save
      end
      puts "--finished populating ytd at #{Time.now.strftime("%H:%M:%S")}"
    end
  
    if self.is_py1 
      puts "--populating py1 at #{Time.now.strftime("%H:%M:%S")}"
      details = Omni::BtsDetail.where(:bts_id => self.bts_id)
      details.each do |bd|
        bd.py1 =  bd.transform 'py1', bd.data_source
        bd.save
      end
      puts "--finished populating py1 at #{Time.now.strftime("%H:%M:%S")}"
    end
  
    if self.is_py2   
      puts "--populating py2 at #{Time.now.strftime("%H:%M:%S")}"
      details = Omni::BtsDetail.where(:bts_id => self.bts_id)
      details.each do |bd|
        bd.py2 =  bd.transform 'py2', bd.data_source
        bd.save
      end
      puts "--finished populating py2 at #{Time.now.strftime("%H:%M:%S")}"
    end
  
    if self.is_projected
      puts "--populating projections at #{Time.now.strftime("%H:%M:%S")}"
      details = Omni::BtsDetail.where(:bts_id => self.bts_id)
      details.each do |bd|
        bd.projection =  bd.transform 'projection', bd.data_source
        bd.save
      end
      puts "--finished populating projections at #{Time.now.strftime("%H:%M:%S")}"      
    end
  
    if true
      puts "\n\n\n\n\n\n\n\n\n\n"
      puts "--populating calculated fields at #{Time.now.strftime("%H:%M:%S")}"
      details = Omni::BtsDetail.where(:bts_id => self.bts_id)
      details.each do |bd|
        bd.calculate
      end
      puts "--finished populating calculated fields at #{Time.now.strftime("%H:%M:%S")}"
      puts "\n\n\n\n\n\n\n\n\n\n"

      # Create Style Summary
      if self.is_sum_style
        puts "\n\n\n\n\n\n\n\n\n\n"
        puts "--indentifying styles to summarize"
        # styles = []
        details = Omni::BtsDetail.where(:bts_id => self.bts_id)
        puts "--creating bts_styles"
        details.each {|bd| Omni::BtsStyle.find_or_create_by_bts_id_and_style_id(self.bts_id, bd.sku.style_id)}
        styles = Omni::BtsStyle.where(:bts_id => self.bts_id)
        styles.each {|x| x.summarize}
      end

    end
    self.state = 'done'
    self.save    
    
    puts "--bts detail rows created #{Omni::BtsDetail.count.to_s} at #{Time.now.strftime("%H:%M:%S")}"
  end

  def skus
    # reads the parameters provided in the bts (sku_id, style_id … department_id) and returns a list of skus matching the parameters provided.    
    puts "--getting list of skus to process"
    skus = []
    case 
    when self.sku
      skus << self.sku
    when self.style
      skus = self.style.skus 
    when self.subclass
      skus = self.subclass.skus
    when self.classification
      skus = self.classification.skus
    when self.department
      skus = self.department.skus
    else
      skus = Omni::Sku.all
    end   
    puts "--skus to process: #{skus.count}"
    skus
  end     

  # STATE HANDLERS (End)

end # 