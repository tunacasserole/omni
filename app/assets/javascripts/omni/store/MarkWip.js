Ext.define('Omni.store.MarkWip', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-MarkWip',
  model        : 'Omni.model.MarkWip',
  autoLoad     : false,
  storeId      : 'MarkWipStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define