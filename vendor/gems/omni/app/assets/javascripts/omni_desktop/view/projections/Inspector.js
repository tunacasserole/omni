Ext.define('Omni.view.projections.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-projections-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'projection_id',
        value:      this.record.get('projection_id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-projections-Form'}
        ,{title: 'Details', xtype: 'omni-projection_details-Explorer',
           defaultSearch: { with: 
             {
               projection_id:   {equal_to: me.record.get('projection_id')}
             }
          }
        }
        ,{title: 'Locations', xtype: 'omni-projection_locations-Explorer',
           defaultSearch: { with: 
             {
               projection_id:   {equal_to: me.record.get('projection_id')}
             }
          }
        }
      ,{title: 'Logs', xtype: 'omni-logs-Explorer', module: 'audit',
          defaultSearch: { with: 
            {
              logable_type: {equal_to: 'Omni::Projection'},
              logable_id:   {equal_to: me.record.get('projection_id')}
            }
          }
        }
        ,{
          title: 'Notes',
          xtype: 'buildit-notes-Explorer',
          module: 'notes',                      
          defaultSearch: { with: 
            {
              notable_type: {equal_to: 'Omni::Projection'},
              notable_id:   {equal_to: me.record.get('projection_id')}
            }
          }
        }
        ,{
          title: 'Attachments',
          xtype: 'buildit-attachments-Explorer',
          module: 'attachments',                      
          defaultSearch: { with: 
            {
              attachable_type: {equal_to: 'Omni::Projection'},
              attachable_id:   {equal_to: me.record.get('projection_id')}
            }
          }
        }
        ,{
          title:      'Audit',
          xtype:      'buildit-audits-Explorer',
          module:     'audit',
          model:      'Omni::Projection',
          model_id:   me.record.get('projection_id')
        }            
        // ,{title: 'Location Summary', xtype: 'omni-projection_details-GroupedHeaderGrid'}        

      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Projection',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)

    this.callParent();
  }
});