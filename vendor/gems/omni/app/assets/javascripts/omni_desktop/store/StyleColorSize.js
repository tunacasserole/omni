Ext.define('Omni.store.StyleColorSize', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-StyleColorSize',
  model:         'Omni.model.StyleColorSize',
  autoLoad:      false,
  storeId:       'StyleColorSizeStore',
  remoteFilter:  true,
  remoteSort:    true
});
