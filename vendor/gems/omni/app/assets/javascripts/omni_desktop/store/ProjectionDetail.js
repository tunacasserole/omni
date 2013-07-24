Ext.define('Omni.store.ProjectionDetail', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-ProjectionDetail',
  model        : 'Omni.model.ProjectionDetail',
  autoLoad     : false,
  storeId      : 'ProjectionDetailStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define