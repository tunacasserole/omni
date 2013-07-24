Ext.define('Omni.store.Location', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-Location',
  model:         'Omni.model.Location',
  autoLoad:      false,
  storeId:       'LocationStore',
  remoteFilter:  true,
  remoteSort:    true
});
