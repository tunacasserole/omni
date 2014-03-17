Ext.define('Omni.store.TillAudit', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-TillAudit',
  model:         'Omni.model.TillAudit',
  autoLoad:      false,
  storeId:       'TillAuditStore',
  remoteFilter:  true,
  remoteSort:    true
});
