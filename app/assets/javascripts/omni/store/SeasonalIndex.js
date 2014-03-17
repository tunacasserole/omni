Ext.define('Omni.store.SeasonalIndex', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-SeasonalIndex',
  model:         'Omni.model.SeasonalIndex',
  autoLoad:      false,
  storeId:       'SeasonalIndexStore',
  remoteFilter:  true,
  remoteSort:    true
});
