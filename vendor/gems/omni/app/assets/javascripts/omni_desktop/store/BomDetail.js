Ext.define('Omni.store.BomDetail', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-BomDetail',
  model:         'Omni.model.BomDetail',
  autoLoad:      false,
  storeId:       'BomDetailStore',
  remoteFilter:  true,
  remoteSort:    true
});
