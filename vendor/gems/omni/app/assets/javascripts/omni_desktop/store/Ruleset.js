Ext.define('Omni.store.Ruleset', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-Ruleset',
  model:         'Omni.model.Ruleset',
  autoLoad:      false,
  storeId:       'RulesetStore',
  remoteFilter:  true,
  remoteSort:    true
});
