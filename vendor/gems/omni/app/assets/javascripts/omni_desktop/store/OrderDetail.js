Ext.define('Omni.store.OrderDetail', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-OrderDetail',
  model:         'Omni.model.OrderDetail',
  autoLoad:      false,
  storeId:       'OrderDetailStore',
  remoteFilter:  true,
  remoteSort:    true
});
