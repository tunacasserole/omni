Ext.define('Omni.view.tenders.Inspector', {

  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-tenders-Inspector',



  initComponent: function() {

    var me = this;


    // LABELS (Start) ======================================================================
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'tender_id',
        value: me.record.get('tender_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [{
          title: 'Profile',
          xtype: 'omni-tenders-Form'
        }, {
          title: 'Payments',
          xtype: 'omni-payments-Explorer',
          module: 'samples',
          defaultSearch: {
            with: {
              tender_id: {
                equal_to: me.record.get('tender_id')
              }
            }
          },
        showBadge: true
      }, {
        title: 'Till Activities',
        xtype: 'omni-till_activities-Explorer',
        module: 'samples',
        defaultSearch: {
          with: {
            tender_id: {
              equal_to: me.record.get('tender_id')
            }
          }
        },
        showBadge: true
      }, {
        title: 'Till Audits',
        xtype: 'omni-till_audits-Explorer',
        module: 'samples',
        defaultSearch: {
          with: {
            tender_id: {
              equal_to: me.record.get('tender_id')
            }
          }
        },
        showBadge: true
      }, {
        title: 'Till Details',
        xtype: 'omni-till_details-Explorer',
        module: 'samples',
        defaultSearch: {
          with: {
            tender_id: {
              equal_to: me.record.get('tender_id')
            }
          }
        },
        showBadge: true
        }
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title: 'Tender',
      subtitle: this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
