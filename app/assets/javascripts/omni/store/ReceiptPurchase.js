Ext.define('Omni.store.ReceiptPurchase', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-ReceiptPurchase',
  model        : 'Omni.model.ReceiptPurchase',
  autoLoad     : false,
  storeId      : 'ReceiptPurchaseStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define('Omni.store.ReceiptPurchase'