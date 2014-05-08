Ext.define('Omni.view.purchases.Inspector', {
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-purchases-Inspector',


  initComponent: function() {
    var me = this;

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'purchase_id',
        value: this.record.get('purchase_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [{
        title: 'Profile',
        xtype: 'omni-purchases-Form'
      }, {
        title: 'Details',
        xtype: 'omni-purchase_details-Explorer',
        defaultSearch: {
          with: {
            purchase_id: {
              equal_to: me.record.get('purchase_id')
            }
          }
        },
        showBadge: true,
      }, {
        title: 'Approvals',
        xtype: 'desk-approvals-Explorer',
        defaultSearch: {
          with: {
            approvable_type: {
              equal_to: 'Omni::Purchase'
            },
            approvable_id: {
              equal_to: me.record.get('purchase_id')
            }
          }
        },
        showBadge: true,
      }, {
        title: 'Notes',
        xtype: 'buildit-notes-Explorer',
        defaultSearch: {
          with: {
            notable_type: {
              equal_to: 'Omni::Purchase'
            },
            notable_id: {
              equal_to: me.record.get('purchase_id')
            }
          }
        },
        showBadge: true
      }, {
        title: 'Attachments',
        xtype: 'buildit-attachments-Explorer',
        defaultSearch: {
          with: {
            attachable_type: {
              equal_to: 'Omni::Purchase'
            },
            attachable_id: {
              equal_to: me.record.get('purchase_id')
            }
          }
        },
        showBadge: true

      }]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Purchase',
      subtitle: this.record.get('display')
    });
    // TITLES (End)

    this.callParent();
  }
});
