Ext.define('Omni.view.mark_order_reports.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-mark_order_reports-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'id',
        value:      this.record.get('id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-mark_order_reports-Form'}
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Mark Order Report',
      subtitle:  this.record.get('id')
    });
    // TITLES (End)

    this.callParent();
  }
});