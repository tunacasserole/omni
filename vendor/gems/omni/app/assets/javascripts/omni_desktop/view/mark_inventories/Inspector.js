Ext.define('Omni.view.mark_inventories.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-mark_inventories-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'id',
        value:      this.record.get('id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-mark_inventories-Form'}
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Mark Inventory',
      subtitle:  this.record.get('id')
    });
    // TITLES (End)

    this.callParent();
  }
});