Ext.define('Omni.view.containers.Inspector', {

  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-containers-Inspector',

  initComponent: function() {

    var me = this;

    // LABELS (Start) ======================================================================
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'container_id',
        value: me.record.get('container_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [{
          title: 'Profile',
          xtype: 'omni-containers-Form'
        }, {
          title: 'Details',
          xtype: 'omni-container_details-Explorer',
          defaultSearch: {
            with: {
              container_id: {
                equal_to: me.record.get('container_id')
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
                equal_to: 'Omni::Container'
              },
              notable_id: {
                equal_to: me.record.get('container_id')
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
      title: 'Container',
      subtitle: this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
