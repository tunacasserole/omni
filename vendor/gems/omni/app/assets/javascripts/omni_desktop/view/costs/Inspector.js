Ext.define('Omni.view.costs.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-costs-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'cost_id',
        value:      this.record.get('cost_id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-costs-Form'}
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Cost',
      subtitle:  this.record.get('cost_id')
    });
    // TITLES (End)

    this.callParent();
  }
});