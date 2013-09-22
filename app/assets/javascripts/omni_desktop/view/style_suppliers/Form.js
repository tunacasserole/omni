Ext.define('Omni.view.style_suppliers.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-style_suppliers-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      style_idLabel:                              Omni.i18n.model.StyleSupplier.style_id,
      supplier_idLabel:                           Omni.i18n.model.StyleSupplier.supplier_id,
      descriptionLabel:                           Omni.i18n.model.StyleSupplier.description,
      is_primary_supplierLabel:                   Omni.i18n.model.StyleSupplier.is_primary_supplier,
      is_manufacturerLabel:                       Omni.i18n.model.StyleSupplier.is_manufacturer,
      is_discontinuedLabel:                       Omni.i18n.model.StyleSupplier.is_discontinued,
      supplier_cost_unitsLabel:                   Omni.i18n.model.StyleSupplier.supplier_cost_units,
      supplier_costLabel:                         Omni.i18n.model.StyleSupplier.supplier_cost,
      master_pack_unitsLabel:                     Omni.i18n.model.StyleSupplier.master_pack_units,
      master_pack_uom_codeLabel:                  Omni.i18n.model.StyleSupplier.master_pack_uom_code,
      master_pack_lengthLabel:                    Omni.i18n.model.StyleSupplier.master_pack_length,
      master_pack_heightLabel:                    Omni.i18n.model.StyleSupplier.master_pack_height,
      master_pack_widthLabel:                     Omni.i18n.model.StyleSupplier.master_pack_width,
      master_pack_weightLabel:                    Omni.i18n.model.StyleSupplier.master_pack_weight,
      inner_pack_unitsLabel:                      Omni.i18n.model.StyleSupplier.inner_pack_units,
      inner_pack_uom_codeLabel:                   Omni.i18n.model.StyleSupplier.inner_pack_uom_code,
      inner_pack_lengthLabel:                     Omni.i18n.model.StyleSupplier.inner_pack_length,
      inner_pack_heightLabel:                     Omni.i18n.model.StyleSupplier.inner_pack_height,
      inner_pack_widthLabel:                      Omni.i18n.model.StyleSupplier.inner_pack_width,
      inner_pack_weightLabel:                     Omni.i18n.model.StyleSupplier.inner_pack_weight,
      pack_typeLabel:                             Omni.i18n.model.StyleSupplier.pack_type,
      minimum_order_unitsLabel:                   Omni.i18n.model.StyleSupplier.minimum_order_units,
      minimum_order_valueLabel:                   Omni.i18n.model.StyleSupplier.minimum_order_value,
      minimum_order_weightLabel:                  Omni.i18n.model.StyleSupplier.minimum_order_weight,
      minimum_order_cubeLabel:                    Omni.i18n.model.StyleSupplier.minimum_order_cube,
      order_multiple_typeLabel:                   Omni.i18n.model.StyleSupplier.order_multiple_type,
      extra_costLabel:                            Omni.i18n.model.StyleSupplier.extra_cost,
      is_included_extra_costLabel:                Omni.i18n.model.StyleSupplier.is_included_extra_cost,
      origin_countryLabel:                        Omni.i18n.model.StyleSupplier.origin_country,
      // fob_pointLabel:                             Omni.i18n.model.StyleSupplier.fob_point,
      freight_termLabel:                          Omni.i18n.model.StyleSupplier.freight_term,
      is_conveyable_master_packLabel:             Omni.i18n.model.StyleSupplier.is_conveyable_master_pack,
      is_conveyable_inner_packLabel:              Omni.i18n.model.StyleSupplier.is_conveyable_inner_pack,
      pallet_tieLabel:                            Omni.i18n.model.StyleSupplier.pallet_tie,
      pallet_highLabel:                           Omni.i18n.model.StyleSupplier.pallet_high
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
            { name: 'style_id',                       fieldLabel: this.style_idLabel,                   allowBlank: true,   disabled: true,     xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Style',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'style_id', itemTpl:'{display}' },
            { name: 'supplier_id',                    fieldLabel: this.supplier_idLabel,                allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Supplier',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'supplier_id', itemTpl:'{display}' },
            { name: 'description',                    fieldLabel: this.descriptionLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            // { name: 'is_primary_supplier',            fieldLabel: this.is_primary_supplierLabel,        allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
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
            { name: 'origin_country',                 fieldLabel: this.origin_countryLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            // { name: 'fob_point',                      fieldLabel: this.fob_pointLabel,                  allowBlank: true,   disabled: false,    xtype: 'textfield'        },            
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
            { name: 'pallet_high',                    fieldLabel: this.pallet_highLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        }
      ]
    });
    // FIELDSETS (End)

    // TITLES (Start) =======================================================================
    Ext.applyIf(this, {
      title:         'Style Supplier',
      subtitle:      'All of the vendors that supply a style',
      newTitle:      'Style Supplier',
      newSubtitle:   undefined
    });
    // TITLES (End)

    this.callParent();
  }

});
