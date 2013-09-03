Ext.define('Omni.store.LocationTaxAuthority', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-LocationTaxAuthority',
  model:         'Omni.model.LocationTaxAuthority',
  autoLoad:      false,
  storeId:       'LocationTaxAuthorityStore',
  remoteFilter:  true,
  remoteSort:    true
});
