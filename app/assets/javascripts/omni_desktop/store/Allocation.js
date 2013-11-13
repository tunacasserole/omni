Ext.define('Omni.store.Allocation', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-Allocation',
  model        : 'Omni.model.Allocation',
  autoLoad     : false,
  storeId      : 'AllocationStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define('Omni.store.Allocation'