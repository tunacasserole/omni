Ext.define('Omni.store.SupplierRatingSubject', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-SupplierRatingSubject',
  model:         'Omni.model.SupplierRatingSubject',
  autoLoad:      false,
  storeId:       'SupplierRatingSubjectStore',
  remoteFilter:  true,
  remoteSort:    true
});
