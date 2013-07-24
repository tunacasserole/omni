Ext.define('Omni.store.SupplierRating', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-SupplierRating',
  model:         'Omni.model.SupplierRating',
  autoLoad:      false,
  storeId:       'SupplierRatingStore',
  remoteFilter:  true,
  remoteSort:    true
});
