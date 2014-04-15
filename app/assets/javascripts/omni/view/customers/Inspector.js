Ext.define('Omni.view.customers.Inspector', {

  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-customers-Inspector',

  initComponent: function() {

    var me = this;

    // LABELS (Start) ======================================================================
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'customer_id',
        value: me.record.get('customer_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [{
        title: 'Profile',
        xtype: 'omni-customers-Form'
      }, {
        title: 'Orders',
        xtype: 'omni-orders-Explorer',
        module: 'contracts',
        defaultSearch: {
          with: {
            customer_id: {
              equal_to: me.record.get('customer_id')
            }
          }
        },
        showBadge: true
      }, {
        title: 'Payments',
        xtype: 'omni-payments-Explorer',
        module: 'contracts',
        defaultSearch: {
          with: {
            customer_id: {
              equal_to: me.record.get('customer_id')
            }
          }
        },
        showBadge: true
      }, {
        title: 'Schools',
        xtype: 'omni-customer_accounts-Explorer',
        module: 'contracts',
        defaultSearch: {
          with: {
            customer_id: {
              equal_to: me.record.get('customer_id')
            }
          }
        },
        showBadge: true
      }, {
        title: 'Vouchers',
        xtype: 'omni-vouchers-Explorer',
        module: 'contracts',
        defaultSearch: {
          with: {
            customer_id: {
              equal_to: me.record.get('customer_id')
            }
          }
        },
        showBadge: true
      }, {
        title: 'Notes',
        xtype: 'buildit-notes-Explorer',
        defaultSearch: {
          with: {
            notable_type: {
              equal_to: 'Omni::Customer'
            },
            notable_id: {
              equal_to: me.record.get('customer_id')
            }
          }
        },
        showBadge: true
      }]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Customer',
      subtitle: this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
