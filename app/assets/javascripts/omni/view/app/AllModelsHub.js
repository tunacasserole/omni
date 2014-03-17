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

    // Section: Projections //

    ,{
      title: 'Imports & Projections',
      columns: 4,
      rows: 4,
      tiles: [
        { title: 'Projections',
          colspan: 2,
          rowspan: 2,
          cls: 'projections',
          target: { xtype: 'omni-projections-Explorer', allowInlineEdit: true}
        }
       ,{ title: 'Period Results',
          colspan: 2,
          rowspan: 2,
          cls: 'period_results',
          target: {xtype: 'omni-period_results-Explorer'}
        }
        // {title: 'Mark Order History', colspan: 2, rowspan: 1, cls: 'cfars',  target: {xtype: 'mark-order_headers-Explorer', title: 'View Mark order history'}},
       ,{ title: 'Imports',
          colspan: 2,
          rowspan: 1,
          cls: 'imports',
          target: {xtype: 'omni-imports-Explorer'}
        }
      ]
     }

   // Section: Purchasing, Allocations, Costing and Production Planning //

   ,{
   title: 'Purchasing',
     columns: 2,
     rows: 4,
     tiles: [
       {title: 'Purchases', colspan: 2, rowspan: 1, cls: 'purchases',  target: {xtype: 'omni-purchases-Explorer'}},
       {title: 'Allocations', colspan: 2, rowspan: 1, cls: 'allocations', target: { xtype: 'omni-allocations-Explorer'} },
       {title: 'Jobs', colspan: 2, rowspan: 1, cls: 'jobs', target: { xtype: 'omni-jobs-Explorer'} }
     ]
     }

   // Section: Customer Order Entry //
   ,{
   title: 'Customer Order Entry',
     columns: 6,
     rows: 4,
     tiles: [
       // {title: 'All Customer Orders', colspan: 2, rowspan: 1, cls: 'purchases',  target: {xtype: 'omni-orders-Explorer', title: 'Customer Orders'}},
       {title: 'All Jobs', colspan: 2, rowspan: 1, cls: 'allocations',  target: {xtype: 'omni-jobs-Explorer', title: 'Jobs'}},
       {title: 'All Payments', colspan: 2, rowspan: 1, cls: '_payments magenta3',  target: {xtype: 'omni-payments-Explorer', title: 'Payments'}},
       { title: 'All Gift Cards',
         colspan: 2,
         rowspan: 1,
         cls: '_vouchers',
         target: {xtype: 'omni-vouchers-Explorer',
                  title: 'Gift Cards'}
       },
       { title: 'Finalize Customer Orders',
         colspan: 2,
         rowspan: 1,
         cls: 'finalize_orders pink1',
         badge: '3',
         target: {xtype: 'omni-orders-Explorer',
                  title: 'Finalize Customer Order',
                  defaultSearch: { with: {state: {equal_to: 'new'}} },
                  contextMenuConfig: {xtype: 'omni-orders-ExplorerContextMenuFinalize'},
                  store: Ext.create('Omni.store.Order',{storeId: 'FinalizeOrderStore'}),
                  allowNew: false}
       },
       {title: 'Cancel Customer Orders', colspan: 2, rowspan: 1, cls: 'cancel_orders',  target: {xtype: 'omni-orders-Explorer', title: 'Cancel Customer Order', defaultSearch: { with: {state: {equal_to: 'new'}} }, contextMenuConfig: {xtype: 'omni-orders-ExplorerContextMenuCancel'}, store: Ext.create('Omni.store.Order',{storeId: 'CancelOrderStore'}), allowNew: false}},
       {title: 'Cancel Jobs', colspan: 2, rowspan: 1, cls: 'cancel_jobs',  target: {xtype: 'omni-jobs-Explorer', title: 'Cancel Job', defaultSearch: { with: {state: {any_of: ['new','pending']}} }, contextMenuConfig: {xtype: 'omni-jobs-ExplorerContextMenuCancel'}, store: Ext.create('Omni.store.Job',{storeId: 'CancelJobStore'}), allowNew: false}},
       {title: 'Cancel Payments', colspan: 2, rowspan: 1, cls: 'cancel_payments',  target: {xtype: 'omni-payments-Explorer', title: 'Cancel Payment', defaultSearch: { with: {state: {equal_to: 'new'}} }, contextMenuConfig: {xtype: 'omni-payments-ExplorerContextMenuCancel'}, store: Ext.create('Omni.store.Payment',{storeId: 'CancelPaymentStore'}), allowNew: false}}
     ]
     }

 // Section: Merchandise Maintenance //

   ,{
   title: 'merchandise maintenance',
     columns: 4,
     rows: 4,
     tiles: [
       {title: 'Skus', colspan: 2, rowspan: 1, cls: 'skus',  target: {xtype: 'omni-skus-Explorer', allowEdit: true, allowNew: true}},
       {title: 'Styles', colspan: 2, rowspan: 1, cls: 'styles',  target: {xtype: 'omni-styles-Explorer'}},
       {title: 'Subclasses', colspan: 2, rowspan: 1, cls: 'product_types',  target: {xtype: 'omni-subclasses-Explorer', title: ''}},
       {title: 'Classifications', colspan: 2, rowspan: 1, cls: 'categories',  target: {xtype: 'omni-classifications-Explorer', title: ''}},
       {title: 'Departments', colspan: 2, rowspan: 1, cls: 'products',  target: {xtype: 'omni-departments-Explorer', title: ''}},
       {title: 'Locations', colspan: 2, rowspan: 1, cls: 'departments',  target: {xtype: 'omni-locations-Explorer'}},
     ]
     }

   // Section: product setup data //

   ,{
   title: 'product setup data',
     columns: 4,
     rows: 4,
     tiles: [
       {title: 'Colors', colspan: 2, rowspan: 1, cls: 'omni-colors', target: { xtype: 'omni-colors-Explorer'} },
       {title: 'Sizes', colspan: 2, rowspan: 1, cls: 'sales_calls', target: { xtype: 'omni-sizes-Explorer'} },
       {title: 'Size Groups', colspan: 2, rowspan: 1, cls: 'projects', target: { xtype: 'omni-size_groups-Explorer'} },
       {title: 'Category', colspan: 2, rowspan: 1, cls: 'categories',  target: {xtype: 'omni-categories-Explorer', title: ''}},
       {title: 'Product', colspan: 2, rowspan: 1, cls: 'products',  target: {xtype: 'omni-products-Explorer', title: ''}},
       {title: 'Forecast Profile', colspan: 2, rowspan: 1, cls: 'cfars',  target: {xtype: 'omni-forecast_profiles-Explorer'}},
     ]
     }

   // Section: Partners //

   ,{
   title: 'Partners',
     columns: 2,
     rows: 4,
     tiles: [
       {title: 'Suppliers', colspan: 2, rowspan: 1, cls: 'contracts',  target: {xtype: 'omni-suppliers-Explorer'}},
       {title: 'Schools', colspan: 2, rowspan: 1, cls: 'samples', target: { xtype: 'omni-accounts-Explorer'} }
     ]
     }

// Section: Stock Ledger Activity //

   ,{
   title: 'Stock Ledger Activity',
     columns: 4,
     rows: 4,
     tiles: [
       {title: 'Rulesets', colspan: 2, rowspan: 1, cls: 'contracts',  target: {xtype: 'omni-rulesets-Explorer'}},
       {title: 'Period Results', colspan: 2, rowspan: 1, cls: 'samples', target: { xtype: 'omni-period_results-Explorer'} },
       {title: 'Stock Ledger Activities', colspan: 2, rowspan: 1, cls: 'cfars', target: { xtype: 'omni-stock_ledger_activities-Explorer'} },
       {title: 'Inventory', colspan: 2, rowspan: 1, cls: 'projects',  target: {xtype: 'omni-inventories-Explorer'}},
     ]
     }

      // Section: Activity //
        // ,{
        //   title    : 'Projections Activity',
        //   columns  : 4,
        //   rows     : 3,
        //   tiles    : [
        //     {
        //       xtype            : 'buildit-events-LiveTile',
        //       colspan          : 4,
        //       rowspan          : 3,
        //       cls              : 'projections',
        //       height           : 380,
        //       target           : {
        //         xtype            : 'omni-imports-Explorer'
        //       }
        //     },
        //   ]
        // }

   // Section: Customer Relationship Management //
  // ,{
  //   title    : 'CRM',
  //   columns  : 2,
  //   rows     : 3,
  //   tiles    : [
  //     {colspan: 2, rowspan: 1, title: 'Accounts', cls: 'contacts', target: { xtype: 'omni-accounts-Explorer'} },
  //     {colspan: 2, rowspan: 1, title: 'Leads', cls: 'contacts', target: { xtype: 'omni-leads-Explorer'} },
  //     {colspan: 2, rowspan: 1, title: 'Donations', cls: 'contacts', target: { xtype: 'omni-donations-Explorer'} },
  //   ]
  // }

   // // Section: Style & SKU Definition //

   // ,{
   // title: 'Style Setup & Maintenance',
   //   columns: 4,
   //   rows: 4,
   //   tiles: [

   //     // {title: 'Conversion', colspan: 1, rowspan: 1, cls: '_conversions blue3',  target: {xtype: 'omni-conversions-Explorer', title: ''}},
   //     // {title: 'StyleSupplier', colspan: 1, rowspan: 1, cls: '_style_suppliers magenta3',  target: {xtype: 'omni-style_suppliers-Explorer', title: ''}},
   //     // {title: 'StyleSupplierColor', colspan: 1, rowspan: 1, cls: '_style_supplier_colors magenta3',  target: {xtype: 'omni-style_supplier_colors-Explorer', title: ''}},
   //     // {title: 'StyleLocation', colspan: 1, rowspan: 1, cls: '_style_locations pink1',  target: {xtype: 'omni-style_locations-Explorer', title: ''}},
   //     // {title: 'SkuPrice', colspan: 1, rowspan: 2, cls: '_sku_prices blue2',  target: {xtype: 'omni-sku_prices-Explorer', title: ''}},
   //     // {title: 'StyleColor', colspan: 1, rowspan: 1, cls: '_style_colors magenta',  target: {xtype: 'omni-style_colors-Explorer', title: ''}},
   //     // {title: 'StyleColorSize', colspan: 1, rowspan: 1, cls: '_style_color_sizes magenta',  target: {xtype: 'omni-style_color_sizes-Explorer', title: ''}},
   //     // {title: 'Sku', colspan: 1, rowspan: 3, cls: '_skus blue1',  target: {xtype: 'omni-skus-Explorer', title: ''}},
   //     // {title: 'SkuSupplier', colspan: 1, rowspan: 1, cls: '_sku_suppliers blue1',  target: {xtype: 'omni-sku_suppliers-Explorer', title: ''}},
   //     // {title: 'SkuPromoPrice', colspan: 1, rowspan: 2, cls: '_sku_promo_prices blue2',  target: {xtype: 'omni-sku_promo_prices-Explorer', title: ''}},
   //     // {title: 'SkuAlias', colspan: 1, rowspan: 1, cls: '_sku_aliases blue',  target: {xtype: 'omni-sku_aliases-Explorer', title: ''}},
   //     // {title: 'SkuSubstitute', colspan: 1, rowspan: 1, cls: '_sku_substitutes blue',  target: {xtype: 'omni-sku_substitutes-Explorer', title: ''}}
   //   ]
   //   }



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
