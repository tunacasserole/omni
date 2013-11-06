Ext.define('Omni.view.projection_details.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-projection_details-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  allowFind: true,

  store: Ext.create('Omni.store.ProjectionDetail'),

  contextMenuConfig: {
    xtype: 'omni-projection_details-ExplorerContextMenu'
  },

  newForms:[{
    xtype: 'omni-projection_details-Form'
  }],

  inspectorConfig: {
    xtype: 'omni-projection_details-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  projection_detail_idLabel:              Omni.i18n.model.ProjectionDetail.projection_detail_id,
  displayLabel:                           Omni.i18n.model.ProjectionDetail.display,
  stateLabel:                           Omni.i18n.model.ProjectionDetail.state,
  projection_idLabel:                     Omni.i18n.model.ProjectionDetail.projection_id,
  projection_line_nbrLabel:               Omni.i18n.model.ProjectionDetail.projection_line_nbr,
  forecast_profile_idLabel:               Omni.i18n.model.ProjectionDetail.forecast_profile_id,
  sku_idLabel:                            Omni.i18n.model.ProjectionDetail.sku_id,
  style_idLabel:                            Omni.i18n.model.ProjectionDetail.style_id,
  color_idLabel:                            Omni.i18n.model.ProjectionDetail.color_id,
  size_idLabel:                            Omni.i18n.model.ProjectionDetail.size_id,
  location_idLabel:                       Omni.i18n.model.ProjectionDetail.location_id,
  forecast_unitsLabel:                    Omni.i18n.model.ProjectionDetail.forecast_units,
  proposed_unitsLabel:                    Omni.i18n.model.ProjectionDetail.proposed_units,
  approved_unitsLabel:                    Omni.i18n.model.ProjectionDetail.approved_units,
  closed_unitsLabel:                      Omni.i18n.model.ProjectionDetail.closed_units,
  projection_2_unitsLabel:                Omni.i18n.model.ProjectionDetail.projection_2_units,
  projection_update_unitsLabel:           Omni.i18n.model.ProjectionDetail.projection_update_units,
  projection_adjustment_unitsLabel:        Omni.i18n.model.ProjectionDetail.projection_adjustment_units,
  sale_units_2013Label:                    Omni.i18n.model.ProjectionDetail.sale_units_2013,
  sale_units_2012Label:                    Omni.i18n.model.ProjectionDetail.sale_units_2012,
  sale_units_2011Label:                    Omni.i18n.model.ProjectionDetail.sale_units_2011,
  sale_units_2010Label:                    Omni.i18n.model.ProjectionDetail.sale_units_2010,
  number_of_schoolsLabel:                 Omni.i18n.model.ProjectionDetail.number_of_schools,
  average_contract_yearLabel:             Omni.i18n.model.ProjectionDetail.average_contract_year,
  years_activeLabel:                      Omni.i18n.model.ProjectionDetail.years_active,
  average_salesLabel:                     Omni.i18n.model.ProjectionDetail.average_sales,
  standard_deviationLabel:                Omni.i18n.model.ProjectionDetail.standard_deviation,
  is_destroyedLabel:                      Omni.i18n.model.ProjectionDetail.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title:     'Projection Details',
  subtitle:  'Create and maintain Projection Details',
  // TITLES (End)

  initComponent:function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        // { header: this.projection_detail_idLabel,          dataIndex: 'projection_detail_id',        flex: 1 },
        { header: this.stateLabel,                       dataIndex: 'state',                     flex: 1 },
        // { header: this.projection_idLabel,                 dataIndex: 'projection_id',               flex: 1 },
        // { header: this.projection_line_nbrLabel,           dataIndex: 'projection_line_nbr',         flex: 1 },
        // { header: this.forecast_profile_idLabel,           dataIndex: 'forecast_profile_display',                 flex: 1 },
        { header: this.style_idLabel,                        dataIndex: 'style_display',                 flex: 3 },
        { header: this.color_idLabel,                        dataIndex: 'color_display',                 flex: 1 },
        { header: this.size_idLabel,                         dataIndex: 'size_display',                 flex: 1 },
        { header: this.location_idLabel,                     dataIndex: 'location_display',                 flex: 2 },
        { header: this.sku_idLabel,                          dataIndex: 'sku_display',                 flex: 3 },
        // { header: this.proposed_unitsLabel,                dataIndex: 'proposed_units',              flex: 1 },
        // { header: this.approved_unitsLabel,                dataIndex: 'approved_units',              flex: 1 },
        // { header: this.closed_unitsLabel,                  dataIndex: 'closed_units',                flex: 1 },
        // { header: this.projection_2_unitsLabel,            dataIndex: 'projection_2_units',          flex: 1 },
        // { header: this.projection_update_unitsLabel,       dataIndex: 'projection_update_units',     flex: 1 },
        // { header: this.projection_adjustment_unitsLabel,    dataIndex: 'projection_adjustment_units',  flex: 1 },
        { header: this.sale_units_2010Label,                dataIndex: 'sale_units_2010',              flex: 1 },
        { header: this.sale_units_2011Label,                dataIndex: 'sale_units_2011',              flex: 1 },
        { header: this.sale_units_2012Label,                dataIndex: 'sale_units_2012',              flex: 1 },
        { header: this.sale_units_2013Label,                dataIndex: 'sale_units_2013',              flex: 1 },
        // { header: this.number_of_schoolsLabel,             dataIndex: 'number_of_schools',           flex: 1 },
        // { header: this.average_contract_yearLabel,         dataIndex: 'average_contract_year',       flex: 1 },
        // { header: this.years_activeLabel,                  dataIndex: 'years_active',                flex: 1 },
        { header: this.average_salesLabel,                 dataIndex: 'average_sales',               flex: 1 },
        { header: this.standard_deviationLabel,            dataIndex: 'standard_deviation',          flex: 1 },
        { header: this.forecast_unitsLabel,                  dataIndex: 'forecast_units',              flex: 1 },
        // { header: this.is_destroyedLabel,                  dataIndex: 'is_destroyed',                flex: 1 }
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});