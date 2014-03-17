Ext.define('Omni.view.grits_bts.Explorer', {

  extend : 'Buildit.ux.explorer.Panel',
  alias  : 'widget.omni-grits_bts-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  store  : Ext.create('Omni.store.GritsBts'),

  allowFind  :  true,

  contextMenuConfig : {
    xtype    : 'omni-grits_bts-ExplorerContextMenu'
  },

  newForms : [{
    xtype    : 'omni-grits_bts-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-grits_bts-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  tg_sku_idLabel:                         Omni.i18n.model.GritsBts.tg_sku_id,
  qoh_60Label:                            Omni.i18n.model.GritsBts.qoh_60,
  qoh_61Label:                            Omni.i18n.model.GritsBts.qoh_61,
  qoh_62Label:                            Omni.i18n.model.GritsBts.qoh_62,
  qoh_63Label:                            Omni.i18n.model.GritsBts.qoh_63,
  qoh_64Label:                            Omni.i18n.model.GritsBts.qoh_64,
  qoh_65Label:                            Omni.i18n.model.GritsBts.qoh_65,
  qoh_66Label:                            Omni.i18n.model.GritsBts.qoh_66,
  qoo_60Label:                            Omni.i18n.model.GritsBts.qoo_60,
  qoo_61Label:                            Omni.i18n.model.GritsBts.qoo_61,
  qoo_62Label:                            Omni.i18n.model.GritsBts.qoo_62,
  qoo_63Label:                            Omni.i18n.model.GritsBts.qoo_63,
  qoo_64Label:                            Omni.i18n.model.GritsBts.qoo_64,
  qoo_65Label:                            Omni.i18n.model.GritsBts.qoo_65,
  qoo_66Label:                            Omni.i18n.model.GritsBts.qoo_66,
  sold_60Label:                           Omni.i18n.model.GritsBts.sold_60,
  sold_61Label:                           Omni.i18n.model.GritsBts.sold_61,
  sold_62Label:                           Omni.i18n.model.GritsBts.sold_62,
  sold_63Label:                           Omni.i18n.model.GritsBts.sold_63,
  sold_64Label:                           Omni.i18n.model.GritsBts.sold_64,
  sold_65Label:                           Omni.i18n.model.GritsBts.sold_65,
  sold_66Label:                           Omni.i18n.model.GritsBts.sold_66,
  projected_60Label:                      Omni.i18n.model.GritsBts.projected_60,
  projected_61Label:                      Omni.i18n.model.GritsBts.projected_61,
  projected_62Label:                      Omni.i18n.model.GritsBts.projected_62,
  projected_63Label:                      Omni.i18n.model.GritsBts.projected_63,
  projected_64Label:                      Omni.i18n.model.GritsBts.projected_64,
  projected_65Label:                      Omni.i18n.model.GritsBts.projected_65,
  projected_66Label:                      Omni.i18n.model.GritsBts.projected_66,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title:     'GritsBts',
  subtitle:  'Create and maintain GritsBts',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns      : [
        {
          header       : this.tg_sku_idLabel,
          dataIndex    : 'tg_sku_id',
          flex         : 1
        },
        {
          header       : this.qoh_60Label,
          dataIndex    : 'qoh_60',
          flex         : 1
        },
        {
          header       : this.qoh_61Label,
          dataIndex    : 'qoh_61',
          flex         : 1
        },
        {
          header       : this.qoh_62Label,
          dataIndex    : 'qoh_62',
          flex         : 1
        },
        {
          header       : this.qoh_63Label,
          dataIndex    : 'qoh_63',
          flex         : 1
        },
        {
          header       : this.qoh_64Label,
          dataIndex    : 'qoh_64',
          flex         : 1
        },
        {
          header       : this.qoh_65Label,
          dataIndex    : 'qoh_65',
          flex         : 1
        },
        {
          header       : this.qoh_66Label,
          dataIndex    : 'qoh_66',
          flex         : 1
        },
        {
          header       : this.qoo_60Label,
          dataIndex    : 'qoo_60',
          flex         : 1
        },
        {
          header       : this.qoo_61Label,
          dataIndex    : 'qoo_61',
          flex         : 1
        },
        {
          header       : this.qoo_62Label,
          dataIndex    : 'qoo_62',
          flex         : 1
        },
        {
          header       : this.qoo_63Label,
          dataIndex    : 'qoo_63',
          flex         : 1
        },
        {
          header       : this.qoo_64Label,
          dataIndex    : 'qoo_64',
          flex         : 1
        },
        {
          header       : this.qoo_65Label,
          dataIndex    : 'qoo_65',
          flex         : 1
        },
        {
          header       : this.qoo_66Label,
          dataIndex    : 'qoo_66',
          flex         : 1
        },
        {
          header       : this.sold_60Label,
          dataIndex    : 'sold_60',
          flex         : 1
        },
        {
          header       : this.sold_61Label,
          dataIndex    : 'sold_61',
          flex         : 1
        },
        {
          header       : this.sold_62Label,
          dataIndex    : 'sold_62',
          flex         : 1
        },
        {
          header       : this.sold_63Label,
          dataIndex    : 'sold_63',
          flex         : 1
        },
        {
          header       : this.sold_64Label,
          dataIndex    : 'sold_64',
          flex         : 1
        },
        {
          header       : this.sold_65Label,
          dataIndex    : 'sold_65',
          flex         : 1
        },
        {
          header       : this.sold_66Label,
          dataIndex    : 'sold_66',
          flex         : 1
        },
        {
          header       : this.projected_60Label,
          dataIndex    : 'projected_60',
          flex         : 1
        },
        {
          header       : this.projected_61Label,
          dataIndex    : 'projected_61',
          flex         : 1
        },
        {
          header       : this.projected_62Label,
          dataIndex    : 'projected_62',
          flex         : 1
        },
        {
          header       : this.projected_63Label,
          dataIndex    : 'projected_63',
          flex         : 1
        },
        {
          header       : this.projected_64Label,
          dataIndex    : 'projected_64',
          flex         : 1
        },
        {
          header       : this.projected_65Label,
          dataIndex    : 'projected_65',
          flex         : 1
        },
        {
          header       : this.projected_66Label,
          dataIndex    : 'projected_66',
          flex         : 1
        }
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});