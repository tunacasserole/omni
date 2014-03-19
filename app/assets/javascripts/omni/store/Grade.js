Ext.define('Omni.store.Grade', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-Grade',
  model        : 'Omni.model.Grade',
  autoLoad     : false,
  storeId      : 'GradeStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define('Omni.store.Grade'