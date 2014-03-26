Ext.define('Omni.view.picks.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-picks-Inspector',



  initComponent:function () {

    var me = this;


    // LABELS (Start) ======================================================================
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'pick_id',
        value:    me.record.get('pick_id')
      },
      associativeSearch: { with:
        {
          pick_id: {equal_to: me.record.get('pick_id')}
        }
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-picks-Form'
        },
        {
          title: 'Order Detail',
          xtype: 'omni-order_details-Explorer'
        },
        {title: 'Notes',             xtype: 'buildit-notes-Explorer',
          defaultSearch: { with:
            {
              notable_type: {equal_to: 'Omni::Pick'},
              notable_id:   {equal_to: me.record.get('pick_id')}
            }
          }
        },
        {title: 'Attachments',             xtype: 'buildit-attachments-Explorer',
          defaultSearch: { with:
            {
              attachable_type: {equal_to: 'Omni::Pick'},
              attachable_id:   {equal_to: me.record.get('pick_id')}
            }
          }
        },
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Pick',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});