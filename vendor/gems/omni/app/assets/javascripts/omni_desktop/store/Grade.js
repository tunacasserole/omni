Ext.define('Omni.store.Grade', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-Grade',
  model:         'Omni.model.Grade',
  autoLoad:      false,
  storeId:       'GradeStore',
  remoteFilter:  true,
  remoteSort:    true
});
