Ext.define('Omni.view.projection_details.Explorer', {

  extend   : 'Buildit.ux.explorer.Panel',
  alias    : 'widget.omni-projection_details-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  allowInlineEdit : true,

  allowBulkUpdate : true,

  store      : Ext.create('Omni.store.ProjectionDetail'),

  contextMenuConfig : {
    xtype    : 'omni-projection_details-ExplorerContextMenu'
  },

  newForms : [{
    xtype    : 'omni-projection_details-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-projection_details-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  projection_detail_idLabel               : Omni.i18n.model.ProjectionDetail.projection_detail_id,
  displayLabel                            : Omni.i18n.model.ProjectionDetail.display,
  stateLabel                              : Omni.i18n.model.ProjectionDetail.state,
  projection_idLabel                      : Omni.i18n.model.ProjectionDetail.projection_id,
  projection_location_idLabel             : Omni.i18n.model.ProjectionDetail.projection_location_id,
  projection_line_nbrLabel                : Omni.i18n.model.ProjectionDetail.projection_line_nbr,
  forecast_profile_idLabel                : Omni.i18n.model.ProjectionDetail.forecast_profile_id,
  inventory_idLabel                       : Omni.i18n.model.ProjectionDetail.inventory_id,
  sku_idLabel                             : Omni.i18n.model.ProjectionDetail.sku_id,
  location_idLabel                        : Omni.i18n.model.ProjectionDetail.location_id,
  first_forecast_unitsLabel               : Omni.i18n.model.ProjectionDetail.first_forecast_units,
  last_forecast_unitsLabel                : Omni.i18n.model.ProjectionDetail.last_forecast_units,
  last_forecast_dateLabel                 : Omni.i18n.model.ProjectionDetail.last_forecast_date,
  projection_1_unitsLabel                 : Omni.i18n.model.ProjectionDetail.projection_1_units,
  projection_2_unitsLabel                 : Omni.i18n.model.ProjectionDetail.projection_2_units,
  projection_3_unitsLabel                 : Omni.i18n.model.ProjectionDetail.projection_3_units,
  projection_4_unitsLabel                 : Omni.i18n.model.ProjectionDetail.projection_4_units,
  sale_units_ytdLabel                     : Omni.i18n.model.ProjectionDetail.sale_units_ytd,
  sale_units_py1Label                     : Omni.i18n.model.ProjectionDetail.sale_units_py1,
  sale_units_py2Label                     : Omni.i18n.model.ProjectionDetail.sale_units_py2,
  sale_units_py3Label                     : Omni.i18n.model.ProjectionDetail.sale_units_py3,
  number_of_schoolsLabel                  : Omni.i18n.model.ProjectionDetail.number_of_schools,
  average_salesLabel                      : Omni.i18n.model.ProjectionDetail.average_sales,
  standard_deviationLabel                 : Omni.i18n.model.ProjectionDetail.standard_deviation,
  is_destroyedLabel                       : Omni.i18n.model.ProjectionDetail.is_destroyed,
  audit_created_byLabel                   : Omni.i18n.model.ProjectionDetail.audit_created_by,
  audit_updated_byLabel                   : Omni.i18n.model.ProjectionDetail.audit_updated_by,
  audit_created_atLabel                   : Omni.i18n.model.ProjectionDetail.audit_created_at,
  audit_updated_atLabel                   : Omni.i18n.model.ProjectionDetail.audit_updated_at,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title    : 'Projection Details',
  subtitle : 'Create and maintain Projection Details',
  // TITLES (End)

  initComponent : function () {

    var me = this;


    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns      : [
        {
          header       : this.stateLabel,
          dataIndex    : 'state',
          flex         : 1,
          hidden       : true
        },
        {
          header       : this.sku_idLabel,
          dataIndex    : 'sku_display',
          flex         : 1,
          // editor       : {
          //   xtype        : 'buildit-Locator',
          //   store        : Ext.create('Omni.store.Sku',{pageSize: 10}),
          //   displayField : 'display',
          //   queryField   : 'display',
          //   valueField   : 'sku_id',
          //   itemTpl      : '{display}',
          //   name         : 'sku_id',
          //   allowBlank   : true
          // }
        },
        {
          header       : this.location_idLabel,
          dataIndex    : 'location_display',
          flex         : 1
        },
        {
          header       : this.projection_1_unitsLabel,
          dataIndex    : 'projection_1_units',
          flex         : 1,
          editor:    {
                      xtype: 'numberfield',
                     },
          bulkEditable : true
        },
        {
          header       : this.projection_2_unitsLabel,
          dataIndex    : 'projection_2_units',
          flex         : 1,
          editor:    {
                      xtype: 'numberfield',
                     },
          bulkEditable : true
        },
        {
          header       : this.projection_3_unitsLabel,
          dataIndex    : 'projection_3_units',
          flex         : 1,
          editor:    {
                      xtype: 'numberfield',
                     },
          bulkEditable : true
        },
        {
          header       : this.projection_4_unitsLabel,
          dataIndex    : 'projection_4_units',
          flex         : 1,
          editor:    {
                      xtype: 'numberfield',
                     },
          bulkEditable : true
        },
        {
          header       : this.sale_units_ytdLabel,
          dataIndex    : 'sale_units_ytd',
          flex         : 1
        },
        {
          header       : this.sale_units_py1Label,
          dataIndex    : 'sale_units_py1',
          flex         : 1
        },
        {
          header       : this.sale_units_py2Label,
          dataIndex    : 'sale_units_py2',
          flex         : 1
        },
        // {
        //   header       : this.sale_units_py3Label,
        //   dataIndex    : 'sale_units_py3',
        //   flex         : 1
        // },
        // {
        //   header       : this.average_salesLabel,
        //   dataIndex    : 'average_sales',
        //   flex         : 1
        // },
        // {
        //   header       : this.first_forecast_unitsLabel,
        //   dataIndex    : 'first_forecast_units',
        //   flex         : 1
        // },
        // {
        //   header       : this.last_forecast_unitsLabel,
        //   dataIndex    : 'last_forecast_units',
        //   flex         : 1
        // },
        // {
        //   header       : this.last_forecast_dateLabel,
        //   dataIndex    : 'last_forecast_date',
        //   flex         : 1,
        //   // editor       : {
        //   //   xtype        : 'datefield'
        //   // }
        // }
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});
