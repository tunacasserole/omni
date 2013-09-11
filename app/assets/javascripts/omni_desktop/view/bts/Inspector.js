Ext.define('Omni.view.bts.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-bts-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'bts_id',
        value:      this.record.get('bts_id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-bts-Form'}
        ,{title: 'Results', xtype: 'omni-bts_details-Explorer', module: 'tollgates',
           defaultSearch: { with: 
             {
               bts_id:   {equal_to: me.record.get('bts_id')}
             }
          }
        }  
        // ,{title: 'Styles', xtype: 'omni-bts_styles-Explorer', module: 'cfars',
        //    defaultSearch: { with: 
        //      {
        //        bts_id:   {equal_to: me.record.get('bts_id')}
        //      }
        //   }
        // }          
        // ,{
        //   xtype    : 'buildit-CardGroup',
        //   title    : 'Support',
        //   module   : 'notes',
        //   cards    : [
        //     {
        //       title: 'Notes',
        //       xtype: 'buildit-notes-Explorer',
        //       defaultSearch: { with:
        //         {
        //           notable_type: {equal_to: 'Omni::Bts'},
        //           notable_id:   {equal_to: me.record.get('bts_id')}
        //         }
        //       },
        //       showBadge: true
        //     },
        //     {
        //       title: 'Attachments',
        //       xtype: 'buildit-attachments-Explorer',
        //       defaultSearch: { with:
        //         {
        //           attachable_type: {equal_to: 'Omni::Bts'},
        //           attachable_id:   {equal_to: me.record.get('bts_id')}
        //         }
        //       },
        //       showBadge: true
        //     },
        //     {
        //       title:      'Audit',
        //       xtype:      'buildit-audits-Explorer',
        //       model:      'Omni::Bts',
        //       model_id:   me.record.get('bts_id')
        //     }
        //   ]
        // }                      
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Back to School Report',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)

    this.callParent();
  }
});