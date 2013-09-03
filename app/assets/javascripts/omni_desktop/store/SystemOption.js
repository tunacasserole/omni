Ext.define('Omni.store.SystemOption', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-SystemOption',
  model:         'Omni.model.SystemOption',
  autoLoad:      false,
  storeId:       'SystemOptionStore',
  remoteFilter:  true,
  remoteSort:    true
});
