Ext.define('Omni.store.SkuPriceRequest', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-SkuPriceRequest',
  model:         'Omni.model.SkuPriceRequest',
  autoLoad:      false,
  storeId:       'SkuPriceRequestStore',
  remoteFilter:  true,
  remoteSort:    true
});
