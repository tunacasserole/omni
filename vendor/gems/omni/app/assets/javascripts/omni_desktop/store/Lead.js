Ext.define('Omni.store.Lead', {
  extend: 'Ext.data.Store',
  alias: 'store.omni-Lead',
  model : 'Omni.model.Lead',
  autoLoad : false,
  storeId : 'LeadStore',
  remoteFilter : true,
  remoteSort : true
});