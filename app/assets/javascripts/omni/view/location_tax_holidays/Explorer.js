Ext.define('Omni.view.location_tax_holidays.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-location_tax_holidays-Explorer',



  initComponent:function () {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.LocationTaxHoliday'),

      contextMenuConfig:{
        xtype:'omni-location_tax_holidays-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-location_tax_holidays-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-location_tax_holidays-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      location_displayLabel: Omni.i18n.model.LocationTaxHoliday.location_display,
      effective_dateLabel: Omni.i18n.model.LocationTaxHoliday.effective_date,
      end_dateLabel: Omni.i18n.model.LocationTaxHoliday.end_date,
      is_tax_holidayLabel: Omni.i18n.model.LocationTaxHoliday.is_tax_holiday,
      price_cutoffLabel: Omni.i18n.model.LocationTaxHoliday.price_cutoff
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.location_displayLabel, dataIndex: 'location_display',  flex: 1,  sortable: true  },
        { header: this.effective_dateLabel, dataIndex: 'effective_date',  flex: 1,  sortable: true, renderer: Ext.util.Format.dateRenderer('m/d/y') },
        { header: this.end_dateLabel, dataIndex: 'end_date',  flex: 1,  sortable: true, renderer: Ext.util.Format.dateRenderer('m/d/y') },
        { header: this.is_tax_holidayLabel, dataIndex: 'is_tax_holiday',  flex: 1,  sortable: true  },
        { header: this.price_cutoffLabel, dataIndex: 'price_cutoff',  flex: 1,  sortable: true  }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Location Tax Holiday',
      subtitle:  'Set up tax-free days when no sales tax is charged'
    });
    // TITLES (End)



    this.callParent();
  }

});
