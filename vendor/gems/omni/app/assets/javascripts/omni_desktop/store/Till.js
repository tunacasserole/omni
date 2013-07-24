Ext.define('Omni.store.Till', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-Till',
  model:         'Omni.model.Till',
  autoLoad:      false,
  storeId:       'TillStore',
  remoteFilter:  true,
  remoteSort:    true
});
