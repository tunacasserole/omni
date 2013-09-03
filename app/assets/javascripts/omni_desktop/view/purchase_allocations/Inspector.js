Ext.define('Omni.view.purchase_allocations.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-purchase_allocations-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'purchase_allocation_id',
        value:      this.record.get('purchase_allocation_id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-purchase_allocations-Form'}
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Purchase Allocation',
      subtitle:  this.record.get('purchase_allocation_id')
    });
    // TITLES (End)

    this.callParent();
  }
});