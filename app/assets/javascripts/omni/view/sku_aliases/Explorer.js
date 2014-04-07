Ext.define('Omni.view.sku_aliases.Explorer', {

  extend   : 'Buildit.ux.explorer.Panel',
  alias    : 'widget.omni-sku_aliases-Explorer',
  allowFind : true,
  // EXPLORER INIT (Start) ===============================================================
  contextMenuConfig : {
    xtype    : 'buildit-explorer-ContextMenu'
  },

  newForms : [{
    xtype    : 'omni-sku_aliases-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-sku_aliases-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  sku_alias_idLabel                       : Omni.i18n.model.SkuAlias.sku_alias_id,
  displayLabel                            : Omni.i18n.model.SkuAlias.display,
  sku_idLabel                             : Omni.i18n.model.SkuAlias.sku_id,
  sku_aliasLabel                          : Omni.i18n.model.SkuAlias.sku_alias,
  sku_alias_typeLabel                     : Omni.i18n.model.SkuAlias.sku_alias_type,
  alias_sourceLabel                       : Omni.i18n.model.SkuAlias.alias_source,
  is_primaryLabel                         : Omni.i18n.model.SkuAlias.is_primary,
  pack_typeLabel                          : Omni.i18n.model.SkuAlias.pack_type,
  pack_sizeLabel                          : Omni.i18n.model.SkuAlias.pack_size,
  is_destroyedLabel                       : Omni.i18n.model.SkuAlias.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title    : 'Sku Aliases',
  subtitle : 'Create and maintain Sku Aliases',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store        : Ext.create('Omni.store.SkuAlias')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(me, {
      columns      : [
    // {
    //   header       : me.displayLabel,
    //   dataIndex    : 'display',
    //   flex         : 1
    // },
    {
      header       : me.sku_aliasLabel,
      dataIndex    : 'sku_alias',
      flex         : 1
    },
    {
      header       : me.sku_idLabel,
      dataIndex    : 'sku_display',
      flex         : 1
    },
    {
      header       : me.alias_sourceLabel,
      dataIndex    : 'alias_source',
      flex         : 1,
      renderer     : Buildit.util.Format.lookupRenderer('ALIAS_SOURCE'),
      lkp          : 'code'
    }
    // {
    //   header       : me.sku_alias_typeLabel,
    //   dataIndex    : 'sku_alias_type',
    //   flex         : 1,
    //   renderer     : Buildit.util.Format.lookupRenderer('SKU_ALIAS_TYPE'),
    //   lkp          : 'code'
    // },
    // {
    //   xtype        : 'checkcolumn',
    //   header       : me.is_primaryLabel,
    //   dataIndex    : 'is_primary',
    //   flex         : 1
    // },
    // {
    //   header       : me.pack_typeLabel,
    //   dataIndex    : 'pack_type',
    //   flex         : 1,
    //   renderer     : Buildit.util.Format.lookupRenderer('PACK_TYPE'),
    //   lkp          : 'code'
    // },
    // {
    //   header       : me.pack_sizeLabel,
    //   dataIndex    : 'pack_size',
    //   flex         : 1
    // },
    // {
    //   xtype        : 'checkcolumn',
    //   header       : me.is_destroyedLabel,
    //   dataIndex    : 'is_destroyed',
    //   flex         : 1
    // }
      ]
    });
    // COLUMNS (End)


    me.callParent();
  }

});
