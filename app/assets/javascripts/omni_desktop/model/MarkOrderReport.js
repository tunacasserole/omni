Ext.define('Omni.model.MarkOrderReport', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'id',                          type: 'integer'  },
      { name: 'stock_nbr',                   type: 'integer'  },
      { name: 'size',                        type: 'string'   },
      { name: 'qty',                         type: 'integer'  },
      { name: 'year_entered',                type: 'integer'  }
    ],

  idProperty: 'id',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.MarkOrderReport.create,
      read:    Omni.service.MarkOrderReport.read,
      update:  Omni.service.MarkOrderReport.update,
      destroy: Omni.service.MarkOrderReport.destroy
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