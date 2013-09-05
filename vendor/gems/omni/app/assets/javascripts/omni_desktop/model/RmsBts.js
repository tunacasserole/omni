Ext.define('Omni.model.RmsBts', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'ItemID',                      type: 'integer'  },
      { name: 'Style',                       type: 'string'   },
      { name: 'StockNbr',                    type: 'string'   },
      { name: 'Description',                 type: 'string'   },
      { name: 'Color',                       type: 'string'   },
      { name: 'Size',                        type: 'string'   },
      { name: 'Variance',                    type: 'string'   },
      { name: 'Supplier',                    type: 'string'   },
      { name: 'QOH',                         type: 'integer'  },
      { name: 'ItemQOH',                     type: 'integer'  },
      { name: 'ItemDescrip',                 type: 'string'   },
      { name: 'QOO',                         type: 'integer'  },
      { name: 'ItemQOO',                     type: 'integer'  },
      { name: 'SalesPrice',                  type: 'string'   },
      { name: 'Cost',                        type: 'string'   },
      { name: 'JAN_2012',                    type: 'integer'  },
      { name: 'JAN_2013',                    type: 'integer'  },
      { name: 'FEB_2012',                    type: 'integer'  },
      { name: 'FEB_2013',                    type: 'integer'  },
      { name: 'MAR_2012',                    type: 'integer'  },
      { name: 'MAR_2013',                    type: 'integer'  },
      { name: 'APR_2012',                    type: 'integer'  },
      { name: 'APR_2013',                    type: 'integer'  },
      { name: 'MAY_2012',                    type: 'integer'  },
      { name: 'MAY_2013',                    type: 'integer'  },
      { name: 'JUN_2012',                    type: 'integer'  },
      { name: 'JUN_2013',                    type: 'integer'  },
      { name: 'JUL_2012',                    type: 'integer'  },
      { name: 'JUL_2013',                    type: 'integer'  },
      { name: 'AUG_2012',                    type: 'integer'  },
      { name: 'AUG_2013',                    type: 'integer'  },
      { name: 'SEP_2012',                    type: 'integer'  },
      { name: 'SEP_2013',                    type: 'integer'  },
      { name: 'OCT_2012',                    type: 'integer'  },
      { name: 'OCT_2013',                    type: 'integer'  },
      { name: 'NOV_2012',                    type: 'integer'  },
      { name: 'NOV_2013',                    type: 'integer'  },
      { name: 'DEC_2012',                    type: 'integer'  },
      { name: 'DEC_2013',                    type: 'integer'  },
      { name: 'TOT_2010',                    type: 'integer'  },
      { name: 'TOT_2011',                    type: 'integer'  },
      { name: 'TOT_2012',                    type: 'integer'  },
      { name: 'TOT_2013',                    type: 'integer'  }
    ],

  idProperty: 'ItemID',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.RmsBts.create,
      read:    Omni.service.RmsBts.read,
      update:  Omni.service.RmsBts.update,
      destroy: Omni.service.RmsBts.destroy
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