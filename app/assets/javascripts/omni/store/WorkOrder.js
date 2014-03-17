Ext.define('Omni.store.Job', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-Job',
  model:         'Omni.model.Job',
  autoLoad:      false,
  storeId:       'JobStore',
  remoteFilter:  true,
  remoteSort:    true
});
