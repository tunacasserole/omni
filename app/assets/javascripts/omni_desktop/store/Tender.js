Ext.define('Omni.store.Tender', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-Tender',
  model        : 'Omni.model.Tender',
  autoLoad     : false,
  storeId      : 'TenderStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define