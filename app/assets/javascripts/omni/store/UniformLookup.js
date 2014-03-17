Ext.define('Omni.store.UniformLookup', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-UniformLookup',
  model        : 'Omni.model.UniformLookup',
  autoLoad     : false,
  storeId      : 'UniformLookupStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define('Omni.store.UniformLookup'