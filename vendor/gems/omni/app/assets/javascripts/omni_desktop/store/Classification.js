Ext.define('Omni.store.Classification', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-Classification',
  model:         'Omni.model.Classification',
  autoLoad:      false,
  storeId:       'ClassificationStore',
  remoteFilter:  true,
  remoteSort:    true
});
