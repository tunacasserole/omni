Ext.define('Omni.model.Contract', {
  extend     : 'Ext.data.Model',

  fields     : [
    {
      name       : 'display',
      type       : 'string'
    },
    {
      name       : 'contract_id',
      type       : 'string'
    },
    {
      name       : 'display',
      type       : 'string'
    },
    {
      name       : 'account_id',
      type       : 'string'
    },
    {
      name       : 'contract_nbr',
      type       : 'string'
    },
    {
      name       : 'state',
      type       : 'string'
    },
    {
      name       : 'description',
      type       : 'string'
    },
    {
      name       : 'contract_term',
      type       : 'string'
    },
    {
      name       : 'rep_user_id',
      type       : 'string'
    },
    {
      name       : 'parker_signed_by_user_id',
      type       : 'string'
    },
    {
      name       : 'customer_signed_by_user_id',
      type       : 'string'
    },
    {
      name       : 'customer_signed_by_title',
      type       : 'string'
    },
    {
      name       : 'activated_by_user_id',
      type       : 'string'
    },
    {
      name       : 'expiration_notice_window',
      type       : 'string'
    },
    {
      name       : 'special_terms',
      type       : 'string'
    },
    {
      name       : 'teacher_discount_percent',
      type       : 'decimal'
    },
    {
      name       : 'administrator_discount_percent',
      type       : 'decimal'
    },
    {
      name       : 'is_exclusive',
      type       : 'boolean'
    },
    {
      name       : 'is_discount_in_store',
      type       : 'boolean'
    },
    {
      name       : 'is_discount_on_web',
      type       : 'boolean'
    },
    {
      name       : 'effective_date',
      type       : 'datetime'
    },
    {
      name       : 'end_date',
      type       : 'datetime'
    },
    {
      name       : 'parker_signed_by_date',
      type       : 'datetime'
    },
    {
      name       : 'customer_signed_by_date',
      type       : 'datetime'
    },
    {
      name       : 'activated_date',
      type       : 'datetime'
    },
    {
      name       : 'last_approved_date',
      type       : 'datetime'
    },
    {
      name       : 'contract_sent_date',
      type       : 'datetime'
    },
    {
      name       : 'contract_received_date',
      type       : 'datetime'
    },
    {
      name       : 'order_form_sent_date_date',
      type       : 'datetime'
    },
    {
      name       : 'contract_won_date',
      type       : 'datetime'
    },
    {
      name       : 'contract_lost_date',
      type       : 'datetime'
    },
    {
      name       : 'is_destroyed',
      type       : 'boolean'
    }

  ],

  idProperty : 'contract_id',

  proxy      : {
    type       : 'direct',
    api        : {
      create     : Omni.service.Contract.create,
      read       : Omni.service.Contract.read,
      update     : Omni.service.Contract.update,
      destroy    : Omni.service.Contract.destroy
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

}); // Ext.define('Omni.model.Contract'
