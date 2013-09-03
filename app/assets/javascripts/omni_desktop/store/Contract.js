Ext.define('Omni.store.Contract', {
  extend: 'Ext.data.Store',
  alias: 'store.omni-Contract',
  model : 'Omni.model.Contract',
  autoLoad : false,
  storeId : 'ContractStore',
  remoteFilter : true,
  remoteSort : true
});