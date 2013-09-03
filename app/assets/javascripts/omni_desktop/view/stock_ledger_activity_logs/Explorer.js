Ext.define('Omni.view.stock_ledger_activity_logs.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-stock_ledger_activity_logs-Explorer',

  

  initComponent:function () {

    var me = this;

    
    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.StockLedgerActivityLog'),

      contextMenuConfig:{
        xtype:'omni-stock_ledger_activity_logs-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-stock_ledger_activity_logs-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-stock_ledger_activity_logs-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      activity_log_nbrLabel: Omni.i18n.model.StockLedgerActivityLog.activity_log_nbr,
      model_meta_displayLabel: Omni.i18n.model.StockLedgerActivityLog.model_meta_display,
      attribute_meta_displayLabel: Omni.i18n.model.StockLedgerActivityLog.attribute_meta_display,
      row_displayLabel: Omni.i18n.model.StockLedgerActivityLog.row_display,
      rule_actionLabel: Omni.i18n.model.StockLedgerActivityLog.rule_action
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.activity_log_nbrLabel, dataIndex: 'activity_log_nbr',  flex: 1,  sortable: true  },
        { header: this.model_meta_displayLabel, dataIndex: 'model_meta_display',  flex: 1,  sortable: true  },
        { header: this.attribute_meta_displayLabel, dataIndex: 'attribute_meta_display',  flex: 1,  sortable: true  },
        { header: this.row_displayLabel, dataIndex: 'row_display',  flex: 1,  sortable: true  },
        { header: this.rule_actionLabel, dataIndex: 'rule_action',  flex: 1,  sortable: true , renderer: Buildit.util.Format.lookupRenderer('RULE_ACTION') }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Stock Ledger Activity Log',
      subtitle:  'Audit trail of stock ledger updates'
    });
    // TITLES (End)



    this.callParent();
  }

});
