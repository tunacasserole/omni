Ext.define('Omni.store.Rule', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-Rule',
  model:         'Omni.model.Rule',
  autoLoad:      false,
  storeId:       'RuleStore',
  remoteFilter:  true,
  remoteSort:    true
});
