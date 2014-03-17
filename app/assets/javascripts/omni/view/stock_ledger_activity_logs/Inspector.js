Ext.define('Omni.view.stock_ledger_activity_logs.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-stock_ledger_activity_logs-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'stock_ledger_activity_log_id',
        value:    me.record.get('stock_ledger_activity_log_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-stock_ledger_activity_logs-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Stock Ledger ActivityLog',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
