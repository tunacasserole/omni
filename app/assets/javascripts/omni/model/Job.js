Ext.define('Omni.model.Job', {
  extend     : 'Ext.data.Model',

  fields     : [
    {
      name       : 'display_as',
      type       : 'string'
    },
    {
      name       : 'job_id',
      type       : 'string'
    },
    {
      name       : 'display',
      type       : 'string'
    },
    {
      name       : 'jobable_id',
      type       : 'string'
    },
    {
      name       : 'jobable_type',
      type       : 'string'
    },
    {
      name       : 'job_nbr',
      type       : 'string'
    },
    {
      name       : 'sku_id',
      type       : 'string'
    },
    {
      name       : 'production_location_id',
      type       : 'string'
    },
    {
      name       : 'supplier_id',
      type       : 'string'
    },
    {
      name       : 'job_description',
      type       : 'string'
    },
    {
      name       : 'job_type',
      type       : 'string'
    },
    {
      name       : 'release_date',
      type       : 'datetime'
    },
    {
      name       : 'start_date',
      type       : 'datetime'
    },
    {
      name       : 'complete_date',
      type       : 'datetime'
    },
    {
      name       : 'target_complete_date',
      type       : 'datetime'
    },
    {
      name       : 'request_units',
      type       : 'integer'
    },
    {
      name       : 'complete_units',
      type       : 'integer'
    },
    {
      name       : 'is_cancelled',
      type       : 'boolean'
    },
    {
      name       : 'state',
      type       : 'string'
    },
    {
      name       : 'weight',
      type       : 'decimal'
    },
    {
      name       : 'height',
      type       : 'decimal'
    },
    {
      name       : 'bust',
      type       : 'decimal'
    },
    {
      name       : 'waist',
      type       : 'decimal'
    },
    {
      name       : 'high_hip',
      type       : 'decimal'
    },
    {
      name       : 'hip',
      type       : 'decimal'
    },
    {
      name       : 'across_shoulder_front',
      type       : 'decimal'
    },
    {
      name       : 'across_shoulder_back',
      type       : 'decimal'
    },
    {
      name       : 'shoulder_length',
      type       : 'decimal'
    },
    {
      name       : 'back_length',
      type       : 'decimal'
    },
    {
      name       : 'hps_to_waist',
      type       : 'decimal'
    },
    {
      name       : 'neck_circumference',
      type       : 'decimal'
    },
    {
      name       : 'arm_circumference',
      type       : 'decimal'
    },
    {
      name       : 'wrist_circumference',
      type       : 'decimal'
    },
    {
      name       : 'inseam',
      type       : 'decimal'
    },
    {
      name       : 'outseam',
      type       : 'decimal'
    },
    {
      name       : 'thigh',
      type       : 'decimal'
    },
    {
      name       : 'arm_length',
      type       : 'decimal'
    },
    {
      name       : 'total_rise',
      type       : 'decimal'
    },
    {
      name       : 'head_circumference',
      type       : 'decimal'
    },
    {
      name       : 'is_destroyed',
      type       : 'boolean'
    }

  ],

  idProperty : 'job_id',

  proxy      : {
    type       : 'direct',
    api        : {
      create     : Omni.service.Job.create,
      read       : Omni.service.Job.read,
      update     : Omni.service.Job.update,
      destroy    : Omni.service.Job.destroy
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

}); // Ext.define('Omni.model.Job'