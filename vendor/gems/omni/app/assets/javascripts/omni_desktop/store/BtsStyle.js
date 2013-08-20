Ext.define('Omni.store.BtsStyle', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-BtsStyle',
  model        : 'Omni.model.BtsStyle',
  autoLoad     : false,
  storeId      : 'BtsStyleStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define