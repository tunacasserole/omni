Ext.define('Omni.view.stock_ledger_activities.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.omni-stock_ledger_activities-Explorer',

  initComponent: function() {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.StockLedgerActivity'),

      contextMenuConfig: {
        xtype: 'omni-app-ExplorerContextMenu'
      },

      newForms: [{
        xtype: 'omni-stock_ledger_activities-Form',
        windowConfig: {
          allowNew: false
        }
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
      sku_displayLabel: Omni.i18n.model.StockLedgerActivity.sku_display,
      location_displayLabel: Omni.i18n.model.StockLedgerActivity.location_display,
      unitsLabel: Omni.i18n.model.StockLedgerActivity.units,
      costLabel: Omni.i18n.model.StockLedgerActivity.cost,
      retailLabel: Omni.i18n.model.StockLedgerActivity.retail
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [{
          header: this.ruleset_displayLabel,
          dataIndex: 'ruleset_display',
          flex: 1,
          sortable: false
        },
        // { header: 'At',        dataIndex: 'activity_date',    flex: 1, renderer:Ext.util.Format.dateRenderer('h:iA') },
        // { header: 'On',        dataIndex: 'activity_date',    flex: 2, renderer:Ext.util.Format.dateRenderer('l, M d, Y') },
        {
          header: this.activity_dateLabel,
          dataIndex: 'activity_date',
          flex: 1,
          sortable: false,
          renderer: Ext.util.Format.dateRenderer('m/d/y H:i')
        }, {
          header: this.sku_displayLabel,
          dataIndex: 'sku_display',
          flex: 1,
          sortable: false
        }, {
          header: this.location_displayLabel,
          dataIndex: 'location_display',
          flex: 1,
          sortable: false
        }, {
          header: this.unitsLabel,
          dataIndex: 'units',
          flex: 1,
          sortable: false
        }, {
          header: this.costLabel,
          dataIndex: 'cost',
          flex: 1,
          sortable: false
        }, {
          header: this.retailLabel,
          dataIndex: 'retail',
          flex: 1,
          sortable: false
        }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title: 'Stock Ledger Activity',
      subtitle: 'Every SKU/Location/Date transaction'
    });
    // TITLES (End)



    this.callParent();
  }

});
