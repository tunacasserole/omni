Ext.define('Omni.store.SiteEnrollment', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-SiteEnrollment',
  model:         'Omni.model.SiteEnrollment',
  autoLoad:      false,
  storeId:       'SiteEnrollmentStore',
  remoteFilter:  true,
  remoteSort:    true
});
