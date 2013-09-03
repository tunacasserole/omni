Ext.define('Omni.store.Checklist', {
  extend: 'Ext.data.Store',
  alias: 'store.omni-Checklist',
  model : 'Omni.model.Checklist',
  autoLoad : false,
  storeId : 'ChecklistStore',
  remoteFilter : true,
  remoteSort : true
});