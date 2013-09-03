Ext.define('Omni.store.PurchaseAllocation', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-PurchaseAllocation',
  model        : 'Omni.model.PurchaseAllocation',
  autoLoad     : false,
  storeId      : 'PurchaseAllocationStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define