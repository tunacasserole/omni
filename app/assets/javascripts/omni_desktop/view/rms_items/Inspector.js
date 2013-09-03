Ext.define('Omni.view.rms_items.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-rms_items-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'ID',
        value:      this.record.get('ID')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-rms_items-Form'}
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Rms Item',
      subtitle:  this.record.get('ID')
    });
    // TITLES (End)

    this.callParent();
  }
});