Ext.define('Omni.store.Adjustment', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-Adjustment',
  model:         'Omni.model.Adjustment',
  autoLoad:      false,
  storeId:       'AdjustmentStore',
  remoteFilter:  true,
  remoteSort:    true
});
