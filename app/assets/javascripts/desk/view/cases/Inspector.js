Ext.define('Desk.view.cases.Inspector', {
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.desk-cases-Inspector',

  initComponent: function() {
    var me = this;

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'case_id',
        value: this.record.get('case_id')
      },

      associativeSearch: {
        with: {
          case_id: {
            equal_to: this.record.get('case_id')
          }
        }
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [{
        title: 'Profile',
        xtype: 'desk-cases-Form'
      }, {
        title: 'Notes',
        xtype: 'buildit-notes-Explorer',
        defaultSearch: {
          with: {
            notable_type: {
              equal_to: 'Desk::Case'
            },
            notable_id: {
              equal_to: me.record.get('case_id')
            }
          }
        },
        showBadge: true
      }, {
        title: 'Help',
        xtype: 'desk-guides-Explorer',
        defaultSearch: {
          with: {
            guideable_type: {
              equal_to: 'Desk::Case'
            },
            guideable_id: {
              equal_to: me.record.get('case_id')
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
              equal_to: 'Desk::Case'
            },
            approvable_id: {
              equal_to: me.record.get('case_id')
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
              equal_to: 'Desk::Case'
            },
            attachable_id: {
              equal_to: me.record.get('case_id')
            }
          }
        },
        showBadge: true
      }]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Request',
      subtitle: this.record.get('display')
    });
    // TITLES (End)

    this.callParent();
  }
});
