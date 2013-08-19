Ext.define('Omni.model.MarkTransfer', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'id',                          type: 'integer'  },
      { name: 'from_outlet_nbr',             type: 'integer'  },
      { name: 'to_outlet_nbr',               type: 'integer'  },
      { name: 'date',                        type: 'date'     },
      { name: 'tracking_nbr',                type: 'string'   },
      { name: 'status_id',                   type: 'integer'  },
      { name: 'user_id',                     type: 'integer'  },
      { name: 'ship_date',                   type: 'date'     },
      { name: 'accepted_user_id',            type: 'integer'  },
      { name: 'comment',                     type: 'string'   }
    ],

  idProperty: 'id',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.MarkTransfer.create,
      read:    Omni.service.MarkTransfer.read,
      update:  Omni.service.MarkTransfer.update,
      destroy: Omni.service.MarkTransfer.destroy
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