Ext.define('Omni.model.Contact', {
  extend     : 'Ext.data.Model',

  fields     : [
    {
      name       : 'display',
      type       : 'string'
    },
    {
      name       : 'contact_id',
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
      name       : 'name_prefix',
      type       : 'string'
    },
    {
      name       : 'name_suffix',
      type       : 'string'
    },
    {
      name       : 'first_name',
      type       : 'string'
    },
    {
      name       : 'last_name',
      type       : 'string'
    },
    {
      name       : 'job_title',
      type       : 'string'
    },
    {
      name       : 'line_1',
      type       : 'string'
    },
    {
      name       : 'line_2',
      type       : 'string'
    },
    {
      name       : 'city',
      type       : 'string'
    },
    {
      name       : 'state_code',
      type       : 'string'
    },
    {
      name       : 'zip',
      type       : 'string'
    },
    {
      name       : 'country',
      type       : 'string'
    },
    {
      name       : 'phone',
      type       : 'string'
    },
    {
      name       : 'other_phone',
      type       : 'string'
    },
    {
      name       : 'fax',
      type       : 'string'
    },
    {
      name       : 'email_address',
      type       : 'string'
    },
    {
      name       : 'is_do_not_email',
      type       : 'boolean'
    },
    {
      name       : 'is_do_not_mail',
      type       : 'boolean'
    },
    {
      name       : 'is_do_not_call',
      type       : 'boolean'
    },
    {
      name       : 'is_destroyed',
      type       : 'boolean'
    }

  ],

  idProperty : 'contact_id',

  proxy      : {
    type       : 'direct',
    api        : {
      create     : Omni.service.Contact.create,
      read       : Omni.service.Contact.read,
      update     : Omni.service.Contact.update,
      destroy    : Omni.service.Contact.destroy
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

}); // Ext.define('Omni.model.Contact'
