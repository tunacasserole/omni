Ext.define('Omni.model.MarkOutlet', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'outlet_nbr',                  type: 'integer'  },
      { name: 'display',                     type: 'string'   },
      { name: 'address1',                    type: 'string'   },
      { name: 'address2',                    type: 'string'   },
      { name: 'city',                        type: 'string'   },
      { name: 'state_id',                    type: 'integer'  },
      { name: 'zip_code',                    type: 'string'   },
      { name: 'phone_nbr',                   type: 'string'   },
      { name: 'orig_out',                    type: 'integer'  },
      { name: 'remits_tax',                  type: 'integer'  },
      { name: 'taxed_by1',                   type: 'integer'  },
      { name: 'taxed_by2',                   type: 'integer'  },
      { name: 'taxed_by3',                   type: 'integer'  },
      { name: 'taxed_by4',                   type: 'integer'  },
      { name: 'active',                      type: 'integer'  },
      { name: 'information',                 type: 'string'   },
      { name: 'whse',                        type: 'integer'  },
      { name: 'email',                       type: 'string'   },
      { name: 'tax_free',                    type: 'integer'  },
      { name: 'tax_free_start',              type: 'date'     },
      { name: 'tax_free_stop',               type: 'date'     },
      { name: 'location_id',                 type: 'string'   }
    ],

  idProperty: 'outlet_nbr',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.MarkOutlet.create,
      read:    Omni.service.MarkOutlet.read,
      update:  Omni.service.MarkOutlet.update,
      destroy: Omni.service.MarkOutlet.destroy
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