# include ActionView::Helpers
require 'prawn'
class Omni::Purchase::Helpers < Omni::Purchase

  def self.print(po)
    puts "PRINTING"
    home_dir = File.join(Dir.home,'sandbox','omni')
    pdf_dir = File.join(Dir.home,'sandbox','omni','tmp','pdf') 
    po_warranty = File.join(pdf_dir, 'psu_po_warranty.pdf')
    po_logo = File.join(pdf_dir, 'psu_po_logo.pdf')

    file_name = po.display + '.pdf'

    Prawn::Document.generate(file_name, :template => po_logo) do
      puts "GENERATING"
      font_size 9
      text "P.O. # #{po.purchase_order_nbr}", :align => :right, :styles => [:bold], :size => 26
      
      draw_text "SHIPPING ADDRESS",  :at => [0,670], :styles => [:bold]
      draw_text "6300 WEST BY NORTHWEST #100",  :at => [0, 660]
      draw_text "HOUSTON, TX 77040",  :at => [0, 650]
     
      draw_text "PHONE   (713)957-1511", :at => [210, 670]
      draw_text "FAX     (713)957-1598", :at => [210, 660]

      draw_text "BILLING ADDRESS", :at => [400,670], :styles => [:bold]
      draw_text "P.O. BOX 924426", :at => [400, 660]
      draw_text "HOUSTON, TX 77292-4426", :at => [400, 650]        
      puts "DRAWING"
      draw_text "TO:  #{po.supplier.display}", :at => [0, 630]
      draw_text "L-A-2/B BLOCK 21, FE PAKISTAN", :at => [10, 620]   
                          
      draw_text "ORDER DATE     :  #{po.order_date}", :at => [210, 640]          
      draw_text "SHIP DATE          :  #{po.order_date}", :at => [210, 630]
      draw_text "CANCEL DATE    :  ", :at => [210, 620]        
      draw_text "SHIP VIA             :  MOST ECONOMICAL/FEASIBLE MEANS", :at => [210, 610]      
      draw_text "TERMS                :  AS AGREED", :at => [210, 600]   
      draw_text "CONFIRMATION :  #{po.purchase_order_nbr}", :at => [210, 590]               

      move_down 120
      puts "DATA"
      data = []
      data[0] = ["V stock #","Size","Color","Description","QTY","Price","Total"]
      total_units = 0
      total_price = 0
      puts "DETAILS"
      # details = po.purchase_details.sort {|x,y| y.supplier_item_identifier <=> x.supplier_item_identifier}
      details = po.purchase_details
      details.each_with_index do |pd,i|
        data[i+1] = [pd.supplier_item_identifier,pd.size_name,pd.color_name,pd.description,pd.units_ordered.to_s.chop.chop,"#{number_to_currency(pd.sku.initial_retail_price)}","#{number_to_currency(pd.sku.initial_retail_price * pd.units_ordered)}"]
        total_units += pd.units_ordered
        total_price += (pd.sku.initial_retail_price * pd.units_ordered)
      end
      puts "TABLE"
      table(data) do
        style(row(0), :background_color => '0075C9')
        column(0..6).width = 60
        column(3).width = 200
        column(4).width = 30
        column(0..6).style :align => :center
        column(3).style :align => :left        
      end              

      draw_text "** SUBTOTAL ** ", :at => [cursor - 200, cursor - 15]
      draw_text total_units.to_s.chop.chop, :at => [cursor - 118, cursor - 15]
      draw_text "#{number_to_currency(total_price)}", :at => [cursor - 25, cursor - 15]

      puts "STAMP"
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
