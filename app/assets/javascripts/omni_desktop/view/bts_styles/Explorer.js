Ext.define('Omni.view.bts_styles.Explorer', {

  extend : 'Buildit.ux.explorer.Panel',
  alias  : 'widget.omni-bts_styles-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  store  : Ext.create('Omni.store.BtsStyle'),

  contextMenuConfig : {
    xtype    : 'omni-bts_styles-ExplorerContextMenu'
  },

  newForms : [{
    xtype    : 'omni-bts_styles-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-bts_styles-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  bts_style_idLabel:                      Omni.i18n.model.BtsStyle.bts_style_id,
  bts_idLabel:                            Omni.i18n.model.BtsStyle.bts_id,
  style_idLabel:                          Omni.i18n.model.BtsStyle.style_id,
  location_idLabel:                       Omni.i18n.model.BtsStyle.location_id,
  data_sourceLabel:                       Omni.i18n.model.BtsStyle.data_source,
  on_handLabel:                           Omni.i18n.model.BtsStyle.on_hand,
  wipLabel:                               Omni.i18n.model.BtsStyle.wip,
  allocatedLabel:                         Omni.i18n.model.BtsStyle.allocated,
  transitLabel:                        Omni.i18n.model.BtsStyle.transit,
  ytdLabel:                               Omni.i18n.model.BtsStyle.ytd,
  py1Label:                               Omni.i18n.model.BtsStyle.py1,
  py2Label:                               Omni.i18n.model.BtsStyle.py2,
  projectionLabel:                        Omni.i18n.model.BtsStyle.projection,
  projection_totalLabel:                  Omni.i18n.model.BtsStyle.projection_total,
  projection_devLabel:                    Omni.i18n.model.BtsStyle.projection_dev,
  projection_dev_pctLabel:                Omni.i18n.model.BtsStyle.projection_dev_pct,
  projection_smoothLabel:                 Omni.i18n.model.BtsStyle.projection_smooth,
  converted_needLabel:                    Omni.i18n.model.BtsStyle.converted_need,
  generic_needLabel:                      Omni.i18n.model.BtsStyle.generic_need,
  needLabel:                              Omni.i18n.model.BtsStyle.need,
  useable_ohLabel:                        Omni.i18n.model.BtsStyle.useable_oh,
  unuseable_ohLabel:                      Omni.i18n.model.BtsStyle.unuseable_oh,
  total_ohLabel:                          Omni.i18n.model.BtsStyle.total_oh,
  complete_ooLabel:                       Omni.i18n.model.BtsStyle.complete_oo,
  complete_coverageLabel:                 Omni.i18n.model.BtsStyle.complete_coverage,
  versionLabel:                           Omni.i18n.model.BtsStyle.version,
  audit_updated_atLabel:                  Omni.i18n.model.BtsStyle.audit_updated_at,
  audit_created_atLabel:                  Omni.i18n.model.BtsStyle.audit_created_at,
  audit_created_byLabel:                  Omni.i18n.model.BtsStyle.audit_created_by,
  audit_updated_byLabel:                  Omni.i18n.model.BtsStyle.audit_updated_by,
  is_destroyedLabel:                      Omni.i18n.model.BtsStyle.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title:     'BTS Style Summary',
  subtitle:  'Review the BTS at the Style level',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns      : [
        // {
        //   header       : this.bts_style_idLabel,
        //   dataIndex    : 'bts_style_id',
        //   flex         : 1
        // },
        // {
        //   header       : this.bts_idLabel,
        //   dataIndex    : 'bts_id',
        //   flex         : 1
        // },
        {
          header       : this.style_idLabel,
          dataIndex    : 'style_display',
          flex         : 1
        },
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
          header       : this.projection_totalLabel,
          dataIndex    : 'projection_total',
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
          header       : this.projection_smoothLabel,
          dataIndex    : 'projection_smooth',
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
        {
          header       : this.needLabel,
          dataIndex    : 'need',
          flex         : 1
        },
        {
          header       : this.useable_ohLabel,
          dataIndex    : 'useable_oh',
          flex         : 1
        },
        {
          header       : this.unuseable_ohLabel,
          dataIndex    : 'unuseable_oh',
          flex         : 1
        },
        {
          header       : this.total_ohLabel,
          dataIndex    : 'total_oh',
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
        // {
        //   header       : this.versionLabel,
        //   dataIndex    : 'version',
        //   flex         : 1
        // },
        // {
        //   header       : this.audit_updated_atLabel,
        //   dataIndex    : 'audit_updated_at',
        //   flex         : 1
        // },
        // {
        //   header       : this.audit_created_atLabel,
        //   dataIndex    : 'audit_created_at',
        //   flex         : 1
        // },
        // {
        //   header       : this.audit_created_byLabel,
        //   dataIndex    : 'audit_created_by',
        //   flex         : 1
        // },
        // {
        //   header       : this.audit_updated_byLabel,
        //   dataIndex    : 'audit_updated_by',
        //   flex         : 1
        // },
        // {
        //   header       : this.is_destroyedLabel,
        //   dataIndex    : 'is_destroyed',
        //   flex         : 1
        // }
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});
