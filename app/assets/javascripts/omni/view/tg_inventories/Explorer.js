Ext.define('Omni.view.tg_inventories.Explorer', {

  extend   : 'Buildit.ux.explorer.Panel',
  alias    : 'widget.omni-tg_inventories-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  contextMenuConfig : {
    xtype    : 'omni-app-ExplorerContextMenu'
  },

  newForms : [{
    xtype    : 'omni-tg_inventories-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-tg_inventories-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  ITEMLabel                               : Omni.i18n.model.TgInventory.ITEM,
  OH_60Label                              : Omni.i18n.model.TgInventory.OH_60,
  OH_61Label                              : Omni.i18n.model.TgInventory.OH_61,
  OH_62Label                              : Omni.i18n.model.TgInventory.OH_62,
  OH_63Label                              : Omni.i18n.model.TgInventory.OH_63,
  OH_64Label                              : Omni.i18n.model.TgInventory.OH_64,
  OH_65Label                              : Omni.i18n.model.TgInventory.OH_65,
  OH_66Label                              : Omni.i18n.model.TgInventory.OH_66,
  OO_60Label                              : Omni.i18n.model.TgInventory.OO_60,
  OO_61Label                              : Omni.i18n.model.TgInventory.OO_61,
  OO_62Label                              : Omni.i18n.model.TgInventory.OO_62,
  OO_63Label                              : Omni.i18n.model.TgInventory.OO_63,
  OO_64Label                              : Omni.i18n.model.TgInventory.OO_64,
  OO_65Label                              : Omni.i18n.model.TgInventory.OO_65,
  OO_66Label                              : Omni.i18n.model.TgInventory.OO_66,
  SOLD_60Label                            : Omni.i18n.model.TgInventory.SOLD_60,
  SOLD_61Label                            : Omni.i18n.model.TgInventory.SOLD_61,
  SOLD_62Label                            : Omni.i18n.model.TgInventory.SOLD_62,
  SOLD_63Label                            : Omni.i18n.model.TgInventory.SOLD_63,
  SOLD_64Label                            : Omni.i18n.model.TgInventory.SOLD_64,
  SOLD_65Label                            : Omni.i18n.model.TgInventory.SOLD_65,
  SOLD_66Label                            : Omni.i18n.model.TgInventory.SOLD_66,
  PROJ_60Label                            : Omni.i18n.model.TgInventory.PROJ_60,
  PROJ_61Label                            : Omni.i18n.model.TgInventory.PROJ_61,
  PROJ_62Label                            : Omni.i18n.model.TgInventory.PROJ_62,
  PROJ_63Label                            : Omni.i18n.model.TgInventory.PROJ_63,
  PROJ_64Label                            : Omni.i18n.model.TgInventory.PROJ_64,
  PROJ_65Label                            : Omni.i18n.model.TgInventory.PROJ_65,
  PROJ_66Label                            : Omni.i18n.model.TgInventory.PROJ_66,
  valueLabel                              : Omni.i18n.model.TgInventory.value,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title    : 'Tg Inventories',
  subtitle : 'Create and maintain Tg Inventories',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store        : Ext.create('Omni.store.TgInventory')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(me, {
      columns      : [
    {
      header       : me.OH_60Label,
      dataIndex    : 'OH_60',
      flex         : 1
    },
    {
      header       : me.OH_61Label,
      dataIndex    : 'OH_61',
      flex         : 1
    },
    {
      header       : me.OH_62Label,
      dataIndex    : 'OH_62',
      flex         : 1
    },
    {
      header       : me.OH_63Label,
      dataIndex    : 'OH_63',
      flex         : 1
    },
    {
      header       : me.OH_64Label,
      dataIndex    : 'OH_64',
      flex         : 1
    },
    {
      header       : me.OH_65Label,
      dataIndex    : 'OH_65',
      flex         : 1
    },
    {
      header       : me.OH_66Label,
      dataIndex    : 'OH_66',
      flex         : 1
    },
    {
      header       : me.OO_60Label,
      dataIndex    : 'OO_60',
      flex         : 1
    },
    {
      header       : me.OO_61Label,
      dataIndex    : 'OO_61',
      flex         : 1
    },
    {
      header       : me.OO_62Label,
      dataIndex    : 'OO_62',
      flex         : 1
    },
    {
      header       : me.OO_63Label,
      dataIndex    : 'OO_63',
      flex         : 1
    },
    {
      header       : me.OO_64Label,
      dataIndex    : 'OO_64',
      flex         : 1
    },
    {
      header       : me.OO_65Label,
      dataIndex    : 'OO_65',
      flex         : 1
    },
    {
      header       : me.OO_66Label,
      dataIndex    : 'OO_66',
      flex         : 1
    },
    {
      header       : me.SOLD_60Label,
      dataIndex    : 'SOLD_60',
      flex         : 1
    },
    {
      header       : me.SOLD_61Label,
      dataIndex    : 'SOLD_61',
      flex         : 1
    },
    {
      header       : me.SOLD_62Label,
      dataIndex    : 'SOLD_62',
      flex         : 1
    },
    {
      header       : me.SOLD_63Label,
      dataIndex    : 'SOLD_63',
      flex         : 1
    },
    {
      header       : me.SOLD_64Label,
      dataIndex    : 'SOLD_64',
      flex         : 1
    },
    {
      header       : me.SOLD_65Label,
      dataIndex    : 'SOLD_65',
      flex         : 1
    },
    {
      header       : me.SOLD_66Label,
      dataIndex    : 'SOLD_66',
      flex         : 1
    },
    {
      header       : me.PROJ_60Label,
      dataIndex    : 'PROJ_60',
      flex         : 1
    },
    {
      header       : me.PROJ_61Label,
      dataIndex    : 'PROJ_61',
      flex         : 1
    },
    {
      header       : me.PROJ_62Label,
      dataIndex    : 'PROJ_62',
      flex         : 1
    },
    {
      header       : me.PROJ_63Label,
      dataIndex    : 'PROJ_63',
      flex         : 1
    },
    {
      header       : me.PROJ_64Label,
      dataIndex    : 'PROJ_64',
      flex         : 1
    },
    {
      header       : me.PROJ_65Label,
      dataIndex    : 'PROJ_65',
      flex         : 1
    },
    {
      header       : me.PROJ_66Label,
      dataIndex    : 'PROJ_66',
      flex         : 1
    },
    {
      header       : me.valueLabel,
      dataIndex    : 'value',
      flex         : 1
    }
      ]
    });
    // COLUMNS (End)


    me.callParent();
  }

});
