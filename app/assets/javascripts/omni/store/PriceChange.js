Ext.define('Omni.store.PriceChange', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-PriceChange',
  model:         'Omni.model.PriceChange',
  autoLoad:      false,
  storeId:       'PriceChangeStore',
  remoteFilter:  true,
  remoteSort:    true
});
