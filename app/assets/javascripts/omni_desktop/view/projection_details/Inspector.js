Ext.define('Omni.view.projection_details.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-projection_details-Inspector',


  initComponent:function(){
    var me = this;

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'projection_detail_id',
        value:      this.record.get('projection_detail_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        { title: 'Profile',           xtype: 'omni-projection_details-Form'},
        {
          title: 'Notes',
          xtype: 'buildit-notes-Explorer',
          defaultSearch: { with:
            {
              notable_type: {equal_to: 'Omni::ProjectionDetail'},
              notable_id:   {equal_to: me.record.get('projection_detail_id')}
            }
          },
          showBadge: true
        }
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Projection Detail',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)

    this.callParent();
  }
});
