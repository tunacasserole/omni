Ext.define('Omni.view.transfer_reasons.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-transfer_reasons-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'transfer_reason_id',
        value:      this.record.get('transfer_reason_id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-transfer_reasons-Form'}
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Transfer Reason',
      subtitle:  this.record.get('transfer_reason_id')
    });
    // TITLES (End)

    this.callParent();
  }
});