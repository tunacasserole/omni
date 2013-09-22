Ext.define('Omni.view.locations.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-locations-Inspector',



  initComponent:function () {

    var me = this;


    // LABELS (Start) ======================================================================
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'location_id',
        value:    me.record.get('location_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-locations-Form'
        }
        ,{
          title: 'Users',
          xtype: 'omni-location_users-Explorer',
           defaultSearch: { with:
             {
               location_id:   {equal_to: me.record.get('location_id')}
             }
          }
        }
        ,{title: 'Areas', xtype: 'omni-areas-Explorer',
           defaultSearch: { with:
             {
               location_id:   {equal_to: me.record.get('location_id')}
             }
          }
        }
        // ,{title: 'Projection Details', xtype: 'omni-projection_details-Explorer',
        //    defaultSearch: { with:
        //      {
        //        location_id:   {equal_to: me.record.get('location_id')}
        //      }
        //   }
        // }
        // ,{
        //   title: 'Schools',
        //   xtype: 'omni-sites-Explorer',
        //    defaultSearch: { with:
        //      {
        //        location_id:   {equal_to: me.record.get('location_id')}
        //      }
        //   }
        // }
        // ,{
        //   title: 'Areas',
        //   xtype: 'omni-areas-Explorer',
        //    defaultSearch: { with:
        //      {
        //        location_id:   {equal_to: me.record.get('location_id')}
        //      }
        //   }
        // }
        // ,{
        //   title: 'Tax Holidays',
        //   xtype: 'omni-location_tax_holidays-Explorer',
        //    defaultSearch: { with:
        //      {
        //        location_id:   {equal_to: me.record.get('location_id')}
        //      }
        //   }
        // }
        // ,{
        //   title: 'Tax Authorities',
        //   xtype: 'omni-location_tax_authorities-Explorer',
        //    defaultSearch: { with:
        //      {
        //        location_id:   {equal_to: me.record.get('location_id')}
        //      }
        //   }
        // }
        // ,{
        //   title: 'Terminals',
        //   xtype: 'omni-terminals-Explorer',
        //    defaultSearch: { with:
        //      {
        //        location_id:   {equal_to: me.record.get('location_id')}
        //      }
        //   }
        // }
        // ,{
        //   title: 'Notes',
        //   xtype: 'buildit-notes-Explorer',
        //   defaultSearch: { with:
        //      {
        //        notable_type:   {equal_to: me.record.get('location_id')},
        //        notable_id:   {equal_to: 'Omni::Location'}
        //      }
        //   }
        // }
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Location',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
