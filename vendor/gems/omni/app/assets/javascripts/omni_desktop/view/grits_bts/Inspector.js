Ext.define('Omni.view.grits_bts.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-grits_bts-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'tg_sku_id',
        value:      this.record.get('tg_sku_id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-grits_bts-Form'}
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Grits Bts',
      subtitle:  this.record.get('tg_sku_id')
    });
    // TITLES (End)

    this.callParent();
  }
});