Ext.define('Omni.store.StyleSupplierColor', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-StyleSupplierColor',
  model:         'Omni.model.StyleSupplierColor',
  autoLoad:      false,
  storeId:       'StyleSupplierColorStore',
  remoteFilter:  true,
  remoteSort:    true
});
