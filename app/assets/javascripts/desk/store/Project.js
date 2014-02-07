Ext.define('Desk.store.Project', {
  extend       : 'Ext.data.Store',
  alias        : 'store.desk-Project',
  model        : 'Desk.model.Project',
  autoLoad     : false,
  storeId      : 'ProjectStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define('Desk.store.Project'