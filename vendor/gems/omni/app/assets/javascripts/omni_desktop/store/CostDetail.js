Ext.define('Omni.store.CostDetail', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-CostDetail',
  model        : 'Omni.model.CostDetail',
  autoLoad     : false,
  storeId      : 'CostDetailStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define