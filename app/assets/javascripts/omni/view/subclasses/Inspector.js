Ext.define('Omni.view.subclasses.Inspector', {

  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-subclasses-Inspector',



  initComponent: function() {

    var me = this;


    // LABELS (Start) ======================================================================
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'subclass_id',
        value: me.record.get('subclass_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [{
          title: 'Profile',
          xtype: 'omni-subclasses-Form'
        }, {
          title: 'Styles',
          xtype: 'omni-styles-Explorer',
          module: 'cfars',
          defaultSearch: {
            with: {
              subclass_id: {
                equal_to: me.record.get('subclass_id')
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
                equal_to: 'Omni::Subclass'
              },
              attachable_id: {
                equal_to: me.record.get('subclass_id')
              }
            }
          },
          showBadge: true
        },

      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title: 'Subclass',
      subtitle: this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
