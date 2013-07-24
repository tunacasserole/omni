Ext.define('Omni.view.logs.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-logs-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'log_id',
        value:      this.record.get('log_id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-logs-Form'}
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Log',
      subtitle:  this.record.get('log_id')
    });
    // TITLES (End)

    this.callParent();
  }
});