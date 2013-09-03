Ext.define('Omni.store.Area', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-Area',
  model:         'Omni.model.Area',
  autoLoad:      false,
  storeId:       'AreaStore',
  remoteFilter:  true,
  remoteSort:    true
});
