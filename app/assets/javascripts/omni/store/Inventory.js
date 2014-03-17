Ext.define('Omni.store.Inventory', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-Inventory',
  model        : 'Omni.model.Inventory',
  autoLoad     : false,
  storeId      : 'InventoryStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define('Omni.store.Inventory'