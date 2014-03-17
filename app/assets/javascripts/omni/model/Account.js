Ext.define('Omni.model.Account', {
  extend     : 'Ext.data.Model',

  fields     : [
    {
      name       : 'display',
      type       : 'string'
    },
    {
      name       : 'account_id',
      type       : 'string'
    },
    {
      name       : 'display',
      type       : 'string'
    },
    {
      name       : 'account_name',
      type       : 'string'
    },
    {
      name       : 'description',
      type       : 'string'
    },
    {
      name       : 'short_name',
      type       : 'string'
    },
    {
      name       : 'state',
      type       : 'string'
    },
    {
      name       : 'account_nbr',
      type       : 'string'
    },
    {
      name       : 'account_type',
      type       : 'string'
    },
    {
      name       : 'parent_account_id',
      type       : 'string'
    },
    {
      name       : 'rep_user_id',
      type       : 'string'
    },
    {
      name       : 'webaccount',
      type       : 'string'
    },
    {
      name       : 'location_id',
      type       : 'string'
    },
    {
      name       : 'account_standing',
      type       : 'string'
    },
    {
      name       : 'account_exclusivity',
      type       : 'string'
    },
    {
      name       : 'billing_line_1',
      type       : 'string'
    },
    {
      name       : 'billing_line_2',
      type       : 'string'
    },
    {
      name       : 'billing_city',
      type       : 'string'
    },
    {
      name       : 'billing_state',
      type       : 'string'
    },
    {
      name       : 'billing_zip',
      type       : 'string'
    },
    {
      name       : 'billing_country',
      type       : 'string'
    },
    {
      name       : 'billing_phone',
      type       : 'string'
    },
    {
      name       : 'billing_fax',
      type       : 'string'
    },
    {
      name       : 'shipping_line_1',
      type       : 'string'
    },
    {
      name       : 'shipping_line_2',
      type       : 'string'
    },
    {
      name       : 'shipping_city',
      type       : 'string'
    },
    {
      name       : 'shipping_state',
      type       : 'string'
    },
    {
      name       : 'shipping_zip',
      type       : 'string'
    },
    {
      name       : 'shipping_country',
      type       : 'string'
    },
    {
      name       : 'shipping_phone',
      type       : 'string'
    },
    {
      name       : 'shipping_fax',
      type       : 'string'
    },
    {
      name       : 'school_type',
      type       : 'string'
    },
    {
      name       : 'school_gender',
      type       : 'string'
    },
    {
      name       : 'from_grade_id',
      type       : 'string'
    },
    {
      name       : 'thru_grade_id',
      type       : 'string'
    },
    {
      name       : 'year_established',
      type       : 'string'
    },
    {
      name       : 'number_of_students',
      type       : 'integer'
    },
    {
      name       : 'annual_tuition',
      type       : 'decimal'
    },
    {
      name       : 'design_code',
      type       : 'string'
    },
    {
      name       : 'level_of_income',
      type       : 'string'
    },
    {
      name       : 'uniform_policy',
      type       : 'string'
    },
    {
      name       : 'revenue_band',
      type       : 'string'
    },
    {
      name       : 'school_potential',
      type       : 'string'
    },
    {
      name       : 'prospect_contract_expiration_date',
      type       : 'datetime'
    },
    {
      name       : 'prospect_type',
      type       : 'string'
    },
    {
      name       : 'existing_uniform_provider',
      type       : 'string'
    },
    {
      name       : 'is_footwear_program',
      type       : 'boolean'
    },
    {
      name       : 'contract_type',
      type       : 'string'
    },
    {
      name       : 'rebate',
      type       : 'string'
    },
    {
      name       : 'is_red_label_account',
      type       : 'boolean'
    },
    {
      name       : 'is_on_campus_store',
      type       : 'boolean'
    },
    {
      name       : 'is_on_web',
      type       : 'boolean'
    },
    {
      name       : 'is_destroyed',
      type       : 'boolean'
    }

  ],

  idProperty : 'account_id',

  proxy      : {
    type       : 'direct',
    api        : {
      create     : Omni.service.Account.create,
      read       : Omni.service.Account.read,
      update     : Omni.service.Account.update,
      destroy    : Omni.service.Account.destroy
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

}); // Ext.define('Omni.model.Account'
