Ext.define('Omni.store.BinSku', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-BinSku',
  model:         'Omni.model.BinSku',
  autoLoad:      false,
  storeId:       'BinSkuStore',
  remoteFilter:  true,
  remoteSort:    true
});
