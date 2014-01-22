Ext.define('Omni.model.Style', {
  extend: 'Ext.data.Model',

  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'style_id', type: 'string', useNull: true },
    { name: 'display', type: 'string' },
    { name: 'style_nbr', type: 'string' },
    { name: 'description', type: 'string' },
    { name: 'short_name', type: 'string' },
    { name: 'concatenated_name', type: 'string' },
    { name: 'pos_name', type: 'string' },
    { name: 'effective_date', type: 'date' },
    { name: 'discontinued_date', type: 'date' },
    { name: 'out_of_stock_date', type: 'date' },
    { name: 'subclass_display', type: 'string' },
    { name: 'subclass_id', type: 'string' },
    { name: 'product_display', type: 'string' },
    { name: 'product_id', type: 'string' },
    { name: 'buyer_user_display', type: 'string' },
    { name: 'buyer_user_id', type: 'string' },
    { name: 'brand', type: 'string' },
    { name: 'product_type_display', type: 'string' },
    { name: 'product_type_id', type: 'string' },
    { name: 'fabric_content', type: 'string' },
    { name: 'storage_code', type: 'string' },
    { name: 'design_code', type: 'string' },
    { name: 'initial_retail_price', type: 'float', defaultValue: 0 },
    { name: 'suggested_retail_price', type: 'float', defaultValue: 0 },
    { name: 'planning_retail_price', type: 'float', defaultValue: 0 },
    { name: 'smoothing_factor', type: 'float', defaultValue: 0 },
    { name: 'replenishment_method', type: 'string' },
    { name: 'replenishment_source', type: 'string' },
    { name: 'minimum_on_hand_units', type: 'float', defaultValue: 0 },
    { name: 'maximum_on_hand_units', type: 'float', defaultValue: 0 },
    { name: 'pack_type', type: 'string' },
    { name: 'is_not_stocked', type: 'boolean', defaultValue: false },
    { name: 'sell_unit_uom_code', type: 'string' },
    { name: 'sell_unit_length', type: 'float', defaultValue: 0 },
    { name: 'sell_unit_height', type: 'float', defaultValue: 0 },
    { name: 'sell_unit_width', type: 'float', defaultValue: 0 },
    { name: 'sell_unit_weight', type: 'float', defaultValue: 0 },
    { name: 'is_conveyable_sell_unit', type: 'boolean', defaultValue: false },
    { name: 'is_discountable', type: 'boolean', defaultValue: false },
    { name: 'is_taxable', type: 'boolean', defaultValue: false },
    { name: 'supplier_display', type: 'string' },
    { name: 'supplier_id', type: 'string' },
    { name: 'order_uom_code', type: 'string' },
    { name: 'order_package_type', type: 'string' },
    { name: 'garment_pieces', type: 'float', defaultValue: 0 },
    { name: 'is_special_order', type: 'boolean', defaultValue: false },
    { name: 'is_converted', type: 'boolean', defaultValue: false },
    { name: 'add_on_sku_id', type: 'string' },
    { name: 'site_id', type: 'string' },
    { name: 'conversion_type', type: 'string' },
    { name: 'maintenance_level', type: 'string', defaultValue : 'BOTH' },
    { name: 'is_convertible', type: 'boolean', defaultValue: false },
    { name: 'is_converted_heatset', type: 'boolean', defaultValue: false },
    { name: 'is_converted_sewn', type: 'boolean', defaultValue: false },
    { name: 'generic_style_display', type: 'string' },
    { name: 'generic_style_id', type: 'string' },
    { name: 'size_group_display', type: 'string' },
    { name: 'size_group_id', type: 'string' },
    { name: 'sku_name_method', type: 'string' },
    { name: 'is_alterable', type: 'boolean', defaultValue: false },
    { name: 'is_usually_altered', type: 'boolean', defaultValue: false },
    { name: 'is_enabled', type: 'boolean', defaultValue: false },
    { name: 'state', type: 'string' },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'style_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.Style.create,
      read:     Omni.service.Style.read,
      update:   Omni.service.Style.update,
      destroy:  Omni.service.Style.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

