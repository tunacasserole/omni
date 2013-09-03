Ext.define('Omni.store.Log', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-Log',
  model        : 'Omni.model.Log',
  autoLoad     : false,
  storeId      : 'LogStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define