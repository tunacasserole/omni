Ext.define('Omni.store.AllocationProfile', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-AllocationProfile',
  model        : 'Omni.model.AllocationProfile',
  autoLoad     : false,
  storeId      : 'AllocationProfileStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define