Ext.define('Omni.store.MarkOutlet', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-MarkOutlet',
  model        : 'Omni.model.MarkOutlet',
  autoLoad     : false,
  storeId      : 'MarkOutletStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define