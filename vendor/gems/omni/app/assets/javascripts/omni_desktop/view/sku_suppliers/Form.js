Ext.define('Omni.view.sku_suppliers.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-sku_suppliers-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      sku_idLabel:                                Omni.i18n.model.SkuSupplier.sku_id,
      supplier_idLabel:                           Omni.i18n.model.SkuSupplier.supplier_id,
      supplier_item_identifierLabel:              Omni.i18n.model.SkuSupplier.supplier_item_identifier,
      descriptionLabel:                           Omni.i18n.model.SkuSupplier.description,
      is_primary_supplierLabel:                   Omni.i18n.model.SkuSupplier.is_primary_supplier,
      is_manufacturerLabel:                       Omni.i18n.model.SkuSupplier.is_manufacturer,
      is_discontinuedLabel:                       Omni.i18n.model.SkuSupplier.is_discontinued,
      supplier_cost_unitsLabel:                   Omni.i18n.model.SkuSupplier.supplier_cost_units,
      supplier_costLabel:                         Omni.i18n.model.SkuSupplier.supplier_cost,
      master_pack_unitsLabel:                     Omni.i18n.model.SkuSupplier.master_pack_units,
      master_pack_uom_codeLabel:                  Omni.i18n.model.SkuSupplier.master_pack_uom_code,
      master_pack_lengthLabel:                    Omni.i18n.model.SkuSupplier.master_pack_length,
      master_pack_heightLabel:                    Omni.i18n.model.SkuSupplier.master_pack_height,
      master_pack_widthLabel:                     Omni.i18n.model.SkuSupplier.master_pack_width,
      master_pack_weightLabel:                    Omni.i18n.model.SkuSupplier.master_pack_weight,
      inner_pack_unitsLabel:                      Omni.i18n.model.SkuSupplier.inner_pack_units,
      inner_pack_uom_codeLabel:                   Omni.i18n.model.SkuSupplier.inner_pack_uom_code,
      inner_pack_lengthLabel:                     Omni.i18n.model.SkuSupplier.inner_pack_length,
      inner_pack_heightLabel:                     Omni.i18n.model.SkuSupplier.inner_pack_height,
      inner_pack_widthLabel:                      Omni.i18n.model.SkuSupplier.inner_pack_width,
      inner_pack_weightLabel:                     Omni.i18n.model.SkuSupplier.inner_pack_weight,
      pack_typeLabel:                             Omni.i18n.model.SkuSupplier.pack_type,
      minimum_order_unitsLabel:                   Omni.i18n.model.SkuSupplier.minimum_order_units,
      minimum_order_valueLabel:                   Omni.i18n.model.SkuSupplier.minimum_order_value,
      minimum_order_weightLabel:                  Omni.i18n.model.SkuSupplier.minimum_order_weight,
      minimum_order_cubeLabel:                    Omni.i18n.model.SkuSupplier.minimum_order_cube,
      order_multiple_typeLabel:                   Omni.i18n.model.SkuSupplier.order_multiple_type,
      extra_costLabel:                            Omni.i18n.model.SkuSupplier.extra_cost,
      is_included_extra_costLabel:                Omni.i18n.model.SkuSupplier.is_included_extra_cost,
      cost_model_idLabel:                         Omni.i18n.model.SkuSupplier.cost_model_id,
      origin_countryLabel:                        Omni.i18n.model.SkuSupplier.origin_country,
      freight_termLabel:                          Omni.i18n.model.SkuSupplier.freight_term,
      is_conveyable_master_packLabel:             Omni.i18n.model.SkuSupplier.is_conveyable_master_pack,
      is_conveyable_inner_packLabel:              Omni.i18n.model.SkuSupplier.is_conveyable_inner_pack,
      pallet_tieLabel:                            Omni.i18n.model.SkuSupplier.pallet_tie,
      pallet_highLabel:                           Omni.i18n.model.SkuSupplier.pallet_high,
      pallet_container_idLabel:                   Omni.i18n.model.SkuSupplier.pallet_container_id
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
            { name: 'sku_id',                         fieldLabel: this.sku_idLabel,                     allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Sku',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'sku_id', itemTpl:'{display}' },
            { name: 'supplier_id',                    fieldLabel: this.supplier_idLabel,                allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Supplier',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'supplier_id', itemTpl:'{display}' },
            { name: 'supplier_item_identifier',       fieldLabel: this.supplier_item_identifierLabel,   allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'description',                    fieldLabel: this.descriptionLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'is_primary_supplier',            fieldLabel: this.is_primary_supplierLabel,        allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_manufacturer',                fieldLabel: this.is_manufacturerLabel,            allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_discontinued',                fieldLabel: this.is_discontinuedLabel,            allowBlank: true,   disabled: false,    xtype: 'checkbox'         }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Product Cost',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'supplier_cost_units',            fieldLabel: this.supplier_cost_unitsLabel,        allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'supplier_cost',                  fieldLabel: this.supplier_costLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Master Pack Definition',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'master_pack_units',              fieldLabel: this.master_pack_unitsLabel,          allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'master_pack_uom_code',           fieldLabel: this.master_pack_uom_codeLabel,       allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',  category:  'MASTER_PACK_UOM_CODE' },
            { name: 'master_pack_length',             fieldLabel: this.master_pack_lengthLabel,         allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'master_pack_height',             fieldLabel: this.master_pack_heightLabel,         allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'master_pack_width',              fieldLabel: this.master_pack_widthLabel,          allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'master_pack_weight',             fieldLabel: this.master_pack_weightLabel,         allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Inner Pack Definition',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'inner_pack_units',               fieldLabel: this.inner_pack_unitsLabel,           allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'master_pack_uom_code',           fieldLabel: this.inner_pack_uom_codeLabel,       allowBlank: true,   disabled: false,     xtype: 'buildit-Lookup',  category:  'INNER_PACK_UOM_CODE' },
            { name: 'inner_pack_length',              fieldLabel: this.inner_pack_lengthLabel,          allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'inner_pack_height',              fieldLabel: this.inner_pack_heightLabel,          allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'inner_pack_width',               fieldLabel: this.inner_pack_widthLabel,           allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'inner_pack_weight',              fieldLabel: this.inner_pack_weightLabel,          allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Ordering Information',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'pack_type',                      fieldLabel: this.pack_typeLabel,                  allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',  category:  'PACK_TYPE' },
            { name: 'minimum_order_units',            fieldLabel: this.minimum_order_unitsLabel,        allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'minimum_order_value',            fieldLabel: this.minimum_order_valueLabel,        allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'minimum_order_weight',           fieldLabel: this.minimum_order_weightLabel,       allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'minimum_order_cube',             fieldLabel: this.minimum_order_cubeLabel,         allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'order_multiple_type',            fieldLabel: this.order_multiple_typeLabel,        allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',  category:  'ORDER_MULTIPLE_TYPE' },
            { name: 'extra_cost',                     fieldLabel: this.extra_costLabel,                 allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'is_included_extra_cost',         fieldLabel: this.is_included_extra_costLabel,     allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'cost_model_id',                  fieldLabel: this.cost_model_idLabel,              allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.CostModel',{pageSize: 10}), displayField: 'cost_model_id', queryField: 'cost_model_id', valueField: 'cost_model_id', itemTpl:'{cost_model_id}' },
            { name: 'origin_country',                 fieldLabel: this.origin_countryLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'freight_term',                   fieldLabel: this.freight_termLabel,               allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',  category:  'FREIGHT_TERM' }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Handling Information',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'is_conveyable_master_pack',      fieldLabel: this.is_conveyable_master_packLabel,  allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_conveyable_inner_pack',       fieldLabel: this.is_conveyable_inner_packLabel,   allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'pallet_tie',                     fieldLabel: this.pallet_tieLabel,                 allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'pallet_high',                    fieldLabel: this.pallet_highLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'pallet_container_id',            fieldLabel: this.pallet_container_idLabel,        allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Container',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'container_id', itemTpl:'{display}' }
          ]
        }
      ]
    });
    // FIELDSETS (End)

    // TITLES (Start) =======================================================================
    Ext.applyIf(this, {
      title:         'Sku Supplier',
      subtitle:      'All of the suppliers for a product',
      newTitle:      'Sku Supplier',
      newSubtitle:   undefined
    });
    // TITLES (End)



    this.callParent();
  }

});
