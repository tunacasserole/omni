Ext.define('Omni.store.ProjectionLocation', {
  extend: 'Ext.data.Store',
  alias: 'store.omni-ProjectionLocation',
  model : 'Omni.model.ProjectionLocation',
  autoLoad : false,
  storeId : 'ProjectionLocationStore',
  remoteFilter : true,
  remoteSort : true
});