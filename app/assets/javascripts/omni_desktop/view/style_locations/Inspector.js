Ext.define('Omni.view.style_locations.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-style_locations-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'style_location_id',
        value:    me.record.get('style_location_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-style_locations-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Style Location',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
