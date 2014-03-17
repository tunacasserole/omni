//= require ./HubContextMenu

Ext.define('Omni.view.app.WarehouseHub', {
	extend: 'Buildit.ux.Hub',
	alias: 'widget.omni-app-WarehouseHub',
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

    // Section: Order Fulfillment //
	 {
	 title: 'Order Fulfillment',
     columns: 8,
     rows: 4,
     tiles: [
       {title: 'Release Pick Tickets', colspan: 4, rowspan: 1, cls: 'release_picks purple1', badge: '3',  target: {xtype: 'omni-picks-Explorer', title: 'Release Pick Tickets', defaultSearch: { with: {state: {equal_to: 'new'}} }, contextMenuConfig: {xtype: 'omni-picks-ExplorerContextMenuRelease'}, store: Ext.create('Omni.store.Pick',{storeId: 'ReleasePickStore'}), allowNew: false}},
       {title: 'Fulfill Pick Tickets', colspan: 4, rowspan: 1, cls: 'start_picks purple3', badge: '3',  target: {xtype: 'omni-picks-Explorer', title: 'Fulfill Pick Tickets', defaultSearch: { with: {state: {equal_to: 'pending'}} }, contextMenuConfig: {xtype: 'omni-picks-ExplorerContextMenuStart'}, store: Ext.create('Omni.store.Pick',{storeId: 'StartPickStore'}), allowNew: false}},
       {title: 'Release Work Orders', colspan: 4, rowspan: 1, cls: 'release_jobs pink2', badge: '3',  target: {xtype: 'omni-jobs-Explorer', title: 'Release Work Orders', defaultSearch: { with: {state: {equal_to: 'new'}} }, contextMenuConfig: {xtype: 'omni-jobs-ExplorerContextMenuRelease'}, store: Ext.create('Omni.store.Job',{storeId: 'ReleaseJobStore'}), allowNew: false}},
       {title: 'Start Work Orders', colspan: 2, rowspan: 1, cls: 'start_jobs purple2', badge: '3',  target: {xtype: 'omni-jobs-Explorer', title: 'Start Work Orders', defaultSearch: { with: {state: {equal_to: 'pending'}} }, contextMenuConfig: {xtype: 'omni-jobs-ExplorerContextMenuStart'}, store: Ext.create('Omni.store.Job',{storeId: 'StartJobStore'}), allowNew: false}},
       {title: 'Complete Work Orders', colspan: 2, rowspan: 1, cls: 'complete_jobs purple2', badge: '3',  target: {xtype: 'omni-jobs-Explorer', title: 'Complete Work Orders', defaultSearch: { with: {state: {equal_to: 'open'}} }, contextMenuConfig: {xtype: 'omni-jobs-ExplorerContextMenuComplete'}, store: Ext.create('Omni.store.Job',{storeId: 'CompleteJobStore'}), allowNew: false}},
       {title: 'Create Transfer Request', colspan: 4, rowspan: 1, cls: 'create_transfers purple1', badge: '3',  target: {xtype: 'omni-transfers-Explorer', title: 'Create Transfer Request', store: Ext.create('Omni.store.Transfer',{storeId: 'CreateTransferStore'}), allowNew: false}},
       {title: 'Approve Transfers', colspan: 4, rowspan: 1, cls: 'approve_transfers pink1', badge: '3',  target: {xtype: 'omni-transfers-Explorer', title: 'Approve Transfers', defaultSearch: { with: {state: {equal_to: 'new'}} }, contextMenuConfig: {xtype: 'omni-transfers-ExplorerContextMenuApprove'}, store: Ext.create('Omni.store.Transfer',{storeId: 'ApproveTransferStore'}), allowNew: false}},
       {title: 'Create Shipment', colspan: 4, rowspan: 1, cls: 'create_shipments purple4', badge: '3',  target: {xtype: 'omni-shipments-Explorer', title: 'Create Shipment', store: Ext.create('Omni.store.Shipment',{storeId: 'CreateShipmentStore'}), allowNew: false}},
       {title: 'Send Shipments', colspan: 2, rowspan: 1, cls: 'send_shipments pink3', badge: '3',  target: {xtype: 'omni-shipments-Explorer', title: 'Send Shipments', defaultSearch: { with: {state: {equal_to: 'new'}} }, contextMenuConfig: {xtype: 'omni-shipments-ExplorerContextMenuSend'}, store: Ext.create('Omni.store.Shipment',{storeId: 'SendShipmentStore'}), allowNew: false}},
       {title: 'Receive Shipments', colspan: 2, rowspan: 1, cls: 'receive_shipments pink', badge: '3',  target: {xtype: 'omni-shipments-Explorer', title: 'Receive Shipments', defaultSearch: { with: {state: {equal_to: 'shipped'}} }, contextMenuConfig: {xtype: 'omni-shipments-ExplorerContextMenuReceive'}, store: Ext.create('Omni.store.Shipment',{storeId: 'ReceiveShipmentStore'}), allowNew: false}}
		 ]
		 },
    // Section: Demand Processing //
	 {
	 title: 'Demand Processing',
     columns: 8,
     rows: 3,
     tiles: [
       {title: 'Pick Tickets', colspan: 2, rowspan: 1, cls: '_picks purple1',  target: {xtype: 'omni-picks-Explorer', title: 'Pick Tickets'}},
       {title: 'Release Pick Tickets', colspan: 2, rowspan: 1, cls: 'release_picks purple3',  target: {xtype: 'omni-picks-Explorer', title: 'Release Pick Tickets', defaultSearch: { with: {state: {equal_to: 'new'}} }, contextMenuConfig: {xtype: 'omni-picks-ExplorerContextMenuRelease'}, store: Ext.create('Omni.store.Pick',{storeId: 'ReleasePickStore'}), allowNew: false}},
       {title: 'Start Pick Tickets', colspan: 2, rowspan: 1, cls: 'start_picks pink2',  target: {xtype: 'omni-picks-Explorer', title: 'Start Pick Tickets', defaultSearch: { with: {state: {equal_to: 'pending'}} }, contextMenuConfig: {xtype: 'omni-picks-ExplorerContextMenuStart'}, store: Ext.create('Omni.store.Pick',{storeId: 'StartPickStore'}), allowNew: false}},
       {title: 'Complete Pick Tickets', colspan: 2, rowspan: 1, cls: 'complete_picks purple2',  target: {xtype: 'omni-picks-Explorer', title: 'Complete Pick Tickets', defaultSearch: { with: {state: {equal_to: 'open'}} }, contextMenuConfig: {xtype: 'omni-picks-ExplorerContextMenuComplete'}, store: Ext.create('Omni.store.Pick',{storeId: 'CompletePickStore'}), allowNew: false}},
       {title: 'Ship Pick Tickets', colspan: 2, rowspan: 1, cls: 'ship_picks purple2',  target: {xtype: 'omni-picks-Explorer', title: 'Ship Pick Tickets', defaultSearch: { with: {state: {equal_to: 'complete'}} }, contextMenuConfig: {xtype: 'omni-picks-ExplorerContextMenuShip'}, store: Ext.create('Omni.store.Pick',{storeId: 'ShipPickStore'}), allowNew: false}},
       {title: 'Cancel Pick Tickets', colspan: 2, rowspan: 1, cls: 'cancel_picks purple1',  target: {xtype: 'omni-picks-Explorer', title: 'Cancel Pick Tickets', defaultSearch: { with: {state: {any_of: ['new','pending']}} }, contextMenuConfig: {xtype: 'omni-picks-ExplorerContextMenuCancel'}, store: Ext.create('Omni.store.Pick',{storeId: 'CancelPickStore'}), allowNew: false}},
       {title: 'Transfers', colspan: 2, rowspan: 1, cls: '_transfers pink1',  target: {xtype: 'omni-transfers-Explorer', title: 'Transfers'}},
       {title: 'Approve Transfers', colspan: 2, rowspan: 1, cls: 'approve_transfers purple4',  target: {xtype: 'omni-transfers-Explorer', title: 'Approve Transfers', defaultSearch: { with: {state: {equal_to: 'new'}} }, contextMenuConfig: {xtype: 'omni-transfers-ExplorerContextMenuApprove'}, store: Ext.create('Omni.store.Transfer',{storeId: 'ApproveTransferStore'}), allowNew: false}},
       {title: 'Ship Transfers', colspan: 2, rowspan: 1, cls: 'ship_transfers pink3',  target: {xtype: 'omni-transfers-Explorer', title: 'Ship Transfers', defaultSearch: { with: {state: {equal_to: 'pending'}} }, contextMenuConfig: {xtype: 'omni-transfers-ExplorerContextMenuShip'}, store: Ext.create('Omni.store.Transfer',{storeId: 'ShipTransferStore'}), allowNew: false}},
       {title: 'Receive Transfers', colspan: 2, rowspan: 1, cls: 'receive_transfers pink',  target: {xtype: 'omni-transfers-Explorer', title: 'Receive Transfers', defaultSearch: { with: {state: {equal_to: 'shipped'}} }, contextMenuConfig: {xtype: 'omni-transfers-ExplorerContextMenuReceive'}, store: Ext.create('Omni.store.Transfer',{storeId: 'ReceiveTransferStore'}), allowNew: false}}
		 ]
		 },
    // Section: Customer Order Entry //
	 {
	 title: 'Customer Order Entry',
     columns: 8,
     rows: 3,
     tiles: [
       {title: 'All Customer Orders', colspan: 4, rowspan: 1, cls: '_orders magenta2',  target: {xtype: 'omni-orders-Explorer', title: 'Customer Orders'}},
       {title: 'All Work Orders', colspan: 4, rowspan: 1, cls: '_jobs blue3',  target: {xtype: 'omni-jobs-Explorer', title: 'Work Orders'}},
       {title: 'All Payments', colspan: 4, rowspan: 1, cls: '_payments magenta3',  target: {xtype: 'omni-payments-Explorer', title: 'Payments'}},
       {title: 'All Gift Cards', colspan: 4, rowspan: 1, cls: '_vouchers magenta3',  target: {xtype: 'omni-vouchers-Explorer', title: 'Gift Cards'}},
       {title: 'Finalize Customer Orders', colspan: 2, rowspan: 1, cls: 'finalize_orders pink1', badge: '3',  target: {xtype: 'omni-orders-Explorer', title: 'Finalize Customer Order', defaultSearch: { with: {state: {equal_to: 'new'}} }, contextMenuConfig: {xtype: 'omni-orders-ExplorerContextMenuFinalize'}, store: Ext.create('Omni.store.Order',{storeId: 'FinalizeOrderStore'}), allowNew: false}},
       {title: 'Cancel Customer Orders', colspan: 2, rowspan: 1, cls: 'cancel_orders blue2',  target: {xtype: 'omni-orders-Explorer', title: 'Cancel Customer Order', defaultSearch: { with: {state: {equal_to: 'new'}} }, contextMenuConfig: {xtype: 'omni-orders-ExplorerContextMenuCancel'}, store: Ext.create('Omni.store.Order',{storeId: 'CancelOrderStore'}), allowNew: false}},
       {title: 'Cancel Work Orders', colspan: 2, rowspan: 1, cls: 'cancel_jobs magenta',  target: {xtype: 'omni-jobs-Explorer', title: 'Cancel Work Order', defaultSearch: { with: {state: {any_of: ['new','pending']}} }, contextMenuConfig: {xtype: 'omni-jobs-ExplorerContextMenuCancel'}, store: Ext.create('Omni.store.Job',{storeId: 'CancelJobStore'}), allowNew: false}},
       {title: 'Cancel Payments', colspan: 2, rowspan: 1, cls: 'cancel_payments magenta',  target: {xtype: 'omni-payments-Explorer', title: 'Cancel Payment', defaultSearch: { with: {state: {equal_to: 'new'}} }, contextMenuConfig: {xtype: 'omni-payments-ExplorerContextMenuCancel'}, store: Ext.create('Omni.store.Payment',{storeId: 'CancelPaymentStore'}), allowNew: false}}
		 ]
		 }
 ]
 });
 this.callParent();
 }
 });
