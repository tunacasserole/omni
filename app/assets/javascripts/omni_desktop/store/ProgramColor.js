Ext.define('Omni.store.ProgramColor', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-ProgramColor',
  model:         'Omni.model.ProgramColor',
  autoLoad:      false,
  storeId:       'ProgramColorStore',
  remoteFilter:  true,
  remoteSort:    true
});
