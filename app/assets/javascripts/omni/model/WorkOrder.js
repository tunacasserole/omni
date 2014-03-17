Ext.define('Omni.model.Job', {
  extend: 'Ext.data.Model',

  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'production_location_id' },
    { type: 'presence', field: 'job_type' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'job_id',                        type: 'string'      },
    { name: 'display',                              type: 'string'      },
    { name: 'state',                                type: 'string'      },
    { name: 'job_nbr',                       type: 'string'      },
    { name: 'jobable_id',                          type: 'string'      },
    { name: 'jobable_type',                        type: 'string'      },
    { name: 'production_location_display',          type: 'string'      },
    { name: 'production_location_id',               type: 'string'      },
    { name: 'supplier_display',                     type: 'string'      },
    { name: 'supplier_id',                          type: 'string'      },
    { name: 'job_description',               type: 'string'      },
    { name: 'job_type',                      type: 'string'      },
    { name: 'sku_display',                          type: 'string'      },
    { name: 'sku_id',                               type: 'string'      },
    { name: 'request_units',                        type: 'float',      defaultValue: 0                         },
    { name: 'complete_units',                       type: 'float',      defaultValue: 0                         },
    { name: 'release_date',                         type: 'date'        },
    { name: 'start_date',                           type: 'date'        },
    { name: 'complete_date',                        type: 'date'        },
    { name: 'target_complete_date',                 type: 'date'        },
    { name: 'weight',                               type: 'float',      defaultValue: 0                         },
    { name: 'height',                               type: 'float',      defaultValue: 0                         },
    { name: 'bust',                                 type: 'float',      defaultValue: 0                         },
    { name: 'waist',                                type: 'float',      defaultValue: 0                         },
    { name: 'high_hip',                             type: 'float',      defaultValue: 0                         },
    { name: 'hip',                                  type: 'float',      defaultValue: 0                         },
    { name: 'across_shoulder_front',                type: 'float',      defaultValue: 0                         },
    { name: 'across_shoulder_back',                 type: 'float',      defaultValue: 0                         },
    { name: 'shoulder_length',                      type: 'float',      defaultValue: 0                         },
    { name: 'back_length',                          type: 'float',      defaultValue: 0                         },
    { name: 'hps_to_waist',                         type: 'float',      defaultValue: 0                         },
    { name: 'neck_circumference',                   type: 'float',      defaultValue: 0                         },
    { name: 'arm_circumference',                    type: 'float',      defaultValue: 0                         },
    { name: 'wrist_circumference',                  type: 'float',      defaultValue: 0                         },
    { name: 'inseam',                               type: 'float',      defaultValue: 0                         },
    { name: 'outseam',                              type: 'float',      defaultValue: 0                         },
    { name: 'thigh',                                type: 'float',      defaultValue: 0                         },
    { name: 'arm_length',                           type: 'float',      defaultValue: 0                         },
    { name: 'total_rise',                           type: 'float',      defaultValue: 0                         },
    { name: 'head_circumference',                   type: 'float',      defaultValue: 0                         },
    { name: 'is_destroyed',                         type: 'boolean',    defaultValue: false                     }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'job_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.Job.create,
      read:     Omni.service.Job.read,
      update:   Omni.service.Job.update,
      destroy:  Omni.service.Job.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

