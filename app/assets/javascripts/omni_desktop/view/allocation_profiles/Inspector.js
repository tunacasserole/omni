Ext.define('Omni.view.allocation_profiles.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-allocation_profiles-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'allocation_profile_id',
        value:      this.record.get('allocation_profile_id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-allocation_profiles-Form'}
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Allocation Profile',
      subtitle:  this.record.get('allocation_profile_id')
    });
    // TITLES (End)

    this.callParent();
  }
});