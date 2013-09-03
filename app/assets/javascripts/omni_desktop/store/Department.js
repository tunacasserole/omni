Ext.define('Omni.store.Department', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-Department',
  model:         'Omni.model.Department',
  autoLoad:      false,
  storeId:       'DepartmentStore',
  remoteFilter:  true,
  remoteSort:    true
});
