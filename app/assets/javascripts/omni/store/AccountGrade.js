Ext.define('Omni.store.AccountGrade', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-AccountGrade',
  model        : 'Omni.model.AccountGrade',
  autoLoad     : false,
  storeId      : 'AccountGradeStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define('Omni.store.AccountGrade'