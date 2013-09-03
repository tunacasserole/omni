//= require ./HubContextMenu

Ext.define('Omni.view.app.StateHub', {
	extend: 'Buildit.ux.Hub',
	alias: 'widget.omni-app-StateHub',
	bodyStyle: 'background: transparent',
    cls: 'desktop',

  initComponent: function(){
    var me = this;  
    Ext.apply(this, {
      title: 'Start',
      subtitle: '',
      contextMenuConfig: {
        xtype: 'omni-app-HubContextMenu'
      },

      sections: [

    // Section: All States //
	 {
	 title: 'All States',
     columns: 10,
     rows: 4,
     tiles: [
       {title: 'Get Sku Price', colspan: 2, rowspan: 1, cls: 'finalize_orders pink1',  target: {xtype: 'omni-sku_price_requests-Explorer', title: 'Sku Pricing Request', defaultSearch: { with: {state: {any_of: ['new','active']}} }, contextMenuConfig: {xtype: 'omni-sku_price_requests-ExplorerContextMenuPrice'}, store: Ext.create('Omni.store.SkuPriceRequest',{storeId: 'SkuPriceRequestStore'}), allowNew: true}},
       {title: 'Finalize Order', colspan: 2, rowspan: 1, cls: 'finalize_orders red',  target: {xtype: 'omni-orders-Explorer', title: 'Finalize Order', defaultSearch: { with: {state: {equal_to: 'new'}} }, contextMenuConfig: {xtype: 'omni-orders-ExplorerContextMenuFinalize'}, store: Ext.create('Omni.store.Order',{storeId: 'FinalizeOrderStore'}), allowNew: true}},
       {title: 'Abandon Order', colspan: 2, rowspan: 1, cls: 'abandon_orders red1',  target: {xtype: 'omni-orders-Explorer', title: 'Abandon Order', defaultSearch: { with: {state: {equal_to: 'new'}} }, contextMenuConfig: {xtype: 'omni-orders-ExplorerContextMenuAbandon'}, store: Ext.create('Omni.store.Order',{storeId: 'AbandonOrderStore'}), allowNew: true}},
       {title: 'Finalize Order Detail', colspan: 2, rowspan: 1, cls: 'finalize_order_details red2',  target: {xtype: 'omni-order_details-Explorer', title: 'Finalize Order Detail', defaultSearch: { with: {state: {equal_to: 'new'}} }, contextMenuConfig: {xtype: 'omni-order_details-ExplorerContextMenuFinalize'}, store: Ext.create('Omni.store.OrderDetail',{storeId: 'FinalizeOrderDetailStore'}), allowNew: true}},
       {title: 'Cancelize Order Detail', colspan: 2, rowspan: 1, cls: 'cancel_order_details red3',  target: {xtype: 'omni-order_details-Explorer', title: 'Cancelize Order Detail', defaultSearch: { with: {state: {equal_to: 'new'}} }, contextMenuConfig: {xtype: 'omni-order_details-ExplorerContextMenuCancel'}, store: Ext.create('Omni.store.OrderDetail',{storeId: 'CancelOrderDetailStore'}), allowNew: true}},
       {title: 'Approve Payment', colspan: 2, rowspan: 1, cls: 'approve_payments pink',  target: {xtype: 'omni-payments-Explorer', title: 'Approve Payment', defaultSearch: { with: {state: {equal_to: 'new'}} }, contextMenuConfig: {xtype: 'omni-payments-ExplorerContextMenuApprove'}, store: Ext.create('Omni.store.Payment',{storeId: 'ApprovePaymentStore'}), allowNew: true}},
       {title: 'Decline Payment', colspan: 2, rowspan: 1, cls: 'decline_payments pink1',  target: {xtype: 'omni-payments-Explorer', title: 'Decline Payment', defaultSearch: { with: {state: {equal_to: 'new'}} }, contextMenuConfig: {xtype: 'omni-payments-ExplorerContextMenuDecline'}, store: Ext.create('Omni.store.Payment',{storeId: 'DeclinePaymentStore'}), allowNew: true}},
       {title: 'Release Pick Ticket', colspan: 2, rowspan: 1, cls: 'release_pick_tickets purple',  target: {xtype: 'omni-pick_tickets-Explorer', title: 'Release Pick Ticket', defaultSearch: { with: {state: {equal_to: 'new'}} }, contextMenuConfig: {xtype: 'omni-pick_tickets-ExplorerContextMenuRelease'}, store: Ext.create('Omni.store.PickTicket',{storeId: 'ReleasePickTicketStore'}), allowNew: true}},
       {title: 'Start  Pick Ticket', colspan: 2, rowspan: 1, cls: 'start_pick_tickets purple1',  target: {xtype: 'omni-pick_tickets-Explorer', title: 'Start  Pick Ticket', defaultSearch: { with: {state: {equal_to: 'pending'}} }, contextMenuConfig: {xtype: 'omni-pick_tickets-ExplorerContextMenuStart'}, store: Ext.create('Omni.store.PickTicket',{storeId: 'StartPickTicketStore'}), allowNew: true}},
       {title: 'Complete Pick Ticket', colspan: 2, rowspan: 1, cls: 'complete_pick_tickets purple2',  target: {xtype: 'omni-pick_tickets-Explorer', title: 'Complete Pick Ticket', defaultSearch: { with: {state: {equal_to: 'open'}} }, contextMenuConfig: {xtype: 'omni-pick_tickets-ExplorerContextMenuComplete'}, store: Ext.create('Omni.store.PickTicket',{storeId: 'CompletePickTicketStore'}), allowNew: true}},
       {title: 'Ship Pick Ticket', colspan: 2, rowspan: 1, cls: 'ship_pick_tickets purple3',  target: {xtype: 'omni-pick_tickets-Explorer', title: 'Ship Pick Ticket', defaultSearch: { with: {state: {equal_to: 'complete'}} }, contextMenuConfig: {xtype: 'omni-pick_tickets-ExplorerContextMenuShip'}, store: Ext.create('Omni.store.PickTicket',{storeId: 'ShipPickTicketStore'}), allowNew: true}},
       {title: 'Cancel Pick Ticket', colspan: 2, rowspan: 1, cls: 'cancel_pick_tickets purple4',  target: {xtype: 'omni-pick_tickets-Explorer', title: 'Cancel Pick Ticket', defaultSearch: { with: {state: {any_of: ['new','pending']}} }, contextMenuConfig: {xtype: 'omni-pick_tickets-ExplorerContextMenuCancel'}, store: Ext.create('Omni.store.PickTicket',{storeId: 'CancelPickTicketStore'}), allowNew: true}},
       {title: 'Send Shipment', colspan: 2, rowspan: 1, cls: 'send_shipments blue',  target: {xtype: 'omni-shipments-Explorer', title: 'Send Shipment', defaultSearch: { with: {state: {equal_to: 'new'}} }, contextMenuConfig: {xtype: 'omni-shipments-ExplorerContextMenuSend'}, store: Ext.create('Omni.store.Shipment',{storeId: 'SendShipmentStore'}), allowNew: true}},
       {title: 'Receive Shipment', colspan: 2, rowspan: 1, cls: 'receive_shipments blue1',  target: {xtype: 'omni-shipments-Explorer', title: 'Receive Shipment', defaultSearch: { with: {state: {equal_to: 'shipped'}} }, contextMenuConfig: {xtype: 'omni-shipments-ExplorerContextMenuReceive'}, store: Ext.create('Omni.store.Shipment',{storeId: 'ReceiveShipmentStore'}), allowNew: true}},
       {title: 'Cancel Shipment', colspan: 2, rowspan: 1, cls: 'cancel_shipments blue2',  target: {xtype: 'omni-shipments-Explorer', title: 'Cancel Shipment', defaultSearch: { with: {state: {any_of: ['new','pending']}} }, contextMenuConfig: {xtype: 'omni-shipments-ExplorerContextMenuCancel'}, store: Ext.create('Omni.store.Shipment',{storeId: 'CancelShipmentStore'}), allowNew: true}},
       {title: 'Approve Transfer', colspan: 2, rowspan: 1, cls: 'approve_transfers green',  target: {xtype: 'omni-transfers-Explorer', title: 'Approve Transfer', defaultSearch: { with: {state: {equal_to: 'new'}} }, contextMenuConfig: {xtype: 'omni-transfers-ExplorerContextMenuApprove'}, store: Ext.create('Omni.store.Transfer',{storeId: 'ApproveTransferStore'}), allowNew: true}},
       {title: 'Ship Transfer', colspan: 2, rowspan: 1, cls: 'ship_transfers green1',  target: {xtype: 'omni-transfers-Explorer', title: 'Ship Transfer', defaultSearch: { with: {state: {equal_to: 'pending'}} }, contextMenuConfig: {xtype: 'omni-transfers-ExplorerContextMenuShip'}, store: Ext.create('Omni.store.Transfer',{storeId: 'ShipTransferStore'}), allowNew: true}},
       {title: 'Receive Transfer', colspan: 2, rowspan: 1, cls: 'receive_transfers green2',  target: {xtype: 'omni-transfers-Explorer', title: 'Receive Transfer', defaultSearch: { with: {state: {equal_to: 'shipped'}} }, contextMenuConfig: {xtype: 'omni-transfers-ExplorerContextMenuReceive'}, store: Ext.create('Omni.store.Transfer',{storeId: 'ReceiveTransferStore'}), allowNew: true}},
       {title: 'Cancel Transfer', colspan: 2, rowspan: 1, cls: 'cancel_transfers green3',  target: {xtype: 'omni-transfers-Explorer', title: 'Cancel Transfer', defaultSearch: { with: {state: {equal_to: 'new'}} }, contextMenuConfig: {xtype: 'omni-transfers-ExplorerContextMenuCancel'}, store: Ext.create('Omni.store.Transfer',{storeId: 'CancelTransferStore'}), allowNew: true}},
       {title: 'Start Voucher', colspan: 2, rowspan: 1, cls: 'start_vouchers magenta',  target: {xtype: 'omni-vouchers-Explorer', title: 'Start Voucher', defaultSearch: { with: {state: {equal_to: 'new'}} }, contextMenuConfig: {xtype: 'omni-vouchers-ExplorerContextMenuStart'}, store: Ext.create('Omni.store.Voucher',{storeId: 'StartVoucherStore'}), allowNew: true}},
       {title: 'Finish Voucher', colspan: 2, rowspan: 1, cls: 'finish_vouchers magenta1',  target: {xtype: 'omni-vouchers-Explorer', title: 'Finish Voucher', defaultSearch: { with: {state: {any_of: ['new','partial']}} }, contextMenuConfig: {xtype: 'omni-vouchers-ExplorerContextMenuFinish'}, store: Ext.create('Omni.store.Voucher',{storeId: 'FinishVoucherStore'}), allowNew: true}},
       {title: 'Expire Voucher', colspan: 2, rowspan: 1, cls: 'expire_vouchers magenta3',  target: {xtype: 'omni-vouchers-Explorer', title: 'Expire Voucher', defaultSearch: { with: {state: {any_of: ['new','partial']}} }, contextMenuConfig: {xtype: 'omni-vouchers-ExplorerContextMenuExpire'}, store: Ext.create('Omni.store.Voucher',{storeId: 'ExpireVoucherStore'}), allowNew: true}},
       {title: 'Release Work Order', colspan: 2, rowspan: 1, cls: 'relase_work_orders brown',  target: {xtype: 'omni-work_orders-Explorer', title: 'Release Work Order', defaultSearch: { with: {state: {equal_to: 'new'}} }, contextMenuConfig: {xtype: 'omni-work_orders-ExplorerContextMenuRelase'}, store: Ext.create('Omni.store.WorkOrder',{storeId: 'RelaseWorkOrderStore'}), allowNew: true}},
       {title: 'Start Work Order', colspan: 2, rowspan: 1, cls: 'start_work_orders brown1',  target: {xtype: 'omni-work_orders-Explorer', title: 'Start Work Order', defaultSearch: { with: {state: {equal_to: 'pending'}} }, contextMenuConfig: {xtype: 'omni-work_orders-ExplorerContextMenuStart'}, store: Ext.create('Omni.store.WorkOrder',{storeId: 'StartWorkOrderStore'}), allowNew: true}},
       {title: 'Complete Work Order', colspan: 2, rowspan: 1, cls: 'complete_work_orders brown2',  target: {xtype: 'omni-work_orders-Explorer', title: 'Complete Work Order', defaultSearch: { with: {state: {equal_to: 'open'}} }, contextMenuConfig: {xtype: 'omni-work_orders-ExplorerContextMenuComplete'}, store: Ext.create('Omni.store.WorkOrder',{storeId: 'CompleteWorkOrderStore'}), allowNew: true}},
       {title: 'Cancel Work Order', colspan: 2, rowspan: 1, cls: 'cancel_work_orders brown4',  target: {xtype: 'omni-work_orders-Explorer', title: 'Cancel Work Order', defaultSearch: { with: {state: {equal_to: 'new'}} }, contextMenuConfig: {xtype: 'omni-work_orders-ExplorerContextMenuCancel'}, store: Ext.create('Omni.store.WorkOrder',{storeId: 'CancelWorkOrderStore'}), allowNew: false}}
		 ] 
		 } 
 ] 
 }); 
 this.callParent(); 
 } 
 });