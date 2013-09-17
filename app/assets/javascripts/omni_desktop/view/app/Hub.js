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
   title: 'Inventory Planning',
     columns: 4,
     rows: 3,
     tiles: [
        {title: 'BTS', colspan: 2, rowspan: 1, cls: 'bts',  target: {xtype: 'omni-bts-Explorer'}},
        {title: 'Daily Results', colspan: 2, rowspan: 1, cls: 'bts_source', target: { xtype: 'omni-daily_results-Explorer'} },
        {title: 'Period Results', colspan: 2, rowspan: 1, cls: 'bts_source', target: { xtype: 'omni-period_results-Explorer'} },
        {title: 'Projections', colspan: 2, rowspan: 1, cls: 'bts_source', target: { xtype: 'omni-projections-Explorer'} },
        {title: 'Stock Ledger Activity', colspan: 2, rowspan: 1, cls: 'bts_source', target: { xtype: 'omni-stock_ledger_activities-Explorer'}, allowNew: false,  allowFind: true },
        {title: 'Inventory', colspan: 2, rowspan: 1, cls: 'bts_source', target: { xtype: 'omni-inventories-Explorer'} },
     ]
     }

   // Section: product maintenance //

  ,{
   title: 'product maintenance',
     columns: 2,
     rows: 4,
     tiles: [
        {title: 'Areas', colspan: 2, rowspan: 1, cls: 'bts_source', target: { xtype: 'omni-areas-Explorer'} },
        {title: 'Allocations', colspan: 2, rowspan: 1, cls: 'bts_source', target: { xtype: 'omni-allocations-Explorer'} },
     ]
     }

   // Section: Product Hierarchy //

   ,{
   title: 'product hierarchy',
     columns: 4,
     rows: 3,
     tiles: [
       {title: 'Skus', colspan: 2, rowspan: 1, cls: 'product_hierarchy',  target: {xtype: 'omni-skus-Explorer' }},
       {title: 'Styles', colspan: 2, rowspan: 1, cls: 'product_hierarchy',  target: {xtype: 'omni-styles-Explorer'}},
       {title: 'Subclasses', colspan: 2, rowspan: 1, cls: 'product_hierarchy',  target: {xtype: 'omni-subclasses-Explorer'}},
       {title: 'Classifications', colspan: 2, rowspan: 1, cls: 'product_hierarchy',  target: {xtype: 'omni-classifications-Explorer'}},
       {title: 'Departments', colspan: 2, rowspan: 1, cls: 'product_hierarchy',  target: {xtype: 'omni-departments-Explorer'}}
     ]
     }

   // Section: product setup data //

   ,{
   title: 'product setup data',
     columns: 4,
     rows: 3,
     tiles: [
       {title: 'Colors', colspan: 2, rowspan: 1, cls: 'product_setup', target: { xtype: 'omni-colors-Explorer'} },
       {title: 'Sizes', colspan: 2, rowspan: 1, cls: 'product_setup', target: { xtype: 'omni-sizes-Explorer'} },
       {title: 'Size Groups', colspan: 2, rowspan: 1, cls: 'product_setup', target: { xtype: 'omni-size_groups-Explorer'} },
       {title: 'Labels', colspan: 2, rowspan: 1, cls: 'product_setup',  target: {xtype: 'omni-labels-Explorer', title: ''}},
       {title: 'Price Books', colspan: 2, rowspan: 1, cls: 'product_setup',  target: {xtype: 'omni-price_books-Explorer', title: ''}},
     ]
  }

   // Section: Company Hierarchy //

   ,{
   title: 'company hierarchy',
     columns: 4,
     rows: 3,
     tiles: [
       {title: 'Companies', colspan: 2, rowspan: 1, cls: 'company',  target: {xtype: 'omni-companies-Explorer'}},
       {title: 'Regions', colspan: 2, rowspan: 1, cls: 'company',  target: {xtype: 'omni-regions-Explorer'}},
       {title: 'Districts', colspan: 2, rowspan: 1, cls: 'company',  target: {xtype: 'omni-districts-Explorer'}},
       {title: 'Locations', colspan: 2, rowspan: 1, cls: 'company',  target: {xtype: 'omni-locations-Explorer'}}
     ]
     }

   // Section: company setup data //

   ,{
   title: 'company setup data',
     columns: 6,
     rows: 4,
     tiles: [
       {title: 'Gl Accounts', colspan: 2, rowspan: 1, cls: 'product_setup', target: { xtype: 'omni-gl_accounts-Explorer'} },
       {title: 'Tenders', colspan: 2, rowspan: 1, cls: 'product_setup', target: { xtype: 'omni-tenders-Explorer'} },
       {title: 'Tills', colspan: 2, rowspan: 1, cls: 'product_setup', target: { xtype: 'omni-tills-Explorer'} },
       {title: 'Transfer Reasons', colspan: 2, rowspan: 1, cls: 'product_setup',  target: {xtype: 'omni-transfer_reasons-Explorer', title: ''}},
       {title: 'Grades', colspan: 2, rowspan: 1, cls: 'product_setup',  target: {xtype: 'omni-grades-Explorer', title: ''}},
       {title: 'Periods', colspan: 2, rowspan: 1, cls: 'product_setup',  target: {xtype: 'omni-periods-Explorer', title: ''}},
       {title: 'Forecast Profiles', colspan: 2, rowspan: 1, cls: 'product_setup', target: { xtype: 'omni-forecast_profiles-Explorer'} },
       {title: 'Rules', colspan: 2, rowspan: 1, cls: 'product_setup', target: { xtype: 'omni-rules-Explorer'} },
       {title: 'Rulesets', colspan: 2, rowspan: 1, cls: 'product_setup', target: { xtype: 'omni-rulesets-Explorer'} },
       {title: 'System Options', colspan: 2, rowspan: 1, cls: 'product_setup', target: { xtype: 'omni-system_options-Explorer'} }
     ]
  }

   // Section: web hierarchy //

   ,{
   title: 'web hierarchy',
     columns: 2,
     rows: 3,
     tiles: [
       {title: 'Category', colspan: 2, rowspan: 1, cls: 'product_setup',  target: {xtype: 'omni-categories-Explorer', title: ''}},
       {title: 'Product', colspan: 2, rowspan: 1, cls: 'product_setup',  target: {xtype: 'omni-products-Explorer', title: ''}},
       {title: 'Product Types', colspan: 2, rowspan: 1, cls: 'product_setup',  target: {xtype: 'omni-product_types-Explorer', title: ''}},
     ]
     }


    // Section: Partners //

   ,{
   title: 'Network',
     columns: 2,
     rows: 3,
     tiles: [
       {title: 'Suppliers', colspan: 2, rowspan: 1, cls: 'network',  target: {xtype: 'omni-suppliers-Explorer'}},
       {title: 'Sites', colspan: 2, rowspan: 1, cls: 'network', target: { xtype: 'omni-sites-Explorer'} }
     ]
     }

    // Section: Legacy Data //
// ,{
//    title: 'Project Tracking',
//      columns: 2,
//      rows: 4,
//      tiles: [
//        {title: 'Tasks', colspan: 2, rowspan: 2, cls: 'project_tracking',  target: {xtype: 'omni-tasks-Explorer'}},
//        {title: 'Projects', colspan: 2, rowspan: 2, cls: 'project_tracking',  target: {xtype: 'omni-projects-Explorer'}}
//     ]
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