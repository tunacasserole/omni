Ext.define('Omni.store.Label', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-Label',
  model:         'Omni.model.Label',
  autoLoad:      false,
  storeId:       'LabelStore',
  remoteFilter:  true,
  remoteSort:    true
});
