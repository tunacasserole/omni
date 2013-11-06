Ext.define('Omni.model.ProjectionDetail', {
  extend     : 'Ext.data.Model',

  fields     : [
    {
      name       : 'projection_detail_id',
      type       : 'string'
    },
    {
      name       : 'display',
      type       : 'string'
    },
    {
      name       : 'state',
      type       : 'string'
    },
    {
      name       : 'projection_id',
      type       : 'string'
    },
    {
      name       : 'projection_location_id',
      type       : 'string'
    },
    {
      name       : 'projection_line_nbr',
      type       : 'string'
    },
    {
      name       : 'forecast_profile_id',
      type       : 'string'
    },
    {
      name       : 'inventory_id',
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
      name       : 'location_id',
      type       : 'string'
    },    {
      name       : 'location_display',
      type       : 'string'
    },
    {
      name       : 'first_forecast_units',
      type       : 'integer'
    },
    {
      name       : 'last_forecast_units',
      type       : 'integer'
    },
    {
      name       : 'last_forecast_date',
      type       : 'datetime'
    },
    {
      name       : 'projection_1_units',
      type       : 'integer'
    },
    {
      name       : 'projection_2_units',
      type       : 'integer'
    },
    {
      name       : 'projection_3_units',
      type       : 'integer'
    },
    {
      name       : 'projection_4_units',
      type       : 'integer'
    },
    {
      name       : 'sale_units_ytd',
      type       : 'integer'
    },
    {
      name       : 'sale_units_py1',
      type       : 'integer'
    },
    {
      name       : 'sale_units_py2',
      type       : 'integer'
    },
    {
      name       : 'sale_units_py3',
      type       : 'integer'
    },
    {
      name       : 'number_of_schools',
      type       : 'integer'
    },
    {
      name       : 'average_sales',
      type       : 'integer'
    },
    {
      name       : 'standard_deviation',
      type       : 'integer'
    },
    {
      name       : 'is_destroyed',
      type       : 'boolean'
    },
    {
      name       : 'audit_created_by',
      type       : 'string'
    },
    {
      name       : 'audit_updated_by',
      type       : 'string'
    },
    {
      name       : 'audit_created_at',
      type       : 'datetime'
    },
    {
      name       : 'audit_updated_at',
      type       : 'datetime'
    }

  ],

  idProperty : 'projection_detail_id',

  proxy      : {
    type       : 'direct',
    api        : {
      create     : Omni.service.ProjectionDetail.create,
      read       : Omni.service.ProjectionDetail.read,
      update     : Omni.service.ProjectionDetail.update,
      destroy    : Omni.service.ProjectionDetail.destroy
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

}); // Ext.define('Omni.model.ProjectionDetail'