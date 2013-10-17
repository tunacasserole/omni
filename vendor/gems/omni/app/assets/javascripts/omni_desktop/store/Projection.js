Ext.define('Omni.store.Projection', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-Projection',
  model        : 'Omni.model.Projection',
  autoLoad     : false,
  storeId      : 'ProjectionStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define