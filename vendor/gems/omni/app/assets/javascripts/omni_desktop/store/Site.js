Ext.define('Omni.store.Site', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-Site',
  model:         'Omni.model.Site',
  autoLoad:      false,
  storeId:       'SiteStore',
  remoteFilter:  true,
  remoteSort:    true
});
