Ext.define('Omni.store.RmsInventory', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-RmsInventory',
  model        : 'Omni.model.RmsInventory',
  autoLoad     : false,
  storeId      : 'RmsInventoryStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define('Omni.store.RmsInventory'