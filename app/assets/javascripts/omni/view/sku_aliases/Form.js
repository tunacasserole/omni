Ext.define('Omni.view.sku_aliases.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-sku_aliases-Form',



  initComponent:function () {

    var me = this;


    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      sku_idLabel:                                Omni.i18n.model.SkuAlias.sku_id,
      sku_aliasLabel:                             Omni.i18n.model.SkuAlias.sku_alias,
      alias_sourceLabel:                          Omni.i18n.model.SkuAlias.alias_source,
      sku_alias_typeLabel:                        Omni.i18n.model.SkuAlias.sku_alias_type,
      pack_typeLabel:                             Omni.i18n.model.SkuAlias.pack_type,
      pack_sizeLabel:                             Omni.i18n.model.SkuAlias.pack_size
      is_primaryLabel:                            Omni.i18n.model.SkuAlias.is_primary,
    });
    // LABELS (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [
        {
          xtype: 'fieldset',
          title: 'General',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'sku_id',                         fieldLabel: this.sku_idLabel,                     allowBlank: true,   disabled: true,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Sku',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'sku_id', itemTpl:'{display}' },
            { name: 'sku_alias',                      fieldLabel: this.sku_aliasLabel,                  allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'alias_source',                   fieldLabel: this.alias_sourceLabel,               allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'ALIAS_SOURCE' },
            { name: 'sku_alias_type',                 fieldLabel: this.sku_alias_typeLabel,             allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'SKU_ALIAS_TYPE' },
            { name: 'pack_type',                      fieldLabel: this.pack_typeLabel,                  allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'PACK_TYPE' },
            { name: 'pack_size',                      fieldLabel: this.pack_sizeLabel,                  allowBlank: true,   disabled: false,    xtype: 'textfield'        }
            { name: 'is_primary',                     fieldLabel: this.is_primaryLabel,                 allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
