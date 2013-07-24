Ext.define('Omni.store.Period', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-Period',
  model:         'Omni.model.Period',
  autoLoad:      false,
  storeId:       'PeriodStore',
  remoteFilter:  true,
  remoteSort:    true
});
