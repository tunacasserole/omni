/**
 *  The print button will be clicked from the context menu bound to the gridview.
 */
Ext.define('Omni.logic.receipts.Print', {
  statics: {
    click:function(btn){
      var explorer = btn.ownerCt.contextOwner;

      var search    = explorer.store.proxy.extraParams.search;
      var criteria  = '';

      var params = {};
      var sorters = [];

      Ext.merge(params, explorer.store.proxy.extraParams);
      Ext.merge(params, {export: {filename: 'export.csv'}});

      explorer.store.proxy.api.read(params, function(response, e){
        Ext.getDom('export-iframe').src = response.url;
      });

    }
  }
});
