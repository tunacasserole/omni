  Ext.define('Omni.view.inventories.Inspector',{
  extend   : 'Buildit.ux.inspector.Panel',
  alias    : 'widget.omni-inventories-Inspector',


  initComponent:function(){
    var me = this;

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter : {
        property  : 'inventory_id',
        value     : this.record.get('inventory_id')
      },

      associativeSearch : {
        with: {
          inventory_id : {
            equal_to : this.record.get('inventory_id')
          }
        }
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards     : [
        {
          title     : 'Profile',
          xtype     : 'omni-inventories-Form'
        }
        ,{
          title: 'All Locations for this Sku',
          xtype: 'omni-locations-Explorer',
          defaultSearch: { with:
             {
               location_id:   {equal_to: me.record.get('location_id')}
             }
          }
        }

      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title     : 'Inventory',
      subtitle  : this.record.get('sku_display') + this.record.get('location_display')
    });
    // TITLES (End)

    this.callParent();
  }
});
