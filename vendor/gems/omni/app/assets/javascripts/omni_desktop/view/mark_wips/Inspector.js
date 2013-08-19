Ext.define('Omni.view.mark_wips.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-mark_wips-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'stock_nbr',
        value:      this.record.get('stock_nbr')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-mark_wips-Form'}
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Mark Wip',
      subtitle:  this.record.get('stock_nbr')
    });
    // TITLES (End)

    this.callParent();
  }
});