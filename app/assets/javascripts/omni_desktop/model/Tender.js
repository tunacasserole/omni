Ext.define('Omni.model.Tender', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'tender_id',                   type: 'string'   },
      { name: 'display',                     type: 'string'   },
      { name: 'description',                 type: 'string'   },
      { name: 'short_name',                  type: 'string'   },
      { name: 'tender_type',                 type: 'string'   },
      { name: 'is_allow_over_tendering',     type: 'boolean'  },
      { name: 'is_open_cash_drawer',         type: 'boolean'  },
      { name: 'is_required_signature',       type: 'boolean'  },
      { name: 'is_allow_multiple_entry',     type: 'boolean'  },
      { name: 'is_print_duplicate_receipt',  type: 'boolean'  },
      { name: 'is_allow_cash_back',          type: 'boolean'  },
      { name: 'maximum_tender_amount',       type: 'decimal'  },
      { name: 'display_order',               type: 'string'   },
      { name: 'is_verify_via_edc',           type: 'boolean'  },
      { name: 'cash_back_limit',             type: 'integer'  },
      { name: 'cash_back_fee',               type: 'decimal'  },
      { name: 'gl_account_id',               type: 'string'   },
      { name: 'validation_mask',             type: 'integer'  },
      { name: 'is_credit_card',              type: 'boolean'  },
      { name: 'is_required_account_holder',  type: 'boolean'  },
      { name: 'is_required_account_number',  type: 'boolean'  },
      { name: 'is_required_expiration_date', type: 'boolean'  },
      { name: 'is_required_ccv_code',        type: 'boolean'  },
      { name: 'is_required_postal_code',     type: 'boolean'  },
      { name: 'is_required_serial_number',   type: 'boolean'  },
      { name: 'is_required_routing_number',  type: 'boolean'  },
      { name: 'is_required_state',           type: 'boolean'  },
      { name: 'is_required_license_number',  type: 'boolean'  },
      { name: 'is_required_birth_date',      type: 'boolean'  },
      { name: 'is_required_avs_response',    type: 'boolean'  },
      { name: 'is_update_till',              type: 'boolean'  },
      { name: 'is_accept_business_credit_card', type: 'boolean'  },
      { name: 'is_enabled_for_web',          type: 'boolean'  },
      { name: 'is_enabled_for_pos',          type: 'boolean'  },
      { name: 'is_enabled_for_phone',        type: 'boolean'  },
      { name: 'is_destroyed',                type: 'boolean'  }
    ],

  idProperty: 'tender_id',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.Tender.create,
      read:    Omni.service.Tender.read,
      update:  Omni.service.Tender.update,
      destroy: Omni.service.Tender.destroy
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