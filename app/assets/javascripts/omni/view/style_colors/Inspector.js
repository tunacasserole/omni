Ext.define('Omni.view.style_colors.Inspector', {

  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-style_colors-Inspector',



  initComponent: function() {

    var me = this;


    // LABELS (Start) ======================================================================
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'style_color_id',
        value: me.record.get('style_color_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [{
          title: 'Profile',
          xtype: 'omni-style_colors-Form'
        }, {
          title: 'Sizes',
          xtype: 'omni-style_color_sizes-Explorer',
          defaultSearch: {
            with: {
              style_color_id: {
                equal_to: me.record.get('style_color_id')
              }
            }
          }
        }, {
          title: 'Attachments',
          xtype: 'buildit-attachments-Explorer',
          defaultSearch: {
            with: {
              attachable_type: {
                equal_to: 'Omni::StyleColor'
              },
              attachable_id: {
                equal_to: me.record.get('style_color_id')
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
      title: 'Style Color',
      subtitle: this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
