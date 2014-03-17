Ext.define('Omni.store.PurchaseDetail', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-PurchaseDetail',
  model        : 'Omni.model.PurchaseDetail',
  autoLoad     : false,
  storeId      : 'PurchaseDetailStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define