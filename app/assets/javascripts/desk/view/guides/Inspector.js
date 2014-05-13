Ext.define('Desk.view.guides.Inspector', {
    extend: 'Buildit.ux.inspector.Panel',
    alias: 'widget.desk-guides-Inspector',


    initComponent: function() {
      var me = this;

      // INSPECTOR INIT (Start) ==============================================================
      Ext.applyIf(this, {
        associativeFilter: {
          property: 'guide_id',
          value: this.record.get('guide_id')
        },

        associativeSearch: {
          with: {
            guide_id: {
              equal_to: this.record.get('guide_id')
            }
          }
        }
      });
      // INSPECTOR INIT (End)

      // CARDS (Start) =======================================================================
      Ext.apply(this, {
          cards: [{
              title: 'Profile',
              xtype: 'desk-guides-Form'
            }
            title: 'Notes',
            xtype: 'buildit-notes-Explorer',
            defaultSearch: {
              with: {
                notable_type: {
                  equal_to: 'Desk::Guide'
                },
                notable_id: {
                  equal_to: me.record.get('guide_id')
                }
              }
            },
            showBadge: true
          },
          {
            title: 'Attachments',
            xtype: 'buildit-attachments-Explorer',
            defaultSearch: {
              with: {
                attachable_type: {
                  equal_to: 'Desk::Guide'
                },
                attachable_id: {
                  equal_to: me.record.get('guide_id')
                }
              }
            },
            showBadge: true
          }]
      });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Guide',
      subtitle: this.record.get('display_as')
    });
    // TITLES (End)

    this.callParent();
  }
});
