class Omni::Test::Transfer < Omni::Test::Base

  def self.go
    create_data
    @@model_action = 'Ship'
    # x = Omni::Transfer.where(transfer_id: 'XXXXXXXXXXXXXXXXXXXXXXXTRANSFER1').first  # for testing:

    # Ship a transfer by updating the transfer
    x = reset_data
    x.ship_date = Date.today
    x.save
    test_it('it updates the allocation detail units shipped when the ship date is changed', x.request_units, (x.allocation_detail.units_shipped if x.allocation_detail))

    # test_events
  end

  def self.test_events
    # x=@a
    # event_scenarios.each do |s|
    #   x.send(s[:action])
    #   test_it(s[:scenario],s[:expected], x.state)
    # end


  end

  def self.reset_data
    # wipes out all test data, rebuilds it, and returns a transfer object
    Omni::Allocation.where(allocation_id: 'PRIMARYALLOCATION1XXXXXXXXXXXXXX').to_a.each {|x|x.delete}
    Omni::AllocationDetail.where(allocation_id: 'PRIMARYALLOCATION1XXXXXXXXXXXXXX').to_a.each {|x| x.delete}
    Omni::Purchase.where(purchase_id: 'XXXXXXXXXXXXXXXXXXXXXXXPURCHASE1').to_a.each {|x| x.delete}
    Omni::PurchaseDetail.where(purchase_id: 'XXXXXXXXXXXXXXXXXXXXXXXPURCHASE1').to_a.each {|x| x.delete}
    Omni::Receipt.where(receipt_id: 'XXXXXXXXXXXXXXXXXXXXXXXXRECEIPT1').to_a.each {|x| x.destroy}
    Omni::ReceiptAllocation.all.to_a.each {|x| x.delete}
    Omni::ReceiptDetail.where(purchase_id: 'XXXXXXXXXXXXXXXXXXXXXXXPURCHASE1').to_a.each {|x| x.delete}
    Omni::ReceiptPurchase.where(receipt_purchase_id: 'XXXXXXXXXXXXXXXXRECEIPTPURCHASE1').to_a.each {|x| x.delete}
    Omni::Transfer.where(transfer_id: 'XXXXXXXXXXXXXXXXXXXXXXXTRANSFER1').to_a.each {|x| x.destroy}

    Omni::Allocation.create(allocation_id: 'PRIMARYALLOCATION1XXXXXXXXXXXXXX', sku_id: '285C928C0F3611E3BB7120C9D047DD15', location_id: '51713A3EAC3E11E2947800FF58D32228', :allocation_profile_id => 'LASTXFORECASTXXXDIVIDEEQUALLY123', :units_to_allocate => 100)
    Omni::AllocationDetail.create(allocation_id: 'PRIMARYALLOCATION1XXXXXXXXXXXXXX', allocation_detail_id: 'PRIMARYALLOCATIONDETAIL1XXXXXXXX', location_id: '51713A3EAC3E11E2947800FF58D32228', :units_needed => 100, transfer_id: 'XXXXXXXXXXXXXXXXXXXXXXXTRANSFER1')
    Omni::Purchase.create(:purchase_id => 'XXXXXXXXXXXXXXXXXXXXXXXPURCHASE1',:supplier_id => 'B931D2A4AC5311E299E700FFSUPPLIER', :location_id => '51579764AC3E11E2947800FF58D32228',  :allocation_profile_id => 'XXXXLASTFORECASTBYPERCENTTOSTORE', :purchase_type => 'SAMPLE', :purchase_source => 'SAMPLE', :ordered_by_user_id => '811166D4D50A11E2B45820C9D04AARON', :payment_term =>'NET 30',:freight_term => 'COLLECT',:ship_via => 'SAMPLE', :fob_point => 'ORIGIN' , :display => 'Olivanders wands test purchase',:purchase_approver_1_user_id => '811166D4D50A11E2B45820C9D04AARON')
    Omni::PurchaseDetail.create(state: 'open', purchase_detail_id: 'ABABDAAA35E011E3APURCHASEDETAIL1', allocation_profile_id: 'XXXXLASTFORECASTBYPERCENTTOSTORE', purchase_id: 'XXXXXXXXXXXXXXXXXXXXXXXPURCHASE1', sku_supplier_id: '239F5610231F11E3BE4920C9D047DD15', units_ordered: 100, order_pack_size: 1, supplier_cost: 25, order_cost_units: 1, selling_units_approved: 100)
    Omni::Receipt.create(receipt_id: 'XXXXXXXXXXXXXXXXXXXXXXXXRECEIPT1', location_id: '51579764AC3E11E2947800FF58D32228')
    Omni::ReceiptPurchase.create(receipt_purchase_id: 'XXXXXXXXXXXXXXXXRECEIPTPURCHASE1', receipt_id: 'XXXXXXXXXXXXXXXXXXXXXXXXRECEIPT1', purchase_id: 'XXXXXXXXXXXXXXXXXXXXXXXPURCHASE1')
    Omni::Transfer.create(transfer_id: 'XXXXXXXXXXXXXXXXXXXXXXXTRANSFER1', sku_id: '285C928C0F3611E3BB7120C9D047DD15', fulfillment_location_id: '51579764AC3E11E2947800FF58D32228', requesting_location_id: '51713A3EAC3E11E2947800FF58D32228', request_units: 100, transfer_reason_id: '1CC6E230OEUIDHTN45678CRUIDHT2228', description: "test transfer created at: #{Time.now}")
    Omni::Transfer.where(transfer_id: 'XXXXXXXXXXXXXXXXXXXXXXXTRANSFER1').first
  end

  def self.create_data
    @@model_name = 'Transfer'
    @@model_action = 'Event'

    # Omni::TransferDetail.where(allocation_id: 'PRIMARYALLOCATION1XXXXXXXXXXXXXX').to_a.each {|x| x.delete}
    # @ad=Omni::TransferDetail.create(allocation_id: 'PRIMARYALLOCATION1XXXXXXXXXXXXXX', allocation_detail_id: 'PRIMARYALLOCATIONDETAIL1XXXXXXXX', sku_id: '285C928C0F3611E3BB7120C9D047DD15', location_id: '51713A3EAC3E11E2947800FF58D32228', :units_needed=>100)
  end

  def self.event_scenarios
    x=[]
        # This action is triggered by updating the ship_date on the Transfer that is associated with this Allocation Detail.
    # The calling code must pass the number of units shipped as a parameter.

    x << {scenario: 'it updates the units shipped on the allocation details when the transfer ship date is changed', initial_state: 'draft', action: 'approve', expected: 'approved' }
    # x
  end
end
