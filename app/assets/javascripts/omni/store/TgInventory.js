Ext.define('Omni.store.TgInventory', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-TgInventory',
  model        : 'Omni.model.TgInventory',
  autoLoad     : false,
  storeId      : 'TgInventoryStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define('Omni.store.TgInventory'