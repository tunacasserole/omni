Ext.define('Omni.store.SizeGroupDetail', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-SizeGroupDetail',
  model:         'Omni.model.SizeGroupDetail',
  autoLoad:      false,
  storeId:       'SizeGroupDetailStore',
  remoteFilter:  true,
  remoteSort:    true
});
