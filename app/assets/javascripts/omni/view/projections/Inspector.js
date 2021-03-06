Ext.define('Omni.view.projections.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-projections-Inspector',


  initComponent:function(){
    var me = this;

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'projection_id',
        value:      this.record.get('projection_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-projections-Form'}
        ,{title: 'Details', xtype: 'omni-projection_details-Explorer',
           defaultSearch: { with:
             {
               projection_id:   {equal_to: me.record.get('projection_id')}
             }
          },
          showBadge: true
        }
        // ,{title: 'History', xtype: 'omni-projection_details-History',
        //    defaultSearch: { with:
        //      {
        //        projection_id:   {equal_to: me.record.get('projection_id')}
        //      }
        //   },
        //   showBadge: true
        // }
        // ,{title: 'Locations', xtype: 'omni-projection_locations-Explorer',
        //    defaultSearch: { with:
        //      {
        //        projection_id:   {equal_to: me.record.get('projection_id')}
        //      }
        //   },
        //   showBadge: true
        // }
        // ,{title: 'Location Summary', xtype: 'omni-projection_details-GroupedHeaderGrid'}

      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Projection',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)

    this.callParent();
  }
});
