Ext.define('Omni.model.ReceiptPurchase', {
  extend     : 'Ext.data.Model',

  fields     : [
    {
      name       : 'receipt_purchase_id',
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
      name       : 'receipt_id',
      type       : 'string'
    },
    {
      name       : 'purchase_id',
      type       : 'string'
    },
    {
      name       : 'is_destroyed',
      type       : 'boolean'
    }

  ],

  idProperty : 'receipt_purchase_id',

  proxy      : {
    type       : 'direct',
    api        : {
      create     : Omni.service.ReceiptPurchase.create,
      read       : Omni.service.ReceiptPurchase.read,
      update     : Omni.service.ReceiptPurchase.update,
      destroy    : Omni.service.ReceiptPurchase.destroy
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

}); // Ext.define('Omni.model.ReceiptPurchase'
