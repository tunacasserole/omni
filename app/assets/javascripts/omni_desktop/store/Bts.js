Ext.define('Omni.store.Bts', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-Bts',
  model        : 'Omni.model.Bts',
  autoLoad     : false,
  storeId      : 'BtsStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define