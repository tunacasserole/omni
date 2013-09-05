Ext.define('Omni.view.stock_ledger_activities.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-stock_ledger_activities-Explorer',

  

  initComponent:function () {

    var me = this;

    
    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.StockLedgerActivity'),

      contextMenuConfig:{
        xtype:'omni-stock_ledger_activities-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-stock_ledger_activities-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-stock_ledger_activities-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      ruleset_displayLabel: Omni.i18n.model.StockLedgerActivity.ruleset_display,
      activity_dateLabel: Omni.i18n.model.StockLedgerActivity.activity_date,
      supplier_displayLabel: Omni.i18n.model.StockLedgerActivity.supplier_display,
      customer_displayLabel: Omni.i18n.model.StockLedgerActivity.customer_display,
      site_displayLabel: Omni.i18n.model.StockLedgerActivity.site_display,
      unitsLabel: Omni.i18n.model.StockLedgerActivity.units,
      costLabel: Omni.i18n.model.StockLedgerActivity.cost,
      retailLabel: Omni.i18n.model.StockLedgerActivity.retail
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.ruleset_displayLabel, dataIndex: 'ruleset_display',  flex: 1,  sortable: true  },
        { header: this.activity_dateLabel, dataIndex: 'activity_date',  flex: 1,  sortable: true , renderer: Ext.util.Format.dateRenderer('m/d/y') },
        { header: this.supplier_displayLabel, dataIndex: 'supplier_display',  flex: 1,  sortable: true  },
        { header: this.customer_displayLabel, dataIndex: 'customer_display',  flex: 1,  sortable: true  },
        { header: this.site_displayLabel, dataIndex: 'site_display',  flex: 1,  sortable: true  },
        { header: this.unitsLabel, dataIndex: 'units',  flex: 1,  sortable: true  },
        { header: this.costLabel, dataIndex: 'cost',  flex: 1,  sortable: true  },
        { header: this.retailLabel, dataIndex: 'retail',  flex: 1,  sortable: true  }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Stock Ledger Activity',
      subtitle:  'Every SKU/Location/Date transaction'
    });
    // TITLES (End)



    this.callParent();
  }

});