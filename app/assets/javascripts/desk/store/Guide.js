Ext.define('Desk.store.Guide', {
  extend       : 'Ext.data.Store',
  alias        : 'store.desk-Guide',
  model        : 'Desk.model.Guide',
  autoLoad     : false,
  storeId      : 'GuideStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define('Desk.store.Guide'