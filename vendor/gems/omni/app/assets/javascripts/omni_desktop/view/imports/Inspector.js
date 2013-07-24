Ext.define('Omni.view.imports.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-imports-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'import_id',
        value:      this.record.get('import_id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-imports-Form',           module: 'cfars'},
        {title: 'Logs', xtype: 'omni-logs-Explorer', module: 'samples',
          defaultSearch: { with: 
            {
              logable_type: {equal_to: 'Omni::Import'},
              logable_id:   {equal_to: me.record.get('import_id')}
            }
          }
        },        
        {
          title: 'Notes',
          xtype: 'buildit-notes-Explorer',
          module: 'notes',                      
          defaultSearch: { with: 
            {
              notable_type: {equal_to: 'Omni::Import'},
              notable_id:   {equal_to: me.record.get('import_id')}
            }
          }
        },
        {
          title: 'Attachments',
          xtype: 'buildit-attachments-Explorer',
          module: 'attachments',                      
          defaultSearch: { with: 
            {
              attachable_type: {equal_to: 'Omni::Import'},
              attachable_id:   {equal_to: me.record.get('import_id')}
            }
          }
        },
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title: 'Profile',
      subtitle: 'Prepare import jobs',
      newTitle: 'Import',
      newSubtitle: 'Complete the following to create a new Import'
    });
    // TITLES (End)

    this.callParent();
  }

});
