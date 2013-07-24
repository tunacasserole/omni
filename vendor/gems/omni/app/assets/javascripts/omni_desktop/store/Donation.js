Ext.define('Omni.store.Donation', {
  extend: 'Ext.data.Store',
  alias: 'store.omni-Donation',
  model : 'Omni.model.Donation',
  autoLoad : false,
  storeId : 'DonationStore',
  remoteFilter : true,
  remoteSort : true
});