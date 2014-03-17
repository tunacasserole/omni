Ext.define('Omni.store.Region', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-Region',
  model:         'Omni.model.Region',
  autoLoad:      false,
  storeId:       'RegionStore',
  remoteFilter:  true,
  remoteSort:    true
});
