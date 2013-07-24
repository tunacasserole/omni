Ext.define('Omni.view.allocations.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-allocations-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'allocation_id',
        value:      this.record.get('allocation_id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-allocations-Form'}
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Allocation',
      subtitle:  this.record.get('allocation_id')
    });
    // TITLES (End)

    this.callParent();
  }
});