Ext.define('Omni.view.inventories.Explorer', {

  extend   : 'Buildit.ux.explorer.Panel',
  alias    : 'widget.omni-inventories-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  store    : Ext.create('Omni.store.Inventory'),

  allowNew: false,
  allowFind: true,

  contextMenuConfig : {
    // xtype    : 'omni-inventories-ExplorerContextMenu'
    xtype    : 'buildit-explorer-ContextMenu'
  },

  newForms : [{
    xtype    : 'omni-inventories-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-inventories-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  inventory_idLabel                       : Omni.i18n.model.Inventory.inventory_id,
  displayLabel                            : Omni.i18n.model.Inventory.display,
  sku_idLabel                             : Omni.i18n.model.Inventory.sku_id,
  department_idLabel                      : Omni.i18n.model.Inventory.department_id,
  location_idLabel                        : Omni.i18n.model.Inventory.location_id,
  supplier_idLabel                        : Omni.i18n.model.Inventory.supplier_id,
  forecast_profile_idLabel                : Omni.i18n.model.Inventory.forecast_profile_id,
  seasonal_index_idLabel                  : Omni.i18n.model.Inventory.seasonal_index_id,
  on_hand_unitsLabel                      : Omni.i18n.model.Inventory.on_hand_units,
  work_in_process_unitsLabel              : Omni.i18n.model.Inventory.work_in_process_units,
  supplier_on_order_unitsLabel            : Omni.i18n.model.Inventory.supplier_on_order_units,
  warehouse_on_order_unitsLabel           : Omni.i18n.model.Inventory.warehouse_on_order_units,
  in_transit_unitsLabel                   : Omni.i18n.model.Inventory.in_transit_units,
  non_sellable_unitsLabel                 : Omni.i18n.model.Inventory.non_sellable_units,
  allocated_unitsLabel                    : Omni.i18n.model.Inventory.allocated_units,
  reserved_unitsLabel                     : Omni.i18n.model.Inventory.reserved_units,
  shipping_unitsLabel                     : Omni.i18n.model.Inventory.shipping_units,
  requested_unitsLabel                    : Omni.i18n.model.Inventory.requested_units,
  locked_unitsLabel                       : Omni.i18n.model.Inventory.locked_units,
  cost_poolLabel                          : Omni.i18n.model.Inventory.cost_pool,
  retail_poolLabel                        : Omni.i18n.model.Inventory.retail_pool,
  boy_unitsLabel                          : Omni.i18n.model.Inventory.boy_units,
  boy_costLabel                           : Omni.i18n.model.Inventory.boy_cost,
  boy_retailLabel                         : Omni.i18n.model.Inventory.boy_retail,
  last_inventory_unitsLabel               : Omni.i18n.model.Inventory.last_inventory_units,
  last_inventory_costLabel                : Omni.i18n.model.Inventory.last_inventory_cost,
  last_inventory_retailLabel              : Omni.i18n.model.Inventory.last_inventory_retail,
  sale_units_ytdLabel                     : Omni.i18n.model.Inventory.sale_units_ytd,
  sale_units_py1Label                     : Omni.i18n.model.Inventory.sale_units_py1,
  sale_units_py2Label                     : Omni.i18n.model.Inventory.sale_units_py2,
  sale_units_py3Label                     : Omni.i18n.model.Inventory.sale_units_py3,
  sale_retail_ytdLabel                    : Omni.i18n.model.Inventory.sale_retail_ytd,
  sale_retail_py1Label                    : Omni.i18n.model.Inventory.sale_retail_py1,
  sale_retail_py2Label                    : Omni.i18n.model.Inventory.sale_retail_py2,
  sale_retail_py3Label                    : Omni.i18n.model.Inventory.sale_retail_py3,
  sale_cost_ytdLabel                      : Omni.i18n.model.Inventory.sale_cost_ytd,
  sale_cost_py1Label                      : Omni.i18n.model.Inventory.sale_cost_py1,
  sale_cost_py2Label                      : Omni.i18n.model.Inventory.sale_cost_py2,
  sale_cost_py3Label                      : Omni.i18n.model.Inventory.sale_cost_py3,
  reserve_end_dateLabel                   : Omni.i18n.model.Inventory.reserve_end_date,
  first_receipt_dateLabel                 : Omni.i18n.model.Inventory.first_receipt_date,
  last_receipt_dateLabel                  : Omni.i18n.model.Inventory.last_receipt_date,
  first_sale_dateLabel                    : Omni.i18n.model.Inventory.first_sale_date,
  last_sale_dateLabel                     : Omni.i18n.model.Inventory.last_sale_date,
  last_inventory_dateLabel                : Omni.i18n.model.Inventory.last_inventory_date,
  replenishment_methodLabel               : Omni.i18n.model.Inventory.replenishment_method,
  replenishment_sourceLabel               : Omni.i18n.model.Inventory.replenishment_source,
  safety_stock_unitsLabel                 : Omni.i18n.model.Inventory.safety_stock_units,
  safety_stock_daysLabel                  : Omni.i18n.model.Inventory.safety_stock_days,
  smoothing_factorLabel                   : Omni.i18n.model.Inventory.smoothing_factor,
  minimum_unitsLabel                      : Omni.i18n.model.Inventory.minimum_units,
  maximum_unitsLabel                      : Omni.i18n.model.Inventory.maximum_units,
  forecastLabel                           : Omni.i18n.model.Inventory.forecast,
  velocity_codeLabel                      : Omni.i18n.model.Inventory.velocity_code,
  standard_deviationLabel                 : Omni.i18n.model.Inventory.standard_deviation,
  is_authorizedLabel                      : Omni.i18n.model.Inventory.is_authorized,
  is_taxableLabel                         : Omni.i18n.model.Inventory.is_taxable,
  is_special_orderLabel                   : Omni.i18n.model.Inventory.is_special_order,
  is_discontinuedLabel                    : Omni.i18n.model.Inventory.is_discontinued,
  is_destroyedLabel                       : Omni.i18n.model.Inventory.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title    : 'Inventory',
  subtitle : 'View Inventory',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns      : [
        {
          header       : this.sku_idLabel,
          dataIndex    : 'sku_display',
          flex         : 3,
          sortable     : true
        },
        {
          header       : this.location_idLabel,
          dataIndex    : 'location_display',
          flex         : 1,
          sortable     : true
        },
        // {
        //   header       : this.department_idLabel,
        //   dataIndex    : 'department_display',
        //   flex         : 1
        // },
        // {
        //   header       : this.supplier_idLabel,
        //   dataIndex    : 'supplier_display',
        //   flex         : 1
        // },
        // {
        //   header       : this.forecast_profile_idLabel,
        //   dataIndex    : 'forecast_profile_display',
        //   flex         : 1
        // },
        // {
        //   header       : this.seasonal_index_idLabel,
        //   dataIndex    : 'seasonal_index_display',
        //   flex         : 1
        // },
        {
          header       : this.on_hand_unitsLabel,
          dataIndex    : 'on_hand_units',
          flex         : 1,
          sortable     : true
        },
        {
          header       : this.supplier_on_order_unitsLabel,
          dataIndex    : 'supplier_on_order_units',
          flex         : 1,
          sortable     : true
        },
        {
          header       : this.work_in_process_unitsLabel,
          dataIndex    : 'work_in_process_units',
          flex         : 1,
          sortable     : true
        },
        {
          header       : this.in_transit_unitsLabel,
          dataIndex    : 'in_transit_units',
          flex         : 1,
          sortable     : true
        },
        {
          header       : this.allocated_unitsLabel,
          dataIndex    : 'allocated_units',
          flex         : 1,
          sortable     : true
        },
        {
          header       : this.sale_units_ytdLabel,
          dataIndex    : 'sale_units_ytd',
          flex         : 1,
          sortable     : true
        },
        {
          header       : this.sale_units_py1Label,
          dataIndex    : 'sale_units_py1',
          flex         : 1,
          sortable     : true
        },
        {
          header       : this.sale_units_py2Label,
          dataIndex    : 'sale_units_py2',
          flex         : 1,
          sortable     : true
        },
        {
          header       : this.sale_units_py3Label,
          dataIndex    : 'sale_units_py3',
          flex         : 1,
          sortable     : true
        },
        // {
        //   header       : this.reserved_unitsLabel,
        //   dataIndex    : 'reserved_units',
        //   flex         : 1
        // },
        // {
        //   header       : this.shipping_unitsLabel,
        //   dataIndex    : 'shipping_units',
        //   flex         : 1
        // },
        // {
        //   header       : this.requested_unitsLabel,
        //   dataIndex    : 'requested_units',
        //   flex         : 1
        // },
        // {
        //   header       : this.locked_unitsLabel,
        //   dataIndex    : 'locked_units',
        //   flex         : 1
        // },
        // {
        //   header       : this.cost_poolLabel,
        //   dataIndex    : 'cost_pool',
        //   flex         : 1
        // },
        // {
        //   header       : this.retail_poolLabel,
        //   dataIndex    : 'retail_pool',
        //   flex         : 1
        // },
        // {
        //   header       : this.boy_unitsLabel,
        //   dataIndex    : 'boy_units',
        //   flex         : 1
        // },
        // {
        //   header       : this.boy_costLabel,
        //   dataIndex    : 'boy_cost',
        //   flex         : 1
        // },
        // {
        //   header       : this.boy_retailLabel,
        //   dataIndex    : 'boy_retail',
        //   flex         : 1
        // },
        // {
        //   header       : this.last_inventory_unitsLabel,
        //   dataIndex    : 'last_inventory_units',
        //   flex         : 1
        // },
        // {
        //   header       : this.last_inventory_costLabel,
        //   dataIndex    : 'last_inventory_cost',
        //   flex         : 1
        // },
        // {
        //   header       : this.last_inventory_retailLabel,
        //   dataIndex    : 'last_inventory_retail',
        //   flex         : 1
        // },
        // {
        //   header       : this.sale_retail_ytdLabel,
        //   dataIndex    : 'sale_retail_ytd',
        //   flex         : 1
        // },
        // {
        //   header       : this.sale_retail_py1Label,
        //   dataIndex    : 'sale_retail_py1',
        //   flex         : 1
        // },
        // {
        //   header       : this.sale_retail_py2Label,
        //   dataIndex    : 'sale_retail_py2',
        //   flex         : 1
        // },
        // {
        //   header       : this.sale_retail_py3Label,
        //   dataIndex    : 'sale_retail_py3',
        //   flex         : 1
        // },
        // {
        //   header       : this.sale_cost_ytdLabel,
        //   dataIndex    : 'sale_cost_ytd',
        //   flex         : 1
        // },
        // {
        //   header       : this.sale_cost_py1Label,
        //   dataIndex    : 'sale_cost_py1',
        //   flex         : 1
        // },
        // {
        //   header       : this.sale_cost_py2Label,
        //   dataIndex    : 'sale_cost_py2',
        //   flex         : 1
        // },
        // {
        //   header       : this.sale_cost_py3Label,
        //   dataIndex    : 'sale_cost_py3',
        //   flex         : 1
        // },
        // {
        //   header       : this.reserve_end_dateLabel,
        //   dataIndex    : 'reserve_end_date',
        //   flex         : 1
        // },
        // {
        //   header       : this.first_receipt_dateLabel,
        //   dataIndex    : 'first_receipt_date',
        //   flex         : 1
        // },
        // {
        //   header       : this.last_receipt_dateLabel,
        //   dataIndex    : 'last_receipt_date',
        //   flex         : 1
        // },
        // {
        //   header       : this.first_sale_dateLabel,
        //   dataIndex    : 'first_sale_date',
        //   flex         : 1
        // },
        // {
        //   header       : this.last_sale_dateLabel,
        //   dataIndex    : 'last_sale_date',
        //   flex         : 1
        // },
        // {
        //   header       : this.last_inventory_dateLabel,
        //   dataIndex    : 'last_inventory_date',
        //   flex         : 1
        // },
        // {
        //   header       : this.replenishment_methodLabel,
        //   dataIndex    : 'replenishment_method',
        //   flex         : 1
        // },
        // {
        //   header       : this.replenishment_sourceLabel,
        //   dataIndex    : 'replenishment_source',
        //   flex         : 1
        // },
        // {
        //   header       : this.safety_stock_unitsLabel,
        //   dataIndex    : 'safety_stock_units',
        //   flex         : 1
        // },
        // {
        //   header       : this.safety_stock_daysLabel,
        //   dataIndex    : 'safety_stock_days',
        //   flex         : 1
        // },
        // {
        //   header       : this.smoothing_factorLabel,
        //   dataIndex    : 'smoothing_factor',
        //   flex         : 1
        // },
        // {
        //   header       : this.minimum_unitsLabel,
        //   dataIndex    : 'minimum_units',
        //   flex         : 1
        // },
        // {
        //   header       : this.maximum_unitsLabel,
        //   dataIndex    : 'maximum_units',
        //   flex         : 1
        // },
        // {
        //   header       : this.forecastLabel,
        //   dataIndex    : 'forecast',
        //   flex         : 1
        // },
        // {
        //   header       : this.velocity_codeLabel,
        //   dataIndex    : 'velocity_code',
        //   flex         : 1
        // },
        // {
        //   header       : this.standard_deviationLabel,
        //   dataIndex    : 'standard_deviation',
        //   flex         : 1
        // },
        // {
        //   header       : this.is_authorizedLabel,
        //   dataIndex    : 'is_authorized',
        //   flex         : 1
        // },
        // {
        //   header       : this.is_taxableLabel,
        //   dataIndex    : 'is_taxable',
        //   flex         : 1
        // },
        // {
        //   header       : this.is_special_orderLabel,
        //   dataIndex    : 'is_special_order',
        //   flex         : 1
        // },
        // {
        //   header       : this.is_discontinuedLabel,
        //   dataIndex    : 'is_discontinued',
        //   flex         : 1
        // },
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});
