Ext.define('Omni.store.PickTicket', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-PickTicket',
  model:         'Omni.model.PickTicket',
  autoLoad:      false,
  storeId:       'PickTicketStore',
  remoteFilter:  true,
  remoteSort:    true
});
