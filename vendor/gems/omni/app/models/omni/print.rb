require 'prawn'
class Omni::Print < ActiveRecord::Base


  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.establish_connection       Buildit::Util::Data::Connection.for 'BUILDIT'
  self.table_name                 = :prints
  self.primary_key                = :print_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  #supports_logical_delete
  #supports_audit
  #supports_revisioning
  #supports_fulltext
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates :print_id,                        :presence      => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default :print_id,                          :with => :guid
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
  
  # INDEXING (End)


  # HOOKS (Start) =======================================================================

  # HOOKS (End)


  # STATES (Start) ====================================================================
  
  # STATES (End)
  

  # HELPERS (Start) =====================================================================
  def print
    home_dir = File.join(Dir.home,'sandbox','omni')
    pdf_dir = File.join(Dir.home,'sandbox','omni','tmp','pdf') 
    case source_model
    when 'Purchase'
      po_warranty = File.join(pdf_dir, 'psu_po_warranty.pdf')
      po_logo = File.join(pdf_dir, 'psu_po_logo.pdf')      
      source = Omni::Purchase.where(:purchase_id => self.source_id).first
      file_name = source.display + '.pdf'

      Prawn::Document.generate(file_name, :template => po_logo) do
        text "P.O. # #{source.purchase_order_nbr}", :align => :right, :styles => [:bold], :size => 26
        
        draw_text "SHIPPING  6300 WEST BY NORTHWEST #100", :size => 9, :at => [0, 670]
        draw_text "ADDRESS   HOUSTON, TX 77040", :size => 9, :at => [0, 660]
       
        draw_text "PHONE   (713)957-1511", :size => 9, :at => [210, 670]
        draw_text "FAX     (713)957-1598", :size => 9, :at => [210, 660]

        draw_text "BILLING    P.O. BOX 924426", :size => 9, :at => [400, 670]
        draw_text "ADDRESS    HOUSTON, TX 77292-4426", :size => 9, :at => [400, 660]        

        draw_text "TO:  #{source.supplier.display}", :size => 9, :at => [8, 640]
        draw_text "L-A-2/B BLOCK 21", :size => 9, :at => [16, 630]
        draw_text ",FE PAKISTAN", :size => 9, :at => [16, 610]         
                            
        draw_text "DATE OF ORDER:  #{source.order_date}", :size => 9, :at => [210, 640]          
        draw_text "SHIP DATE:  #{source.order_date}", :size => 9, :at => [210, 630]
        draw_text "CANCEL DATE:  ", :size => 9, :at => [210, 620]        
        draw_text "SHIP VIA: MOST ECONOMICAL/FEASIBLE MEANS", :size => 9, :at => [210, 610]      
        draw_text "TERMS:  AS AGREED", :size => 9, :at => [210, 600]   
        draw_text "CONFIRMATION #: 1001 ", :size => 9, :at => [210, 590]               

        move_down 120
        
        data = []
        data[0] = ["V stock #","Size","Color","Description","QTY","Price","Total"]
        total_units = 0
        total_price = 0

        source.purchase_details.each_with_index do |pd,i|
          data[i+1] = [pd.supplier_item_identifier,pd.size_name,pd.color_name,pd.description,pd.units_ordered,"$#{pd.sku.initial_retail_price.to_s}","$#{(pd.sku.initial_retail_price * pd.units_ordered).to_s}"]
          total_units += pd.units_ordered
          total_price += (pd.sku.initial_retail_price * pd.units_ordered)
        end

        table(data) do
          style(row(0), :background_color => '0075C9')
          # style(column(0)) { |c| c.border_width += 1 }
        end              

        # draw_text "cursor1", :at => [cursor,cursor]
        # draw_text "cursor2", :at => [cursor,cursor]        
        draw_text "** SUBTOTAL ** ", :size => 9, :at => [cursor - 250, cursor - 15]
        draw_text total_units.to_s, :size => 9, :at => [cursor - 180, cursor - 15]
        draw_text "$#{total_price}", :size => 9, :at => [cursor - 120, cursor - 15]

        create_stamp("approved") do
          rotate(30, :origin => [-5, -5]) do
            stroke_color "FF3333"
            stroke_ellipse [0, 0], 29, 15
            stroke_color "000000"

            fill_color "993333"
            font("Times-Roman") do
              draw_text "Approved", :at => [-23, -3]
            end
            fill_color "000000"
          end
        end
        stamp_at "approved", [210, 210]

        start_new_page(:template => po_warranty)
        
        # Green page numbers 1 to 7
        string = "page <page> of <total>"
        options = { :at => [bounds.right - 150, 0],
          :width => 150,
          :align => :right,
          :page_filter => (1..7),
          :start_count_at => 1,
          :color => "002B82" }
        number_pages string, options
      end
      
      FileUtils.mv(File.join(home_dir, file_name), pdf_dir)
    end
  end


  # HELPERS (End)

end # class Omni::Print