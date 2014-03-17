Ext.define('Omni.view.accounts.Inspector', {
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-accounts-Inspector',


  initComponent: function() {
    var me = this;

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'account_id',
        value: this.record.get('account_id')
      },

      associativeSearch: {
        with: {
          account_id: {
            equal_to: this.record.get('account_id')
          }
        }
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [{
        title: 'Profile',
        xtype: 'omni-accounts-Form'
      }, {
        title: 'Contacts',
        xtype: 'omni-contacts-Explorer',
        module: 'contacts',
        defaultSearch: {
          with: {
            account_id: {
              equal_to: me.record.get('account_id')
            }
          }
        },
        showBadge: true
      }, {
        title: 'Contracts',
        xtype: 'omni-contracts-Explorer',
        module: 'contracts',
        defaultSearch: {
          with: {
            account_id: {
              equal_to: me.record.get('account_id')
            }
          }
        },
        showBadge: true
      }, {
        title: 'Donations',
        xtype: 'omni-donations-Explorer',
        module: 'donations',
        defaultSearch: {
          with: {
            account_id: {
              equal_to: me.record.get('account_id')
            }
          }
        },
        showBadge: true
      }, {
        title: 'Grades',
        xtype: 'omni-account_grades-Explorer',
        module: 'account_grades',
        defaultSearch: {
          with: {
            account_id: {
              equal_to: me.record.get('account_id')
            }
          }
        },
        showBadge: true
      }, {
        title: 'Enrollment',
        xtype: 'omni-enrollments-Explorer',
        module: 'enrollment',
        defaultSearch: {
          with: {
            account_id: {
              equal_to: me.record.get('account_id')
            }
          }
        },
        showBadge: true
      }, {
        title: 'Tax Authorities',
        xtype: 'omni-account_tax_authorities-Explorer',
        module: 'tax_authorities',
        defaultSearch: {
          with: {
            account_id: {
              equal_to: me.record.get('account_id')
            }
          }
        },
        showBadge: true
      }, {
        title: 'Uniforms',
        xtype: 'omni-uniforms-Explorer',
        module: 'uniforms',
        defaultSearch: {
          with: {
            account_id: {
              equal_to: me.record.get('account_id')
            }
          }
        },
        showBadge: true
      }, {
        xtype: 'buildit-CardGroup',
        title: 'Support',
        // module: 'notes',
        cards: [{
          title: 'Notes',
          xtype: 'buildit-notes-Explorer',
          defaultSearch: {
            with: {
              notable_type: {
                equal_to: 'Omni::Account'
              },
              notable_id: {
                equal_to: me.record.get('account_id')
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
                equal_to: 'Omni::Account'
              },
              attachable_id: {
                equal_to: me.record.get('account_id')
              }
            }
          },
          showBadge: true
          // }, {
          //   title: 'Audit',
          //   xtype: 'buildit-audits-Explorer',
          //   model: 'Omni::Account',
          //   model_id: me.record.get('account_id')
        }]
      }]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Account',
      subtitle: this.record.get('account_name')
    });
    // TITLES (End)

    this.callParent();
  }
});
