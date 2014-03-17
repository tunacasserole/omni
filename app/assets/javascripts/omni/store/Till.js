Ext.define('Omni.store.Till', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-Till',
  model        : 'Omni.model.Till',
  autoLoad     : false,
  storeId      : 'TillStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define