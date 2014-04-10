Ext.define('Omni.store.Order', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-Order',
  model        : 'Omni.model.Order',
  autoLoad     : false,
  storeId      : 'OrderStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define('Omni.store.Order'