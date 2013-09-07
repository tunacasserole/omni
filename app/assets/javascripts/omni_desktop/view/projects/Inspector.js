Ext.define('Omni.view.projects.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-projects-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'project_id',
        value:      this.record.get('project_id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-projects-Form'}
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Project',
      subtitle:  this.record.get('project_id')
    });
    // TITLES (End)

    this.callParent();
  }
});