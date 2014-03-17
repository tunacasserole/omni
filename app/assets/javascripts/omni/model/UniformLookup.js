Ext.define('Omni.model.UniformLookup', {
  extend     : 'Ext.data.Model',

  fields     : [
    {
      name       : 'display',
      type       : 'string'
    },
    {
      name       : 'uniform_lookup_id',
      type       : 'string'
    },
    {
      name       : 'display',
      type       : 'string'
    },
    {
      name       : 'uniform_lookup_nbr',
      type       : 'string'
    },
    {
      name       : 'uniform_id',
      type       : 'string'
    },
    {
      name       : 'account_id',
      type       : 'string'
    },
    {
      name       : 'contract_id',
      type       : 'string'
    },
    {
      name       : 'category_id',
      type       : 'string'
    },
    {
      name       : 'product_id',
      type       : 'string'
    },
    {
      name       : 'style_id',
      type       : 'string'
    },
    {
      name       : 'color_id',
      type       : 'string'
    },
    {
      name       : 'size_id',
      type       : 'string'
    },
    {
      name       : 'sku_id',
      type       : 'string'
    },
    {
      name       : 'grade_id',
      type       : 'string'
    },
    {
      name       : 'state',
      type       : 'string'
    },
    {
      name       : 'date_created',
      type       : 'datetime'
    },
    {
      name       : 'is_required_male',
      type       : 'boolean'
    },
    {
      name       : 'is_required_female',
      type       : 'boolean'
    },
    {
      name       : 'is_optional_male',
      type       : 'boolean'
    },
    {
      name       : 'is_optional_female',
      type       : 'string'
    },
    {
      name       : 'is_includes_logo',
      type       : 'string'
    },
    {
      name       : 'is_requires_logo',
      type       : 'string'
    },
    {
      name       : 'discount_percent',
      type       : 'decimal'
    },
    {
      name       : 'mark_uniform_key',
      type       : 'string'
    },
    {
      name       : 'mark_stock_number',
      type       : 'string'
    },
    {
      name       : 'mark_grades',
      type       : 'string'
    },
    {
      name       : 'price_adjustment_1',
      type       : 'decimal'
    },
    {
      name       : 'price_adjustment_2',
      type       : 'decimal'
    },
    {
      name       : 'uniform_source',
      type       : 'string'
    },
    {
      name       : 'is_approved',
      type       : 'boolean'
    },
    {
      name       : 'is_destroyed',
      type       : 'boolean'
    }

  ],

  idProperty : 'uniform_lookup_id',

  proxy      : {
    type       : 'direct',
    api        : {
      create     : Omni.service.UniformLookup.create,
      read       : Omni.service.UniformLookup.read,
      update     : Omni.service.UniformLookup.update,
      destroy    : Omni.service.UniformLookup.destroy
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

}); // Ext.define('Omni.model.UniformLookup'
