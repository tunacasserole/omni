Ext.define('Omni.store.SupplierContact', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-SupplierContact',
  model:         'Omni.model.SupplierContact',
  autoLoad:      false,
  storeId:       'SupplierContactStore',
  remoteFilter:  true,
  remoteSort:    true
});
