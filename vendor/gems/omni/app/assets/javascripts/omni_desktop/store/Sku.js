Ext.define('Omni.store.Sku', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-Sku',
  model:         'Omni.model.Sku',
  autoLoad:      false,
  storeId:       'SkuStore',
  remoteFilter:  true,
  remoteSort:    true,

  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  }
});
