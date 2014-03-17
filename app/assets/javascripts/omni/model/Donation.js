Ext.define('Omni.model.Donation', {
  extend     : 'Ext.data.Model',

  fields     : [
    {
      name       : 'display',
      type       : 'string'
    },
    {
      name       : 'donation_id',
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
      name       : 'donation_date',
      type       : 'date'
    },
    {
      name       : 'donation_amount',
      type       : 'decimal'
    },
    {
      name       : 'is_destroyed',
      type       : 'boolean'
    }

  ],

  idProperty : 'donation_id',

  proxy      : {
    type       : 'direct',
    api        : {
      create     : Omni.service.Donation.create,
      read       : Omni.service.Donation.read,
      update     : Omni.service.Donation.update,
      destroy    : Omni.service.Donation.destroy
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

}); // Ext.define('Omni.model.Donation'
