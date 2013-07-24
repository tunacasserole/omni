Ext.define('Omni.view.checklists.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-checklists-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'checklist_id',
        value:      this.record.get('checklist_id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-checklists-Form'}
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Checklist',
      subtitle:  this.record.get('checklist_id')
    });
    // TITLES (End)

    this.callParent();
  }
});