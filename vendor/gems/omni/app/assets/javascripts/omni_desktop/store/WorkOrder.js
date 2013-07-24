Ext.define('Omni.store.WorkOrder', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-WorkOrder',
  model:         'Omni.model.WorkOrder',
  autoLoad:      false,
  storeId:       'WorkOrderStore',
  remoteFilter:  true,
  remoteSort:    true
});
