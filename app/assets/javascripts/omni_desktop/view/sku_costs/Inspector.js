Ext.define('Omni.view.sku_costs.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-sku_costs-Inspector',


  initComponent:function(){
    var me = this;

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'sku_cost_id',
        value:      this.record.get('sku_cost_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-sku_costs-Form'}
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Sku Cost',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)

    this.callParent();
  }
});