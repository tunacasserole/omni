Ext.define('Omni.model.ProjectionDetail', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'projection_detail_id',        type: 'string'   },
      { name: 'display',                     type: 'string'   },
      { name: 'projection_id',               type: 'string'   },
      { name: 'projection_line_nbr',         type: 'string'   },
      { name: 'forecast_profile_id',         type: 'string'   },
      { name: 'forecast_profile_display',    type: 'string'   },      
      { name: 'sku_id',                      type: 'string'   },
      { name: 'sku_display',                 type: 'string'   },      
      { name: 'style_id',                      type: 'string'   },
      { name: 'style_display',                 type: 'string'   },      
      { name: 'color_id',                      type: 'string'   },
      { name: 'color_display',                 type: 'string'   },      
      { name: 'size_id',                      type: 'string'   },
      { name: 'size_display',                 type: 'string'   },      
      { name: 'location_id',            type: 'string'   },
      { name: 'location_display',                      type: 'string'   },      
      { name: 'forecast_units',              type: 'integer'  },
      { name: 'proposed_units',              type: 'integer'  },
      { name: 'approved_units',              type: 'integer'  },
      { name: 'closed_units',                type: 'integer'  },
      { name: 'projection_2_units',          type: 'integer'  },
      { name: 'projection_update_units',     type: 'integer'  },
      { name: 'projection_adjustment_units',  type: 'integer'  },
      { name: 'sale_units_2013',              type: 'integer'  },
      { name: 'sale_units_2012',              type: 'integer'  },
      { name: 'sale_units_2011',              type: 'integer'  },
      { name: 'sale_units_2010',              type: 'integer'  },
      { name: 'number_of_schools',           type: 'integer'  },
      { name: 'average_contract_year',       type: 'integer'  },
      { name: 'years_active',                type: 'integer'  },
      { name: 'average_sales',               type: 'integer'  },
      { name: 'standard_deviation',          type: 'integer'  },
      { name: 'is_destroyed',                type: 'boolean'  }
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