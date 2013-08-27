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
        ,{
          xtype    : 'buildit-CardGroup',
          title    : 'Support',
          module   : 'notes',
          cards    : [
            {
              title: 'Notes',
              xtype: 'buildit-notes-Explorer',
              defaultSearch: { with:
                {
                  notable_type: {equal_to: 'Omni::Task'},
                  notable_id:   {equal_to: me.record.get('task_id')}
                }
              },
              showBadge: true
            },
            {
              title: 'Attachments',
              xtype: 'buildit-attachments-Explorer',
              defaultSearch: { with:
                {
                  attachable_type: {equal_to: 'Omni::Task'},
                  attachable_id:   {equal_to: me.record.get('task_id')}
                }
              },
              showBadge: true
            },
            {
              title:      'Audit',
              xtype:      'buildit-audits-Explorer',
              model:      'Omni::Task',
              model_id:   me.record.get('task_id')
            }
          ]
        }        
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