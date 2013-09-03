Ext.define('Omni.store.StyleSupplier', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-StyleSupplier',
  model:         'Omni.model.StyleSupplier',
  autoLoad:      false,
  storeId:       'StyleSupplierStore',
  remoteFilter:  true,
  remoteSort:    true
});
