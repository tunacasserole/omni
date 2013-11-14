Ext.define('Omni.store.ReceiptAllocation', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-ReceiptAllocation',
  model        : 'Omni.model.ReceiptAllocation',
  autoLoad     : false,
  storeId      : 'ReceiptAllocationStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define('Omni.store.ReceiptAllocation'