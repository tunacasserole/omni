Ext.define('Omni.store.Donation', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-Donation',
  model        : 'Omni.model.Donation',
  autoLoad     : false,
  storeId      : 'DonationStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define('Omni.store.Donation'