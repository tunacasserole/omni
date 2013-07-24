Ext.define('Omni.store.SkuAlias', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-SkuAlias',
  model:         'Omni.model.SkuAlias',
  autoLoad:      false,
  storeId:       'SkuAliasStore',
  remoteFilter:  true,
  remoteSort:    true
});
