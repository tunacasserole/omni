Ext.define('Omni.store.Issue', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-Issue',
  model        : 'Omni.model.Issue',
  autoLoad     : false,
  storeId      : 'IssueStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define