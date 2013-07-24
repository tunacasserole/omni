Ext.define('Omni.store.Cost', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-Cost',
  model        : 'Omni.model.Cost',
  autoLoad     : false,
  storeId      : 'CostStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define