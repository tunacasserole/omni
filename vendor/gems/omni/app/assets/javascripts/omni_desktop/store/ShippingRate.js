Ext.define('Omni.store.ShippingRate', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-ShippingRate',
  model:         'Omni.model.ShippingRate',
  autoLoad:      false,
  storeId:       'ShippingRateStore',
  remoteFilter:  true,
  remoteSort:    true
});
