Ext.define('Omni.model.Inventory', {
  extend     : 'Ext.data.Model',

  fields     : [
    {
      name       : 'inventory_id',
      type       : 'string'
    },
    {
      name       : 'display',
      type       : 'string'
    },
    {
      name       : 'sku_id',
      type       : 'string'
    },
    {
      name       : 'sku_display',
      type       : 'string'
    },
    {
      name       : 'department_id',
      type       : 'string'
    },
    {
      name       : 'department_display',
      type       : 'string'
    },
    {
      name       : 'location_id',
      type       : 'string'
    },
    {
      name       : 'location_display',
      type       : 'string'
    },
    {
      name       : 'supplier_id',
      type       : 'string'
    },
    {
      name       : 'supplier_display',
      type       : 'string'
    },
    {
      name       : 'forecast_profile_id',
      type       : 'string'
    },
    {
      name       : 'forecast_profile_display',
      type       : 'string'
    },
    {
      name       : 'seasonal_index_id',
      type       : 'string'
    },
        {
      name       : 'seasonal_index_display',
      type       : 'string'
    },
    {
      name       : 'on_hand_units',
      type       : 'decimal'
    },
    {
      name       : 'work_in_process_units',
      type       : 'decimal'
    },
    {
      name       : 'supplier_on_order_units',
      type       : 'decimal'
    },
    {
      name       : 'warehouse_on_order_units',
      type       : 'decimal'
    },
    {
      name       : 'in_transit_units',
      type       : 'decimal'
    },
    {
      name       : 'non_sellable_units',
      type       : 'decimal'
    },
    {
      name       : 'allocated_units',
      type       : 'decimal'
    },
    {
      name       : 'reserved_units',
      type       : 'decimal'
    },
    {
      name       : 'shipping_units',
      type       : 'decimal'
    },
    {
      name       : 'requested_units',
      type       : 'decimal'
    },
    {
      name       : 'frozen_units',
      type       : 'decimal'
    },
    {
      name       : 'cost_pool',
      type       : 'decimal'
    },
    {
      name       : 'retail_pool',
      type       : 'decimal'
    },
    {
      name       : 'boy_units',
      type       : 'decimal'
    },
    {
      name       : 'boy_cost',
      type       : 'decimal'
    },
    {
      name       : 'boy_retail',
      type       : 'decimal'
    },
    {
      name       : 'last_inventory_units',
      type       : 'decimal'
    },
    {
      name       : 'last_inventory_cost',
      type       : 'decimal'
    },
    {
      name       : 'last_inventory_retail',
      type       : 'decimal'
    },
    {
      name       : 'sale_units_ytd',
      type       : 'decimal'
    },
    {
      name       : 'sale_units_py1',
      type       : 'decimal'
    },
    {
      name       : 'sale_units_py2',
      type       : 'decimal'
    },
    {
      name       : 'sale_units_py3',
      type       : 'decimal'
    },
    {
      name       : 'sale_retail_ytd',
      type       : 'decimal'
    },
    {
      name       : 'sale_retail_py1',
      type       : 'decimal'
    },
    {
      name       : 'sale_retail_py2',
      type       : 'decimal'
    },
    {
      name       : 'sale_retail_py3',
      type       : 'decimal'
    },
    {
      name       : 'sale_cost_ytd',
      type       : 'decimal'
    },
    {
      name       : 'sale_cost_py1',
      type       : 'decimal'
    },
    {
      name       : 'sale_cost_py2',
      type       : 'decimal'
    },
    {
      name       : 'sale_cost_py3',
      type       : 'decimal'
    },
    {
      name       : 'reserve_end_date',
      type       : 'date'
    },
    {
      name       : 'first_receipt_date',
      type       : 'date'
    },
    {
      name       : 'last_receipt_date',
      type       : 'date'
    },
    {
      name       : 'first_sale_date',
      type       : 'date'
    },
    {
      name       : 'last_sale_date',
      type       : 'date'
    },
    {
      name       : 'last_inventory_date',
      type       : 'date'
    },
    {
      name       : 'replenishment_method',
      type       : 'string'
    },
    {
      name       : 'replenishment_source',
      type       : 'string'
    },
    {
      name       : 'safety_stock_units',
      type       : 'integer'
    },
    {
      name       : 'safety_stock_days',
      type       : 'integer'
    },
    {
      name       : 'smoothing_factor',
      type       : 'decimal'
    },
    {
      name       : 'minimum_units',
      type       : 'integer'
    },
    {
      name       : 'maximum_units',
      type       : 'integer'
    },
    {
      name       : 'forecast',
      type       : 'decimal'
    },
    {
      name       : 'velocity_code',
      type       : 'string'
    },
    {
      name       : 'standard_deviation',
      type       : 'decimal'
    },
    {
      name       : 'is_authorized',
      type       : 'boolean'
    },
    {
      name       : 'is_taxable',
      type       : 'boolean'
    },
    {
      name       : 'is_special_order',
      type       : 'boolean'
    },
    {
      name       : 'is_discontinued',
      type       : 'boolean'
    },
    {
      name       : 'is_destroyed',
      type       : 'boolean'
    }

  ],

  idProperty : 'inventory_id',

  proxy      : {
    type       : 'direct',
    api        : {
      create     : Omni.service.Inventory.create,
      read       : Omni.service.Inventory.read,
      update     : Omni.service.Inventory.update,
      destroy    : Omni.service.Inventory.destroy
    },
    reader     : {
      type       : 'json',
      root       : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  },


  validations: [

  ]

}); // Ext.define('Omni.model.Inventory'
