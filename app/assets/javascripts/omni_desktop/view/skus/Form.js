Ext.define('Omni.view.skus.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-skus-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      displayLabel:                               Omni.i18n.model.Sku.display,
      sku_nbrLabel:                               Omni.i18n.model.Sku.sku_nbr,
      descriptionLabel:                           Omni.i18n.model.Sku.description,
      short_nameLabel:                            Omni.i18n.model.Sku.short_name,
      pos_nameLabel:                              Omni.i18n.model.Sku.pos_name,
      design_codeLabel:                           Omni.i18n.model.Sku.design_code,
      stateLabel:                                 Omni.i18n.model.Sku.state,
      maintenance_levelLabel:                     Omni.i18n.model.Sku.maintenance_level,
      is_convertedLabel:                          Omni.i18n.model.Sku.is_converted,
      generic_sku_idLabel:                        Omni.i18n.model.Sku.generic_sku_id,
      add_on_sku_idLabel:                         Omni.i18n.model.Sku.add_on_sku_id,
      site_idLabel:                               Omni.i18n.model.Sku.site_id,
      conversion_typeLabel:                       Omni.i18n.model.Sku.conversion_type,
      style_color_size_idLabel:                   Omni.i18n.model.Sku.style_color_size_id,
      style_idLabel:                              Omni.i18n.model.Sku.style_id,
      color_idLabel:                              Omni.i18n.model.Sku.color_id,
      color_nameLabel:                            Omni.i18n.model.Sku.color_name,
      color_short_nameLabel:                      Omni.i18n.model.Sku.color_short_name,
      size_idLabel:                               Omni.i18n.model.Sku.size_id,
      effective_dateLabel:                        Omni.i18n.model.Sku.effective_date,
      discontinued_dateLabel:                     Omni.i18n.model.Sku.discontinued_date,
      out_of_stock_dateLabel:                     Omni.i18n.model.Sku.out_of_stock_date,
      is_enabledLabel:                            Omni.i18n.model.Sku.is_enabled,
      subclass_idLabel:                           Omni.i18n.model.Sku.subclass_id,
      buyer_user_idLabel:                         Omni.i18n.model.Sku.buyer_user_id,
      brandLabel:                                 Omni.i18n.model.Sku.brand,
      product_type_idLabel:                       Omni.i18n.model.Sku.product_type_id,
      fabric_contentLabel:                        Omni.i18n.model.Sku.fabric_content,
      initial_retail_priceLabel:                  Omni.i18n.model.Sku.initial_retail_price,
      suggested_retail_priceLabel:                Omni.i18n.model.Sku.suggested_retail_price,
      smoothing_factorLabel:                      Omni.i18n.model.Sku.smoothing_factor,
      replenishment_methodLabel:                  Omni.i18n.model.Sku.replenishment_method,
      minimum_on_hand_unitsLabel:                 Omni.i18n.model.Sku.minimum_on_hand_units,
      maximum_on_hand_unitsLabel:                 Omni.i18n.model.Sku.maximum_on_hand_units,
      pack_typeLabel:                             Omni.i18n.model.Sku.pack_type,
      replenishment_sourceLabel:                  Omni.i18n.model.Sku.replenishment_source,
      is_not_stockedLabel:                        Omni.i18n.model.Sku.is_not_stocked,
      sell_unit_uom_codeLabel:                    Omni.i18n.model.Sku.sell_unit_uom_code,
      sell_unit_lengthLabel:                      Omni.i18n.model.Sku.sell_unit_length,
      sell_unit_heightLabel:                      Omni.i18n.model.Sku.sell_unit_height,
      sell_unit_widthLabel:                       Omni.i18n.model.Sku.sell_unit_width,
      sell_unit_weightLabel:                      Omni.i18n.model.Sku.sell_unit_weight,
      is_conveyable_sell_unitLabel:               Omni.i18n.model.Sku.is_conveyable_sell_unit,
      is_discountableLabel:                       Omni.i18n.model.Sku.is_discountable,
      is_taxableLabel:                            Omni.i18n.model.Sku.is_taxable,
      supplier_idLabel:                           Omni.i18n.model.Sku.supplier_id,
      order_uom_codeLabel:                        Omni.i18n.model.Sku.order_uom_code,
      order_package_typeLabel:                    Omni.i18n.model.Sku.order_package_type,
      garment_piecesLabel:                        Omni.i18n.model.Sku.garment_pieces,
      is_special_orderLabel:                      Omni.i18n.model.Sku.is_special_order,
      is_special_sizeLabel:                       Omni.i18n.model.Sku.is_special_size,
      sourceLabel:                                Omni.i18n.model.Sku.source,
      source_idLabel:                             Omni.i18n.model.Sku.source_id            
    });
    // LABELS (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [
        {
          xtype: 'fieldset',
          title: 'General',
          scheme: 'fieldset_scheme_1',          
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'display',                        fieldLabel: this.displayLabel,                    allowBlank: false,  disabled: false,    xtype: 'textfield'        },
            { name: 'sku_nbr',                        fieldLabel: this.sku_nbrLabel,                    allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'description',                    fieldLabel: this.descriptionLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'short_name',                     fieldLabel: this.short_nameLabel,                 allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'pos_name',                       fieldLabel: this.pos_nameLabel,                   allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'design_code',                    fieldLabel: this.design_codeLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'source',                         fieldLabel: this.sourceLabel,                     allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',     category:   'SOURCE' },
            { name: 'source_id',                      fieldLabel: this.source_idLabel,                  allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'maintenance_level',              fieldLabel: this.maintenance_levelLabel,          allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'MAINTENANCE_LEVEL' },
            { name: 'state',                          fieldLabel: this.stateLabel,                      allowBlank: true,   disabled: true,    xtype: 'textfield'        },
            ]
        },
        {
          xtype: 'fieldset',
          title: 'Conversion',
          scheme: 'fieldset_scheme_1',                    
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'generic_sku_id',                 fieldLabel: this.generic_sku_idLabel,             allowBlank: true,  disabled: false,    xtype: 'buildit-Locator',  defaultSearch: { with: {state: {equal_to: 'new'}}},
              store:      Ext.create('Omni.store.Sku',{storeId: 'GenericSkus', pageSize: 10 }), 
              displayField: 'display', queryField: 'display', valueField: 'sku_id', itemTpl:'{display}' },
            { name: 'add_on_sku_id',                  fieldLabel: this.add_on_sku_idLabel,              allowBlank: true,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Sku',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'sku_id', itemTpl:'{display}' },
            { name: 'site_id',                        fieldLabel: this.site_idLabel,                    allowBlank: true,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Site',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'site_id', itemTpl:'{display}' },
            { name: 'conversion_type',                fieldLabel: this.conversion_typeLabel,            allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'CONVERSION_TYPE' },
            { name: 'is_converted',                   fieldLabel: this.is_convertedLabel,               allowBlank: true,  disabled: false,    xtype: 'checkbox'         }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Style, Color and Size',
          scheme: 'fieldset_scheme_1',                    
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'style_color_size_id',            fieldLabel: this.style_color_size_idLabel,        allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.StyleColorSize',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'style_color_size_id', itemTpl:'{display}' },
            { name: 'style_id',                       fieldLabel: this.style_idLabel,                   allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Style',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'style_id', itemTpl:'{display}' },
            { name: 'color_id',                       fieldLabel: this.color_idLabel,                   allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Color',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'color_id', itemTpl:'{display}' },
            { name: 'color_name',                     fieldLabel: this.color_nameLabel,                 allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'color_short_name',               fieldLabel: this.color_short_nameLabel,           allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'size_id',                        fieldLabel: this.size_idLabel,                    allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Size',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'size_id', itemTpl:'{display}' }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Tracking Dates',
          scheme: 'fieldset_scheme_1',                    
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'effective_date',                 fieldLabel: this.effective_dateLabel,             allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'discontinued_date',              fieldLabel: this.discontinued_dateLabel,          allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'out_of_stock_date',              fieldLabel: this.out_of_stock_dateLabel,          allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'is_enabled',                     fieldLabel: this.is_enabledLabel,                 allowBlank: true,   disabled: false,    xtype: 'checkbox'         }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Product Classification',
          scheme: 'fieldset_scheme_1',                    
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'subclass_id',                    fieldLabel: this.subclass_idLabel,                allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Subclass',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'subclass_id', itemTpl:'{display}' },
            { name: 'buyer_user_id',                  fieldLabel: this.buyer_user_idLabel,              allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Buildit.store.User',{pageSize: 10}), displayField: 'full_name', queryField: 'full_name', valueField: 'user_id', itemTpl:'{last_name}, {first_name}' },
            { name: 'brand',                          fieldLabel: this.brandLabel,                      allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'BRAND' },
            { name: 'product_type_id',                fieldLabel: this.product_type_idLabel,            allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.ProductType',{pageSize: 25}), displayField: 'display', queryField: 'display', valueField: 'product_type_id', itemTpl:'{display}' },
            { name: 'fabric_content',                 fieldLabel: this.fabric_contentLabel,             allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'FABRIC_CONTENT' },
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Pricing',
          scheme: 'fieldset_scheme_1',                    
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'initial_retail_price',           fieldLabel: this.initial_retail_priceLabel,       allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'suggested_retail_price',         fieldLabel: this.suggested_retail_priceLabel,     allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Replenishment',
          scheme: 'fieldset_scheme_1',                    
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'smoothing_factor',               fieldLabel: this.smoothing_factorLabel,           allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'replenishment_method',           fieldLabel: this.replenishment_methodLabel,       allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'REPLENISHMENT_METHOD' },
            { name: 'replenishment_source',           fieldLabel: this.replenishment_sourceLabel,       allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'REPLENISHMENT_SOURCE' },
            { name: 'minimum_on_hand_units',          fieldLabel: this.minimum_on_hand_unitsLabel,      allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'maximum_on_hand_units',          fieldLabel: this.maximum_on_hand_unitsLabel,      allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'pack_type',                      fieldLabel: this.pack_typeLabel,                  allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'PACK_TYPE' },
            { name: 'is_not_stocked',                 fieldLabel: this.is_not_stockedLabel,             allowBlank: true,   disabled: false,    xtype: 'checkbox'         }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Selling Unit Definition',
          scheme: 'fieldset_scheme_1',                    
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'sell_unit_uom_code',             fieldLabel: this.sell_unit_uom_codeLabel,         allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'SELL_UNIT_UOM_CODE' },            { name: 'sell_unit_length',               fieldLabel: this.sell_unit_lengthLabel,           allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'sell_unit_height',               fieldLabel: this.sell_unit_heightLabel,           allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'sell_unit_width',                fieldLabel: this.sell_unit_widthLabel,            allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'sell_unit_weight',               fieldLabel: this.sell_unit_weightLabel,           allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'is_conveyable_sell_unit',        fieldLabel: this.is_conveyable_sell_unitLabel,    allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_discountable',                fieldLabel: this.is_discountableLabel,            allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_taxable',                     fieldLabel: this.is_taxableLabel,                 allowBlank: true,   disabled: false,    xtype: 'checkbox'         }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Ordering Information',
          scheme: 'fieldset_scheme_1',                    
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'supplier_id',                    fieldLabel: this.supplier_idLabel,                allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Supplier',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'supplier_id', itemTpl:'{display}' },
            { name: 'order_uom_code',                 fieldLabel: this.order_uom_codeLabel,             allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'ORDER_UOM_CODE' },
            { name: 'order_package_type',             fieldLabel: this.order_package_typeLabel,         allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'ORDER_PACKAGE_TYPE' },
            { name: 'garment_pieces',                 fieldLabel: this.garment_piecesLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'is_special_order',               fieldLabel: this.is_special_orderLabel,           allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_special_size',                fieldLabel: this.is_special_sizeLabel,            allowBlank: true,   disabled: false,    xtype: 'checkbox'         }
          ]
        }
      ]
    });
    // FIELDSETS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Skus',
      newTitle: 'New Sku',
      newSubtitle: 'Complete the following to create a new sku in draft state.'
    });
    // TITLES (End)

    this.callParent();
  }

});
