Ext.define('Omni.store.Subclass', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-Subclass',
  model:         'Omni.model.Subclass',
  autoLoad:      false,
  storeId:       'SubclassStore',
  remoteFilter:  true,
  remoteSort:    true
});
