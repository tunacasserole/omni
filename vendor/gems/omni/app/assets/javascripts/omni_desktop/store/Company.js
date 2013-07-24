Ext.define('Omni.store.Company', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-Company',
  model:         'Omni.model.Company',
  autoLoad:      false,
  storeId:       'CompanyStore',
  remoteFilter:  true,
  remoteSort:    true
});
