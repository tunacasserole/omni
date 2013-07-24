Ext.define('Omni.store.Container', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-Container',
  model:         'Omni.model.Container',
  autoLoad:      false,
  storeId:       'ContainerStore',
  remoteFilter:  true,
  remoteSort:    true
});
