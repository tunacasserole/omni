Ext.define('Desk.store.Feature', {
  extend       : 'Ext.data.Store',
  alias        : 'store.desk-Feature',
  model        : 'Desk.model.Feature',
  autoLoad     : false,
  storeId      : 'FeatureStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define('Desk.store.Feature'