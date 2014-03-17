Ext.define('Omni.store.TransferReason', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-TransferReason',
  model        : 'Omni.model.TransferReason',
  autoLoad     : false,
  storeId      : 'TransferReasonStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define