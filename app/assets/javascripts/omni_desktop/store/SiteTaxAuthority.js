Ext.define('Omni.store.SiteTaxAuthority', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-SiteTaxAuthority',
  model:         'Omni.model.SiteTaxAuthority',
  autoLoad:      false,
  storeId:       'SiteTaxAuthorityStore',
  remoteFilter:  true,
  remoteSort:    true
});
