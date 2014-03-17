Ext.define('Omni.view.orders.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-orders-Inspector',



  initComponent:function () {

    var me = this;


    // LABELS (Start) ======================================================================
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'order_id',
        value:    me.record.get('order_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-orders-Form'
        },
        {
          title: 'Notes',
          xtype: 'buildit-notes-Explorer'
        },
        {
          title: 'Details',
          xtype: 'omni-order_details-Explorer'
        },
        {
          title: 'Payments',
          xtype: 'omni-payments-Explorer'
        },
        {
          title: 'Pick Tickets',
          xtype: 'omni-picks-Explorer'
        },
        {
          title: 'Work Orders',
          xtype: 'omni-jobs-Explorer'
        },
        {
          title: 'Shipments',
          xtype: 'omni-shipments-Explorer'
        }
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Order',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
