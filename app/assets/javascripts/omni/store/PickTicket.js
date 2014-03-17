Ext.define('Omni.store.Pick', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-Pick',
  model:         'Omni.model.Pick',
  autoLoad:      false,
  storeId:       'PickStore',
  remoteFilter:  true,
  remoteSort:    true
});
