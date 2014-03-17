Ext.define('Omni.store.Uniform', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-Uniform',
  model        : 'Omni.model.Uniform',
  autoLoad     : false,
  storeId      : 'UniformStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define('Omni.store.Uniform'