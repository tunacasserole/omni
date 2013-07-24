Ext.define('Omni.store.LocationTaxHoliday', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-LocationTaxHoliday',
  model:         'Omni.model.LocationTaxHoliday',
  autoLoad:      false,
  storeId:       'LocationTaxHolidayStore',
  remoteFilter:  true,
  remoteSort:    true
});
