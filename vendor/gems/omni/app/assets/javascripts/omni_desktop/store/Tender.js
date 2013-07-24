Ext.define('Omni.store.Tender', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-Tender',
  model:         'Omni.model.Tender',
  autoLoad:      false,
  storeId:       'TenderStore',
  remoteFilter:  true,
  remoteSort:    true
});
