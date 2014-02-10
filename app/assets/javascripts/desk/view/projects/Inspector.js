Ext.define('Desk.view.projects.Inspector', {
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.desk-projects-Inspector',


  initComponent: function() {
    var me = this;

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'project_id',
        value: this.record.get('project_id')
      },

      associativeSearch: {
        with: {
          project_id: {
            equal_to: this.record.get('project_id')
          }
        }
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [{
        title: 'Profile',
        xtype: 'desk-projects-Form'
      }, {
        title: 'Features',
        xtype: 'desk-features-Explorer',
        defaultSearch: {
          with: {
            project_id: {
              equal_to: me.record.get('project_id')
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
              equal_to: 'Desk::Project'
            },
            notable_id: {
              equal_to: me.record.get('project_id')
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
              equal_to: 'Desk::Project'
            },
            attachable_id: {
              equal_to: me.record.get('project_id')
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
              equal_to: 'Desk::Project'
            },
            approvable_id: {
              equal_to: me.record.get('project_id')
            }
          }
        },
        showBadge: true
      }, {
        title: 'Audit',
        xtype: 'buildit-audits-Explorer',
        model: 'Desk::Project',
        model_id: me.record.get('project_id')
      }]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Project',
      subtitle: this.record.get('display')
    });
    // TITLES (End)

    this.callParent();
  }
});
