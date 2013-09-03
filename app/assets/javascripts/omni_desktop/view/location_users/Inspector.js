Ext.define('Omni.view.location_users.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-location_users-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'location_user_id',
        value:      this.record.get('location_user_id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-location_users-Form'}
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Location User',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)

    this.callParent();
  }
});