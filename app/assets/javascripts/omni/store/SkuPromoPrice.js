Ext.define('Omni.store.SkuPromoPrice', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-SkuPromoPrice',
  model:         'Omni.model.SkuPromoPrice',
  autoLoad:      false,
  storeId:       'SkuPromoPriceStore',
  remoteFilter:  true,
  remoteSort:    true
});
