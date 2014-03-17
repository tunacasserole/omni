Ext.define('Omni.store.AllocationDetail', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-AllocationDetail',
  model        : 'Omni.model.AllocationDetail',
  autoLoad     : false,
  storeId      : 'AllocationDetailStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define('Omni.store.AllocationDetail'