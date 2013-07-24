Ext.define('Omni.store.Contact', {
  extend: 'Ext.data.Store',
  alias: 'store.omni-Contact',
  model : 'Omni.model.Contact',
  autoLoad : false,
  storeId : 'ContactStore',
  remoteFilter : true,
  remoteSort : true
});