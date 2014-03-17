Ext.define('Omni.view.daily_results.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-daily_results-Explorer',



  initComponent:function () {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,
      allowNew: false,

      store: Ext.create('Omni.store.DailyResult'),

      contextMenuConfig:{
        xtype:'omni-daily_results-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-daily_results-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-daily_results-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      dateLabel: Omni.i18n.model.DailyResult.date,
      net_inventory_costLabel: Omni.i18n.model.DailyResult.net_inventory_cost,
      net_inventory_unitsLabel: Omni.i18n.model.DailyResult.net_inventory_units,
      net_sale_retailLabel: Omni.i18n.model.DailyResult.net_sale_retail,
      net_sale_unitsLabel: Omni.i18n.model.DailyResult.net_sale_units,
      sku_idLabel: Omni.i18n.model.DailyResult.sku_id,
      location_idLabel: Omni.i18n.model.DailyResult.location_id
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.sku_idLabel, dataIndex: 'sku_display',  flex: 1,  sortable: true  },
        { header: this.location_idLabel, dataIndex: 'location_display',  flex: 1,  sortable: true  },
        { header: this.dateLabel, dataIndex: 'date',  flex: 1,  sortable: true, renderer: Ext.util.Format.dateRenderer('m/d/y') },
        { header: this.net_sale_unitsLabel, dataIndex: 'net_sale_units',  flex: 1,  sortable: true  },
        { header: this.net_inventory_costLabel, dataIndex: 'net_inventory_cost',  flex: 1,  sortable: true  },
        { header: this.net_inventory_unitsLabel, dataIndex: 'net_inventory_units',  flex: 1,  sortable: true  },
        { header: this.net_sale_retailLabel, dataIndex: 'net_sale_retail',  flex: 1,  sortable: true  },
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Daily Result',
      subtitle:  'Daily sales and transaction totals'
    });
    // TITLES (End)



    this.callParent();
  }

});
