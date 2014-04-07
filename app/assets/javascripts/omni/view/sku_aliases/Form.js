Ext.define('Omni.view.sku_aliases.Form', {

  extend: 'Buildit.ux.Form',
  alias: 'widget.omni-sku_aliases-Form',


  // LABELS (Start) =======================================================================
  sku_alias_idLabel: Omni.i18n.model.SkuAlias.sku_alias_id,
  displayLabel: Omni.i18n.model.SkuAlias.display,
  sku_idLabel: Omni.i18n.model.SkuAlias.sku_id,
  sku_aliasLabel: Omni.i18n.model.SkuAlias.sku_alias,
  sku_alias_typeLabel: Omni.i18n.model.SkuAlias.sku_alias_type,
  alias_sourceLabel: Omni.i18n.model.SkuAlias.alias_source,
  is_primaryLabel: Omni.i18n.model.SkuAlias.is_primary,
  pack_typeLabel: Omni.i18n.model.SkuAlias.pack_type,
  pack_sizeLabel: Omni.i18n.model.SkuAlias.pack_size,
  is_destroyedLabel: Omni.i18n.model.SkuAlias.is_destroyed,
  // LABELS (End)


  initComponent: function() {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property: 'sku_alias_id',
      value: this.record.get('sku_alias_id')
    };
    // FILTER (End)



    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [{
          xtype: 'fieldset',
          title: 'General Information',
          collapsible: true,
          defaultType: 'textfield',
          layout: 'anchor',
          items: [{
              xtype: 'buildit-Locator',
              store: Ext.create('Omni.store.Sku', {
                pageSize: 10
              }),
              displayField: 'display',
              itemTpl: '{display}',
              name: 'sku_id',
              fieldLabel: me.sku_idLabel,
              initialValue: me.record.get('sku_display'),
              allowBlank: false,
              disabled: false,
              gotoTarget: 'omni-skus-Inspector'
            }, {
              xtype: 'textfield',
              name: 'sku_alias',
              fieldLabel: me.sku_aliasLabel,
              maxLength: 200,
              minLength: 0,
              allowBlank: false
            }, {
              xtype: 'buildit-Lookup',
              name: 'alias_source',
              fieldLabel: me.alias_sourceLabel,
              category: 'ALIAS_SOURCE',
              lkp: 'code',
              allowBlank: true
            }, {
              xtype: 'buildit-Lookup',
              name: 'sku_alias_type',
              fieldLabel: me.sku_alias_typeLabel,
              category: 'SKU_ALIAS_TYPE',
              lkp: 'code',
              allowBlank: true
            }, {
              xtype: 'buildit-Lookup',
              name: 'pack_type',
              fieldLabel: me.pack_typeLabel,
              category: 'PACK_TYPE',
              lkp: 'code',
              allowBlank: true
            }, {
              xtype: 'textfield',
              name: 'pack_size',
              fieldLabel: me.pack_sizeLabel,
              maxLength: 100,
              minLength: 0,
              allowBlank: true
            }, {
              xtype: 'checkbox',
              name: 'is_primary',
              fieldLabel: me.is_primaryLabel
            },
            // {
            //   xtype        : 'checkbox',
            //   name         : 'is_destroyed',
            //   fieldLabel   : me.is_destroyedLabel
            // }
          ]
        }
        /*,
        {
          xtype        : 'fieldset',
          title        : 'Additional Information',
          collapsible  : true,
          defaultType  : 'textfield',
          layout       : 'anchor',
          items        : [
          ]
        }*/
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Sku Alias',
      subtitle: 'Edit Sku Alias'
    });
    // TITLES (End)

    this.callParent();

  } // initComponent

}); // Ext.define('Omni.view.sku_aliases.Form'
