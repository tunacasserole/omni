Ext.define('Omni.view.periods.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-periods-Explorer',



  initComponent:function () {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.Period'),

      contextMenuConfig:{
        xtype:'omni-periods-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-periods-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-periods-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      start_dateLabel: Omni.i18n.model.Period.start_date,
      end_dateLabel: Omni.i18n.model.Period.end_date,
      year_numberLabel: Omni.i18n.model.Period.year_number,
      period_numberLabel: Omni.i18n.model.Period.period_number
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.start_dateLabel, dataIndex: 'start_date',  flex: 1,  sortable: false, renderer: Ext.util.Format.dateRenderer('m/d/y') },
        // { header: this.end_dateLabel, dataIndex: 'end_date',  flex: 1,  sortable: false, renderer: Ext.util.Format.dateRenderer('m/d/y') },
        {
          header        : this.end_dateLabel,
          dataIndex     : 'end_date',
          flex          : 1,
          renderer      : Ext.util.Format.dateRenderer('m/d/y')
        },
        { header: this.year_numberLabel, dataIndex: 'year_number',  flex: 1,  sortable: false  },
        { header: this.period_numberLabel, dataIndex: 'period_number',  flex: 1,  sortable: false  }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Period',
      subtitle:  'Accounting Periods'
    });
    // TITLES (End)



    this.callParent();
  }

});
