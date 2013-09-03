Ext.define('Omni.model.MarkTransferLine', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'id',                          type: 'integer'  },
      { name: 'transfer_id',                 type: 'integer'  },
      { name: 'stock_nbr',                   type: 'integer'  },
      { name: 'size',                        type: 'string'   },
      { name: 'qty',                         type: 'integer'  },
      { name: 'date',                        type: 'datetime' },
      { name: 'box_nbr',                     type: 'string'   },
      { name: 'status_id',                   type: 'integer'  }
    ],

  idProperty: 'id',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.MarkTransferLine.create,
      read:    Omni.service.MarkTransferLine.read,
      update:  Omni.service.MarkTransferLine.update,
      destroy: Omni.service.MarkTransferLine.destroy
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