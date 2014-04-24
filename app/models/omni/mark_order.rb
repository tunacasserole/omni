class Omni::MarkOrder < ActiveRecord::Base

# METADATA (Start) ====================================================================
  # self.establish_connection       Buildit::Util::Data::Connection.for 'mark'
  self.table_name                 = :orders_hd
  self.primary_key                = :order_nbr
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  #supports_logical_delete
  #supports_audit
  #supports_revisioning
  # supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  # validates :id,                        :presence      => true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  # default :id,                          with: :guid
  # DEFAULTS (End)


  # ASSOCIATIONS (Start) ================================================================

  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================

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
  # searchable do
  #   integer   :stock_nbr
  #   string   :size

  #   text     :stock_nbr, using: :stock_nbr
  #   text     :size, using: :size
  # end
  # HOOKS (Start) =======================================================================

  # HOOKS (End)


  # STATES (Start) ====================================================================

  # STATES (End)


  # HELPERS (Start) =====================================================================
  def self.last_order_of_2010
    1569747
  end

  def self.last_order_of_2012
    2053197
  end

  # def self.order_to_outlet_hash
  #   puts "#{Time.now.strftime("%H:%M:%S").yellow}: START..create order_nbr to outlet_nbr hash"
  #   order_to_outlet = {}
  #   # sql = "select order_nbr, outlet_nbr from orders_hd where order_nbr > #{last_order_of_2010}"
  #   # ActiveRecord::Base.connection.execute sql
  #   Omni::MarkOrder.where('order_nbr >= ?',self.last_order_of_2012).find_each(:batch_size => 15000) {|o| order_to_outlet[o.order_nbr] = o.outlet_nbr}
  #   puts "#{Time.now.strftime("%H:%M:%S").yellow}: END..create order_nbr to outlet_nbr hash: #{order_to_outlet.count.to_s}"
  #   order_to_outlet
  # end

  # def self.order_to_date_hash
  #   puts "#{Time.now.strftime("%H:%M:%S").yellow}: START..create order_nbr to order date hash"
  #   order_to_date = {}
  #   Omni::MarkOrder.where('order_nbr >= ?',self.last_order_of_2010).find_each(:batch_size => 15000) {|o| order_to_date[o.order_nbr] = "#{o.date_putin.to_s[0...10]}"}
  #   puts "#{Time.now.strftime("%H:%M:%S").yellow}: END..create order_nbr to order date hash: #{order_to_date.count.to_s}"
  #   order_to_date
  # end
  # HELPERS (End)


  def display_as
    self.display
  end
end # class Omni::MarkOrderReport
