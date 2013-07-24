Ext.define('Omni.store.Shipment', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-Shipment',
  model:         'Omni.model.Shipment',
  autoLoad:      false,
  storeId:       'ShipmentStore',
  remoteFilter:  true,
  remoteSort:    true
});
