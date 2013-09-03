Ext.define('Omni.view.sku_locations.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-sku_locations-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'sku_location_id',
        value:    me.record.get('sku_location_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-sku_locations-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Sku Location',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
