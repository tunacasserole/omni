class Omni::ReceiptWorksheet < Omni::Receipt

  def print(receipt)

    file_name = "receiving_worksheet#{Date.today}.pdf" #_#{Time.now.strftime('%H-%M-%S').chop.chop.chop}.pdf"
    # pdf_dir = File.join(Dir.home,'sandbox','omni','db','pdf')
    # full_file_name = File.join(pdf_dir, file_name)
    full_file_name = file_name

    pdf = header receipt

    data = []
    data[0] = ["PO Nbr","Carton Nbr","Sku Nbr","Sku Description","S/U Open","S/U per Pack","Packs Open", "Packs Received"]

    receipt.receipt_details.each_with_index do |detail,i|
      selling_units = detail.purchase_detail.selling_units_approved - detail.purchase_detail.selling_units_received - detail.purchase_detail.selling_units_cancelled
      data[i+1] = [detail.purchase.purchase_nbr,' ', detail.sku.sku_nbr, detail.sku.display, selling_units, detail.receipt_pack_size, selling_units / detail.receipt_pack_size, ' ']
    end

    # pdf.move_cursor_to 400
    pdf.move_down 110

    pdf.table(data) do |t|
      t.style(t.row(0), :background_color => '0075C9')
      t.header = true

    end

    pdf.number_pages "page <page> of <total>", { :at => [pdf.bounds.right - 150, 0], width: 150, align: :right, page_filter: (1..50), start_count_at: 1, color: "002B82" }

    attach StringIO.new(pdf.render), file_name, receipt
  end

  def header(receipt)
    pdf = Prawn::Document.new
    pdf.font_size = 12
    pdf.draw_text "Printed on: #{Date.today}", at: [0, 670]
    pdf.draw_text "Receiving Worksheet", at: [220, 670]
    pdf.draw_text "Page 1", at: [480, 670]

    pdf.draw_text "Receipt #: #{receipt.receipt_nbr}", at: [0, 650]
    pdf.draw_text "Receipt Date: #{Date.today}", at: [400, 650]

    pdf.draw_text "Receiving Location: #{receipt.location_display}", at: [0, 640]
    # pdf.draw_text "Supplier Name: #{receipt.purchase.supplier.display if receipt.purchase}", at: [0, 630]
    pdf.draw_text "Carrier Name: #{receipt.carrier_supplier.display}", at: [0, 620]
    pdf.draw_text "Bill of Lading: #{receipt.bill_of_lading_number}", at: [450, 620]
    pdf
  end

  def attach(file, file_name, receipt)
    attachment = Buildit::Attachment.create(
      attachable_type: "Omni::Receipt",
      attachable_id: receipt.receipt_id,
      file_name: file_name,
      mime_type: 'application/pdf',
      byte_size:  file.size,
      locale:   'en',
      is_enabled: true
    )

    Buildit::Content.create(
    contentable_type: "Buildit::Attachment",
    contentable_id:  attachment.attachment_id,
    data: file.read
    )
  end

  # def reset_settings
  #   # Text settings
  #   # font("Helvetica", :size => 12)
  #   self.default_leading 0
  #   self.text_direction = :ltr

  #   # Graphics settings
  #   self.line_width = 1
  #   self.cap_style  = :butt
  #   self.join_style = :miter
  #   undash
  #   fill_color   BLACK
  #   stroke_color BLACK
  # end

end

      # move_down 120
      # table(data) do
      #   style(row(0), :background_color => '0075C9')
      #   column(0..7).width = 200
      #   column(3).width = 200
      #   column(4).width = 30
      #   column(0..7).style :align => :center
      #   # column(3).style :align => :left
      # end

#       draw_text "SHIPPING ADDRESS",  :at => [0,670], :styles => [:bold]
#       draw_text "6300 WEST BY NORTHWEST #100",  :at => [0, 660]
#       draw_text "HOUSTON, TX 77040",  :at => [0, 650]

#       draw_text "PHONE   (713)957-1511", :at => [210, 670]
#       draw_text "FAX     (713)957-1598", :at => [210, 660]

#       draw_text "BILLING ADDRESS", :at => [400,670], :styles => [:bold]
#       draw_text "P.O. BOX 924426", :at => [400, 660]
#       draw_text "HOUSTON, TX 77292-4426", :at => [400, 650]
#       puts "DRAWING"
#       draw_text "TO:  #{po.supplier.display}", :at => [0, 630]
#       draw_text "L-A-2/B BLOCK 21, FE PAKISTAN", :at => [10, 620]

#       draw_text "ORDER DATE     :  #{po.order_date}", :at => [210, 640]
#       draw_text "SHIP DATE          :  #{po.order_date}", :at => [210, 630]
#       draw_text "CANCEL DATE    :  ", :at => [210, 620]
#       draw_text "SHIP VIA             :  MOST ECONOMICAL/FEASIBLE MEANS", :at => [210, 610]
#       draw_text "TERMS                :  AS AGREED", :at => [210, 600]
#       draw_text "CONFIRMATION :  #{po.purchase_nbr}", :at => [210, 590]

#       move_down 120
#       puts "DATA"
#       puts "TABLE"

#       draw_text "** SUBTOTAL ** ", :at => [cursor - 200, cursor - 15]
#       draw_text total_units.to_s.chop.chop, :at => [cursor - 118, cursor - 15]
#       draw_text "#{number_to_currency(total_price)}", :at => [cursor - 25, cursor - 15]

#       puts "STAMP"
#       create_stamp("approved") do
#         rotate(30, :origin => [-5, -5]) do
#           stroke_color "FF3333"
#           stroke_ellipse [0, 0], 29, 15
#           stroke_color "000000"

#           fill_color "993333"
#           font("Times-Roman") do
#             draw_text "Approved", :at => [-23, -3]
#           end
#           fill_color "000000"
#         end
#       end
#       stamp_at "approved", [210, 210]

#       start_new_page(:template => po_warranty)

#       # Green page numbers 1 to 7
#       string = "page <page> of <total>"
#       options = { :at => [bounds.right - 150, 0],
#         :width => 150,
#         :align => :right,
#         :page_filter => (1..7),
#         :start_count_at => 1,
#         :color => "002B82" }
#       number_pages string, options
#     end

#     FileUtils.mv(File.join(home_dir, @file_name), pdf_dir)
#   end
# end
