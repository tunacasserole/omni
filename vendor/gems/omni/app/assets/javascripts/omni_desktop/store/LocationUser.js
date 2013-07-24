Ext.define('Omni.store.LocationUser', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-LocationUser',
  model:         'Omni.model.LocationUser',
  autoLoad:      false,
  storeId:       'LocationUserStore',
  remoteFilter:  true,
  remoteSort:    true
});
