Ext.define('Omni.view.mark_transfers.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-mark_transfers-Inspector',


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
        {title: 'Profile',           xtype: 'omni-mark_transfers-Form'}
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Mark Transfer',
      subtitle:  this.record.get('id')
    });
    // TITLES (End)

    this.callParent();
  }
});