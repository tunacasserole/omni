Ext.define('Omni.store.Import', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-Import',
  model        : 'Omni.model.Import',
  autoLoad     : false,
  storeId      : 'ImportStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define