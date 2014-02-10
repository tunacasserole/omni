Ext.define('Desk.store.Approval', {
  extend       : 'Ext.data.Store',
  alias        : 'store.desk-Approval',
  model        : 'Desk.model.Approval',
  autoLoad     : false,
  storeId      : 'ApprovalStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define('Desk.store.Approval'