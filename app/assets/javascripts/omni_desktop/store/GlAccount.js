Ext.define('Omni.store.GlAccount', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-GlAccount',
  model        : 'Omni.model.GlAccount',
  autoLoad     : false,
  storeId      : 'GlAccountStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define