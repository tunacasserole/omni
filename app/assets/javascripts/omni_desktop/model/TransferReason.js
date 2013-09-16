Ext.define('Omni.model.TransferReason', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'transfer_reason_id',          type: 'string'   },
      { name: 'display',                     type: 'string'   },
      { name: 'description',                 type: 'string'   },
      { name: 'short_name',                  type: 'string'   },
      { name: 'is_destroyed',                type: 'boolean'  }
    ],

  idProperty: 'transfer_reason_id',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.TransferReason.create,
      read:    Omni.service.TransferReason.read,
      update:  Omni.service.TransferReason.update,
      destroy: Omni.service.TransferReason.destroy
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