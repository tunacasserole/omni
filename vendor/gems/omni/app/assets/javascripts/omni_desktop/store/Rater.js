Ext.define('Omni.store.Rater', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-Rater',
  model        : 'Omni.model.Rater',
  autoLoad     : false,
  storeId      : 'RaterStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define