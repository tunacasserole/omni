Ext.define('Omni.store.Bom', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-Bom',
  model:         'Omni.model.Bom',
  autoLoad:      false,
  storeId:       'BomStore',
  remoteFilter:  true,
  remoteSort:    true
});
