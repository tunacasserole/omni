Ext.define('Omni.store.Purchase', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-Purchase',
  model        : 'Omni.model.Purchase',
  autoLoad     : false,
  storeId      : 'PurchaseStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define