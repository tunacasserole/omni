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
     columns: 2,
     rows: 4,
     tiles: [
        {title: 'BTS', colspan: 2, rowspan: 2, cls: 'bts',  target: {xtype: 'omni-bts-Explorer'}},       
        {title: 'Inventory', colspan: 2, rowspan: 1, cls: 'bts_source',  target: {xtype: 'omni-inventories-Explorer'} },                            
        {title: 'Period Results', colspan: 2, rowspan: 1, cls: 'bts_source', target: { xtype: 'omni-period_results-Explorer'} },        
     ] 
     }     

   // Section: Product Hierarchy //

   ,{
   title: 'product hierarchy',
     columns: 4,
     rows: 3,
     tiles: [
       {title: 'Skus', colspan: 2, rowspan: 1, cls: 'product_hierarchy',  target: {xtype: 'omni-skus-Explorer'}},       
       {title: 'Styles', colspan: 2, rowspan: 1, cls: 'product_hierarchy',  target: {xtype: 'omni-styles-Explorer'}},
       {title: 'Subclasses', colspan: 2, rowspan: 1, cls: 'product_hierarchy',  target: {xtype: 'omni-subclasses-Explorer'}},   
       {title: 'Classifications', colspan: 2, rowspan: 1, cls: 'product_hierarchy',  target: {xtype: 'omni-classifications-Explorer'}},         
       {title: 'Departments', colspan: 2, rowspan: 1, cls: 'product_hierarchy',  target: {xtype: 'omni-departments-Explorer'}}           
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

   // Section: product setup data //

   ,{
   title: 'product setup data',
     columns: 4,
     rows: 3,
     tiles: [
       {title: 'Colors', colspan: 2, rowspan: 1, cls: 'product_setup', target: { xtype: 'omni-colors-Explorer'} },
       {title: 'Sizes', colspan: 2, rowspan: 1, cls: 'product_setup', target: { xtype: 'omni-sizes-Explorer'} },       
       {title: 'Size Groups', colspan: 2, rowspan: 1, cls: 'product_setup', target: { xtype: 'omni-size_groups-Explorer'} }      
       // {title: 'Category', colspan: 2, rowspan: 1, cls: 'categories',  target: {xtype: 'omni-categories-Explorer', title: ''}},
       // {title: 'Product', colspan: 2, rowspan: 1, cls: 'products',  target: {xtype: 'omni-products-Explorer', title: ''}},
       // {title: 'Product Types', colspan: 2, rowspan: 1, cls: 'products_types',  target: {xtype: 'omni-product_types-Explorer', title: ''}},       
       // {title: 'transfer_reasons', colspan: 2, rowspan: 1, cls: 'products',  target: {xtype: 'omni-transfer_reasons-Explorer', title: ''}},       
       // {title: 'Forecast Profile', colspan: 2, rowspan: 1, cls: 'cfars',  target: {xtype: 'omni-forecast_profiles-Explorer'}},       
       // {title: 'Labels', colspan: 2, rowspan: 1, cls: 'labels',  target: {xtype: 'omni-labels-Explorer', title: ''}},       
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