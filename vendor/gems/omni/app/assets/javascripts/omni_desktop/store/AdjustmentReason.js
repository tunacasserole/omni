Ext.define('Omni.store.AdjustmentReason', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-AdjustmentReason',
  model:         'Omni.model.AdjustmentReason',
  autoLoad:      false,
  storeId:       'AdjustmentReasonStore',
  remoteFilter:  true,
  remoteSort:    true
});
