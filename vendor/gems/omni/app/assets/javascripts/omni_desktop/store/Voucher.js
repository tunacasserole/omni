Ext.define('Omni.store.Voucher', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-Voucher',
  model:         'Omni.model.Voucher',
  autoLoad:      false,
  storeId:       'VoucherStore',
  remoteFilter:  true,
  remoteSort:    true
});
