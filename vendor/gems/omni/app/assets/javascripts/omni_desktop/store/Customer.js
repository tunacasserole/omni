Ext.define('Omni.store.Customer', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-Customer',
  model:         'Omni.model.Customer',
  autoLoad:      false,
  storeId:       'CustomerStore',
  remoteFilter:  true,
  remoteSort:    true
});
