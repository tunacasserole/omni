Ext.define('Omni.view.sku_aliases.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-sku_aliases-Explorer',

  initComponent:function () {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: false,

      store: Ext.create('Omni.store.SkuAlias'),

      contextMenuConfig:{
        xtype:'omni-sku_aliases-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-sku_aliases-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-sku_aliases-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      sku_displayLabel: Omni.i18n.model.SkuAlias.sku_display,
      sku_aliasLabel: Omni.i18n.model.SkuAlias.sku_alias,
      sku_alias_typeLabel: Omni.i18n.model.SkuAlias.sku_alias_type,
      is_primaryLabel: Omni.i18n.model.SkuAlias.is_primary,
      pack_typeLabel: Omni.i18n.model.SkuAlias.pack_type,
      pack_sizeLabel: Omni.i18n.model.SkuAlias.pack_size
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.sku_displayLabel, dataIndex: 'sku_display',  flex: 1,  sortable: true  },
        { header: this.sku_aliasLabel, dataIndex: 'sku_alias',  flex: 1,  sortable: true  },
        { header: this.sku_alias_typeLabel, dataIndex: 'sku_alias_type',  flex: 1,  sortable: true, renderer: Buildit.util.Format.lookupRenderer('SKU_ALIAS_TYPE') },
        { header: this.is_primaryLabel, dataIndex: 'is_primary',  flex: 1,  sortable: true  },
        { header: this.pack_typeLabel, dataIndex: 'pack_type',  flex: 1,  sortable: true, renderer: Buildit.util.Format.lookupRenderer('PACK_TYPE') },
        { header: this.pack_sizeLabel, dataIndex: 'pack_size',  flex: 1,  sortable: true  }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Sku Alias',
      subtitle:  'Alternate lookup numbers and codes for a product'
    });
    // TITLES (End)



    this.callParent();
  }

});
