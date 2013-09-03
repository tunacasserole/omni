Ext.define('Omni.store.PriceBook', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-PriceBook',
  model:         'Omni.model.PriceBook',
  autoLoad:      false,
  storeId:       'PriceBookStore',
  remoteFilter:  true,
  remoteSort:    true
});
