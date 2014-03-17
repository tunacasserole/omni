Ext.define('Omni.store.AccountTaxAuthority', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-AccountTaxAuthority',
  model        : 'Omni.model.AccountTaxAuthority',
  autoLoad     : false,
  storeId      : 'AccountTaxAuthorityStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define('Omni.store.AccountTaxAuthority'