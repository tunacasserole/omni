Ext.define('Omni.store.RmsItemDynamic', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-RmsItemDynamic',
  model        : 'Omni.model.RmsItemDynamic',
  autoLoad     : false,
  storeId      : 'RmsItemDynamicStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define