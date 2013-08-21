Ext.define('Omni.view.tasks.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-tasks-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'task_id',
        value:      this.record.get('task_id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-tasks-Form'}
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Task',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)

    this.callParent();
  }
});