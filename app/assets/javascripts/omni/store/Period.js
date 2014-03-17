Ext.define('Omni.store.Period', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-Period',
  model        : 'Omni.model.Period',
  autoLoad     : false,
  storeId      : 'PeriodStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define