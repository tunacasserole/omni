Ext.define('Omni.store.MarkTransferLine', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-MarkTransferLine',
  model        : 'Omni.model.MarkTransferLine',
  autoLoad     : false,
  storeId      : 'MarkTransferLineStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define