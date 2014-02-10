Ext.define('Desk.view.features.Inspector', {
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.desk-features-Inspector',


  initComponent: function() {
    var me = this;

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'feature_id',
        value: this.record.get('feature_id')
      },

      associativeSearch: {
        with: {
          feature_id: {
            equal_to: this.record.get('feature_id')
          }
        }
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [{
        title: 'Profile',
        xtype: 'desk-features-Form'
      }, {
        title: 'Notes',
        xtype: 'buildit-notes-Explorer',
        defaultSearch: {
          with: {
            notable_type: {
              equal_to: 'Desk::Feature'
            },
            notable_id: {
              equal_to: me.record.get('feature_id')
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
              equal_to: 'Desk::Feature'
            },
            attachable_id: {
              equal_to: me.record.get('feature_id')
            }
          }
        },
        showBadge: true
      }, {
        title: 'Approvals',
        xtype: 'desk-approvals-Explorer',
        defaultSearch: {
          with: {
            approvable_type: {
              equal_to: 'Desk::Feature'
            },
            approvable_id: {
              equal_to: me.record.get('feature_id')
            }
          }
        },
        showBadge: true
      }, {
        title: 'Audit',
        xtype: 'buildit-audits-Explorer',
        model: 'Desk::Feature',
        model_id: me.record.get('feature_id')
      }]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Feature',
      subtitle: this.record.get('display')
    });
    // TITLES (End)

    this.callParent();
  }
});
