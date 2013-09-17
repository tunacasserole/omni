Ext.define('Omni.store.SkuCost', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-SkuCost',
  model        : 'Omni.model.SkuCost',
  autoLoad     : false,
  storeId      : 'SkuCostStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define