Ext.define('Omni.model.ForecastProfile', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'forecast_profile_id',         type: 'string'   },
      { name: 'display',                     type: 'string'   },
      { name: 'sales_py1_weight',            type: 'string'   },
      { name: 'sales_py2_weight',            type: 'string'   },
      { name: 'sales_py3_weight',            type: 'string'   },
      { name: 'contract_year_1_weight',      type: 'string'   },
      { name: 'contract_year_2_weight',      type: 'string'   },
      { name: 'contract_year_3_weight',      type: 'string'   },
      { name: 'contract_year_4_weight',      type: 'string'   },
      { name: 'contract_year_5_weight',      type: 'string'   },
      { name: 'forecast_formula',            type: 'string'   },
      { name: 'is_destroyed',                type: 'boolean'  }
    ],

  idProperty: 'forecast_profile_id',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.ForecastProfile.create,
      read:    Omni.service.ForecastProfile.read,
      update:  Omni.service.ForecastProfile.update,
      destroy: Omni.service.ForecastProfile.destroy
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
