Ext.define('Omni.store.PriceBook', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-PriceBook',
  model        : 'Omni.model.PriceBook',
  autoLoad     : false,
  storeId      : 'PriceBookStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define