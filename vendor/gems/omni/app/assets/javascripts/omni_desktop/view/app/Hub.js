//= require ./HubContextMenu

Ext.define('Omni.view.app.Hub', {
	extend: 'Buildit.ux.Hub',
	alias: 'widget.omni-app-Hub',
	bodyStyle: 'background: transparent',
    cls: 'desktop',

  initComponent: function(){
    var me = this;  

    // this.socket   = Buildit.lib.SocketManager.get('STANDARD');
    // this.socket.on('newEvents', this.handleNewEvents, me);


    Ext.apply(this, {
      allowSignout      : true,      
      title: 'Start',
      subtitle: '',
      contextMenuConfig: {
        xtype: 'omni-app-HubContextMenu'
      },
      sections: [

   // Section: BTS //

  {
   title: 'Back to School',
     columns: 4,
     rows: 3,
     tiles: [
       {title: 'Run BTS report', colspan: 2, rowspan: 2, cls: 'projections',  target: {xtype: 'omni-bts-Explorer'}},       
       // {title: 'Accounts', colspan: 2, rowspan: 2, cls: 'imports',  target: {xtype: 'omni-accounts-Explorer'}},              
     ] 
     }     


 // // Section: Mark Research //

 //   ,{
 //   title: 'Company Wide Inventory',
 //     columns: 4,
 //     rows: 3,
 //     tiles: [
 //       // {title: 'Mark Outlets', colspan: 2, rowspan: 1, cls: 'mark_outlets',  target: {xtype: 'omni-mark_outlets-Explorer'}},       
 //      {title: 'Mark Inventory', colspan: 2, rowspan: 1, cls: 'mark_inventory', target: { xtype: 'omni-mark_inventories-Explorer'} },
 //      {title: 'RMS Item Dynamic', colspan: 2, rowspan: 1, cls: 'rms_item_dynamics', target: { xtype: 'omni-rms_item_dynamics-Explorer'} },
 //     ] 
 //     }     

 //    // Section: Projections //

 //    ,{
 //    title: 'Imports & Projections',
 //      columns: 4,
 //      rows: 3,
 //      tiles: [
 //        {title: 'Projections', colspan: 2, rowspan: 2, cls: 'projections', target: { xtype: 'omni-projections-Explorer', allowInlineEdit: true} },
 //        {title: 'Period Results', colspan: 2, rowspan: 2, cls: 'period_results',  target: {xtype: 'omni-period_results-Explorer'} },                                    
 //        // {title: 'Mark Order History', colspan: 2, rowspan: 1, cls: 'cfars',  target: {xtype: 'mark-order_headers-Explorer', title: 'View Mark order history'}},        
 //        {title: 'Imports', colspan: 2, rowspan: 1, cls: 'imports',  target: {xtype: 'omni-imports-Explorer'} },                    
 //     ] 
 //     }

   // Section: Purchasing, Allocations, Costing and Production Planning //

   // ,{
   // title: 'Purchasing',
   //   columns: 2,
   //   rows: 3,
   //   tiles: [
   //     {title: 'Purchases', colspan: 2, rowspan: 1, cls: 'purchases',  target: {xtype: 'omni-purchases-Explorer'}},       
   //     {title: 'Allocations', colspan: 2, rowspan: 1, cls: 'allocations', target: { xtype: 'omni-allocations-Explorer'} },
   //     {title: 'Costs', colspan: 2, rowspan: 1, cls: 'costs', target: { xtype: 'omni-costs-Explorer'} },  
   //     {title: 'Work Orders', colspan: 2, rowspan: 1, cls: 'work_orders', target: { xtype: 'omni-work_orders-Explorer'} }              
   //   ] 
   //   }     
  
   // // Section: Customer Order Entry //
   // ,{
   // title: 'Customer Order Entry',
   //   columns: 6,
   //   rows: 3,
   //   tiles: [
   //     // {title: 'All Customer Orders', colspan: 2, rowspan: 1, cls: 'purchases',  target: {xtype: 'omni-orders-Explorer', title: 'Customer Orders'}},
   //     {title: 'All Work Orders', colspan: 2, rowspan: 1, cls: 'allocations',  target: {xtype: 'omni-work_orders-Explorer', title: 'Work Orders'}},
   //     {title: 'All Payments', colspan: 2, rowspan: 1, cls: '_payments magenta3',  target: {xtype: 'omni-payments-Explorer', title: 'Payments'}},
   //     {title: 'All Gift Cards', colspan: 2, rowspan: 1, cls: '_vouchers magenta3',  target: {xtype: 'omni-vouchers-Explorer', title: 'Gift Cards'}},
   //     {title: 'Finalize Customer Orders', colspan: 2, rowspan: 1, cls: 'finalize_orders pink1', badge: '3',  target: {xtype: 'omni-orders-Explorer', title: 'Finalize Customer Order', defaultSearch: { with: {state: {equal_to: 'new'}} }, contextMenuConfig: {xtype: 'omni-orders-ExplorerContextMenuFinalize'}, store: Ext.create('Omni.store.Order',{storeId: 'FinalizeOrderStore'}), allowNew: false}},
   //     {title: 'Cancel Customer Orders', colspan: 2, rowspan: 1, cls: 'cancel_orders blue2',  target: {xtype: 'omni-orders-Explorer', title: 'Cancel Customer Order', defaultSearch: { with: {state: {equal_to: 'new'}} }, contextMenuConfig: {xtype: 'omni-orders-ExplorerContextMenuCancel'}, store: Ext.create('Omni.store.Order',{storeId: 'CancelOrderStore'}), allowNew: false}},
   //     {title: 'Cancel Work Orders', colspan: 2, rowspan: 1, cls: 'cancel_work_orders magenta',  target: {xtype: 'omni-work_orders-Explorer', title: 'Cancel Work Order', defaultSearch: { with: {state: {any_of: ['new','pending']}} }, contextMenuConfig: {xtype: 'omni-work_orders-ExplorerContextMenuCancel'}, store: Ext.create('Omni.store.WorkOrder',{storeId: 'CancelWorkOrderStore'}), allowNew: false}},
   //     {title: 'Cancel Payments', colspan: 2, rowspan: 1, cls: 'cancel_payments magenta',  target: {xtype: 'omni-payments-Explorer', title: 'Cancel Payment', defaultSearch: { with: {state: {equal_to: 'new'}} }, contextMenuConfig: {xtype: 'omni-payments-ExplorerContextMenuCancel'}, store: Ext.create('Omni.store.Payment',{storeId: 'CancelPaymentStore'}), allowNew: false}}
   //   ] 
   //   } 

 // Section: Merchandise Maintenance //

   ,{
   title: 'merchandise maintenance',
     columns: 4,
     rows: 3,
     tiles: [
       {title: 'Skus', colspan: 2, rowspan: 1, cls: 'skus',  target: {xtype: 'omni-skus-Explorer', allowEdit: true, allowNew: false}},       
       {title: 'Styles', colspan: 2, rowspan: 1, cls: 'styles',  target: {xtype: 'omni-styles-Explorer'}},
       {title: 'Subclasses', colspan: 2, rowspan: 1, cls: 'product_types',  target: {xtype: 'omni-subclasses-Explorer', title: ''}},   
       {title: 'Classifications', colspan: 2, rowspan: 1, cls: 'categories',  target: {xtype: 'omni-classifications-Explorer', title: ''}},         
       {title: 'Departments', colspan: 2, rowspan: 1, cls: 'products',  target: {xtype: 'omni-departments-Explorer', title: ''}},                
       {title: 'Locations', colspan: 2, rowspan: 1, cls: 'departments',  target: {xtype: 'omni-locations-Explorer'}},       
     ] 
     }

  ,{
   title: 'Project Tracker',
     columns: 2,
     rows: 3,
     tiles: [
       {title: 'Issues', colspan: 2, rowspan: 2, cls: 'issues',  target: {xtype: 'omni-issues-Explorer'}}     
    ]
  }
   // Section: product setup data //

   ,{
   title: 'product setup data',
     columns: 6,
     rows: 3,
     tiles: [
       {title: 'Colors', colspan: 2, rowspan: 1, cls: 'omni-colors', target: { xtype: 'omni-colors-Explorer'} },
       {title: 'Sizes', colspan: 2, rowspan: 1, cls: 'sales_calls', target: { xtype: 'omni-sizes-Explorer'} },       
       {title: 'Size Groups', colspan: 2, rowspan: 1, cls: 'projects', target: { xtype: 'omni-size_groups-Explorer'} },       
       {title: 'Category', colspan: 2, rowspan: 1, cls: 'categories',  target: {xtype: 'omni-categories-Explorer', title: ''}},
       {title: 'Product', colspan: 2, rowspan: 1, cls: 'products',  target: {xtype: 'omni-products-Explorer', title: ''}},
       {title: 'Product Types', colspan: 2, rowspan: 1, cls: 'products_types',  target: {xtype: 'omni-product_types-Explorer', title: ''}},       
       {title: 'transfer_reasons', colspan: 2, rowspan: 1, cls: 'products',  target: {xtype: 'omni-transfer_reasons-Explorer', title: ''}},       
       {title: 'Forecast Profile', colspan: 2, rowspan: 1, cls: 'cfars',  target: {xtype: 'omni-forecast_profiles-Explorer'}},       
       {title: 'Labels', colspan: 2, rowspan: 1, cls: 'labels',  target: {xtype: 'omni-labels-Explorer', title: ''}},       
     ] 
  }     
 ] 
 }); 

 this.callParent(); 
 },

 // handleNewEvents : function(data){
 //    var me = this;
 //    Ext.Array.each(data, function(event){
 //      var newEvent = Ext.create('Buildit.model.Event', event);
 //      // me.store.add(newEvent);
 //        Buildit.infoMsg(event.message)
 //      // Buildit.infoMsg(newEvent.get('message'))
 //    });
 //  }

 
 });