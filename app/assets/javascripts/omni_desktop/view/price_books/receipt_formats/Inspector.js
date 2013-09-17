Ext.define('Omni.view.receipt_formats.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-receipt_formats-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'receipt_format_id',
        value:      this.record.get('receipt_format_id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-receipt_formats-Form'}
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Receipt Format',
      subtitle:  this.record.get('receipt_format_id')
    });
    // TITLES (End)

    this.callParent();
  }
});