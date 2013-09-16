Ext.define('Omni.store.Product', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-Product',
  model        : 'Omni.model.Product',
  autoLoad     : false,
  storeId      : 'ProductStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define