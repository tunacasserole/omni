Ext.define('Omni.store.MarkOrderReport', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-MarkOrderReport',
  model        : 'Omni.model.MarkOrderReport',
  autoLoad     : false,
  storeId      : 'MarkOrderReportStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define