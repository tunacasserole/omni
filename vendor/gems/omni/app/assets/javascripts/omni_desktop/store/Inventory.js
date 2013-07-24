Ext.define('Omni.store.Inventory', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-Inventory',
  model:         'Omni.model.Inventory',
  autoLoad:      false,
  storeId:       'InventoryStore',
  remoteFilter:  true,
  remoteSort:    true
});
