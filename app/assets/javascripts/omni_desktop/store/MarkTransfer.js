Ext.define('Omni.store.MarkTransfer', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-MarkTransfer',
  model        : 'Omni.model.MarkTransfer',
  autoLoad     : false,
  storeId      : 'MarkTransferStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define