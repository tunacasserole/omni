Ext.define('Omni.view.vouchers.Inspector', {
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-vouchers-Inspector',


  initComponent: function() {
    var me = this;

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'voucher_id',
        value: this.record.get('voucher_id')
      },

      associativeSearch: {
        with: {
          voucher_id: {
            equal_to: this.record.get('voucher_id')
          }
        }
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [{
        title: 'Profile',
        xtype: 'omni-vouchers-Form'
      }, {
        title: 'Payments',
        xtype: 'omni-payments-Explorer',
        defaultSearch: {
          with: {
            voucher_id: {
              equal_to: me.record.get('voucher_id')
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
              equal_to: 'Omni::Voucher'
            },
            notable_id: {
              equal_to: me.record.get('voucher_id')
            }
          }
        },
        showBadge: true
      }]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Voucher',
      subtitle: this.record.get('display_as')
    });
    // TITLES (End)

    this.callParent();
  }
});
