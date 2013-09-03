Ext.define('Omni.store.District', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-District',
  model:         'Omni.model.District',
  autoLoad:      false,
  storeId:       'DistrictStore',
  remoteFilter:  true,
  remoteSort:    true
});
