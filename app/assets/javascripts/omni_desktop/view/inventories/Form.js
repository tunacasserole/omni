  Ext.define('Omni.view.inventories.Form', {

    extend: 'Buildit.ux.Form',
    alias: 'widget.omni-inventories-Form',


    // LABELS (Start) =======================================================================
    inventory_idLabel: Omni.i18n.model.Inventory.inventory_id,
    displayLabel: Omni.i18n.model.Inventory.display,
    sku_idLabel: Omni.i18n.model.Inventory.sku_id,
    department_idLabel: Omni.i18n.model.Inventory.department_id,
    location_idLabel: Omni.i18n.model.Inventory.location_id,
    supplier_idLabel: Omni.i18n.model.Inventory.supplier_id,
    forecast_profile_idLabel: Omni.i18n.model.Inventory.forecast_profile_id,
    seasonal_index_idLabel: Omni.i18n.model.Inventory.seasonal_index_id,
    on_hand_unitsLabel: Omni.i18n.model.Inventory.on_hand_units,
    work_in_process_unitsLabel: Omni.i18n.model.Inventory.work_in_process_units,
    supplier_on_order_unitsLabel: Omni.i18n.model.Inventory.supplier_on_order_units,
    warehouse_on_order_unitsLabel: Omni.i18n.model.Inventory.warehouse_on_order_units,
    in_transit_unitsLabel: Omni.i18n.model.Inventory.in_transit_units,
    non_sellable_unitsLabel: Omni.i18n.model.Inventory.non_sellable_units,
    allocated_unitsLabel: Omni.i18n.model.Inventory.allocated_units,
    reserved_unitsLabel: Omni.i18n.model.Inventory.reserved_units,
    shipping_unitsLabel: Omni.i18n.model.Inventory.shipping_units,
    requested_unitsLabel: Omni.i18n.model.Inventory.requested_units,
    frozen_unitsLabel: Omni.i18n.model.Inventory.frozen_units,
    cost_poolLabel: Omni.i18n.model.Inventory.cost_pool,
    retail_poolLabel: Omni.i18n.model.Inventory.retail_pool,
    boy_unitsLabel: Omni.i18n.model.Inventory.boy_units,
    boy_costLabel: Omni.i18n.model.Inventory.boy_cost,
    boy_retailLabel: Omni.i18n.model.Inventory.boy_retail,
    last_inventory_unitsLabel: Omni.i18n.model.Inventory.last_inventory_units,
    last_inventory_costLabel: Omni.i18n.model.Inventory.last_inventory_cost,
    last_inventory_retailLabel: Omni.i18n.model.Inventory.last_inventory_retail,
    sale_units_ytdLabel: Omni.i18n.model.Inventory.sale_units_ytd,
    sale_units_py1Label: Omni.i18n.model.Inventory.sale_units_py1,
    sale_units_py2Label: Omni.i18n.model.Inventory.sale_units_py2,
    sale_units_py3Label: Omni.i18n.model.Inventory.sale_units_py3,
    sale_retail_ytdLabel: Omni.i18n.model.Inventory.sale_retail_ytd,
    sale_retail_py1Label: Omni.i18n.model.Inventory.sale_retail_py1,
    sale_retail_py2Label: Omni.i18n.model.Inventory.sale_retail_py2,
    sale_retail_py3Label: Omni.i18n.model.Inventory.sale_retail_py3,
    sale_cost_ytdLabel: Omni.i18n.model.Inventory.sale_cost_ytd,
    sale_cost_py1Label: Omni.i18n.model.Inventory.sale_cost_py1,
    sale_cost_py2Label: Omni.i18n.model.Inventory.sale_cost_py2,
    sale_cost_py3Label: Omni.i18n.model.Inventory.sale_cost_py3,
    reserve_end_dateLabel: Omni.i18n.model.Inventory.reserve_end_date,
    first_receipt_dateLabel: Omni.i18n.model.Inventory.first_receipt_date,
    last_receipt_dateLabel: Omni.i18n.model.Inventory.last_receipt_date,
    first_sale_dateLabel: Omni.i18n.model.Inventory.first_sale_date,
    last_sale_dateLabel: Omni.i18n.model.Inventory.last_sale_date,
    last_inventory_dateLabel: Omni.i18n.model.Inventory.last_inventory_date,
    replenishment_methodLabel: Omni.i18n.model.Inventory.replenishment_method,
    replenishment_sourceLabel: Omni.i18n.model.Inventory.replenishment_source,
    safety_stock_unitsLabel: Omni.i18n.model.Inventory.safety_stock_units,
    safety_stock_daysLabel: Omni.i18n.model.Inventory.safety_stock_days,
    smoothing_factorLabel: Omni.i18n.model.Inventory.smoothing_factor,
    minimum_unitsLabel: Omni.i18n.model.Inventory.minimum_units,
    maximum_unitsLabel: Omni.i18n.model.Inventory.maximum_units,
    forecastLabel: Omni.i18n.model.Inventory.forecast,
    velocity_codeLabel: Omni.i18n.model.Inventory.velocity_code,
    standard_deviationLabel: Omni.i18n.model.Inventory.standard_deviation,
    is_authorizedLabel: Omni.i18n.model.Inventory.is_authorized,
    is_taxableLabel: Omni.i18n.model.Inventory.is_taxable,
    is_special_orderLabel: Omni.i18n.model.Inventory.is_special_order,
    is_discontinuedLabel: Omni.i18n.model.Inventory.is_discontinued,
    is_destroyedLabel: Omni.i18n.model.Inventory.is_destroyed,
    // LABELS (End)


    initComponent: function() {

      var me = this;

      // FILTER (Start) =======================================================================
      var associativeFilter = {
        property: 'inventory_id',
        value: this.record.get('inventory_id')
      };
      // FILTER (End)

      // FIELDSETS (Start) ====================================================================
      Ext.apply(this, {
        items: [{
          xtype: 'fieldset',
          title: 'General Information',
          collapsible: true,
          defaultType: 'numberfield',
          layout: 'anchor',
          items: [{
            xtype: 'textfield',
            name: 'display',
            fieldLabel: this.displayLabel,
            allowBlank: true
          }, {
            name: 'sku_id',
            fieldLabel: this.sku_idLabel,
            allowBlank: false,
            disabled: false,
            xtype: 'buildit-Locator',
            store: Ext.create('Omni.store.Sku', {
              pageSize: 10
            }),
            displayField: 'display',
            queryField: 'display',
            valueField: 'sku_id',
            itemTpl: '{display}'
          }, {
            name: 'location_id',
            fieldLabel: this.location_idLabel,
            allowBlank: false,
            disabled: false,
            xtype: 'buildit-Locator',
            store: Ext.create('Omni.store.Location', {
              pageSize: 10
            }),
            displayField: 'display',
            queryField: 'display',
            valueField: 'location_id',
            itemTpl: '{display}'
          }, {
            xtype: 'numberfield',
            name: 'on_hand_units',
            fieldLabel: this.on_hand_unitsLabel,
            allowBlank: true
          }, {
            xtype: 'checkbox',
            name: 'is_authorized',
            fieldLabel: this.is_authorizedLabel,
            allowBlank: true
          }, {
            xtype: 'checkbox',
            name: 'is_taxable',
            fieldLabel: this.is_taxableLabel,
            allowBlank: true
          }, {
            xtype: 'checkbox',
            name: 'is_special_order',
            fieldLabel: this.is_special_orderLabel,
            allowBlank: true
          }, {
            xtype: 'checkbox',
            name: 'is_discontinued',
            fieldLabel: this.is_discontinuedLabel,
            allowBlank: true
          }]
        }, {
          xtype: 'fieldset',
          title: 'Inventory Information',
          collapsible: true,
          defaultType: 'numberfield',
          layout: 'anchor',
          disabled: true,
          items: [{
              xtype: 'numberfield',
              name: 'in_transit_units',
              fieldLabel: this.in_transit_unitsLabel,
              allowBlank: true
            }, {
              xtype: 'numberfield',
              name: 'non_sellable_units',
              fieldLabel: this.non_sellable_unitsLabel,
              allowBlank: true
            }, {
              xtype: 'numberfield',
              name: 'allocated_units',
              fieldLabel: this.allocated_unitsLabel,
              allowBlank: true
            }, {
              xtype: 'numberfield',
              name: 'reserved_units',
              fieldLabel: this.reserved_unitsLabel,
              allowBlank: true
            }, {
              xtype: 'numberfield',
              name: 'shipping_units',
              fieldLabel: this.shipping_unitsLabel,
              allowBlank: true
            }, {
              xtype: 'numberfield',
              name: 'work_in_process_units',
              fieldLabel: this.work_in_process_unitsLabel,
              allowBlank: true
            }, {
              xtype: 'numberfield',
              name: 'requested_units',
              fieldLabel: this.requested_unitsLabel,
              allowBlank: true
            }, {
              xtype: 'numberfield',
              name: 'frozen_units',
              fieldLabel: this.frozen_unitsLabel,
              allowBlank: true
            }, {
              xtype: 'numberfield',
              name: 'supplier_on_order_units',
              fieldLabel: this.supplier_on_order_unitsLabel,
              allowBlank: true
            }, {
              xtype: 'numberfield',
              name: 'warehouse_on_order_units',
              fieldLabel: this.warehouse_on_order_unitsLabel,
              allowBlank: true
            },
            // {
            //   xtype        : 'numberfield',
            //   name         : 'cost_pool',
            //   fieldLabel   : this.cost_poolLabel,
            //   allowBlank   : true
            // },
            // {
            //   xtype        : 'numberfield',
            //   name         : 'retail_pool',
            //   fieldLabel   : this.retail_poolLabel,
            //   allowBlank   : true
            // },
            {
              xtype: 'numberfield',
              name: 'boy_units',
              fieldLabel: this.boy_unitsLabel,
              allowBlank: true
            },
            // },
            // {
            //   xtype        : 'numberfield',
            //   name         : 'boy_cost',
            //   fieldLabel   : this.boy_costLabel,
            //   allowBlank   : true
            // },
            // {
            //   xtype        : 'numberfield',
            //   name         : 'boy_retail',
            //   fieldLabel   : this.boy_retailLabel,
            //   allowBlank   : true
            // },
            {
              xtype: 'numberfield',
              name: 'last_inventory_units',
              fieldLabel: this.last_inventory_unitsLabel,
              allowBlank: true
            },
            // {
            //   xtype        : 'numberfield',
            //   name         : 'last_inventory_cost',
            //   fieldLabel   : this.last_inventory_costLabel,
            //   allowBlank   : true
            // },
            // {
            //   xtype        : 'numberfield',
            //   name         : 'last_inventory_retail',
            //   fieldLabel   : this.last_inventory_retailLabel,
            //   allowBlank   : true
            // },
            {
              xtype: 'datefield',
              name: 'first_receipt_date',
              fieldLabel: this.first_receipt_dateLabel,
              allowBlank: true
            }, {
              xtype: 'datefield',
              name: 'last_receipt_date',
              fieldLabel: this.last_receipt_dateLabel,
              allowBlank: true
            }, {
              xtype: 'datefield',
              name: 'first_sale_date',
              fieldLabel: this.first_sale_dateLabel,
              allowBlank: true
            }, {
              xtype: 'datefield',
              name: 'last_sale_date',
              fieldLabel: this.last_sale_dateLabel,
              allowBlank: true
            }, {
              xtype: 'datefield',
              name: 'last_inventory_date',
              fieldLabel: this.last_inventory_dateLabel,
              allowBlank: true
            }
          ]
        }, {
          xtype: 'fieldset',
          title: 'Replenishment',
          collapsible: true,
          defaultType: 'numberfield',
          defaults: {
            anchor: '70%'
          },
          layout: 'anchor',
          items: [{
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
            name: 'supplier_id',
            fieldLabel: this.supplier_idLabel,
            allowBlank: true,
            disabled: false,
            xtype: 'buildit-Locator',
            store: Ext.create('Omni.store.Supplier', {
              pageSize: 10
            }),
            displayField: 'display',
            queryField: 'display',
            valueField: 'supplier_id',
            itemTpl: '{display}'
          }, {
            xtype: 'numberfield',
            name: 'safety_stock_units',
            fieldLabel: this.safety_stock_unitsLabel,
            allowBlank: true
          }, {
            xtype: 'numberfield',
            name: 'safety_stock_days',
            fieldLabel: this.safety_stock_daysLabel,
            allowBlank: true
          }, {
            xtype: 'numberfield',
            name: 'smoothing_factor',
            fieldLabel: this.smoothing_factorLabel,
            allowBlank: true
          }, {
            name: 'forecast_profile_id',
            fieldLabel: this.forecast_profile_idLabel,
            allowBlank: true,
            disabled: false,
            xtype: 'buildit-Locator',
            store: Ext.create('Omni.store.ForecastProfile', {
              pageSize: 10
            }),
            displayField: 'display',
            queryField: 'display',
            valueField: 'forecast_profile_id',
            itemTpl: '{display}'
          }, {
            xtype: 'numberfield',
            name: 'minimum_units',
            fieldLabel: this.minimum_unitsLabel,
            allowBlank: true
          }, {
            xtype: 'numberfield',
            name: 'maximum_units',
            fieldLabel: this.maximum_unitsLabel,
            allowBlank: true
          }, {
            name: 'seasonal_index_id',
            fieldLabel: this.seasonal_index_idLabel,
            allowBlank: true,
            disabled: false,
            xtype: 'buildit-Locator',
            store: Ext.create('Omni.store.SeasonalIndex', {
              pageSize: 10
            }),
            displayField: 'display',
            queryField: 'display',
            valueField: 'seasonal_index_id',
            itemTpl: '{display}'
          }, {
            xtype: 'numberfield',
            name: 'forecast',
            fieldLabel: this.forecastLabel,
            allowBlank: true
          }, {
            xtype: 'textfield',
            name: 'velocity_code',
            fieldLabel: this.velocity_codeLabel,
            allowBlank: true
          }, {
            xtype: 'numberfield',
            name: 'standard_deviation',
            fieldLabel: this.standard_deviationLabel,
            allowBlank: true
          }]
        }, {
          xtype: 'fieldset',
          title: 'Sales History',
          collapsible: true,
          defaultType: 'numberfield',
          disabled: true,
          defaults: {
            anchor: '70%'
          },
          layout: 'anchor',
          items: [{
              xtype: 'numberfield',
              name: 'sale_units_ytd',
              fieldLabel: this.sale_units_ytdLabel,
              allowBlank: true
            }, {
              xtype: 'numberfield',
              name: 'sale_units_py1',
              fieldLabel: this.sale_units_py1Label,
              allowBlank: true
            }, {
              xtype: 'numberfield',
              name: 'sale_units_py2',
              fieldLabel: this.sale_units_py2Label,
              allowBlank: true
            }, {
              xtype: 'numberfield',
              name: 'sale_units_py3',
              fieldLabel: this.sale_units_py3Label,
              allowBlank: true
            }, {
              xtype: 'numberfield',
              name: 'sale_retail_ytd',
              fieldLabel: this.sale_retail_ytdLabel,
              allowBlank: true
            }, {
              xtype: 'numberfield',
              name: 'sale_retail_py1',
              fieldLabel: this.sale_retail_py1Label,
              allowBlank: true
            }, {
              xtype: 'numberfield',
              name: 'sale_retail_py2',
              fieldLabel: this.sale_retail_py2Label,
              allowBlank: true
            }, {
              xtype: 'numberfield',
              name: 'sale_retail_py3',
              fieldLabel: this.sale_retail_py3Label,
              allowBlank: true
            }, {
              xtype: 'numberfield',
              name: 'sale_cost_ytd',
              fieldLabel: this.sale_cost_ytdLabel,
              allowBlank: true
            }, {
              xtype: 'numberfield',
              name: 'sale_cost_py1',
              fieldLabel: this.sale_cost_py1Label,
              allowBlank: true
            }, {
              xtype: 'numberfield',
              name: 'sale_cost_py2',
              fieldLabel: this.sale_cost_py2Label,
              allowBlank: true
            }, {
              xtype: 'numberfield',
              name: 'sale_cost_py3',
              fieldLabel: this.sale_cost_py3Label,
              allowBlank: true
            },
            // {
            //   xtype        : 'datefield',
            //   name         : 'reserve_end_date',
            //   fieldLabel   : this.reserve_end_dateLabel,
            //   allowBlank   : true
            // },

          ]
        }]
      });
      // FIELDSETS (End)

      // TITLES (Start) ======================================================================
      Ext.applyIf(this, {
        title: 'Inventory',
        subtitle: 'Edit Inventory',
        newTitle: 'New Inventory',
        newSubtitle: 'Complete the following inventory data'
      });
      // TITLES (End)

      this.callParent();

    } // initComponent

  }); // Ext.define('Omni.view.inventories.Form'
