Ext.define('Omni.view.orders.Inspector', {
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-orders-Inspector',


  initComponent: function() {
    var me = this;

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'order_id',
        value: this.record.get('order_id')
      },

      associativeSearch: {
        with: {
          order_id: {
            equal_to: this.record.get('order_id')
          }
        }
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [{
        title: 'Profile',
        xtype: 'omni-orders-Form'
      }, {
        title: 'Details',
        xtype: 'omni-order_details-Explorer',
        module: 'samples',
        defaultSearch: {
          with: {
            order_id: {
              equal_to: me.record.get('order_id')
            }
          }
        },
        showBadge: true
      }, {
        title: 'Payments',
        xtype: 'omni-payments-Explorer',
        module: 'samples',
        defaultSearch: {
          with: {
            order_id: {
              equal_to: me.record.get('order_id')
            }
          }
        },
        showBadge: true
      }]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Order',
      subtitle: this.record.get('display_as')
    });
    // TITLES (End)

    this.callParent();
  }
});
