Ext.define('Omni.store.DailyResult', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-DailyResult',
  model:         'Omni.model.DailyResult',
  autoLoad:      false,
  storeId:       'DailyResultStore',
  remoteFilter:  true,
  remoteSort:    true
});
