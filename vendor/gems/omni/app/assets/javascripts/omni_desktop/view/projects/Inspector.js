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
        ,{title: 'Tasks', xtype: 'omni-tasks-Explorer', module: 'tasks',
           defaultSearch: { with: 
             {
               project_id:   {equal_to: me.record.get('project_id')}
             }
          },
          showBadge: true
        }        
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
                  notable_type: {equal_to: 'Omni::Project'},
                  notable_id:   {equal_to: me.record.get('project_id')}
                }
              },
              showBadge: true
            },
            {
              title: 'Attachments',
              xtype: 'buildit-attachments-Explorer',
              defaultSearch: { with:
                {
                  attachable_type: {equal_to: 'Omni::Project'},
                  attachable_id:   {equal_to: me.record.get('project_id')}
                }
              },
              showBadge: true
            },
            {
              title:      'Audit',
              xtype:      'buildit-audits-Explorer',
              model:      'Omni::Project',
              model_id:   me.record.get('project_id')
            }
          ]
        }        
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Project',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)

    this.callParent();
  }
});