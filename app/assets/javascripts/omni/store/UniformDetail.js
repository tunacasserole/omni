Ext.define('Omni.store.UniformDetail', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-UniformDetail',
  model        : 'Omni.model.UniformDetail',
  autoLoad     : false,
  storeId      : 'UniformDetailStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define('Omni.store.UniformDetail'