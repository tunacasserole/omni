Ext.define('Omni.store.CustomerSite', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-CustomerSite',
  model:         'Omni.model.CustomerSite',
  autoLoad:      false,
  storeId:       'CustomerSiteStore',
  remoteFilter:  true,
  remoteSort:    true
});
