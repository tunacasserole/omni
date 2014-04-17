Ext.define('Omni.view.order_details.Inspector', {

    extend: 'Buildit.ux.inspector.Panel',
    alias: 'widget.omni-order_details-Inspector',



    initComponent: function() {

      var me = this;


      // LABELS (Start) ======================================================================
      // LABELS (End)

      // INSPECTOR INIT (Start) ==============================================================
      Ext.applyIf(this, {
        associativeFilter: {
          property: 'order_detail_id',
          value: me.record.get('order_detail_id')
        }
      });
      // INSPECTOR INIT (End)

      // CARDS (Start) =======================================================================
      Ext.apply(this, {
          cards: [{
              title: 'Profile',
              xtype: 'omni-order_details-Form'
            },
          {
            title: 'Picks',
            xtype: 'omni-picks-Explorer',
            module: 'samples',
            defaultSearch: {
              with: {
                pickable_type: {
                  equal_to: 'Omni::OrderDetail'
                },
                pickable_id: {
                  equal_to: me.record.get('order_detail_id')
                }
              }
            },
            showBadge: true
          },
          // {
          //   title: 'Pick Ticket',
          //   xtype: 'omni-picks-Explorer'
          // },
          // {
          //   title: 'Work Order',
          //   xtype: 'omni-jobs-Explorer'
          // },
          // {
          //   title: 'SKU Detail',
          //   xtype: 'omni-skus-Explorer'
          // },
          // {
          //   title: 'Shipment Detail',
          //   xtype: 'omni-shipment_details-Explorer'
          // },
          {
            title: 'Notes',
            xtype: 'buildit-notes-Explorer',
            defaultSearch: {
              with: {
                notable_type: {
                  equal_to: 'Omni::OrderDetail'
                },
                notable_id: {
                  equal_to: me.record.get('order_detail_id')
                }
              }
            },
            showBadge: true
          }]
      });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'OrderDetail',
      subtitle: this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
