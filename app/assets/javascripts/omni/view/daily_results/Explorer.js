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
      sku_idLabel: Omni.i18n.model.DailyResult.sku_id,
      location_idLabel: Omni.i18n.model.DailyResult.location_id,
      dateLabel: Omni.i18n.model.DailyResult.date,
      yearLabel: Omni.i18n.model.DailyResult.year,
      net_sale_unitsLabel: Omni.i18n.model.DailyResult.net_sale_units,
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.sku_idLabel, dataIndex: 'sku_display',  flex: 3,  sortable: false  },
        { header: this.location_idLabel, dataIndex: 'location_display',  flex: 2,  sortable: false  },
        { header: this.dateLabel, dataIndex: 'date',  flex: 1,  sortable: false, renderer: Ext.util.Format.dateRenderer('m/d/y') },
        { header: this.yearLabel, dataIndex: 'year',  flex: 1,  sortable: false  },
        { header: this.net_sale_unitsLabel, dataIndex: 'net_sale_units',  flex: 1,  sortable: false  },
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
