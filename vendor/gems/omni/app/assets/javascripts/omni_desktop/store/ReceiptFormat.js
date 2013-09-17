Ext.define('Omni.store.ReceiptFormat', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-ReceiptFormat',
  model        : 'Omni.model.ReceiptFormat',
  autoLoad     : false,
  storeId      : 'ReceiptFormatStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define