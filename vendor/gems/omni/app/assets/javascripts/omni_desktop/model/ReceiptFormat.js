Ext.define('Omni.model.ReceiptFormat', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'receipt_format_id',           type: 'string'   },
      { name: 'display',                     type: 'string'   },
      { name: 'description',                 type: 'string'   },
      { name: 'icon_url',                    type: 'string'   },
      { name: 'icon_width',                  type: 'decimal'  },
      { name: 'paper_width',                 type: 'decimal'  },
      { name: 'top_name',                    type: 'string'   },
      { name: 'feedback_message',            type: 'text'     },
      { name: 'return_policy',               type: 'text'     },
      { name: 'website_message',             type: 'string'   },
      { name: 'promotional_message',         type: 'text'     },
      { name: 'message_separator',           type: 'string'   },
      { name: 'is_date_in_header',           type: 'boolean'  },
      { name: 'is_time_in_header',           type: 'boolean'  },
      { name: 'is_location_name_in_header',  type: 'boolean'  },
      { name: 'is_location_number_in_header', type: 'boolean'  },
      { name: 'is_order_number_in_header',   type: 'boolean'  },
      { name: 'is_cashier_name_in_header',   type: 'boolean'  },
      { name: 'is_cashier_number_in_header', type: 'boolean'  },
      { name: 'is_salesperson_name_in_header', type: 'boolean'  },
      { name: 'is_salesperson_number_in_header', type: 'boolean'  },
      { name: 'is_customer_name_in_header',  type: 'boolean'  },
      { name: 'is_date_in_footer',           type: 'boolean'  },
      { name: 'is_time_in_footer',           type: 'boolean'  },
      { name: 'is_location_name_in_footer',  type: 'boolean'  },
      { name: 'is_location_number_in_footer', type: 'boolean'  },
      { name: 'is_order_number_in_footer',   type: 'boolean'  },
      { name: 'is_cashier_name_in_footer',   type: 'boolean'  },
      { name: 'is_cashier_number_in_footer', type: 'boolean'  },
      { name: 'is_salesperson_name_in_footer', type: 'boolean'  },
      { name: 'is_salesperson_number_in_footer', type: 'boolean'  },
      { name: 'is_customer_name_in_footer',  type: 'boolean'  },
      { name: 'is_destroyed',                type: 'boolean'  }
    ],

  idProperty: 'receipt_format_id',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.ReceiptFormat.create,
      read:    Omni.service.ReceiptFormat.read,
      update:  Omni.service.ReceiptFormat.update,
      destroy: Omni.service.ReceiptFormat.destroy
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