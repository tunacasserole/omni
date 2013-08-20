Ext.define('Omni.store.Project', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-Project',
  model        : 'Omni.model.Project',
  autoLoad     : false,
  storeId      : 'ProjectStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define