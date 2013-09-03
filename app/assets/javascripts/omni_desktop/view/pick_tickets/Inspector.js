Ext.define('Omni.view.pick_tickets.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-pick_tickets-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'pick_ticket_id',
        value:    me.record.get('pick_ticket_id')
      },
      associativeSearch: { with:
        {
          pick_ticket_id: {equal_to: me.record.get('pick_ticket_id')}
        }
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-pick_tickets-Form'
        },
        {
          title: 'Order Detail',
          xtype: 'omni-order_details-Explorer'
        },
        {title: 'Notes',             xtype: 'buildit-notes-Explorer',                      
          defaultSearch: { with: 
            {
              notable_type: {equal_to: 'Omni::PickTicket'},
              notable_id:   {equal_to: me.record.get('pick_ticket_id')}
            }
          }
        },
        {title: 'Attachments',             xtype: 'buildit-attachments-Explorer',                      
          defaultSearch: { with: 
            {
              attachable_type: {equal_to: 'Omni::PickTicket'},
              attachable_id:   {equal_to: me.record.get('pick_ticket_id')}
            }
          }
        },
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'PickTicket',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
