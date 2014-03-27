Ext.define('Omni.model.UniformDetail', {
  extend     : 'Ext.data.Model',

  fields     : [
    {
      name       : 'display',
      type       : 'string'
    },
    {
      name       : 'uniform_detail_id',
      type       : 'string'
    },
    {
      name       : 'display',
      type       : 'string'
    },
    {
      name       : 'uniform_id',
      type       : 'string'
    },
    {
      name       : 'style_id',
      type       : 'string'
    },
    {
      name       : 'style_display',
      type       : 'string'
    },
    {
      name       : 'color_id',
      type       : 'string'
    },
    {
      name       : 'color_display',
      type       : 'string'
    },
    {
      name       : 'style_color_id',
      type       : 'string'
    },
    {
      name       : 'uniform_detail_nbr',
      type       : 'string'
    },
    {
      name       : 'state',
      type       : 'string'
    },
    {
      name       : 'from_grade_id',
      type       : 'string'
    },
    {
      name       : 'thru_grade_id',
      type       : 'string'
    },
    {
      name       : 'from_grade_display',
      type       : 'string'
    },
    {
      name       : 'thru_grade_display',
      type       : 'string'
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
      type       : 'boolean'
    },
    {
      name       : 'is_requires_logo',
      type       : 'boolean'
    },
    {
      name       : 'is_includes_logo',
      type       : 'boolean'
    },
    {
      name       : 'discount_percent',
      type       : 'decimal'
    },
    {
      name       : 'discount_amount',
      type       : 'decimal'
    },
    {
      name       : 'uniform_source',
      type       : 'string'
    },
    {
      name       : 'retail_price',
      type       : 'decimal'
    },
    {
      name       : 'price_units',
      type       : 'decimal'
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

  idProperty : 'uniform_detail_id',

  proxy      : {
    type       : 'direct',
    api        : {
      create     : Omni.service.UniformDetail.create,
      read       : Omni.service.UniformDetail.read,
      update     : Omni.service.UniformDetail.update,
      destroy    : Omni.service.UniformDetail.destroy
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

}); // Ext.define('Omni.model.UniformDetail'
