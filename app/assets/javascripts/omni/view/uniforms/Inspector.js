Ext.define('Omni.view.uniforms.Inspector', {
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-uniforms-Inspector',


  initComponent: function() {
    var me = this;

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'uniform_id',
        value: this.record.get('uniform_id')
      },

      associativeSearch: {
        with: {
          uniform_id: {
            equal_to: this.record.get('uniform_id')
          }
        }
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [{
        title: 'Profile',
        xtype: 'omni-uniforms-Form'
      }, {
        title: 'Details',
        xtype: 'omni-uniform_details-Explorer',
        // module: 'contacts',
        defaultSearch: {
          with: {
            uniform_id: {
              equal_to: me.record.get('uniform_id')
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
              equal_to: 'Omni::Uniform'
            },
            approvable_id: {
              equal_to: me.record.get('uniform_id')
            }
          }
        },
        showBadge: true
      // }, {
      //   title: 'Lookups',
      //   xtype: 'omni-uniform_lookups-Explorer',
      //   module: 'lookups',
      //   defaultSearch: {
      //     with: {
      //       uniform_id: {
      //         equal_to: me.record.get('uniform_id')
      //       }
      //     }
      //   },
      //   showBadge: true
      }, {
        xtype: 'buildit-CardGroup',
        title: 'Support',
        module: 'notes',
        cards: [{
          title: 'Notes',
          xtype: 'buildit-notes-Explorer',
          defaultSearch: {
            with: {
              notable_type: {
                equal_to: 'Omni::Uniform'
              },
              notable_id: {
                equal_to: me.record.get('uniform_id')
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
                equal_to: 'Omni::Uniform'
              },
              attachable_id: {
                equal_to: me.record.get('uniform_id')
              }
            }
          },
          showBadge: true
        }]
      }]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Uniform',
      subtitle: this.record.get('account_display') + '-' + this.record.get('school_year')
    });
    // TITLES (End)

    this.callParent();
  }
});
