Ext.define('Omni.store.Size', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-Size',
  model:         'Omni.model.Size',
  autoLoad:      false,
  storeId:       'SizeStore',
  remoteFilter:  true,
  remoteSort:    true
});
