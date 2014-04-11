Ext.define('Omni.store.Voucher', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-Voucher',
  model        : 'Omni.model.Voucher',
  autoLoad     : false,
  storeId      : 'VoucherStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define('Omni.store.Voucher'