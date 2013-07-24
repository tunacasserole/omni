Ext.define('Omni.store.PurchaseCost', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-PurchaseCost',
  model        : 'Omni.model.PurchaseCost',
  autoLoad     : false,
  storeId      : 'PurchaseCostStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define