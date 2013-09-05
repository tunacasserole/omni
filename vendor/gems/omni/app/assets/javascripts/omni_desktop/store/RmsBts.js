Ext.define('Omni.store.RmsBts', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-RmsBts',
  model        : 'Omni.model.RmsBts',
  autoLoad     : false,
  storeId      : 'RmsBtsStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define