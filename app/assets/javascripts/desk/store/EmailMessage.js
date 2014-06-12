Ext.define('Desk.store.EmailMessage', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-EmailMessage',
  model        : 'Desk.model.EmailMessage',
  autoLoad     : false,
  storeId      : 'EmailMessageStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define('Desk.store.EmailMessage'