Ext.define('Omni.store.Bin', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-Bin',
  model:         'Omni.model.Bin',
  autoLoad:      false,
  storeId:       'BinStore',
  remoteFilter:  true,
  remoteSort:    true
});
