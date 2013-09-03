Ext.define('Omni.view.programs.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-programs-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'program_id',
        value:    me.record.get('program_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-programs-Form'
        }
        ,{title: 'Products', xtype: 'omni-program_products-Explorer', module: 'contacts',
           defaultSearch: { with: 
             {
               program_id:   {equal_to: me.record.get('program_id')}
             }
          }
        }        
        ,{title: 'Styles', xtype: 'omni-program_styles-Explorer', module: 'samples',
           defaultSearch: { with: 
             {
               program_id:   {equal_to: me.record.get('program_id')}
             }
          }
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
                  notable_type: {equal_to: 'Omni::Style'},
                  notable_id:   {equal_to: me.record.get('style_id')}
                }
              },
              showBadge: true
            },
            {
              title: 'Attachments',
              xtype: 'buildit-attachments-Explorer',
              defaultSearch: { with:
                {
                  attachable_type: {equal_to: 'Omni::Style'},
                  attachable_id:   {equal_to: me.record.get('style_id')}
                }
              },
              showBadge: true
            },
            {
              title:      'Audit',
              xtype:      'buildit-audits-Explorer',
              model:      'Omni::Style',
              model_id:   me.record.get('style_id')
            }
          ]
        }        
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Program',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
