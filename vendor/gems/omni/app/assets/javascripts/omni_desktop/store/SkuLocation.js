Ext.define('Omni.store.SkuLocation', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-SkuLocation',
  model:         'Omni.model.SkuLocation',
  autoLoad:      false,
  storeId:       'SkuLocationStore',
  remoteFilter:  true,
  remoteSort:    true
});
