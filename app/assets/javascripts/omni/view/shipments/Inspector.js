Ext.define('Omni.view.shipments.Inspector', {
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-shipments-Inspector',


  initComponent: function() {
    var me = this;

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'shipment_id',
        value: this.record.get('shipment_id')
      },

      associativeSearch: {
        with: {
          shipment_id: {
            equal_to: this.record.get('shipment_id')
          }
        }
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [{
        title: 'Profile',
        xtype: 'omni-shipments-Form'
      }, {
        title: 'Details',
        xtype: 'omni-shipment_details-Explorer',
        module: 'samples',
        defaultSearch: {
          with: {
            shipment_id: {
              equal_to: me.record.get('shipment_id')
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
              equal_to: 'Omni::Shipment'
            },
            notable_id: {
              equal_to: me.record.get('shipment_id')
            }
          }
        },
        showBadge: true
      }]
    });
    // CARDS (End)
    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Shipment',
      subtitle: this.record.get('display_as')
    });
    // TITLES (End)

    this.callParent();
  }
});
