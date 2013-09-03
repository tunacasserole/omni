class Omni::BtsStyle < ActiveRecord::Base


  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  # self.establish_connection       Buildit::Util::Data::Connection.for 'BUILDIT'
  self.table_name                 = :bts_styles
  self.primary_key                = :bts_style_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  #supports_logical_delete
  #supports_audit
  #supports_revisioning
  supports_fulltext
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates :bts_style_id,                        :presence      => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default :bts_style_id,                          :with => :guid
  # DEFAULTS (End)


  # ASSOCIATIONS (Start) ================================================================
  belongs_to   :style,                           :class_name => 'Omni::Style',                   :foreign_key => 'style_id'  
  # ASSOCIATIONS (End)


  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :style_display,                          :to => 'style.display'
  end  
  # MAPPED ATTRIBUTES (End)

  
  # COMPUTED ATTRIBUTES (Start) =========================================================
  
  # COMPUTED ATTRIBUTES (End)


  # TEMPORARY ATTRIBUTES (Start) ========================================================
  
  # TEMPORARY ATTRIBUTES (End)


  # FILTERS (Start) =====================================================================
  
  # FILTERS (End)


  # ORDERING (Start) ====================================================================
  
  # ORDERING (End)


  # SCOPES (Start) ======================================================================
  
  # SCOPES (End)


  # INDEXING (Start) ====================================================================
  searchable do
    string   :bts_id
  end
  # INDEXING (End)


  # HOOKS (Start) =======================================================================

  # HOOKS (End)


  # STATES (Start) ====================================================================
  
  # STATES (End)
  

  # HELPERS (Start) =====================================================================
  def summarize
    puts "--summarizing bts details for style: #{self.display}"
    sku_ids = []
    self.style.skus.each {|x| sku_ids << x.sku_id} if self.style    
    bts_details = Omni::BtsDetail.where(:bts_id => self.bts_id,:sku_id => sku_ids)
    
    puts "--updating style totals from bts details"
    self.on_hand = bts_details.sum(:on_hand)
    self.wip = bts_details.sum(:on_hand)
    self.allocated = bts_details.sum(:allocated)
    self.transit = bts_details.sum(:transit)
    self.projection = bts_details.sum(:projection)
    self.py1 = bts_details.sum(:py1)
    self.py2 = bts_details.sum(:py2)
    self.converted_need = bts_details.sum(:converted_need)
    self.generic_need = bts_details.sum(:generic_need)
    self.need = bts_details.sum(:need)
    self.wip = bts_details.sum(:on_hand)                    
    self.save
  end
  # HELPERS (End)

end # class Omni::BtsStyle