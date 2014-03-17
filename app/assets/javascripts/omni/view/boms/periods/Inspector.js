Ext.define('Omni.view.periods.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-periods-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'period_id',
        value:      this.record.get('period_id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-periods-Form'}
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Period',
      subtitle:  this.record.get('period_id')
    });
    // TITLES (End)

    this.callParent();
  }
});