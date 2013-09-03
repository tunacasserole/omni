Ext.define('Omni.store.Task', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-Task',
  model        : 'Omni.model.Task',
  autoLoad     : false,
  storeId      : 'TaskStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define