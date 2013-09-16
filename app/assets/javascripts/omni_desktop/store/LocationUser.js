Ext.define('Omni.store.LocationUser', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-LocationUser',
  model        : 'Omni.model.LocationUser',
  autoLoad     : false,
  storeId      : 'LocationUserStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define