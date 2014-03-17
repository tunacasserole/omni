Ext.define('Omni.store.SkuSubstitute', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-SkuSubstitute',
  model:         'Omni.model.SkuSubstitute',
  autoLoad:      false,
  storeId:       'SkuSubstituteStore',
  remoteFilter:  true,
  remoteSort:    true
});
