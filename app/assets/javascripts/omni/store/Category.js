Ext.define('Omni.store.Category', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-Category',
  model        : 'Omni.model.Category',
  autoLoad     : false,
  storeId      : 'CategoryStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define