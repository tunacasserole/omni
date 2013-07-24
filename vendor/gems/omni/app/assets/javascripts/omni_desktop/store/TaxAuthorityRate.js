Ext.define('Omni.store.TaxAuthorityRate', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-TaxAuthorityRate',
  model:         'Omni.model.TaxAuthorityRate',
  autoLoad:      false,
  storeId:       'TaxAuthorityRateStore',
  remoteFilter:  true,
  remoteSort:    true
});
