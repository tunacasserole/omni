Ext.define('Omni.store.Receipt', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-Receipt',
  model        : 'Omni.model.Receipt',
  autoLoad     : false,
  storeId      : 'ReceiptStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define