Ext.define('Omni.view.tax_authority_rates.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.omni-tax_authority_rates-Explorer',



  initComponent: function() {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.TaxAuthorityRate'),

      contextMenuConfig: {
        xtype: 'omni-app-ExplorerContextMenu'
      },

      newForms: [{
        xtype: 'omni-tax_authority_rates-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-tax_authority_rates-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      tax_authority_displayLabel: Omni.i18n.model.TaxAuthorityRate.tax_authority_display,
      effective_dateLabel: Omni.i18n.model.TaxAuthorityRate.effective_date,
      end_dateLabel: Omni.i18n.model.TaxAuthorityRate.end_date,
      tax_percentLabel: Omni.i18n.model.TaxAuthorityRate.tax_percent
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [{
        header: this.tax_authority_displayLabel,
        dataIndex: 'tax_authority_display',
        flex: 1,
        sortable: false
      }, {
        header: this.effective_dateLabel,
        dataIndex: 'effective_date',
        flex: 1,
        sortable: false,
        renderer: Ext.util.Format.dateRenderer('m/d/y')
      }, {
        header: this.end_dateLabel,
        dataIndex: 'end_date',
        flex: 1,
        sortable: false,
        renderer: Ext.util.Format.dateRenderer('m/d/y')
      }, {
        header: this.tax_percentLabel,
        dataIndex: 'tax_percent',
        flex: 1,
        sortable: false
      }]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title: 'Tax Authority Rate',
      subtitle: 'Sales tax rates'
    });
    // TITLES (End)



    this.callParent();
  }

});
