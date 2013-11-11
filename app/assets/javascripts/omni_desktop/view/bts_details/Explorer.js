Ext.define('Omni.view.bts_details.Explorer', {

  extend : 'Buildit.ux.explorer.Panel',
  alias  : 'widget.omni-bts_details-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  store  : Ext.create('Omni.store.BtsDetail'),

  allowFind  :  true,

  contextMenuConfig : {
    xtype    : 'omni-bts_details-ExplorerContextMenu'
  },

  newForms : [{
    xtype    : 'omni-bts_details-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-bts_details-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  bts_detail_idLabel:                     Omni.i18n.model.BtsDetail.bts_detail_id,
  bts_idLabel:                            Omni.i18n.model.BtsDetail.bts_id,
  sku_idLabel:                            Omni.i18n.model.BtsDetail.sku_id,
  style_idLabel:                          Omni.i18n.model.BtsDetail.style_id,
  location_idLabel:                       Omni.i18n.model.BtsDetail.location_id,
  data_sourceLabel:                       Omni.i18n.model.BtsDetail.data_source,
  on_handLabel:                           Omni.i18n.model.BtsDetail.on_hand,
  wipLabel:                               Omni.i18n.model.BtsDetail.wip,
  allocatedLabel:                         Omni.i18n.model.BtsDetail.allocated,
  transitLabel:                          Omni.i18n.model.BtsDetail.transit,
  ytdLabel:                               Omni.i18n.model.BtsDetail.ytd,
  py1Label:                               Omni.i18n.model.BtsDetail.py1,
  py2Label:                               Omni.i18n.model.BtsDetail.py2,
  projectionLabel:                        Omni.i18n.model.BtsDetail.projection,
  projection_totalLabel:                  Omni.i18n.model.BtsDetail.projection_total,
  projection_devLabel:                    Omni.i18n.model.BtsDetail.projection_dev,
  projection_dev_pctLabel:                Omni.i18n.model.BtsDetail.projection_dev_pct,
  projection_smoothedLabel:               Omni.i18n.model.BtsDetail.projection_smoothed,
  converted_needLabel:                    Omni.i18n.model.BtsDetail.converted_need,
  generic_needLabel:                      Omni.i18n.model.BtsDetail.generic_need,
  needLabel:                              Omni.i18n.model.BtsDetail.need,
  useable_on_handLabel:                   Omni.i18n.model.BtsDetail.useable_on_hand,
  non_sellable_unitsLabel:                 Omni.i18n.model.BtsDetail.non_sellable_units,
  total_on_handLabel:                     Omni.i18n.model.BtsDetail.total_on_hand,
  complete_ooLabel:                       Omni.i18n.model.BtsDetail.complete_oo,
  complete_coverageLabel:                 Omni.i18n.model.BtsDetail.complete_coverage,
  versionLabel:                           Omni.i18n.model.BtsDetail.version,
  audit_updated_atLabel:                  Omni.i18n.model.BtsDetail.audit_updated_at,
  audit_created_atLabel:                  Omni.i18n.model.BtsDetail.audit_created_at,
  audit_created_byLabel:                  Omni.i18n.model.BtsDetail.audit_created_by,
  audit_updated_byLabel:                  Omni.i18n.model.BtsDetail.audit_updated_by,
  is_destroyedLabel:                      Omni.i18n.model.BtsDetail.is_destroyed,
  // LABELS (End)

 // TITLES (Start) ======================================================================
  title:     'BTS Details',
  subtitle:  'Work with BTS Details',
  // TITLES (End)

  filters: [
    {
      showAll  : 'All Sources',
      items    : [
        ['source_parker',     "PARKER"],
        ['source_buckhead',     "BUCKHEAD"],
        ['source_grits',     "GRITS"]
      ]
    }
  ],

  initComponent : function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns      : [
        // {
        //   header       : this.bts_detail_idLabel,
        //   dataIndex    : 'bts_detail_id',
        //   flex         : 1
        // },
        // {
        //   header       : this.bts_idLabel,
        //   dataIndex    : 'bts_id',
        //   flex         : 1
        // },
        // {
        //   header       : this.location_idLabel,
        //   dataIndex    : 'location_id',
        //   flex         : 1
        // },
        // {
        //   header       : this.data_sourceLabel,
        //   dataIndex    : 'data_source',
        //   flex         : 1
        // },
        {
          header       : this.sku_idLabel,
          dataIndex    : 'sku_display',
          flex         : 5
        },
        {
          header       : this.needLabel,
          dataIndex    : 'need',
          flex         : 1
        },
        // {
        //   header       : this.style_idLabel,
        //   dataIndex    : 'style_display',
        //   flex         : 1
        // },        // {
        {
          header       : this.on_handLabel,
          dataIndex    : 'on_hand',
          flex         : 1
        },
        {
          header       : this.wipLabel,
          dataIndex    : 'wip',
          flex         : 1
        },
        {
          header       : this.allocatedLabel,
          dataIndex    : 'allocated',
          flex         : 1
        },
        {
          header       : this.transitLabel,
          dataIndex    : 'transit',
          flex         : 1
        },
        {
          header       : this.ytdLabel,
          dataIndex    : 'ytd',
          flex         : 1
        },
        {
          header       : this.py1Label,
          dataIndex    : 'py1',
          flex         : 1
        },
        {
          header       : this.py2Label,
          dataIndex    : 'py2',
          flex         : 1
        },
        {
          header       : this.projectionLabel,
          dataIndex    : 'projection',
          flex         : 1
        },
        {
          header       : this.projection_devLabel,
          dataIndex    : 'projection_dev',
          flex         : 1
        },
        {
          header       : this.projection_dev_pctLabel,
          dataIndex    : 'projection_dev_pct',
          flex         : 1
        },
        {
          header       : this.projection_smoothedLabel,
          dataIndex    : 'projection_smoothed',
          flex         : 1
        },
        {
          header       : this.useable_on_handLabel,
          dataIndex    : 'useable_on_hand',
          flex         : 1
        },
        {
          header       : this.non_sellable_unitsLabel,
          dataIndex    : 'non_sellable_units',
          flex         : 1
        },
        {
          header       : this.total_on_handLabel,
          dataIndex    : 'total_on_hand',
          flex         : 1
        },
        {
          header       : this.complete_ooLabel,
          dataIndex    : 'complete_oo',
          flex         : 1
        },
        {
          header       : this.complete_coverageLabel,
          dataIndex    : 'complete_coverage',
          flex         : 1
        },
        {
          header       : this.converted_needLabel,
          dataIndex    : 'converted_need',
          flex         : 1
        },
        {
          header       : this.generic_needLabel,
          dataIndex    : 'generic_need',
          flex         : 1
        },
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});
