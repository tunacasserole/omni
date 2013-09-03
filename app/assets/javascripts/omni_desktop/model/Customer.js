Ext.define('Omni.model.Customer', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'customer_nbr' },
    { type: 'presence', field: 'last_name' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'customer_id',                          type: 'string'      },
    { name: 'display',                              type: 'string'      },
    { name: 'customer_nbr',                         type: 'string'      },
    { name: 'registration_date',                    type: 'date'        },
    { name: 'user_display',                         type: 'string'      },
    { name: 'user_id',                              type: 'string'      },
    { name: 'name_prefix',                          type: 'string'      },
    { name: 'first_name',                           type: 'string'      },
    { name: 'middle_name',                          type: 'string'      },
    { name: 'last_name',                            type: 'string'      },
    { name: 'name_suffix',                          type: 'string'      },
    { name: 'company',                              type: 'string'      },
    { name: 'department',                           type: 'string'      },
    { name: 'job_title',                            type: 'string'      },
    { name: 'is_tax_exempt',                        type: 'boolean',    defaultValue: false                     },
    { name: 'tax_exempt_state',                     type: 'string'      },
    { name: 'tax_exempt_certificate',               type: 'string'      },
    { name: 'is_employee',                          type: 'boolean',    defaultValue: false                     },
    { name: 'employee_nbr',                         type: 'string'      },
    { name: 'is_contractor',                        type: 'boolean',    defaultValue: false                     },
    { name: 'contractor_nbr',                       type: 'string'      },
    { name: 'is_student',                           type: 'boolean',    defaultValue: false                     },
    { name: 'birth_date',                           type: 'date'        },
    { name: 'gender',                               type: 'string'      },
    { name: 'is_analyst',                           type: 'boolean',    defaultValue: false                     },
    { name: 'is_developer',                         type: 'boolean',    defaultValue: false                     },
    { name: 'line_1',                               type: 'string'      },
    { name: 'line_2',                               type: 'string'      },
    { name: 'line_3',                               type: 'string'      },
    { name: 'line_4',                               type: 'string'      },
    { name: 'city',                                 type: 'string'      },
    { name: 'state_code',                           type: 'string'      },
    { name: 'zip',                                  type: 'string'      },
    { name: 'country',                              type: 'string'      },
    { name: 'latitude',                             type: 'string'      },
    { name: 'longitude',                            type: 'string'      },
    { name: 'is_validated',                         type: 'boolean',    defaultValue: false                     },
    { name: 'is_residential',                       type: 'boolean',    defaultValue: false                     },
    { name: 'is_commercial',                        type: 'boolean',    defaultValue: false                     },
    { name: 'is_do_not_mail_to',                    type: 'boolean',    defaultValue: false                     },
    { name: 'ship_line_1',                          type: 'string'      },
    { name: 'ship_line_2',                          type: 'string'      },
    { name: 'ship_line_3',                          type: 'string'      },
    { name: 'ship_line_4',                          type: 'string'      },
    { name: 'ship_city',                            type: 'string'      },
    { name: 'ship_state_code',                      type: 'string'      },
    { name: 'ship_zip',                             type: 'string'      },
    { name: 'ship_country',                         type: 'string'      },
    { name: 'ship_latitude',                        type: 'string'      },
    { name: 'ship_longitude',                       type: 'string'      },
    { name: 'phone',                                type: 'string'      },
    { name: 'phone_extension',                      type: 'string'      },
    { name: 'is_do_not_call',                       type: 'boolean',    defaultValue: false                     },
    { name: 'fax',                                  type: 'string'      },
    { name: 'email_address',                        type: 'string'      },
    { name: 'is_verified',                          type: 'boolean',    defaultValue: false                     },
    { name: 'is_do_not_email',                      type: 'boolean',    defaultValue: false                     },
    { name: 'customer_account_nbr',                 type: 'string'      },
    { name: 'customer_account_type',                type: 'string'      },
    { name: 'customer_account_name',                type: 'string'      },
    { name: 'account_open_date',                    type: 'date'        },
    { name: 'account_close_date',                   type: 'date'        },
    { name: 'credit_limit',                         type: 'float',      defaultValue: 0                         },
    { name: 'is_on_hold',                           type: 'boolean',    defaultValue: false                     },
    { name: 'is_destroyed',                         type: 'boolean',    defaultValue: false                     }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'customer_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.Customer.create,
      read:     Omni.service.Customer.read,
      update:   Omni.service.Customer.update,
      destroy:  Omni.service.Customer.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

