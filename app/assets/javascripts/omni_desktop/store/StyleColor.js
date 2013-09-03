Ext.define('Omni.store.StyleColor', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-StyleColor',
  model:         'Omni.model.StyleColor',
  autoLoad:      false,
  storeId:       'StyleColorStore',
  remoteFilter:  true,
  remoteSort:    true
});
