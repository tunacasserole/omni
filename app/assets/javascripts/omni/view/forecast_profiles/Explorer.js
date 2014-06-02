Ext.define('Omni.view.forecast_profiles.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.omni-forecast_profiles-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  allowFind: true,

  store: Ext.create('Omni.store.ForecastProfile'),

  contextMenuConfig: {
    xtype: 'omni-app-ExplorerContextMenu',
  },

  newForms: [{
    xtype: 'omni-forecast_profiles-Form'
  }],

  inspectorConfig: {
    xtype: 'omni-forecast_profiles-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  /*   forecast_profile_idLabel:               Omni.i18n.model.ForecastProfile.forecast_profile_id, */
  displayLabel: Omni.i18n.model.ForecastProfile.display,
  sales_py1_weightLabel: Omni.i18n.model.ForecastProfile.sales_py1_weight,
  sales_py2_weightLabel: Omni.i18n.model.ForecastProfile.sales_py2_weight,
  sales_py3_weightLabel: Omni.i18n.model.ForecastProfile.sales_py3_weight,
  forecast_formulaLabel: Omni.i18n.model.ForecastProfile.forecast_formula,
  /*   is_destroyedLabel:                      Omni.i18n.model.ForecastProfile.is_destroyed, */
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title: 'Forecast Profiles',
  subtitle: 'Create and maintain Forecast Profiles',
  // TITLES (End)

  initComponent: function() {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        /*         { header: this.forecast_profile_idLabel,           dataIndex: 'forecast_profile_id',         flex: 1 },     */
        {
          header: this.displayLabel,
          dataIndex: 'display',
          flex: 2
        }, {
          header: this.forecast_formulaLabel,
          dataIndex: 'forecast_formula',
          flex: 1
        }, {
          header: this.sales_py1_weightLabel,
          dataIndex: 'sales_py1_weight',
          flex: 1
        }, {
          header: this.sales_py2_weightLabel,
          dataIndex: 'sales_py2_weight',
          flex: 1
        }, {
          header: this.sales_py3_weightLabel,
          dataIndex: 'sales_py3_weight',
          flex: 1
        },
        /*     { header: this.is_destroyedLabel,                  dataIndex: 'is_destroyed',                flex: 1 }     */
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});
