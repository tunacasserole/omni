class Omni::Test::Receipt < Omni::Test::Base

  def self.go
    @@model_name = 'Receipt'
    @@model_action = 'event'
    test_events
    @@model_action = 'allocate'
    # test_allocate
    # test_print
  end

  def self.test_events
    #  Update appointment date
    x = reset_data
    x.appointment_date = Time.now
    x.save
    test_it('it sets the state when an appointment date is set', 'scheduled', x.state)

    # Start a Receipt
    x = reset_data
    x.start
    test_it('it sets the state when a receipt is started', 'processing', x.state)
    test_it('it sets the start date to today when a receipt is started', Date.today, x.start_date)

    #  Accept Receipt
    x = reset_data
    x.accept
    test_it('it sets the state when a receipt is accepted', 'accepted', x.state)
    test_it('it sets the accept date to today when a receipt is accepted', Date.today, x.accept_date)
    test_it('it sets the accepted by user to the current user when a receipt is accepted', true, x.accepted_by_user_id?)

    #  Complete a receipt
    x = reset_data
    x.accept
    x.complete
    test_it('it sets the state when a receipt is completed', 'complete', x.state)
    test_it('it sets the complete date to today when a receipt is completed', Date.today, x.complete_date)

    #  Create a receipt purchase
    x = reset_data
    # Omni::ReceiptPurchase.create(receipt_id: x.receipt_id, purchase_id: 'XXXXXXXXXXXXXXXXXXXXXXXPURCHASE1')
    test_it('it creates a receipt detail when a receipt purchase is created', 1, x.receipt_details.count)

    #  Receive a receipt purchase
    x = reset_data
    # y = Omni::ReceiptPurchase.where(receipt_purchase_id: 'XXXXXXXXXXXXXXXXRECEIPTPURCHASE1').first
    y = x.receipt_purchases.first
    y.receive
    test_it('it sets the received units equal to open units on the receipt detail when the receipt purchase is received', 100, x.receipt_details.first.received_units)

    #  Copy units from purchase to receipt
    x = reset_data
    # y = Omni::ReceiptPurchase.create(receipt_id: x.receipt_id, purchase_id: 'XXXXXXXXXXXXXXXXXXXXXXXPURCHASE1')
    # Purchase state must be in open or partial
    p = Omni::Purchase.where(purchase_id: 'XXXXXXXXXXXXXXXXXXXXXXXPURCHASE1').first
    p.state = 'open'
    p.save
    x.copy_units
    test_it('it sets the received units equal to open purchase units for all the lines on a receipt when the copy_units method is called', 100, x.receipt_details.first.received_units)

    #  Complete a receipt detail
    # x = reset_data
    # x.receipt_details.first.complete
    # test_it('it writes a stock ledger activity when a receipt detail is completed', 1, Omni::StockLedgerActivity.where(stockable_type: "Omni::ReceiptDetail", stockable_id: x.receipt_details.first.receipt_detail_id).count)


  end

  def self.test_allocate
    allocation_scenarios.each do |s|

      Omni::ReceiptAllocation.delete_all

      ap = Omni::AllocationProfile.where(allocation_profile_id: s[:allocation_profile_id]).first
      ap.percent_to_allocate = s[:percent_to_allocate]
      ap.save

      units_to_allocate = s[:units_to_allocate]# * s[:order_pack_size]
      pd = Omni::PurchaseDetail.where(purchase_detail_id: 'ABABDAAA35E011E3APURCHASEDETAIL1').first
      pd.order_pack_size = s[:order_pack_size]
      pd.allocation_profile_id = s[:allocation_profile_id]
      pd.save

      x = Omni::ReceiptDetail.where(receipt_id: 'XXXXXXXXXXXXXXXXXXXXXXXXRECEIPT1').first
      x.allocation_profile_id = s[:allocation_profile_id]
      x.save

      Omni::ReceiptAllocation.create(receipt_detail_id: x.receipt_detail_id, location_id: '51713A3EAC3E11E2947800FF58D32228', units_allocated: s[:allocated_units_locked_loc_1], state: 'locked') if s[:allocated_units_locked_loc_1] > 0
      Omni::ReceiptAllocation.create(receipt_detail_id: x.receipt_detail_id, location_id: '51892F68AC3E11E2947800FF58D32228', units_allocated: s[:allocated_units_locked_loc_2], state: 'locked') if s[:allocated_units_locked_loc_2] > 0
      Omni::ReceiptAllocation.create(receipt_detail_id: x.receipt_detail_id, location_id: '5247A038AC3E11E2947800FF58D32228', units_allocated: s[:allocated_units_locked_loc_3], state: 'locked') if s[:allocated_units_locked_loc_3] > 0

      x.allocate
      x = Omni::ReceiptDetail.where(receipt_id: 'XXXXXXXXXXXXXXXXXXXXXXXXRECEIPT1').first
      expected =  s[:expected_allocation_results_loc_1].to_s + ',' + s[:expected_allocation_results_loc_2].to_s + ',' + s[:expected_allocation_results_loc_3].to_s
      actual = x.receipt_allocations.first.units_allocated.to_s.chop.chop + ',' + x.receipt_allocations.second.units_allocated.to_s.chop.chop + ',' + x.receipt_allocations.third.units_allocated.to_s.chop.chop

      test_it("#{s[:scenario]}", expected, actual)
    end

  end

  def self.test_print
    r = reset_data
    100.times {|x| Omni::ReceiptDetail.create(received_units: x * 10, receipt_id: 'XXXXXXXXXXXXXXXXXXXXXXXXRECEIPT1', purchase_id: 'XXXXXXXXXXXXXXXXXXXXXXXPURCHASE1', purchase_detail_id: 'ABABDAAA35E011E3APURCHASEDETAIL1', allocation_profile_id: 'XXXXLASTFORECASTBYPERCENTTOSTORE', sku_id: '285C928C0F3611E3BB7120C9D047DD15', receipt_pack_size: 1)}
    r.print
  end

  def self.reset_data
    Omni::Purchase.where(purchase_id: 'XXXXXXXXXXXXXXXXXXXXXXXPURCHASE1').to_a.each {|x| x.delete}
    Omni::PurchaseDetail.where(purchase_id: 'XXXXXXXXXXXXXXXXXXXXXXXPURCHASE1').to_a.each {|x| x.delete}
    Omni::Receipt.where(receipt_id: 'XXXXXXXXXXXXXXXXXXXXXXXXRECEIPT1').to_a.each {|x| x.destroy}
    Omni::ReceiptDetail.where(purchase_id: 'XXXXXXXXXXXXXXXXXXXXXXXPURCHASE1').to_a.each {|x| x.delete}

    Omni::ReceiptPurchase.where(receipt_purchase_id: 'XXXXXXXXXXXXXXXXRECEIPTPURCHASE1').to_a.each {|x| x.delete}
    Omni::ReceiptAllocation.all.to_a.each {|x| x.delete}

    Omni::Purchase.create(:purchase_id => 'XXXXXXXXXXXXXXXXXXXXXXXPURCHASE1',:supplier_id => 'B931D2A4AC5311E299E700FFSUPPLIER', :location_id => '51579764AC3E11E2947800FF58D32228',  :allocation_profile_id => 'XXXXLASTFORECASTBYPERCENTTOSTORE', :purchase_type => 'SAMPLE', :purchase_source => 'SAMPLE', :ordered_by_user_id => '811166D4D50A11E2B45820C9D04AARON', :payment_term =>'NET 30',:freight_term => 'COLLECT',:ship_via => 'SAMPLE', :fob_point => 'ORIGIN' , :display => 'Olivanders wands test purchase',:purchase_approver_1_user_id => '811166D4D50A11E2B45820C9D04AARON')

    Omni::PurchaseDetail.create(state: 'open', purchase_detail_id: 'ABABDAAA35E011E3APURCHASEDETAIL1', allocation_profile_id: 'XXXXLASTFORECASTBYPERCENTTOSTORE', purchase_id: 'XXXXXXXXXXXXXXXXXXXXXXXPURCHASE1', sku_supplier_id: '239F5610231F11E3BE4920C9D047DD15', units_ordered: 100, order_pack_size: 1, supplier_cost: 25, order_cost_units: 1, selling_units_approved: 100)
    Omni::PurchaseDetail.where(purchase_detail_id: 'ABABDAAA35E011E3APURCHASEDETAIL1').first

    Omni::Receipt.create(receipt_id: 'XXXXXXXXXXXXXXXXXXXXXXXXRECEIPT1', location_id: '51579764AC3E11E2947800FF58D32228')
    Omni::ReceiptPurchase.create(receipt_purchase_id: 'XXXXXXXXXXXXXXXXRECEIPTPURCHASE1', receipt_id: 'XXXXXXXXXXXXXXXXXXXXXXXXRECEIPT1', purchase_id: 'XXXXXXXXXXXXXXXXXXXXXXXPURCHASE1')

    # rp.receive
    # rp = Omni::ReceiptPurchase.where(receipt_id: 'XXXXXXXXXXXXXXXXXXXXXXXXRECEIPT1').first
    # rd = Omni::ReceiptDetail.where(receipt_id: 'XXXXXXXXXXXXXXXXXXXXXXXXRECEIPT1').first
    # rd = rp.receipt_details.first
    # rd.complete
    Omni::Receipt.where(receipt_id: 'XXXXXXXXXXXXXXXXXXXXXXXXRECEIPT1').first
  end
end
