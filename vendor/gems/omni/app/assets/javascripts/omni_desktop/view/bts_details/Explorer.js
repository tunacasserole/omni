Ext.define('Omni.view.bts_details.Explorer', {

  extend : 'Buildit.ux.explorer.Panel',
  alias  : 'widget.omni-bts_details-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  store  : Ext.create('Omni.store.BtsDetail'),

  allowFind: true,

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
  location_idLabel:                       Omni.i18n.model.BtsDetail.location_id,
  data_sourceLabel:                       Omni.i18n.model.BtsDetail.data_source,
  on_handLabel:                           Omni.i18n.model.BtsDetail.on_hand,
  work_ipLabel:                           Omni.i18n.model.BtsDetail.work_ip,
  purchase_ipLabel:                       Omni.i18n.model.BtsDetail.purchase_ip,
  wipLabel:                               Omni.i18n.model.BtsDetail.wip,
  allocatedLabel:                         Omni.i18n.model.BtsDetail.allocated,
  in_transitLabel:                        Omni.i18n.model.BtsDetail.in_transit,
  ytdLabel:                               Omni.i18n.model.BtsDetail.ytd,
  py1Label:                               Omni.i18n.model.BtsDetail.py1,
  py2Label:                               Omni.i18n.model.BtsDetail.py2,
  projectedLabel:                         Omni.i18n.model.BtsDetail.projected,
  versionLabel:                           Omni.i18n.model.BtsDetail.version,
  audit_updated_atLabel:                  Omni.i18n.model.BtsDetail.audit_updated_at,
  audit_created_atLabel:                  Omni.i18n.model.BtsDetail.audit_created_at,
  audit_created_byLabel:                  Omni.i18n.model.BtsDetail.audit_created_by,
  audit_updated_byLabel:                  Omni.i18n.model.BtsDetail.audit_updated_by,
  is_destroyedLabel:                      Omni.i18n.model.BtsDetail.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title:     'Bts Details',
  subtitle:  'Create and maintain BtsDetails',
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
    //  ,{
    //   showAll  : 'All Subclasses',
    //   items    : [
    //     ['p1',       "1"],
    //     ['p2',       "2"],
    //   ]
    // }
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
        {
          header       : this.sku_idLabel,
          dataIndex    : 'sku_display',
          flex         : 2
        },
        // {
        //   header       : this.location_idLabel,
        //   dataIndex    : 'location_display',
        //   flex         : 1
        // },
        {
          header       : this.data_sourceLabel,
          dataIndex    : 'data_source',
          flex         : 1
        },
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
          header       : this.in_transitLabel,
          dataIndex    : 'in_transit',
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
          header       : this.projectedLabel,
          dataIndex    : 'projected',
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