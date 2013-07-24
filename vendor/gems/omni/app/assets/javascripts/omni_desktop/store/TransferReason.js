Ext.define('Omni.store.TransferReason', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-TransferReason',
  model:         'Omni.model.TransferReason',
  autoLoad:      false,
  storeId:       'TransferReasonStore',
  remoteFilter:  true,
  remoteSort:    true
});
