Ext.define('Omni.store.CustomerAccount', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-CustomerAccount',
  model        : 'Omni.model.CustomerAccount',
  autoLoad     : false,
  storeId      : 'CustomerAccountStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define('Omni.store.CustomerAccount'