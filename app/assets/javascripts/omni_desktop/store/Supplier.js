Ext.define('Omni.store.Supplier', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-Supplier',
  model:         'Omni.model.Supplier',
  autoLoad:      false,
  storeId:       'SupplierStore',
  remoteFilter:  true,
  remoteSort:    true
});
