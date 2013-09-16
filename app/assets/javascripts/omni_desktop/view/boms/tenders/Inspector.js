Ext.define('Omni.view.tenders.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-tenders-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'tender_id',
        value:      this.record.get('tender_id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-tenders-Form'}
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Tender',
      subtitle:  this.record.get('tender_id')
    });
    // TITLES (End)

    this.callParent();
  }
});