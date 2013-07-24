Ext.define('Omni.store.ProjectionReason', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-ProjectionReason',
  model:         'Omni.model.ProjectionReason',
  autoLoad:      false,
  storeId:       'ProjectionReasonStore',
  remoteFilter:  true,
  remoteSort:    true
});
