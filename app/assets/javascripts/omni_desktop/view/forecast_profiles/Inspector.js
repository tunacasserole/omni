Ext.define('Omni.view.forecast_profiles.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-forecast_profiles-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'forecast_profile_id',
        value:      this.record.get('forecast_profile_id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-forecast_profiles-Form'}
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Forecast Profile',
      subtitle:  this.record.get('forecast_profile_id')
    });
    // TITLES (End)

    this.callParent();
  }
});