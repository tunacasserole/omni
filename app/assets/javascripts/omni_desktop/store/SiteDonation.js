Ext.define('Omni.store.SiteDonation', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-SiteDonation',
  model:         'Omni.model.SiteDonation',
  autoLoad:      false,
  storeId:       'SiteDonationStore',
  remoteFilter:  true,
  remoteSort:    true
});
