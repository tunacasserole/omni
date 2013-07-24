Ext.define('Omni.store.Terminal', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-Terminal',
  model:         'Omni.model.Terminal',
  autoLoad:      false,
  storeId:       'TerminalStore',
  remoteFilter:  true,
  remoteSort:    true
});
