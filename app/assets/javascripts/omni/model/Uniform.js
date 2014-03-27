Ext.define('Omni.model.Uniform', {
  extend: 'Ext.data.Model',

  fields: [{
      name: 'display',
      type: 'string'
    }, {
      name: 'uniform_id',
      type: 'string'
    }, {
      name: 'account_id',
      type: 'string'
    }, {
      name: 'account_display',
      type: 'string'
    }, {
      name: 'contract_id',
      type: 'string'
    }, {
      name: 'contract_display',
      type: 'string'
    }, {
      name: 'display',
      type: 'string'
    }, {
      name: 'uniform_nbr',
      type: 'string'
    }, {
      name: 'uniform_name',
      type: 'string'
    }, {
      name: 'description',
      type: 'string'
    }, {
      name: 'state',
      type: 'string'
    }, {
      name: 'school_year',
      type: 'string'
    }, {
      name: 'discount_percent',
      type: 'decimal'
    }, {
      name: 'teacher_discount_percent',
      type: 'decimal'
    }, {
      name: 'administrator_discount_percent',
      type: 'decimal'
    }, {
      name: 'is_discount_in_store',
      type: 'boolean'
    }, {
      name: 'is_discount_on_web',
      type: 'boolean'
    }, {
      name: 'is_free_shipping',
      type: 'boolean'
    }, {
      name: 'is_destroyed',
      type: 'boolean'
    }

  ],

  idProperty: 'uniform_id',

  proxy: {
    type: 'direct',
    api: {
      create: Omni.service.Uniform.create,
      read: Omni.service.Uniform.read,
      update: Omni.service.Uniform.update,
      destroy: Omni.service.Uniform.destroy
    },
    reader: {
      type: 'json',
      root: 'records',
      totalProperty: 'total',
      successProperty: 'success'
    }
  },


  validations: [

  ]

}); // Ext.define('Omni.model.Uniform'
