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
      generic_sku_idLabel:                        Omni.i18n.model.Sku.generic_sku_id,
      add_on_sku_idLabel:                         Omni.i18n.model.Sku.add_on_sku_id,
      account_idLabel:                               Omni.i18n.model.Sku.account_id,
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
      sell_unit_uom_codeLabel:                    Omni.i18n.model.Sku.sell_unit_uom_code,
      sell_unit_lengthLabel:                      Omni.i18n.model.Sku.sell_unit_length,
      sell_unit_heightLabel:                      Omni.i18n.model.Sku.sell_unit_height,
      sell_unit_widthLabel:                       Omni.i18n.model.Sku.sell_unit_width,
      sell_unit_weightLabel:                      Omni.i18n.model.Sku.sell_unit_weight,
      is_convertedLabel:                          Omni.i18n.model.Sku.is_converted,
      is_not_stockedLabel:                        Omni.i18n.model.Sku.is_not_stocked,
      is_conveyable_sell_unitLabel:               Omni.i18n.model.Sku.is_conveyable_sell_unit,
      is_discountableLabel:                       Omni.i18n.model.Sku.is_discountable,
      is_taxableLabel:                            Omni.i18n.model.Sku.is_taxable,
      supplier_idLabel:                           Omni.i18n.model.Sku.supplier_id,
      order_uom_codeLabel:                        Omni.i18n.model.Sku.order_uom_code,
      order_package_typeLabel:                    Omni.i18n.model.Sku.order_package_type,
      garment_piecesLabel:                        Omni.i18n.model.Sku.garment_pieces,
      is_special_orderLabel:                 Omni.i18n.model.Sku.is_special_order,
      is_special_sizeLabel:                    Omni.i18n.model.Sku.is_special_size,
      conversion_costLabel:                 Omni.i18n.model.Sku.conversion_cost,
      first_costLabel:                            Omni.i18n.model.Sku.first_cost,
      last_costLabel:                             Omni.i18n.model.Sku.last_cost,
      average_costLabel:                      Omni.i18n.model.Sku.average_cost,
      on_hand_unitsLabel:                   Omni.i18n.model.Sku.on_hand_units,
      cost_poolLabel:                           Omni.i18n.model.Sku.cost_pool,
      retail_poolLabel:                         Omni.i18n.model.Sku.retail_pool,
      is_updated_average_costLabel: Omni.i18n.model.Sku.is_updated_average_cost,
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
            { name: 'state',                          fieldLabel: this.stateLabel,                      allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'sku_nbr',                        fieldLabel: this.sku_nbrLabel,                    allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'display',                        fieldLabel: this.displayLabel,                    allowBlank: false,  disabled: false,    xtype: 'textfield'        },
            { name: 'description',                    fieldLabel: this.descriptionLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'style_id',                       fieldLabel: this.style_idLabel,                   allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Style',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'style_id', itemTpl:'{display}', gotoTarget: 'omni-styles-inspector' },
            { name: 'color_id',                       fieldLabel: this.color_idLabel,                   allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Color',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'color_id', itemTpl:'{display}', gotoTarget: 'omni-colors-inspector' },
            { name: 'size_id',                        fieldLabel: this.size_idLabel,                    allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Size',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'size_id', itemTpl:'{display}', gotoTarget: 'omni-sizes-inspector' }
            ]
        },
        {
          xtype: 'fieldset',
          title: 'Inventory',
          scheme: 'fieldset_scheme_1',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'initial_retail_price',           fieldLabel: this.initial_retail_priceLabel,       allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'suggested_retail_price',         fieldLabel: this.suggested_retail_priceLabel,     allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { xtype: 'textfield', name: 'first_cost',                     fieldLabel: this.first_costLabel                  , allowBlank: true },
            { xtype: 'textfield', name: 'last_cost',                      fieldLabel: this.last_costLabel                   , allowBlank: true },
            { xtype: 'textfield', name: 'average_cost',                   fieldLabel: this.average_costLabel                , allowBlank: true },
            // { xtype: 'textfield', name: 'on_hand_units',                  fieldLabel: this.on_hand_unitsLabel               , allowBlank: true },
            { xtype: 'checkbox', name: 'is_updated_average_cost',        fieldLabel: this.is_updated_average_costLabel     , allowBlank: true },
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
        {
          name: 'generic_sku_id',
          fieldLabel: this.generic_sku_idLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'buildit-Locator',
          defaultSearch: {
            with: { is_converted: { equal_to: false } }
          },
          store: Ext.create('Omni.store.Sku', {
            pageSize: 25
          }),
          displayField: 'display',
          queryField: 'display',
          valueField: 'sku_id',
          itemTpl: '{display}'
        },
            { xtype: 'currencyfield', currencySymbol: null, name: 'conversion_cost',fieldLabel: this.conversion_costLabel, allowBlank: true, disabled: false },
            { name: 'account_id',                       fieldLabel: this.account_idLabel,         allowBlank: true,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Account',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'account_id', itemTpl:'{display}', gotoTarget: 'omni-accounts-inspector' },
            { name: 'conversion_type',                fieldLabel: this.conversion_typeLabel, allowBlank: true,  disabled: false,    xtype: 'buildit-Lookup',      category:   'CONVERSION_TYPE' },
            // { name: 'add_on_sku_id',                  fieldLabel: this.add_on_sku_idLabel,              allowBlank: true,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Sku',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'sku_id', itemTpl:'{display}' },
            // { name: 'is_converted',                   fieldLabel: this.is_convertedLabel,               allowBlank: true,  disabled: false,    xtype: 'checkbox'         }
          ]
        },
      {
          xtype: 'fieldset',
          title: 'Miscellaneous',
          scheme: 'fieldset_scheme_1',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'effective_date',                 fieldLabel: this.effective_dateLabel,             allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'discontinued_date',              fieldLabel: this.discontinued_dateLabel,          allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'out_of_stock_date',              fieldLabel: this.out_of_stock_dateLabel,          allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'is_enabled',                     fieldLabel: this.is_enabledLabel,                 allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'short_name',                     fieldLabel: this.short_nameLabel,                 allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'pos_name',                       fieldLabel: this.pos_nameLabel,                   allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'color_name',                     fieldLabel: this.color_nameLabel,                 allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'color_short_name',               fieldLabel: this.color_short_nameLabel,           allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'supplier_id',                    fieldLabel: this.supplier_idLabel,                allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Supplier',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'supplier_id', itemTpl:'{display}', gotoTarget: 'omni-suppliers-inspector' },
            { name: 'is_special_order',               fieldLabel: this.is_special_orderLabel,           allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_special_size',                fieldLabel: this.is_special_sizeLabel,            allowBlank: true,   disabled: false,    xtype: 'checkbox'         }
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
            { name: 'minimum_on_hand_units',          fieldLabel: this.minimum_on_hand_unitsLabel,      allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'maximum_on_hand_units',          fieldLabel: this.maximum_on_hand_unitsLabel,      allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'replenishment_source',           fieldLabel: this.replenishment_sourceLabel,       allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'REPLENISHMENT_SOURCE' },
            { name: 'pack_type',                      fieldLabel: this.pack_typeLabel,                  allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'PACK_TYPE' },
            { name: 'is_not_stocked',                 fieldLabel: this.is_not_stockedLabel,             allowBlank: true,   disabled: false,    xtype: 'checkbox'         }
          ]
        },
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

        // ACTIONS (Start) =====================================================================
        Ext.apply(this, {
            actions: [{
                xtype: 'button',
                iconCls: 'fa fa-cogs',
                tooltip: 'Project',
                listeners: {
                    beforerender: this.prepareProjectAction,
                    click: this.onProjectAction,
                    scope: me
                }
            }, {
                xtype: 'button',
                iconCls: 'fa fa-times-circle-o',
                tooltip: 'Close',
                listeners: {
                    beforerender: this.prepareCloseAction,
                    click: this.onCloseAction,
                    scope: me
                }
            }]
        });

        // ACTIONS (End)

        // LISTENERS (Start) ===================================================================

        // LISTENERS (End)


        this.callParent();

    },

    // HANDLERS (Start) ======================================================================

    onProjectAction: function(action, eOpts) {
        this.processEventTransition('project_q', 'Projections are running, this may take a while.', 'An error occurred projecting this account.');
    }, // onBuildAction

    onCloseAction: function(action, eOpts) {
        this.processEventTransition('close', 'Account was successfully closed.', 'An error occurred closing this account.');
    }, // onBuildAction

    prepareProjectAction: function(action, eOpts) {
        this.record.phantom != true ? action.show() : action.hide();
    },

    prepareCloseAction: function(action, eOpts) {
        var currentState = this.record.get('state');
        currentState === 'active' ? action.show() : action.hide();
    },

    processEventTransition: function(eventName, successMsg, failureMsg) {
        var me = this;

        Omni.service.Sku.fireEvent({
                id: this.record.get('sku_id'),
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

    },

    // HANDLERS (End)

});
