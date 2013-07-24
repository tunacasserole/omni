Ext.define('Omni.store.TaxAuthority', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-TaxAuthority',
  model:         'Omni.model.TaxAuthority',
  autoLoad:      false,
  storeId:       'TaxAuthorityStore',
  remoteFilter:  true,
  remoteSort:    true
});
