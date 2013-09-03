Ext.define('Omni.store.Transfer', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-Transfer',
  model:         'Omni.model.Transfer',
  autoLoad:      false,
  storeId:       'TransferStore',
  remoteFilter:  true,
  remoteSort:    true
});
