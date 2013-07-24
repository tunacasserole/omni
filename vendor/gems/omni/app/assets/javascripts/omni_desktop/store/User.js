Ext.define('Omni.store.User', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-User',
  model:         'Buildit.model.User',
  autoLoad:      false,
  storeId:       'UserStore',
  remoteFilter:  true,
  remoteSort:    true
});
