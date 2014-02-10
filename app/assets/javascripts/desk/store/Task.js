Ext.define('Desk.store.Task', {
  extend       : 'Ext.data.Store',
  alias        : 'store.desk-Task',
  model        : 'Desk.model.Task',
  autoLoad     : false,
  storeId      : 'TaskStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define('Desk.store.Task'