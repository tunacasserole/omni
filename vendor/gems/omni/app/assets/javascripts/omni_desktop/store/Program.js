Ext.define('Omni.store.Program', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-Program',
  model:         'Omni.model.Program',
  autoLoad:      false,
  storeId:       'ProgramStore',
  remoteFilter:  true,
  remoteSort:    true
});
