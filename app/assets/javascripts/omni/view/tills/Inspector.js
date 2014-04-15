Ext.define('Omni.view.tills.Inspector', {

  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-tills-Inspector',



  initComponent: function() {

    var me = this;


    // LABELS (Start) ======================================================================
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'till_id',
        value: me.record.get('till_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [{
        title: 'Profile',
        xtype: 'omni-tills-Form'
      }, {
        title: 'Details',
        xtype: 'omni-till_details-Explorer',
        module: 'samples',
        defaultSearch: {
          with: {
            till_id: {
              equal_to: me.record.get('till_id')
            }
          }
        },
        showBadge: true
      }, {
        title: 'Activities',
        xtype: 'omni-till_activities-Explorer',
        module: 'samples',
        defaultSearch: {
          with: {
            till_id: {
              equal_to: me.record.get('till_id')
            }
          }
        },
        showBadge: true
      }, {
        title: 'Audits',
        xtype: 'omni-till_audits-Explorer',
        module: 'samples',
        defaultSearch: {
          with: {
            till_id: {
              equal_to: me.record.get('till_id')
            }
          }
        },
        showBadge: true
      }]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title: 'Till',
      subtitle: this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
