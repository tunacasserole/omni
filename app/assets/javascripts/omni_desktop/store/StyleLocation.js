Ext.define('Omni.store.StyleLocation', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-StyleLocation',
  model:         'Omni.model.StyleLocation',
  autoLoad:      false,
  storeId:       'StyleLocationStore',
  remoteFilter:  true,
  remoteSort:    true
});
