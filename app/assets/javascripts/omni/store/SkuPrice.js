Ext.define('Omni.store.SkuPrice', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-SkuPrice',
  model:         'Omni.model.SkuPrice',
  autoLoad:      false,
  storeId:       'SkuPriceStore',
  remoteFilter:  true,
  remoteSort:    true
});
