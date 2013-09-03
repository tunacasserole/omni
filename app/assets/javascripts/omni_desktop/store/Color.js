Ext.define('Omni.store.Color', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-Color',
  model:         'Omni.model.Color',
  autoLoad:      false,
  storeId:       'ColorStore',
  remoteFilter:  true,
  remoteSort:    true
});
