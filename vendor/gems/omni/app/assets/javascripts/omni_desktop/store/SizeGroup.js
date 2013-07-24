Ext.define('Omni.store.SizeGroup', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-SizeGroup',
  model:         'Omni.model.SizeGroup',
  autoLoad:      false,
  storeId:       'SizeGroupStore',
  remoteFilter:  true,
  remoteSort:    true
});
