Ext.define('Omni.view.customers.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-customers-Inspector',



  initComponent:function () {

    var me = this;


    // LABELS (Start) ======================================================================
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'customer_id',
        value:    me.record.get('customer_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-customers-Form'
        },
        {
          title: 'Notes',
          xtype: 'buildit-notes-Explorer'
        },
        {
          title: 'Schools',
          xtype: 'omni-customer_accounts-Explorer'
        },
        {
          title: 'Orders',
          xtype: 'omni-orders-Explorer'
        },
        {
          title: 'Payments',
          xtype: 'omni-payments-Explorer'
        }
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Customer',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
