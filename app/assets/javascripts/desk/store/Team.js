Ext.define('Desk.store.Team', {
  extend       : 'Ext.data.Store',
  alias        : 'store.desk-Team',
  model        : 'Desk.model.Team',
  autoLoad     : false,
  storeId      : 'TeamStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define('Desk.store.Team'