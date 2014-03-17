Ext.define('Omni.store.PeriodResult', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-PeriodResult',
  model:         'Omni.model.PeriodResult',
  autoLoad:      false,
  storeId:       'PeriodResultStore',
  remoteFilter:  true,
  remoteSort:    true
});
