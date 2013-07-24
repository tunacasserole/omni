Ext.define('Omni.store.ShipmentDetail', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-ShipmentDetail',
  model:         'Omni.model.ShipmentDetail',
  autoLoad:      false,
  storeId:       'ShipmentDetailStore',
  remoteFilter:  true,
  remoteSort:    true
});
