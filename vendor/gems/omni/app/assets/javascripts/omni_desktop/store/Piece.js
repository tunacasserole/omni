Ext.define('Omni.store.Piece', {
  extend       : 'Ext.data.Store',
  alias        : 'store.omni-Piece',
  model        : 'Omni.model.Piece',
  autoLoad     : false,
  storeId      : 'PieceStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define