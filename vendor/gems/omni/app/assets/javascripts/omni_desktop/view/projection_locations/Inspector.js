Ext.define('Omni.view.projection_locations.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-projection_locations-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'projection_location_id',
        value:      this.record.get('projection_location_id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-projection_locations-Form'}
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Projection Location',
      subtitle:  this.record.get('projection_location_id')
    });
    // TITLES (End)

    this.callParent();
  }
});