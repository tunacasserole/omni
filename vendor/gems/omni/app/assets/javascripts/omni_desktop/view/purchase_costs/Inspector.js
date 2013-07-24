Ext.define('Omni.view.purchase_costs.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-purchase_costs-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'purchase_cost_id',
        value:      this.record.get('purchase_cost_id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-purchase_costs-Form'}
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Purchase Cost',
      subtitle:  this.record.get('purchase_cost_id')
    });
    // TITLES (End)

    this.callParent();
  }
});