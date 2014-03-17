Ext.define('Omni.store.Enrollment', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-Enrollment',
  model        : 'Omni.model.Enrollment',
  autoLoad     : false,
  storeId      : 'EnrollmentStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define('Omni.store.Enrollment'