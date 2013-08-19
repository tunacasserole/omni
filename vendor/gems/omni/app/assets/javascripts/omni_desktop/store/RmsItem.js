Ext.define('Omni.store.RmsItem', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-RmsItem',
  model        : 'Omni.model.RmsItem',
  autoLoad     : false,
  storeId      : 'RmsItemStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define