Ext.define('Omni.view.transfers.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-transfers-Inspector',

  initComponent:function () {

    var me = this;

    // LABELS (Start) ======================================================================
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'transfer_id',
        value:    me.record.get('transfer_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [{
        title: 'Profile',
        xtype: 'omni-transfers-Form'
      }, {
        title: 'Allocation Details',
        xtype: 'omni-allocation_details-Explorer',
        module: 'samples',
        defaultSearch: {
          with: {
            transfer_id: {
              equal_to: me.record.get('transfer_id')
            }
          }
        },
        showBadge: true
    }, {
        title: 'Picks',
        xtype: 'omni-picks-Explorer',
        defaultSearch: {
          with: {
            pickable_type: {
              equal_to: 'Omni::Transfer'
            },
            pickable_id: {
              equal_to: me.record.get('transfer_id')
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
              equal_to: 'Omni::Transfer'
            },
            notable_id: {
              equal_to: me.record.get('transfer_id')
            }
          }
        },
        showBadge: true
      }]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Transfer',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)

    this.callParent();
  }

});
