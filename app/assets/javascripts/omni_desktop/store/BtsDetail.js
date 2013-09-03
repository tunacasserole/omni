Ext.define('Omni.store.BtsDetail', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-BtsDetail',
  model        : 'Omni.model.BtsDetail',
  autoLoad     : false,
  storeId      : 'BtsDetailStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define