Ext.define('Omni.store.Job', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-Job',
  model        : 'Omni.model.Job',
  autoLoad     : false,
  storeId      : 'JobStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define('Omni.store.Job'