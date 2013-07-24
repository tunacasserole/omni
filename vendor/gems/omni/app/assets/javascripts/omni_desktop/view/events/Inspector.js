Ext.define('Buildit.view.events.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.buildit-events-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'event_id',
        value:      this.record.get('event_id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'buildit-events-Form'}
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Event',
      subtitle:  this.record.get('event_id')
    });
    // TITLES (End)

    this.callParent();
  }
});