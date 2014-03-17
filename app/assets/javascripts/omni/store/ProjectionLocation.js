Ext.define('Omni.store.ProjectionLocation', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-ProjectionLocation',
  model        : 'Omni.model.ProjectionLocation',
  autoLoad     : false,
  storeId      : 'ProjectionLocationStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define('Omni.store.ProjectionLocation'