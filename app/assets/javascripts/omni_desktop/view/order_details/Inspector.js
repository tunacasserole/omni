Ext.define('Omni.view.order_details.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-order_details-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'order_detail_id',
        value:    me.record.get('order_detail_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-order_details-Form'
        },
        {
          title: 'Notes',
          xtype: 'buildit-notes-Explorer'
        },
        {
          title: 'Pick Ticket',
          xtype: 'omni-pick_tickets-Explorer'
        },
        {
          title: 'Work Order',
          xtype: 'omni-work_orders-Explorer'
        },
        {
          title: 'SKU Detail',
          xtype: 'omni-skus-Explorer'
        },
        {
          title: 'Shipment Detail',
          xtype: 'omni-shipment_details-Explorer'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'OrderDetail',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
