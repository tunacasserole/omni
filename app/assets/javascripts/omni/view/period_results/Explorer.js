Ext.define('Omni.view.period_results.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-period_results-Explorer',

  allowFind: true,

  store: Ext.create('Omni.store.PeriodResult'),

  contextMenuConfig:{
    xtype:'omni-period_results-ExplorerContextMenu',
  },

  newForms:[{
    xtype:'omni-period_results-Form',
    windowConfig: {}
  }],

  inspectorConfig: {
    xtype: 'omni-period_results-Inspector'
  },

  filters: [
    {
      showAll  : 'All Years',
      items    : [
        ['year_2010',     "2010"],
        ['year_2011',     "2011"],
        ['year_2012',     "2012"],
        ['year_2013',     "2013"],
      ]
    },
     {
      showAll  : 'All Periods',
      items    : [
        ['p1',       "1"],
        ['p2',       "2"],
        ['p3',       "3"],
        ['p4',       "4"],
        ['p5',       "5"],
        ['p6',       "6"],
        ['p7',       "7"],
        ['p8',       "8"],
        ['p9',       "9"],
        ['p10',       "10"],
        ['p11',       "11"],
        ['p12',       "12"],
      ]
    }
  ],

  initComponent:function () {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {



    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      location_displayLabel: Omni.i18n.model.PeriodResult.location_display,
      sku_displayLabel: Omni.i18n.model.PeriodResult.sku_display,
      net_inventory_costLabel: Omni.i18n.model.PeriodResult.net_inventory_cost,
      net_inventory_unitsLabel: Omni.i18n.model.PeriodResult.net_inventory_units,
      net_sale_retailLabel: Omni.i18n.model.PeriodResult.net_sale_retail,
      net_sale_unitsLabel: Omni.i18n.model.PeriodResult.net_sale_units,
      period_displayLabel: Omni.i18n.model.PeriodResult.period_display,
      year_numberLabel: Omni.i18n.model.PeriodResult.year_number,
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        // { header: this.net_sale_retailLabel, dataIndex: 'net_sale_retail',  flex: 1,  sortable: true  },
        // { header: this.net_inventory_costLabel, dataIndex: 'net_inventory_cost',  flex: 1,  sortable: true  },
        // { header: this.net_inventory_unitsLabel, dataIndex: 'net_inventory_units',  flex: 1,  sortable: true  },
        { header: this.sku_displayLabel, dataIndex: 'sku_display',  flex: 2,  sortable: true  },
        { header: this.location_displayLabel, dataIndex: 'location_display',  flex: 1,  sortable: true  },
        { header: this.period_displayLabel, dataIndex: 'period_display',  flex: 1,  sortable: true  },
        // { header: this.year_numberLabel, dataIndex: 'year_number',  flex: 1,  sortable: true  },
        { header: this.net_sale_unitsLabel, dataIndex: 'net_sale_units',  flex: 1,  sortable: true  },
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Period Result',
      subtitle:  'Period (Monthly) sales and transaction totals'
    });
    // TITLES (End)



    this.callParent();
  }

});
