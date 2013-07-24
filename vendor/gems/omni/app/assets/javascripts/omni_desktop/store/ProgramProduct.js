Ext.define('Omni.store.ProgramProduct', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-ProgramProduct',
  model:         'Omni.model.ProgramProduct',
  autoLoad:      false,
  storeId:       'ProgramProductStore',
  remoteFilter:  true,
  remoteSort:    true
});
