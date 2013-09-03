Ext.define('Omni.view.leads.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-leads-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'lead_id',
        value:      this.record.get('lead_id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-leads-Form'}
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Lead',
      subtitle:  this.record.get('lead_id')
    });
    // TITLES (End)

    this.callParent();
  }
});