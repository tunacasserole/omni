Ext.define('Omni.store.PurchaseOption', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-PurchaseOption',
  model        : 'Omni.model.PurchaseOption',
  autoLoad     : false,
  storeId      : 'PurchaseOptionStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define('Omni.store.PurchaseOption'