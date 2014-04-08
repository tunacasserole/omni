Ext.define('Omni.view.stock_ledger_activity_logs.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.omni-stock_ledger_activity_logs-Explorer',



  initComponent: function() {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.StockLedgerActivityLog'),

      contextMenuConfig: {
        xtype: 'buildit-explorer-ContextMenu'
      },

      newForms: [{
        xtype: 'omni-stock_ledger_activity_logs-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-stock_ledger_activity_logs-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      stock_ledger_activity_log_nbrLabel: Omni.i18n.model.StockLedgerActivityLog.stock_ledger_activity_log_nbr,
      model_nameLabel: Omni.i18n.model.StockLedgerActivityLog.model_name,
      attribute_nameLabel: Omni.i18n.model.StockLedgerActivityLog.attribute_name,
      row_displayLabel: Omni.i18n.model.StockLedgerActivityLog.row_display,
      rule_actionLabel: Omni.i18n.model.StockLedgerActivityLog.rule_action
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [{
        header: this.stock_ledger_activity_log_nbrLabel,
        dataIndex: 'stock_ledger_activity_log_nbr',
        flex: 1,
        sortable: false
      }, {
        header: this.model_nameLabel,
        dataIndex: 'model_name',
        flex: 1,
        sortable: false
      }, {
        header: this.attribute_nameLabel,
        dataIndex: 'attribute_name',
        flex: 1,
        sortable: false
      }, {
        header: this.row_displayLabel,
        dataIndex: 'row_display',
        flex: 1,
        sortable: false
      }, {
        header: this.rule_actionLabel,
        dataIndex: 'rule_action',
        flex: 1,
        sortable: false,
        renderer: Buildit.util.Format.lookupRenderer('RULE_ACTION')
      }]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title: 'Stock Ledger Activity Log',
      subtitle: 'Audit trail of stock ledger updates'
    });
    // TITLES (End)



    this.callParent();
  }

});
