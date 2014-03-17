Ext.define('Omni.store.Contract', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-Contract',
  model        : 'Omni.model.Contract',
  autoLoad     : false,
  storeId      : 'ContractStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define('Omni.store.Contract'