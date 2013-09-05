Ext.define('Omni.view.rms_bts.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-rms_bts-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'ItemID',
        value:      this.record.get('ItemID')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-rms_bts-Form'}
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Rms Bts',
      subtitle:  this.record.get('ItemID')
    });
    // TITLES (End)

    this.callParent();
  }
});