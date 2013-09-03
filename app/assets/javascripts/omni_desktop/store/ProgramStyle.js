Ext.define('Omni.store.ProgramStyle', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-ProgramStyle',
  model:         'Omni.model.ProgramStyle',
  autoLoad:      false,
  storeId:       'ProgramStyleStore',
  remoteFilter:  true,
  remoteSort:    true
});
