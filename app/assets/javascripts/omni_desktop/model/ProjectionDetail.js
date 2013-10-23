Ext.define('Omni.model.ProjectionDetail', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'projection_detail_id',        type: 'string'  },
      { name: 'display',                     type: 'string'  },
      { name: 'projection_id',               type: 'string'  },
      { name: 'projection_location_id',      type: 'string'  },
      { name: 'projection_line_nbr',         type: 'integer' },
      { name: 'forecast_profile_id',         type: 'string'  },
      { name: 'sku_id',                      type: 'string'  },
      { name: 'location_id',                 type: 'string'  },
      { name: 'first_forecast_units',        type: 'decimal' },
      { name: 'last_forecast_units',         type: 'decimal' },
      { name: 'last_forecast_date',          type: 'date'    },
      { name: 'projection_1_units',          type: 'decimal' },
      { name: 'projection_2_units',          type: 'decimal' },
      { name: 'projection_3_units',          type: 'decimal' },
      { name: 'projection_4_units',          type: 'decimal' },
      { name: 'is_destroyed',                type: 'boolean' },

      { name: 'projection_display',          type: 'string'   },
      { name: 'sku_display',                 type: 'string'   },      
      { name: 'location_display',            type: 'string'   },      
      { name: 'style_id',                    type: 'string'   },
      { name: 'style_display',               type: 'string'   },      
      { name: 'color_id',                    type: 'string'   },
      { name: 'color_display',               type: 'string'   },      
      { name: 'size_id',                     type: 'string'   },
      { name: 'size_display',                type: 'string'   },      
      { name: 'forecast_profile_display',    type: 'string'   },
      { name: 'projection_location_display', type: 'string'   },

      { name: 'sale_units_ytd',              type: 'integer'  },
      { name: 'sale_units_py1',              type: 'integer'  },
      { name: 'sale_units_py2',              type: 'integer'  },
      { name: 'sale_units_py3',              type: 'integer'  },
      { name: 'average_sales',               type: 'integer'  },
      { name: 'standard_deviation',          type: 'integer'  },
    ],

  idProperty: 'projection_detail_id',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.ProjectionDetail.create,
      read:    Omni.service.ProjectionDetail.read,
      update:  Omni.service.ProjectionDetail.update,
      destroy: Omni.service.ProjectionDetail.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  },


  validations: [

  ]

});