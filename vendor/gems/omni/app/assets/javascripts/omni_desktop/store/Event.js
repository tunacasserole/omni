Ext.define('Buildit.store.Event', {
  extend       : 'Ext.data.Store',
  alias        : 'store.buildit-Event',
  model        : 'Buildit.model.Event',
  autoLoad     : false,
  storeId      : 'EventStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define