Ext.define('Omni.model.Import', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'import_id',                   type: 'string'   },
      { name: 'department_id',                   type: 'string'   },      
      { name: 'state',                       type: 'string'   },
      { name: 'display',                     type: 'string'   },
      { name: 'data_source',                 type: 'string'   },
      { name: 'job_type',                    type: 'string'   },
      { name: 'table_name',                  type: 'string'   },
      { name: 'model_name',                  type: 'string'   },
      { name: 'file_name',                   type: 'string'   },
      { name: 'file_path',                   type: 'string'   },
      { name: 'start_date',                  type: 'date'     },
      { name: 'end_date',                    type: 'date'     },
      { name: 'run_mode',                    type: 'string'   },
      { name: 'argument_hash',               type: 'text'     },
      { name: 'is_drop_data',                type: 'boolean'  },
      { name: 'is_destroyed',                type: 'boolean'  }
    ],

  idProperty: 'import_id',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.Import.create,
      read:    Omni.service.Import.read,
      update:  Omni.service.Import.update,
      destroy: Omni.service.Import.destroy
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