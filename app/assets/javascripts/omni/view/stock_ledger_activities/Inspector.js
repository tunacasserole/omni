Ext.define('Omni.view.stock_ledger_activities.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-stock_ledger_activities-Inspector',

  initComponent:function () {

    var me = this;


    // LABELS (Start) ======================================================================
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'stock_ledger_activity_id',
        value:    me.record.get('stock_ledger_activity_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-stock_ledger_activities-Form'
        }
        ,{title: 'Logs', xtype: 'omni-stock_ledger_activity_logs-Explorer', module: 'contracts',
           defaultSearch: { with:
             {
               stock_ledger_activity_id:   {equal_to: me.record.get('stock_ledger_activity_id')}
             }
          },
          showBadge: true
        }
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Stock Ledger Activity',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
