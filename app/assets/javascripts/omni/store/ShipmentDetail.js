Ext.define('Omni.store.ShipmentDetail', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-ShipmentDetail',
  model        : 'Omni.model.ShipmentDetail',
  autoLoad     : false,
  storeId      : 'ShipmentDetailStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define('Omni.store.ShipmentDetail'