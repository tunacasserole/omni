Ext.define('Omni.view.forecast_profiles.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-forecast_profiles-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  allowFind: true,

  store: Ext.create('Omni.store.ForecastProfile'),

  contextMenuConfig: {
    xtype: 'omni-forecast_profiles-ExplorerContextMenu'
  },

  newForms:[{
    xtype: 'omni-forecast_profiles-Form'
  }],

  inspectorConfig: {
    xtype: 'omni-forecast_profiles-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
/*   forecast_profile_idLabel:               Omni.i18n.model.ForecastProfile.forecast_profile_id, */
  displayLabel:                           Omni.i18n.model.ForecastProfile.display,
  sales_2012_weightLabel:                  Omni.i18n.model.ForecastProfile.sales_2012_weight,
  sales_2011_weightLabel:                  Omni.i18n.model.ForecastProfile.sales_2011_weight,
  sales_2010_weightLabel:                  Omni.i18n.model.ForecastProfile.sales_2010_weight,
  contract_year_1_weightLabel:            Omni.i18n.model.ForecastProfile.contract_year_1_weight,
  contract_year_2_weightLabel:            Omni.i18n.model.ForecastProfile.contract_year_2_weight,
  contract_year_3_weightLabel:            Omni.i18n.model.ForecastProfile.contract_year_3_weight,
  contract_year_4_weightLabel:            Omni.i18n.model.ForecastProfile.contract_year_4_weight,
  contract_year_5_weightLabel:            Omni.i18n.model.ForecastProfile.contract_year_5_weight,
  forecast_formulaLabel:                  Omni.i18n.model.ForecastProfile.forecast_formula,
/*   is_destroyedLabel:                      Omni.i18n.model.ForecastProfile.is_destroyed, */
  // LABELS (End)
  
  // TITLES (Start) ======================================================================
  title:     'ForecastProfiles',
  subtitle:  'Create and maintain ForecastProfiles',
  // TITLES (End)

  initComponent:function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
/*         { header: this.forecast_profile_idLabel,           dataIndex: 'forecast_profile_id',         flex: 1 },     */
        { header: this.displayLabel,                       dataIndex: 'display',                     flex: 2 },    
        { header: this.forecast_formulaLabel,              dataIndex: 'forecast_formula',            flex: 1 },         
        { header: this.sales_2012_weightLabel,              dataIndex: 'sales_2012_weight',            flex: 1 },    
        { header: this.sales_2011_weightLabel,              dataIndex: 'sales_2011_weight',            flex: 1 },    
        { header: this.sales_2010_weightLabel,              dataIndex: 'sales_2010_weight',            flex: 1 },    
        { header: this.contract_year_1_weightLabel,        dataIndex: 'contract_year_1_weight',      flex: 1 },    
        { header: this.contract_year_2_weightLabel,        dataIndex: 'contract_year_2_weight',      flex: 1 },    
        { header: this.contract_year_3_weightLabel,        dataIndex: 'contract_year_3_weight',      flex: 1 },    
        { header: this.contract_year_4_weightLabel,        dataIndex: 'contract_year_4_weight',      flex: 1 },    
        { header: this.contract_year_5_weightLabel,        dataIndex: 'contract_year_5_weight',      flex: 1 },       
/*     { header: this.is_destroyedLabel,                  dataIndex: 'is_destroyed',                flex: 1 }     */
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});