Ext.define('Omni.view.projection_details.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.omni-projection_details-Explorer',
  allowNew: false,

  // EXPLORER INIT (Start) ===============================================================
  store: Ext.create('Omni.store.ProjectionDetail'),

  contextMenuConfig: {
    xtype: 'omni-projection_details-ExplorerContextMenu'
  },

  newForms: [{
    xtype: 'omni-projection_details-Form'
  }],

  inspectorConfig: {
    xtype: 'omni-projection_details-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  projection_detail_idLabel: Omni.i18n.model.ProjectionDetail.projection_detail_id,
  projection_detail_nbrLabel: Omni.i18n.model.ProjectionDetail.projection_detail_nbr,
  projection_idLabel: Omni.i18n.model.ProjectionDetail.projection_id,
  projection_location_idLabel: Omni.i18n.model.ProjectionDetail.projection_location_id,
  forecast_profile_idLabel: Omni.i18n.model.ProjectionDetail.forecast_profile_id,
  inventory_idLabel: Omni.i18n.model.ProjectionDetail.inventory_id,
  sku_idLabel: Omni.i18n.model.ProjectionDetail.sku_id,
  location_idLabel: Omni.i18n.model.ProjectionDetail.location_id,
  displayLabel: Omni.i18n.model.ProjectionDetail.display,
  stateLabel: Omni.i18n.model.ProjectionDetail.state,
  first_forecast_unitsLabel: Omni.i18n.model.ProjectionDetail.first_forecast_units,
  last_forecast_unitsLabel: Omni.i18n.model.ProjectionDetail.last_forecast_units,
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

  // TITLES (Start) ======================================================================
  title: 'Projection Details',
  subtitle: 'Create and maintain Projection Details',
  // TITLES (End)

  initComponent: function() {

    var me = this;
    // var my_state = this.record.get('state');

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [{
          header: this.sku_idLabel,
          dataIndex: 'sku_display',
          flex: 1,
          sortable: false
        }, {
          header: this.location_idLabel,
          dataIndex: 'location_display',
          flex: 1,
          sortable: false
        }, {
          header: this.sale_units_ytdLabel,
          dataIndex: 'sale_units_ytd',
          flex: 1,
          sortable: false
        }, {
          header: this.sale_units_py1Label,
          dataIndex: 'sale_units_py1',
          flex: 1,
          sortable: false
        }, {
          header: this.sale_units_py2Label,
          dataIndex: 'sale_units_py2',
          flex: 1,
          sortable: false
        }, {
          header: this.sale_units_py3Label,
          dataIndex: 'sale_units_py3',
          flex: 1,
          sortable: false
        }, {
          header: this.on_handLabel,
          dataIndex: 'on_hand',
          flex: 1,
          sortable: false
        }, {
          header: this.on_orderLabel,
          dataIndex: 'on_order',
          flex: 1,
          sortable: false
        },
        // {
        //   header       : this.last_forecast_unitsLabel,
        //   dataIndex    : 'last_forecast_units',
        //   flex         : 1
        // },
        {
          header: this.sd_rawLabel,
          dataIndex: 'sd_raw',
          flex: 1,
          sortable: false
        }, {
          header: this.sd_floorLabel,
          dataIndex: 'sd_floor',
          flex: 1,
          sortable: false
        }, {
          header: this.sd_ceilingLabel,
          dataIndex: 'sd_ceiling',
          flex: 1,
          sortable: false
        }, {
          header: this.sd_smoothLabel,
          dataIndex: 'sd_smooth',
          flex: 1,
          sortable: false
        }, {
          header: this.sd_percentLabel,
          dataIndex: 'sd_percent',
          flex: 1,
          sortable: false
        }, {
          header: this.last_forecast_unitsLabel,
          dataIndex: 'last_forecast_units',
          flex: 1,
          sortable: false
        }, {
          header: this.projection_1_unitsLabel,
          dataIndex: 'projection_1_units',
          flex: 1,
          sortable: false,
          editor: {
            xtype: 'numberfield',
            disabled: this.record.get('state') !== 'projection_1'
            // disabled: my_state !== 'projection_1'
          },
        }, {
          header: this.projection_2_unitsLabel,
          dataIndex: 'projection_2_units',
          flex: 1,
          sortable: false,
          editor: {
            xtype: 'numberfield',
            disabled: this.record.get('state') !== 'projection_2'
            // disabled: my_state !== 'projection_2'
          }
        }, {
          header: this.projection_3_unitsLabel,
          dataIndex: 'projection_3_units',
          flex: 1,
          sortable: false,
          editor: {
            xtype: 'numberfield',
            disabled: this.record.get('state') !== 'projection_3'
            // disabled: my_state !== 'projection_3'
          }
        }, {
          header: this.projection_4_unitsLabel,
          dataIndex: 'projection_4_units',
          flex: 1,
          sortable: false,
          editor: {
            xtype: 'numberfield',
            disabled: this.record.get('state') !== 'projection_4'
            // disabled: my_state !== 'projection_4'
          }
        },
        // {
        //   header       : this.coverage_allowedLabel,
        //   dataIndex    : 'coverage_allowed',
        //   flex         : 1
        // },
        // {
        //   header       : this.custom_needLabel,
        //   dataIndex    : 'custom_need',
        //   flex         : 1
        // },
        // {
        //   header       : this.generic_needLabel,
        //   dataIndex    : 'generic_need',
        //   flex         : 1
        // },
        // {
        //   header       : this.coverage_completeLabel,
        //   dataIndex    : 'coverage_complete',
        //   flex         : 1
        // },
        // {
        //   header       : this.usableLabel,
        //   dataIndex    : 'usable',
        //   flex         : 1
        // },
        // {
        //   header       : this.unusableLabel,
        //   dataIndex    : 'unusable',
        //   flex         : 1
        // },
        // {
        //   header       : this.total_needLabel,
        //   dataIndex    : 'total_need',
        //   flex         : 1
        // },
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});
