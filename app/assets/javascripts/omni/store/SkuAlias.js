Ext.define('Omni.store.SkuAlias', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-SkuAlias',
  model        : 'Omni.model.SkuAlias',
  autoLoad     : false,
  storeId      : 'SkuAliasStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define('Omni.store.SkuAlias'