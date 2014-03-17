Ext.define('Omni.store.Contact', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-Contact',
  model        : 'Omni.model.Contact',
  autoLoad     : false,
  storeId      : 'ContactStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define('Omni.store.Contact'