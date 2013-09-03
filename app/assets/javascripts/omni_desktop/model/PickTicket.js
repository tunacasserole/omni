Ext.define('Omni.model.PickTicket', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'pick_ticket_id',                       type: 'string'      },
    { name: 'display',                              type: 'string'      },
    { name: 'state',                                type: 'string'      },
    { name: 'pick_ticket_nbr',                      type: 'string'      },
    { name: 'pickable_id',                          type: 'string'      },
    { name: 'pickable_type',                        type: 'string'      },
    { name: 'fulfillment_location_display',         type: 'string'      },
    { name: 'fulfillment_location_id',              type: 'string'      },
    { name: 'work_order_display',                   type: 'string'      },
    { name: 'work_order_id',                        type: 'string'      },
    { name: 'request_units',                        type: 'float',      defaultValue: 0                         },
    { name: 'complete_units',                       type: 'float',      defaultValue: 0                         },
    { name: 'release_date',                         type: 'date'        },
    { name: 'start_date',                           type: 'date'        },
    { name: 'complete_date',                        type: 'date'        },
    { name: 'ship_date',                            type: 'date'        },
    { name: 'is_destroyed',                         type: 'boolean',    defaultValue: false                     }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'pick_ticket_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.PickTicket.create,
      read:     Omni.service.PickTicket.read,
      update:   Omni.service.PickTicket.update,
      destroy:  Omni.service.PickTicket.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

