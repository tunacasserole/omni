Ext.define('Omni.model.Lead', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'lead_id',                     type: 'string'   },
      { name: 'is_destroyed',                type: 'boolean'  },
      { name: 'master_record_id',            type: 'string'   },
      { name: 'salutation',                  type: 'string'   },
      { name: 'first_name',                  type: 'string'   },
      { name: 'last_name',                   type: 'string'   },
      { name: 'title',                       type: 'string'   },
      { name: 'company',                     type: 'string'   },
      { name: 'street',                      type: 'string'   },
      { name: 'city',                        type: 'string'   },
      { name: 'state_province',              type: 'string'   },
      { name: 'postal_code',                 type: 'string'   },
      { name: 'country',                     type: 'string'   },
      { name: 'latitude',                    type: 'string'   },
      { name: 'longitude',                   type: 'string'   },
      { name: 'phone',                       type: 'string'   },
      { name: 'mobile_phone',                type: 'string'   },
      { name: 'fax',                         type: 'string'   },
      { name: 'email',                       type: 'string'   },
      { name: 'website',                     type: 'string'   },
      { name: 'description',                 type: 'string'   },
      { name: 'lead_source',                 type: 'string'   },
      { name: 'state',                       type: 'string'   },
      { name: 'industry',                    type: 'string'   },
      { name: 'rating',                      type: 'string'   },
      { name: 'annual_revenue',              type: 'string'   },
      { name: 'employees',                   type: 'string'   },
      { name: 'owner_id',                    type: 'string'   },
      { name: 'is_opted_out_email',          type: 'boolean'  },
      { name: 'is_converted',                type: 'boolean'  },
      { name: 'converted_date',              type: 'string'   },
      { name: 'converted_account_id',        type: 'string'   },
      { name: 'converted_contact_id',        type: 'string'   },
      { name: 'converted_opportunity_id',    type: 'string'   },
      { name: 'is_unread_by_owner',          type: 'boolean'  },
      { name: 'created_date',                type: 'string'   },
      { name: 'created_by_id',               type: 'string'   },
      { name: 'last_modified_date',          type: 'string'   },
      { name: 'last_modified_by_id',         type: 'string'   },
      { name: 'system_mod_date',             type: 'string'   },
      { name: 'last_activity_date',          type: 'string'   },
      { name: 'is_do_not_call',              type: 'boolean'  },
      { name: 'is_opted_out_fax',            type: 'boolean'  },
      { name: 'last_transfer_date',          type: 'string'   },
      { name: 'jigsaw',                      type: 'string'   },
      { name: 'jigsaw_contact_id',           type: 'string'   },
      { name: 'email_bounce_reason',         type: 'string'   },
      { name: 'email_bounce_date',           type: 'string'   },
      { name: 'correlation_id',              type: 'string'   },
      { name: 'correlation_data',            type: 'string'   },
      { name: 'web_source',                  type: 'string'   },
      { name: 'low_grade',                   type: 'string'   },
      { name: 'high_grade',                  type: 'string'   },
      { name: 'enrollment',                  type: 'string'   },
      { name: 'current_vendor',              type: 'string'   },
      { name: 'denomination',                type: 'string'   },
      { name: 'territory',                   type: 'string'   },
      { name: 'sales_rep',                   type: 'string'   },
      { name: 'county',                      type: 'string'   },
      { name: 'contract_term',               type: 'string'   },
      { name: 'expiration_date',             type: 'string'   },
      { name: 'plaid',                       type: 'string'   },
      { name: 'notes',                       type: 'string'   },
      { name: 'samples',                     type: 'string'   },
      { name: 'date_last_verified',          type: 'string'   },
      { name: 'lead_type',                   type: 'string'   },
      { name: 'charter_number',              type: 'string'   },
      { name: 'district',                    type: 'string'   },
      { name: 'region',                      type: 'string'   }
    ],

  idProperty: 'lead_id',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.Lead.create,
      read:    Omni.service.Lead.read,
      update:  Omni.service.Lead.update,
      destroy: Omni.service.Lead.destroy
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