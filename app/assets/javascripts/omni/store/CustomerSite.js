Ext.define('Omni.store.CustomerAccount', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-CustomerAccount',
  model:         'Omni.model.CustomerAccount',
  autoLoad:      false,
  storeId:       'CustomerAccountStore',
  remoteFilter:  true,
  remoteSort:    true
});
