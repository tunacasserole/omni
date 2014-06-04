Ext.define('Omni.view.projection_details.Form', {

  extend: 'Buildit.ux.Form',
  alias: 'widget.omni-projection_details-Form',


  // LABELS (Start) =======================================================================
  projection_detail_idLabel: Omni.i18n.model.ProjectionDetail.projection_detail_id,
  projection_detail_nbrLabel: Omni.i18n.model.ProjectionDetail.projection_detail_nbr,
  projection_idLabel: Omni.i18n.model.ProjectionDetail.projection_id,
  projection_location_idLabel: Omni.i18n.model.ProjectionDetail.projection_location_id,
  forecast_profile_idLabel: Omni.i18n.model.ProjectionDetail.forecast_profile_id,
  inventory_idLabel: Omni.i18n.model.ProjectionDetail.inventory_id,
  sku_idLabel: Omni.i18n.model.ProjectionDetail.sku_id,
  location_idLabel: Omni.i18n.model.ProjectionDetail.location_id,
  // displayLabel: Omni.i18n.model.ProjectionDetail.display,
  stateLabel: Omni.i18n.model.ProjectionDetail.state,
  first_forecast_unitsLabel: Omni.i18n.model.ProjectionDetail.first_forecast_units,
  last_forecast_unitsLabel: Omni.i18n.model.ProjectionDetail.last_forecast_units,
  current_approved_unitsLabel: Omni.i18n.model.ProjectionDetail.current_approved_units,
  last_forecast_dateLabel: Omni.i18n.model.ProjectionDetail.last_forecast_date,
  projection_1_unitsLabel: Omni.i18n.model.ProjectionDetail.projection_1_units,
  projection_2_unitsLabel: Omni.i18n.model.ProjectionDetail.projection_2_units,
  projection_3_unitsLabel: Omni.i18n.model.ProjectionDetail.projection_3_units,
  projection_4_unitsLabel: Omni.i18n.model.ProjectionDetail.projection_4_units,
  sale_units_ytdLabel: Omni.i18n.model.ProjectionDetail.sale_units_ytd,
  sale_units_py1Label: Omni.i18n.model.ProjectionDetail.sale_units_py1,
  sale_units_py2Label: Omni.i18n.model.ProjectionDetail.sale_units_py2,
  sale_units_py3Label: Omni.i18n.model.ProjectionDetail.sale_units_py3,
  on_handLabel: Omni.i18n.model.ProjectionDetail.on_hand,
  on_orderLabel: Omni.i18n.model.ProjectionDetail.on_order,
  sd_rawLabel: Omni.i18n.model.ProjectionDetail.sd_raw,
  sd_floorLabel: Omni.i18n.model.ProjectionDetail.sd_floor,
  sd_ceilingLabel: Omni.i18n.model.ProjectionDetail.sd_ceiling,
  sd_smoothLabel: Omni.i18n.model.ProjectionDetail.sd_smooth,
  sd_percentLabel: Omni.i18n.model.ProjectionDetail.sd_percent,
  coverage_allowedLabel: Omni.i18n.model.ProjectionDetail.coverage_allowed,
  coverage_completeLabel: Omni.i18n.model.ProjectionDetail.coverage_complete,
  custom_needLabel: Omni.i18n.model.ProjectionDetail.custom_need,
  generic_needLabel: Omni.i18n.model.ProjectionDetail.generic_need,
  total_needLabel: Omni.i18n.model.ProjectionDetail.total_need,
  usableLabel: Omni.i18n.model.ProjectionDetail.usable,
  unusableLabel: Omni.i18n.model.ProjectionDetail.unusable,
  average_salesLabel: Omni.i18n.model.ProjectionDetail.average_sales,
  standard_deviationLabel: Omni.i18n.model.ProjectionDetail.standard_deviation,
  is_destroyedLabel: Omni.i18n.model.ProjectionDetail.is_destroyed,
  audit_created_byLabel: Omni.i18n.model.ProjectionDetail.audit_created_by,
  audit_updated_byLabel: Omni.i18n.model.ProjectionDetail.audit_updated_by,
  audit_created_atLabel: Omni.i18n.model.ProjectionDetail.audit_created_at,
  audit_updated_atLabel: Omni.i18n.model.ProjectionDetail.audit_updated_at,
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
          name: 'projection_detail_nbr',
          fieldLabel: this.projection_detail_nbrLabel,
          allowBlank: true,
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
          allowBlank: true,
          gotoTarget: 'omni-forecast_profiles-Inspector'
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
          allowBlank: true,
          disabled: false,
          gotoTarget: 'omni-skus-Inspector'
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
          allowBlank: true,
          disabled: false,
          gotoTarget: 'omni-locations-Inspector',
          // }, {
          //   xtype: 'textfield',
          //   name: 'display',
          //   fieldLabel: this.displayLabel,
          //   allowBlank: true,
        }, {
          xtype: 'textfield',
          name: 'state',
          fieldLabel: this.stateLabel,
          allowBlank: true,
          disabled: true
        }]
      }, {
        xtype: 'fieldset',
        title: 'Projection Information',
        collapsible: true,
        defaultType: 'textfield',
        layout: 'anchor',
        items: [{
          xtype: 'numberfield',
          name: 'first_forecast_units',
          fieldLabel: this.first_forecast_unitsLabel,
          allowBlank: true,
        }, {
          xtype: 'numberfield',
          name: 'last_forecast_units',
          fieldLabel: this.last_forecast_unitsLabel,
          allowBlank: true,
        }, {
          xtype: 'numberfield',
          name: 'current_approved_units',
          fieldLabel: this.current_approved_unitsLabel,
          allowBlank: true,
        }, {
          xtype: 'datefield',
          name: 'last_forecast_date',
          fieldLabel: this.last_forecast_dateLabel,
          allowBlank: true,
        }, {
          xtype: 'numberfield',
          name: 'projection_1_units',
          fieldLabel: this.projection_1_unitsLabel,
          allowBlank: true,
        }, {
          xtype: 'numberfield',
          name: 'projection_2_units',
          fieldLabel: this.projection_2_unitsLabel,
          allowBlank: true,
        }, {
          xtype: 'numberfield',
          name: 'projection_3_units',
          fieldLabel: this.projection_3_unitsLabel,
          allowBlank: true,
        }, {
          xtype: 'numberfield',
          name: 'projection_4_units',
          fieldLabel: this.projection_4_unitsLabel,
          allowBlank: true,
        }]
      }, {
        xtype: 'fieldset',
        title: 'Sales Results',
        collapsible: true,
        defaultType: 'textfield',
        layout: 'anchor',
        items: [{
          xtype: 'numberfield',
          name: 'sale_units_ytd',
          fieldLabel: this.sale_units_ytdLabel,
          allowBlank: true,
        }, {
          xtype: 'numberfield',
          name: 'sale_units_py1',
          fieldLabel: this.sale_units_py1Label,
          allowBlank: true,
        }, {
          xtype: 'numberfield',
          name: 'sale_units_py2',
          fieldLabel: this.sale_units_py2Label,
          allowBlank: true,
        }, {
          xtype: 'numberfield',
          name: 'sale_units_py3',
          fieldLabel: this.sale_units_py3Label,
          allowBlank: true,
        }, {
          xtype: 'numberfield',
          name: 'on_hand',
          fieldLabel: this.on_handLabel,
          allowBlank: true,
        }, {
          xtype: 'numberfield',
          name: 'on_order',
          fieldLabel: this.on_orderLabel,
          allowBlank: true,
        }, {
          xtype: 'numberfield',
          name: 'sd_raw',
          fieldLabel: this.sd_rawLabel,
          allowBlank: true,
        }, {
          xtype: 'numberfield',
          name: 'sd_floor',
          fieldLabel: this.sd_floorLabel,
          allowBlank: true,
        }, {
          xtype: 'numberfield',
          name: 'sd_ceiling',
          fieldLabel: this.sd_ceilingLabel,
          allowBlank: true,
        }, {
          xtype: 'numberfield',
          name: 'sd_smooth',
          fieldLabel: this.sd_smoothLabel,
          allowBlank: true,
        }, {
          xtype: 'numberfield',
          name: 'sd_percent',
          fieldLabel: this.sd_percentLabel,
          allowBlank: true,
        }, {
          xtype: 'numberfield',
          name: 'coverage_allowed',
          fieldLabel: this.coverage_allowedLabel,
          allowBlank: true,
        }, {
          xtype: 'numberfield',
          name: 'coverage_complete',
          fieldLabel: this.coverage_completeLabel,
          allowBlank: true,
        }, {
          xtype: 'numberfield',
          name: 'custom_need',
          fieldLabel: this.custom_needLabel,
          allowBlank: true,
        }, {
          xtype: 'numberfield',
          name: 'generic_need',
          fieldLabel: this.generic_needLabel,
          allowBlank: true,
        }, {
          xtype: 'numberfield',
          name: 'total_need',
          fieldLabel: this.total_needLabel,
          allowBlank: true,
        }, {
          xtype: 'numberfield',
          name: 'usable',
          fieldLabel: this.usableLabel,
          allowBlank: true,
        }, {
          xtype: 'numberfield',
          name: 'unusable',
          fieldLabel: this.unusableLabel,
          allowBlank: true,
        }, {
          xtype: 'numberfield',
          name: 'average_sales',
          fieldLabel: this.average_salesLabel,
          allowBlank: true,
        }, {
          xtype: 'numberfield',
          name: 'standard_deviation',
          fieldLabel: this.standard_deviationLabel,
          allowBlank: true,
        }, {
          xtype: 'textfield',
          name: 'audit_created_by',
          fieldLabel: this.audit_created_byLabel,
          allowBlank: true,
          disabled: true
        }, {
          xtype: 'textfield',
          name: 'audit_updated_by',
          fieldLabel: this.audit_updated_byLabel,
          allowBlank: true,
          disabled: true,
        }, {
          xtype: 'textfield',
          name: 'audit_created_at',
          fieldLabel: this.audit_created_atLabel,
          allowBlank: true,
          disabled: true,
        }, {
          xtype: 'textfield',
          name: 'audit_updated_at',
          fieldLabel: this.audit_updated_atLabel,
          allowBlank: true,
          disabled: true,
        }]
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
