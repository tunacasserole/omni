Ext.define('Omni.store.GritsBts', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-GritsBts',
  model        : 'Omni.model.GritsBts',
  autoLoad     : false,
  storeId      : 'GritsBtsStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define