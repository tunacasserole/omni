Ext.define('Omni.store.ContainerDetail', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-ContainerDetail',
  model:         'Omni.model.ContainerDetail',
  autoLoad:      false,
  storeId:       'ContainerDetailStore',
  remoteFilter:  true,
  remoteSort:    true
});
