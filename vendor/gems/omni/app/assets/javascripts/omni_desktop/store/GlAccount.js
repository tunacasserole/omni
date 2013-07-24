Ext.define('Omni.store.GlAccount', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-GlAccount',
  model:         'Omni.model.GlAccount',
  autoLoad:      false,
  storeId:       'GlAccountStore',
  remoteFilter:  true,
  remoteSort:    true
});
