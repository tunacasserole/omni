Ext.define('Omni.store.TillActivity', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-TillActivity',
  model:         'Omni.model.TillActivity',
  autoLoad:      false,
  storeId:       'TillActivityStore',
  remoteFilter:  true,
  remoteSort:    true
});
