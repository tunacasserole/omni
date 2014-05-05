Ext.define('Omni.view.projection_details.History', {

  extend   : 'Buildit.ux.explorer.Panel',
  alias    : 'widget.omni-projection_details-History',

  // EXPLORER INIT (Start) ===============================================================
  allowInlineEdit : true,
  allowNew : false,
  allowBulkUpdate : false,

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
  displayLabel                            : Omni.i18n.model.ProjectionDetail.display,
  stateLabel                              : Omni.i18n.model.ProjectionDetail.state,
  sku_idLabel                             : Omni.i18n.model.ProjectionDetail.sku_id,
  location_idLabel                        : Omni.i18n.model.ProjectionDetail.location_id,
  on_handLabel                            : Omni.i18n.model.ProjectionDetail.on_hand,
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
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title    : 'Projection History',
  subtitle : 'Create and maintain Projection History',
  // TITLES (End)

  initComponent : function () {

    var me = this;


    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns      : [
        {
          header       : this.sku_idLabel,
          dataIndex    : 'sku_display',
          flex         : 3,
        },
        {
          header       : this.location_idLabel,
          dataIndex    : 'location_display',
          flex         : 2,
        },
        {
          header       : this.on_handLabel,
          dataIndex    : 'on_hand',
          flex         : 1,
          sortable     : false
        },
        {
          header       : this.last_forecast_unitsLabel,
          dataIndex    : 'last_forecast_units',
          flex         : 1
        },
        {
          header       : this.projection_1_unitsLabel,
          dataIndex    : 'projection_1_units',
          flex         : 1,
          editor:    {
            xtype: 'numberfield',
            // disabled: this.record.get('state') !== 'projection_1'
            disabled: false
          },
        //   // listeners: {
        //   //   beforerender: this.prepareProjection1Units,
        //   //   // click: this.onForecastAction,
        //   //   scope: me
        // }
        },
        {
          header       : this.projection_2_unitsLabel,
          dataIndex    : 'projection_2_units',
          flex         : 1,
          editor:    {
            xtype: 'numberfield',
            disabled: this.record.get('state') !== 'projection_2'
          }
        },
        {
          header       : this.projection_3_unitsLabel,
          dataIndex    : 'projection_3_units',
          flex         : 1,
          editor:    {
            xtype: 'numberfield',
            disabled: this.record.get('state') !== 'projection_3'
          }
        },
        {
          header       : this.projection_4_unitsLabel,
          dataIndex    : 'projection_4_units',
          flex         : 1,
          editor:    {
            xtype: 'numberfield',
            disabled: this.record.get('state') !== 'projection_4'
          }
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
        {
          header       : this.stateLabel,
          dataIndex    : 'state',
          flex         : 1,
          hidden       : true
        },
      ]
    });
    // COLUMNS (End)


    this.callParent();
  },

  /**
   *
   */
  prepareProjection1Units: function(action, eOpts) {
    var currentState = this.record.get('state');

    this.record.get('state') === 'projection_1' ? action.show() : action.hide();

  }, // prepareAction

});
