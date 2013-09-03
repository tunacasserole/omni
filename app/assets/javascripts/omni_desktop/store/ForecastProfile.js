Ext.define('Omni.store.ForecastProfile', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-ForecastProfile',
  model        : 'Omni.model.ForecastProfile',
  autoLoad     : false,
  storeId      : 'ForecastProfileStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define