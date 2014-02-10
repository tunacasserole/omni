Ext.define('Desk.store.Checklist', {
  extend       : 'Ext.data.Store',
  alias        : 'store.desk-Checklist',
  model        : 'Desk.model.Checklist',
  autoLoad     : false,
  storeId      : 'ChecklistStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define('Desk.store.Checklist'