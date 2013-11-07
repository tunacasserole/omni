Ext.define('Omni.view.projection_details.Form', {

  extend: 'Buildit.ux.Form',
  alias: 'widget.omni-projection_details-Form',


  // LABELS (Start) =======================================================================
  audit_created_atLabel: Omni.i18n.model.ProjectionDetail.audit_created_at,
  audit_created_byLabel: Omni.i18n.model.ProjectionDetail.audit_created_by,
  audit_updated_atLabel: Omni.i18n.model.ProjectionDetail.audit_updated_at,
  audit_updated_byLabel: Omni.i18n.model.ProjectionDetail.audit_updated_by,
  average_salesLabel: Omni.i18n.model.ProjectionDetail.average_sales,
  displayLabel: Omni.i18n.model.ProjectionDetail.display,
  first_forecast_unitsLabel: Omni.i18n.model.ProjectionDetail.first_forecast_units,
  forecast_profile_idLabel: Omni.i18n.model.ProjectionDetail.forecast_profile_id,
  inventory_idLabel: Omni.i18n.model.ProjectionDetail.inventory_id,
  is_destroyedLabel: Omni.i18n.model.ProjectionDetail.is_destroyed,
  last_forecast_dateLabel: Omni.i18n.model.ProjectionDetail.last_forecast_date,
  last_forecast_unitsLabel: Omni.i18n.model.ProjectionDetail.last_forecast_units,
  location_idLabel: Omni.i18n.model.ProjectionDetail.location_id,
  number_of_schoolsLabel: Omni.i18n.model.ProjectionDetail.number_of_schools,
  projection_1_unitsLabel: Omni.i18n.model.ProjectionDetail.projection_1_units,
  projection_2_unitsLabel: Omni.i18n.model.ProjectionDetail.projection_2_units,
  projection_3_unitsLabel: Omni.i18n.model.ProjectionDetail.projection_3_units,
  projection_4_unitsLabel: Omni.i18n.model.ProjectionDetail.projection_4_units,
  projection_detail_idLabel: Omni.i18n.model.ProjectionDetail.projection_detail_id,
  projection_idLabel: Omni.i18n.model.ProjectionDetail.projection_id,
  projection_line_nbrLabel: Omni.i18n.model.ProjectionDetail.projection_line_nbr,
  projection_location_idLabel: Omni.i18n.model.ProjectionDetail.projection_location_id,
  sale_units_py1Label: Omni.i18n.model.ProjectionDetail.sale_units_py1,
  sale_units_py2Label: Omni.i18n.model.ProjectionDetail.sale_units_py2,
  sale_units_py3Label: Omni.i18n.model.ProjectionDetail.sale_units_py3,
  sale_units_ytdLabel: Omni.i18n.model.ProjectionDetail.sale_units_ytd,
  sku_idLabel: Omni.i18n.model.ProjectionDetail.sku_id,
  standard_deviationLabel: Omni.i18n.model.ProjectionDetail.standard_deviation,
  stateLabel: Omni.i18n.model.ProjectionDetail.state,
  // LABELS (End)


  initComponent: function() {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property: 'projection_detail_id',
      value: this.record.get('projection_detail_id')
    };
    // FILTER (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [{
        xtype: 'fieldset',
        title: 'General Information',
        collapsible: true,
        defaultType: 'textfield',
        layout: 'anchor',
        items: [{
            xtype: 'textfield',
            name: 'display',
            fieldLabel: this.displayLabel,
            allowBlank: true
          }, {
            xtype: 'textfield',
            name: 'state',
            fieldLabel: this.stateLabel,
            allowBlank: true,
            disabled: true
          }, {
            xtype: 'textfield',
            name: 'projection_line_nbr',
            fieldLabel: this.projection_line_nbrLabel,
            allowBlank: true,
            disabled: true
          }, {
            xtype: 'buildit-Locator',
            store: Ext.create('Omni.store.ForecastProfile', {
              pageSize: 10
            }),
            displayField: 'display',
            queryField: 'display',
            valueField: 'forecast_profile_id',
            itemTpl: '{display}',
            name: 'forecast_profile_id',
            fieldLabel: this.forecast_profile_idLabel,
            allowBlank: true
          }, {
            xtype: 'buildit-Locator',
            store: Ext.create('Omni.store.Sku', {
              pageSize: 10
            }),
            displayField: 'display',
            queryField: 'display',
            valueField: 'sku_id',
            itemTpl: '{display}',
            name: 'sku_id',
            fieldLabel: this.sku_idLabel,
            allowBlank: true
          }, {
            xtype: 'buildit-Locator',
            store: Ext.create('Omni.store.Location', {
              pageSize: 10
            }),
            displayField: 'display',
            queryField: 'display',
            valueField: 'location_id',
            itemTpl: '{display}',
            name: 'location_id',
            fieldLabel: this.location_idLabel,
            allowBlank: true
          }, {
            xtype: 'datefield',
            name: 'last_forecast_date',
            fieldLabel: this.last_forecast_dateLabel,
            allowBlank: true
          }, {
            xtype: 'textfield',
            name: 'first_forecast_units',
            fieldLabel: this.first_forecast_unitsLabel,
            allowBlank: true,
            disabled: true
          }, {
            xtype: 'textfield',
            name: 'last_forecast_units',
            fieldLabel: this.last_forecast_unitsLabel,
            allowBlank: true,
            disabled: true
          }, {
            xtype: 'textfield',
            name: 'projection_1_units',
            fieldLabel: this.projection_1_unitsLabel,
            allowBlank: true
          }, {
            xtype: 'textfield',
            name: 'projection_2_units',
            fieldLabel: this.projection_2_unitsLabel,
            allowBlank: true
          }, {
            xtype: 'textfield',
            name: 'projection_3_units',
            fieldLabel: this.projection_3_unitsLabel,
            allowBlank: true
          }, {
            xtype: 'textfield',
            name: 'projection_4_units',
            fieldLabel: this.projection_4_unitsLabel,
            allowBlank: true
          }, {
            xtype: 'textfield',
            name: 'sale_units_ytd',
            fieldLabel: this.sale_units_ytdLabel,
            allowBlank: true,
            disabled: true
          }, {
            xtype: 'textfield',
            name: 'sale_units_py1',
            fieldLabel: this.sale_units_py1Label,
            allowBlank: true,
            disabled: true
          }, {
            xtype: 'textfield',
            name: 'sale_units_py2',
            fieldLabel: this.sale_units_py2Label,
            allowBlank: true,
            disabled: true
          }, {
            xtype: 'textfield',
            name: 'sale_units_py3',
            fieldLabel: this.sale_units_py3Label,
            allowBlank: true,
            disabled: true
          },
          // {
          //   xtype: 'textfield',
          //   name: 'number_of_schools',
          //   fieldLabel: this.number_of_schoolsLabel,
          //   allowBlank: true,
          //   disabled: true
          // },
          {
            xtype: 'textfield',
            name: 'average_sales',
            fieldLabel: this.average_salesLabel,
            allowBlank: true,
            disabled: true
          }, {
            xtype: 'textfield',
            name: 'standard_deviation',
            fieldLabel: this.standard_deviationLabel,
            allowBlank: true,
            disabled: true
          }
        ]
      }]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'ProjectionDetail',
      subtitle: 'Edit ProjectionDetail'
    });
    // TITLES (End)

    this.callParent();

  } // initComponent

}); // Ext.define('Omni.view.projection_details.Form'
