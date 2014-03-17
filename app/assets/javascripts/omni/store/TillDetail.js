Ext.define('Omni.store.TillDetail', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-TillDetail',
  model:         'Omni.model.TillDetail',
  autoLoad:      false,
  storeId:       'TillDetailStore',
  remoteFilter:  true,
  remoteSort:    true
});
