Ext.define('Omni.store.Category', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-Category',
  model:         'Omni.model.Category',
  autoLoad:      false,
  storeId:       'CategoryStore',
  remoteFilter:  true,
  remoteSort:    true
});
