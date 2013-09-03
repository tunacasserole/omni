Ext.define('Omni.store.Style', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-Style',
  model:         'Omni.model.Style',
  autoLoad:      false,
  storeId:       'StyleStore',
  remoteFilter:  true,
  remoteSort:    true,

  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  }
});
