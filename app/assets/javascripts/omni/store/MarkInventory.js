Ext.define('Omni.store.MarkInventory', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-MarkInventory',
  model        : 'Omni.model.MarkInventory',
  autoLoad     : false,
  storeId      : 'MarkInventoryStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define