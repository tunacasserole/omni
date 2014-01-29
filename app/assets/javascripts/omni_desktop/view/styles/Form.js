// Ext.define('Teller.ext.CurrencyField', {
//   extend: 'Ext.form.field.Number',
//   alias: 'widget.currencyfield',
//   hideTrigger: true,
//   setValue: function(v) {
//     this.callParent(arguments);
//     if (!Ext.isEmpty(this.getValue())) {
//       this.setRawValue(Ext.util.Format.currency(this.getValue()));
//     }
//   },
//   removeFormat: function(v) {
//     if (Ext.isEmpty(v)) {
//       return '';
//     } else {
//       v = v.toString().replace(Ext.util.Format.currencySign, '').replace(Ext.util.Format.thousandSeparator, '');
//       if (v % 1 === 0) {
//         // Return value formatted with no precision since there are no digits after the decimal
//         return Ext.util.Format.number(v, '0');
//       } else {
//         // Return value formatted with precision of two digits since there are digits after the decimal
//         return Ext.util.Format.number(v, '0.00');
//       }
//     }
//   },
//   // Override parseValue to remove the currency format
//   parseValue: function(v) {
//     return this.callParent([this.removeFormat(v)]);
//   },
//   // Remove the format before validating the value
//   getErrors: function(v) {
//     return this.callParent([this.removeFormat(v)]);
//   },
//   /* Override getSubmitData to remove the currency format on the value  that will be passed out from the getValues method of the form */
//   getSubmitData: function() {
//     var returnObject = {};
//     returnObject[this.name] = this.removeFormat(this.callParent(arguments)[this.name]);
//     return returnObject;
//   },
//   // Override preFocus to remove the format during edit
//   preFocus: function() {
//     this.setRawValue(this.removeFormat(this.getRawValue()));
//     this.callParent(arguments);
//   }
// });

Ext.define('Omni.view.styles.Form', {

  extend: 'Buildit.ux.Form',
  alias: 'widget.omni-styles-Form',



  initComponent: function() {

    var me = this;


    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      displayLabel: Omni.i18n.model.Style.display,
      style_nbrLabel: Omni.i18n.model.Style.style_nbr,
      descriptionLabel: Omni.i18n.model.Style.description,
      short_nameLabel: Omni.i18n.model.Style.short_name,
      concatenated_nameLabel: Omni.i18n.model.Style.concatenated_name,
      pos_nameLabel: Omni.i18n.model.Style.pos_name,
      is_enabledLabel: Omni.i18n.model.Style.is_enabled,
      stateLabel: Omni.i18n.model.Style.state,
      effective_dateLabel: Omni.i18n.model.Style.effective_date,
      discontinued_dateLabel: Omni.i18n.model.Style.discontinued_date,
      out_of_stock_dateLabel: Omni.i18n.model.Style.out_of_stock_date,
      subclass_idLabel: Omni.i18n.model.Style.subclass_id,
      product_idLabel: Omni.i18n.model.Style.product_id,
      buyer_user_idLabel: Omni.i18n.model.Style.buyer_user_id,
      brandLabel: Omni.i18n.model.Style.brand,
      product_type_idLabel: Omni.i18n.model.Style.product_type_id,
      fabric_contentLabel: Omni.i18n.model.Style.fabric_content,
      storage_codeLabel: Omni.i18n.model.Style.storage_code,
      design_codeLabel: Omni.i18n.model.Style.design_code,
      initial_retail_priceLabel: Omni.i18n.model.Style.initial_retail_price,
      suggested_retail_priceLabel: Omni.i18n.model.Style.suggested_retail_price,
      planning_retail_priceLabel: Omni.i18n.model.Style.planning_retail_price,
      smoothing_factorLabel: Omni.i18n.model.Style.smoothing_factor,
      replenishment_methodLabel: Omni.i18n.model.Style.replenishment_method,
      replenishment_sourceLabel: Omni.i18n.model.Style.replenishment_source,
      minimum_on_hand_unitsLabel: Omni.i18n.model.Style.minimum_on_hand_units,
      maximum_on_hand_unitsLabel: Omni.i18n.model.Style.maximum_on_hand_units,
      pack_typeLabel: Omni.i18n.model.Style.pack_type,
      is_not_stockedLabel: Omni.i18n.model.Style.is_not_stocked,
      sell_unit_uom_codeLabel: Omni.i18n.model.Style.sell_unit_uom_code,
      sell_unit_lengthLabel: Omni.i18n.model.Style.sell_unit_length,
      sell_unit_heightLabel: Omni.i18n.model.Style.sell_unit_height,
      sell_unit_widthLabel: Omni.i18n.model.Style.sell_unit_width,
      sell_unit_weightLabel: Omni.i18n.model.Style.sell_unit_weight,
      is_conveyable_sell_unitLabel: Omni.i18n.model.Style.is_conveyable_sell_unit,
      is_discountableLabel: Omni.i18n.model.Style.is_discountable,
      is_taxableLabel: Omni.i18n.model.Style.is_taxable,
      supplier_idLabel: Omni.i18n.model.Style.supplier_id,
      order_uom_codeLabel: Omni.i18n.model.Style.order_uom_code,
      order_package_typeLabel: Omni.i18n.model.Style.order_package_type,
      garment_piecesLabel: Omni.i18n.model.Style.garment_pieces,
      is_special_orderLabel: Omni.i18n.model.Style.is_special_order,
      is_convertedLabel: Omni.i18n.model.Style.is_converted,
      add_on_sku_idLabel: Omni.i18n.model.Style.add_on_sku_id,
      site_idLabel: Omni.i18n.model.Style.site_id,
      conversion_typeLabel: Omni.i18n.model.Style.conversion_type,
      maintenance_levelLabel: Omni.i18n.model.Style.maintenance_level,
      is_convertibleLabel: Omni.i18n.model.Style.is_convertible,
      is_converted_heatsetLabel: Omni.i18n.model.Style.is_converted_heatset,
      is_converted_sewnLabel: Omni.i18n.model.Style.is_converted_sewn,
      generic_style_idLabel: Omni.i18n.model.Style.generic_style_id,
      size_group_idLabel: Omni.i18n.model.Style.size_group_id,
      sku_name_methodLabel: Omni.i18n.model.Style.sku_name_method,
      is_alterableLabel: Omni.i18n.model.Style.is_alterable,
      is_usually_alteredLabel: Omni.i18n.model.Style.is_usually_altered
    });
    // LABELS (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [{
          xtype: 'fieldset',
          title: 'Style Identifiers',
          scheme: 'fieldset_scheme_styles',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {
            anchor: '100%'
          },
          layout: 'anchor',
          items: [{
              name: 'display',
              fieldLabel: this.displayLabel,
              allowBlank: false,
              disabled: false,
              xtype: 'textfield'
            }, {
              name: 'style_nbr',
              fieldLabel: this.style_nbrLabel,
              allowBlank: true,
              disabled: false,
              xtype: 'textfield',
              emptyText: 'auto-generated on save'
            }, {
              name: 'description',
              fieldLabel: this.descriptionLabel,
              allowBlank: true,
              disabled: false,
              xtype: 'textarea',
              rows: 5
            }, {
              name: 'short_name',
              fieldLabel: this.short_nameLabel,
              allowBlank: true,
              disabled: false,
              xtype: 'textfield'
            }, {
              name: 'concatenated_name',
              fieldLabel: this.concatenated_nameLabel,
              allowBlank: true,
              disabled: false,
              xtype: 'textfield'
            }, {
              xtype: 'label',
              text: 'Concatenated name is used on shipping lables.',
              cls: 'instruction'
            }, {
              name: 'pos_name',
              fieldLabel: this.pos_nameLabel,
              allowBlank: true,
              disabled: false,
              xtype: 'textfield'
            }, {
              xtype: 'label',
              text: 'Receipt name is the label used on store receipts.',
              cls: 'instruction'
            },
            // { name: 'is_enabled',                     fieldLabel: this.is_enabledLabel,                 allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            {
              name: 'state',
              fieldLabel: this.stateLabel,
              allowBlank: true,
              disabled: true,
              xtype: 'textfield'
            }
          ]
        }, {
          xtype: 'fieldset',
          title: 'Product Classification',
          scheme: 'fieldset_scheme_styles',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {
            anchor: '70%'
          },
          layout: 'anchor',
          items: [{
              name: 'size_group_id',
              fieldLabel: this.size_group_idLabel,
              allowBlank: false,
              disabled: false,
              xtype: 'buildit-Locator',
              store: Ext.create('Omni.store.SizeGroup', {
                pageSize: 25
              }),
              defaultSearch: {
                with: { is_enabled: { equal_to: true } }
              },
              displayField: 'display',
              queryField: 'display',
              valueField: 'size_group_id',
              itemTpl: '{display}',
              gotoTarget: 'omni-size_groups-Inspector'
            }, {
              name: 'subclass_id',
              fieldLabel: this.subclass_idLabel,
              allowBlank: false,
              disabled: false,
              xtype: 'buildit-Locator',
              store: Ext.create('Omni.store.Subclass', {
                pageSize: 25
              }),
              displayField: 'display',
              queryField: 'display',
              valueField: 'subclass_id',
              itemTpl: '{display}',
              gotoTarget: 'omni-subclasses-Inspector'
            },
            // { name: 'product_id',                     fieldLabel: this.product_idLabel,                 allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Product',{pageSize: 25}), displayField: 'display', queryField: 'display', valueField: 'product_id', itemTpl:'{display}' },
            {
              name: 'buyer_user_id',
              fieldLabel: this.buyer_user_idLabel,
              allowBlank: true,
              disabled: false,
              xtype: 'buildit-Locator',
              store: Ext.create('Buildit.store.User', {
                pageSize: 25
              }),
              displayField: 'full_name',
              queryField: 'full_name',
              valueField: 'user_id',
              itemTpl: '{last_name}, {first_name}',
              initialValue: this.record.get('buyer_user_display')
            }, {
              name: 'brand',
              fieldLabel: this.brandLabel,
              allowBlank: true,
              disabled: false,
              xtype: 'buildit-Lookup',
              category: 'BRAND'
            }, {
              name: 'product_type_id',
              fieldLabel: this.product_type_idLabel,
              allowBlank: true,
              disabled: false,
              xtype: 'buildit-Locator',
              store: Ext.create('Omni.store.ProductType', {
                pageSize: 25
              }),
              displayField: 'display',
              queryField: 'display',
              valueField: 'product_type_id',
              itemTpl: '{display}'
            }, {
              name: 'fabric_content',
              fieldLabel: this.fabric_contentLabel,
              allowBlank: true,
              disabled: false,
              xtype: 'buildit-Lookup',
              category: 'FABRIC_CONTENT'
            }, {
              name: 'storage_code',
              fieldLabel: this.storage_codeLabel,
              allowBlank: true,
              disabled: false,
              xtype: 'textfield'
            }
          ]
        }, {
          xtype: 'fieldset',
          title: 'Tracking Dates',
          scheme: 'fieldset_scheme_styles',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {
            anchor: '70%'
          },
          layout: 'anchor',
          items: [{
            name: 'effective_date',
            fieldLabel: this.effective_dateLabel,
            allowBlank: true,
            disabled: false,
            xtype: 'datefield'
          }, {
            name: 'discontinued_date',
            fieldLabel: this.discontinued_dateLabel,
            allowBlank: true,
            disabled: false,
            xtype: 'datefield'
          }, {
            name: 'out_of_stock_date',
            fieldLabel: this.out_of_stock_dateLabel,
            allowBlank: true,
            disabled: false,
            xtype: 'datefield'
          }]
        },

        {
          xtype: 'fieldset',
          title: 'Pricing',
          scheme: 'fieldset_scheme_styles',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {
            anchor: '70%'
          },
          layout: 'anchor',
          items: [{
            name: 'initial_retail_price',
            fieldLabel: this.initial_retail_priceLabel,
            allowBlank: true,
            disabled: false,
            xtype: 'currencyfield',
            currencySymbol: null
          }, {
              xtype: 'label',
              text: 'Only initial price is currentley being used for pricing.',
              cls: 'instruction'
          }, {
            name: 'suggested_retail_price',
            fieldLabel: this.suggested_retail_priceLabel,
            allowBlank: true,
            disabled: false,
            xtype: 'currencyfield',
          }, {
            name: 'planning_retail_price',
            fieldLabel: this.planning_retail_priceLabel,
            allowBlank: true,
            disabled: false,
            xtype: 'currencyfield',
          }]
        }, {
          xtype: 'fieldset',
          title: 'Forecasting & Replenishment',
          scheme: 'fieldset_scheme_styles',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {
            anchor: '70%'
          },
          layout: 'anchor',
          items: [{
            name: 'smoothing_factor',
            fieldLabel: this.smoothing_factorLabel,
            allowBlank: true,
            disabled: false,
            xtype: 'textfield'
          }, {
            name: 'replenishment_method',
            fieldLabel: this.replenishment_methodLabel,
            allowBlank: true,
            disabled: false,
            xtype: 'buildit-Lookup',
            category: 'REPLENISHMENT_METHOD'
          }, {
            name: 'replenishment_source',
            fieldLabel: this.replenishment_sourceLabel,
            allowBlank: true,
            disabled: false,
            xtype: 'buildit-Lookup',
            category: 'REPLENISHMENT_SOURCE'
          }, {
            name: 'minimum_on_hand_units',
            fieldLabel: this.minimum_on_hand_unitsLabel,
            allowBlank: true,
            disabled: false,
            xtype: 'textfield'
          }, {
            name: 'maximum_on_hand_units',
            fieldLabel: this.maximum_on_hand_unitsLabel,
            allowBlank: true,
            disabled: false,
            xtype: 'textfield'
          }, {
            name: 'pack_type',
            fieldLabel: this.pack_typeLabel,
            allowBlank: true,
            disabled: false,
            xtype: 'buildit-Lookup',
            category: 'PACK_TYPE'
          }, {
            name: 'is_not_stocked',
            fieldLabel: this.is_not_stockedLabel,
            allowBlank: true,
            disabled: false,
            xtype: 'checkbox'
          }]
        }, {
          xtype: 'fieldset',
          title: 'Selling Unit Definition',
          scheme: 'fieldset_scheme_styles',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {
            anchor: '70%'
          },
          layout: 'anchor',
          items: [{
            name: 'sell_unit_uom_code',
            fieldLabel: this.sell_unit_uom_codeLabel,
            allowBlank: true,
            disabled: false,
            xtype: 'buildit-Lookup',
            category: 'SELL_UNIT_UOM_CODE'
          }, {
            name: 'sell_unit_length',
            fieldLabel: this.sell_unit_lengthLabel,
            allowBlank: true,
            disabled: false,
            xtype: 'textfield'
          }, {
            name: 'sell_unit_height',
            fieldLabel: this.sell_unit_heightLabel,
            allowBlank: true,
            disabled: false,
            xtype: 'textfield'
          }, {
            name: 'sell_unit_width',
            fieldLabel: this.sell_unit_widthLabel,
            allowBlank: true,
            disabled: false,
            xtype: 'textfield'
          }, {
            name: 'sell_unit_weight',
            fieldLabel: this.sell_unit_weightLabel,
            allowBlank: true,
            disabled: false,
            xtype: 'textfield'
          }, {
            name: 'is_conveyable_sell_unit',
            fieldLabel: this.is_conveyable_sell_unitLabel,
            allowBlank: true,
            disabled: false,
            xtype: 'checkbox'
          }, {
            name: 'is_discountable',
            fieldLabel: this.is_discountableLabel,
            allowBlank: true,
            disabled: false,
            xtype: 'checkbox'
          }, {
            name: 'is_taxable',
            fieldLabel: this.is_taxableLabel,
            allowBlank: true,
            disabled: false,
            xtype: 'checkbox'
          }]
        }, {
          xtype: 'fieldset',
          title: 'Ordering Information',
          scheme: 'fieldset_scheme_styles',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {
            anchor: '70%'
          },
          layout: 'anchor',
          items: [{
            name: 'supplier_display_id',
            fieldLabel: this.supplier_idLabel,
            allowBlank: true,
            disabled: false,
            xtype: 'buildit-Locator',
            store: Ext.create('Omni.store.StyleSupplier', {
              pageSize: 25
            }),
            displayField: 'supplier_display',
            queryField: 'supplier_display',
            valueField: 'supplier_id',
            itemTpl: '{supplier_display}',
            gotoTarget: 'omni-suppliers-Inspector',
          }, {
              xtype: 'label',
              text: 'Primary Supplier must be a valid Supplier for this style.  To add suppliers, navigate to the Suppliers tab and click the plus button.',
              cls: 'instruction'
          }, {
            name: 'order_uom_code',
            fieldLabel: this.order_uom_codeLabel,
            allowBlank: true,
            disabled: false,
            xtype: 'buildit-Lookup',
            category: 'ORDER_UOM_CODE'
          }, {
            name: 'order_package_type',
            fieldLabel: this.order_package_typeLabel,
            allowBlank: true,
            disabled: false,
            xtype: 'buildit-Lookup',
            category: 'ORDER_PACKAGE_TYPE'
          }, {
            name: 'garment_pieces',
            fieldLabel: this.garment_piecesLabel,
            allowBlank: true,
            disabled: false,
            xtype: 'textfield'
          }, {
            name: 'is_special_order',
            fieldLabel: this.is_special_orderLabel,
            allowBlank: true,
            disabled: false,
            xtype: 'checkbox'
          }]
        }, {
          xtype: 'fieldset',
          title: 'Process Control',
          scheme: 'fieldset_scheme_styles',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {
            anchor: '70%'
          },
          layout: 'anchor',
          items: [{
              name: 'maintenance_level',
              fieldLabel: this.maintenance_levelLabel,
              allowBlank: true,
              disabled: false,
              xtype: 'buildit-Lookup',
              category: 'MAINTENANCE_LEVEL'
            },
            { name: 'is_converted',                   fieldLabel: this.is_convertedLabel,               allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            {
              name: 'generic_style_id',
              fieldLabel: this.generic_style_idLabel,
              allowBlank: true,
              disabled: false,
              xtype: 'buildit-Locator',
              store: Ext.create('Omni.store.Style', {
                pageSize: 25
              }),
              displayField: 'display',
              queryField: 'display',
              valueField: 'style_id',
              itemTpl: '{display}',
              gotoTarget: 'omni-styles-Inspector',
              defaultSearch: {
                with: { is_converted: { equal_to: false } }
              },
            }, {
              name: 'design_code',
              fieldLabel: this.design_codeLabel,
              allowBlank: true,
              disabled: false,
              xtype: 'textfield'
            }, {
              name: 'add_on_sku_id',
              fieldLabel: this.add_on_sku_idLabel,
              allowBlank: true,
              disabled: false,
              xtype: 'buildit-Locator',
              store: Ext.create('Omni.store.Sku', {
                storeId: 'AddOnSkuStore'
              }, {
                pageSize: 25
              }),
              displayField: 'display',
              queryField: 'display',
              valueField: 'sku_id',
              itemTpl: '{display}',
              gotoTarget: 'omni-skus-Inspector'
            }, {
              name: 'site_id',
              fieldLabel: this.site_idLabel,
              allowBlank: true,
              disabled: false,
              xtype: 'buildit-Locator',
              store: Ext.create('Omni.store.Site', {
                pageSize: 25
              }),
              displayField: 'display',
              queryField: 'display',
              valueField: 'site_id',
              itemTpl: '{display}',
              gotoTarget: 'omni-sites-Inspector'
            }, {
              name: 'conversion_type',
              fieldLabel: this.conversion_typeLabel,
              allowBlank: true,
              disabled: false,
              xtype: 'buildit-Lookup',
              category: 'CONVERSION_TYPE'
            }, {
              name: 'is_convertible',
              fieldLabel: this.is_convertibleLabel,
              allowBlank: true,
              disabled: false,
              xtype: 'checkbox'
            }, {
              name: 'is_converted_heatset',
              fieldLabel: this.is_converted_heatsetLabel,
              allowBlank: true,
              disabled: false,
              xtype: 'checkbox'
            }, {
              name: 'sku_name_method',
              fieldLabel: this.sku_name_methodLabel,
              allowBlank: true,
              disabled: false,
              xtype: 'buildit-Lookup',
              category: 'SKU_NAME_METHOD'
            }, {
              name: 'is_converted_sewn',
              fieldLabel: this.is_converted_sewnLabel,
              allowBlank: true,
              disabled: false,
              xtype: 'checkbox'
            }, {
              name: 'is_alterable',
              fieldLabel: this.is_alterableLabel,
              allowBlank: true,
              disabled: false,
              xtype: 'checkbox'
            }, {
              name: 'is_usually_altered',
              fieldLabel: this.is_usually_alteredLabel,
              allowBlank: true,
              disabled: false,
              xtype: 'checkbox'
            }
          ]
        }
      ]
    });
    // FIELDSETS (End)

    // ACTIONS (Start) =====================================================================
    Ext.apply(this, {
      actions: [{
        xtype: 'button',
        cls: 'submit',
        scope: me,
        tooltip: 'Release',
        listeners: {
          beforerender: this.prepareReleaseAction,
          click: this.onReleaseAction,
          scope: me
        }
      }, {
        xtype: 'button',
        cls: 'approve',
        scope: me,
        tooltip: 'Approve',
        listeners: {
          beforerender: this.prepareApproveAction,
          click: this.onApproveAction,
          scope: me
        }
      }, {
        xtype: 'button',
        cls: 'ship',
        scope: me,
        tooltip: 'locations',
        listeners: {
          beforerender: this.prepareLocationsAction,
          click: this.onLocationsAction,
          scope: me
        }
      }, {
        xtype: 'button',
        cls: 'ship',
        scope: me,
        tooltip: 'skus',
        listeners: {
          beforerender: this.prepareSkusAction,
          click: this.onSkusAction,
          scope: me
        }
      }, {
        xtype: 'button',
        cls: 'approve',
        scope: me,
        tooltip: 'Activate',
        listeners: {
          beforerender: this.prepareActivateAction,
          click: this.onActivateAction,
          scope: me
        }
      }, {
        xtype: 'button',
        cls: 'close',
        scope: me,
        tooltip: 'Deactivate',
        listeners: {
          beforerender: this.prepareDeactivateAction,
          click: this.onDeactivateAction,
          scope: me
        }
      }]
    });
    // ACTIONS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Styles',
      newTitle: 'New Style',
      newSubtitle: 'Complete the following to create a new style in draft state.'
    });
    // TITLES (End)

    this.callParent();

  },

  // HANDLERS (Start) ======================================================================

  /**
   *
   */
  onReleaseAction: function(action, eOpts) {
    this.processEventTransition('release', 'Style was successfully released.', 'An error occurred releasing this Style');
  }, // onReleaseAction

  /**
   *
   */
  onApproveAction: function(action, eOpts) {
    this.processEventTransition('approve', 'Style was successfully approved.', 'An error occurred activating this Style');
  }, // onApproveAction

  /**
   *
   */
  onLocationsAction: function(action, eOpts) {
    this.processEventTransition('build_locations', 'Locations were successfully built.', 'An error occurred building locations for this Style');
  }, // onLocationsAction

  /**
   *
   */
  onSkusAction: function(action, eOpts) {
    Buildit.infoMsg('Skus are being built.  This may take a few moments');
    // this.processEventTransition('build_skus', 'Skus were successfully built.', 'An error occurred building skus for this Style');

  }, // onBuildAction

  /**
   *
   */
  onActivateAction: function(action, eOpts) {
    this.processEventTransition('activate', 'Style was successfully activated.', 'An error occurred activating this Style');
  }, // onActivateAction

  /**
   *
   */
  onDeactivateAction: function(action, eOpts) {
    this.processEventTransition('deactivate', 'Style was successfully deactivated.', 'An error occurred deactivating this Style');
  }, // onActivateAction


  // onDuplicateAction : function(action, eOpts){
  //   var me = this;
  //   Ext.Msg.confirm('Confirm Duplication', 'You are about to duplicate the current style, press Yes to continue', function(response){
  //     if(response == 'yes'){
  //       Omni.service.Style.callInstanceMethod({
  //         id      : this.record.get('style_id'),
  //         name    : 'duplicate_style'
  //       },
  //       function(result, e){
  //         if(result.success == true){
  //           Omni.model.Style.load(result.model.style_id, {
  //             success: function(record, operation){
  //               var canvas = Ext.getCmp('canvas');
  //               var inspectorConfig = {
  //                 record       : record,
  //                 xtype        : 'omni-styles-Inspector'
  //               };

  //               var inspector = Ext.createWidget(inspectorConfig);
  //               canvas.add(inspector);
  //               inspector.show();
  //               canvas.setActive(inspector);

  //               Buildit.infoMsg('The style was successfully cloned. You are now viewing the new style');
  //             }
  //           })
  //         }

  //       });
  //     }
  //   },
  //   me);
  // }, // onDuplicateAction


  processEventTransition: function(eventName, successMsg, failureMsg) {
    var me = this;

    Omni.service.Style.fireEvent({
        id: this.record.get('style_id'),
        name: eventName
      },
      function(result, e) {
        me.getForm().clearInvalid();
        if (result && result.success == true) {
          Buildit.infoMsg(successMsg);
          me.record.set(result);
          me.loadRecord(me.record);
          me.fireEvent('recordchanged', me, me.banner);
          me.doLayout();
        } else {
          var response = Ext.JSON.decode(e.xhr.responseText).result;

          if (response.errors)
            me.getForm().markInvalid(response.errors);

          var error_message = failureMsg;
          if (response.message)
            error_message = response.message;

          if (response.errors)
            error_message = error_message + '. Please fix the highlighted fields and try again.'

          Buildit.errorMsg(error_message);
        }
      }
    );

  }, // processEventTransition

  /**
   *
   */
  prepareReleaseAction: function(action, eOpts) {

    var currentState = this.record.get('state');
    currentState == 'draft' ? action.show() : action.hide();
  }, // prepareReleaseAction

  /**
   *
   */
  prepareApproveAction: function(action, eOpts) {

    var currentState = this.record.get('state');
    currentState == 'pending_approval' ? action.show() : action.hide();
  }, // prepareApproveAction

  /**
   *
   */
  prepareLocationsAction: function(action, eOpts) {

    var currentState = this.record.get('state');
    currentState == 'draft' || currentState == 'pending_approval' || currentState == 'active' ? action.show() : action.hide();
  }, //

  /**
   *
   */
  prepareSkusAction: function(action, eOpts) {

    var currentState = this.record.get('state');
     currentState == 'draft' || currentState == 'building' || currentState == 'pending_approval' || currentState == 'active' ? action.show() : action.hide()
  }, //

  /**
   *
   */
  prepareActivateAction: function(action, eOpts) {

    var currentState = this.record.get('state');
    currentState == 'inactive' ? action.show() : action.hide();
  }, //

  /**
   *
   */
  prepareDeactivateAction: function(action, eOpts) {

    var currentState = this.record.get('state');
    currentState == 'active' ? action.show() : action.hide();
  }, //



});
