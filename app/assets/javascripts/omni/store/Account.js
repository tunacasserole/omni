Ext.define('Omni.store.Account', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-Account',
  model        : 'Omni.model.Account',
  autoLoad     : false,
  storeId      : 'AccountStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define('Omni.store.Account'