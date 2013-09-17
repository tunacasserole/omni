Ext.define('Omni.model.ReceiptDetail', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'receipt_detail_id',           type: 'string'   },
      { name: 'display',                     type: 'string'   },
      { name: 'receipt_id',                  type: 'string'   },
      { name: 'receipt_line_nbr',            type: 'string'   },
      { name: 'purchase_detail_id',          type: 'string'   },
      { name: 'received_units',              type: 'decimal'  },
      { name: 'state',                       type: 'string'   },
      { name: 'is_destroyed',                type: 'boolean'  }
    ],

  idProperty: 'receipt_detail_id',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.ReceiptDetail.create,
      read:    Omni.service.ReceiptDetail.read,
      update:  Omni.service.ReceiptDetail.update,
      destroy: Omni.service.ReceiptDetail.destroy
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