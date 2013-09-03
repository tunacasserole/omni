Ext.define('Omni.model.Bts', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'bts_id',                      type: 'string'   },
      { name: 'region_id',                   type: 'string'   },
      { name: 'district_id',                 type: 'string'   },
      { name: 'location_id',                 type: 'string'   },
      { name: 'department_id',               type: 'string'   },
      { name: 'classification_id',           type: 'string'   },
      { name: 'subclass_id',                 type: 'string'   },
      { name: 'style_id',                    type: 'string'   },
      { name: 'sku_id',                      type: 'string'   },
      { name: 'color_id',                    type: 'string'   },
      { name: 'user_id',                     type: 'string'   },
      { name: 'location_display',            type: 'string'   },
      { name: 'department_display',          type: 'string'   },
      { name: 'classification_display',      type: 'string'   },
      { name: 'subclass_display',            type: 'string'   },      
      { name: 'state',                       type: 'string'   },
      { name: 'display',                     type: 'string'   },
      { name: 'description',                 type: 'string'   },
      { name: 'plan_year',                   type: 'string'   },
      { name: 'is_source_parker',            type: 'boolean', defaultValue: 1   },
      { name: 'is_source_buckhead',          type: 'boolean', defaultValue: 1   },
      { name: 'is_source_grits',             type: 'boolean', defaultValue: 1   },
      { name: 'is_drop_data',                type: 'boolean', defaultValue: 1   },
      { name: 'is_create_detail',            type: 'boolean', defaultValue: 1   },
      { name: 'is_on_hand',                  type: 'boolean', defaultValue: 1   },
      { name: 'is_wip',                      type: 'boolean', defaultValue: 1   },
      { name: 'is_allocated',                type: 'boolean', defaultValue: 1   },
      { name: 'is_in_transit',               type: 'boolean', defaultValue: 1   },
      { name: 'is_ytd',                      type: 'boolean', defaultValue: 1   },
      { name: 'is_py1',                      type: 'boolean', defaultValue: 1   },
      { name: 'is_py2',                      type: 'boolean', defaultValue: 1   },
      { name: 'is_projected',                type: 'boolean', defaultValue: 1   },
      { name: 'is_sum_style',                type: 'boolean', defaultValue: 1   },
      { name: 'is_sum_subclass',             type: 'boolean', defaultValue: 1   },
      { name: 'is_sum_class',                type: 'boolean', defaultValue: 1   },
      { name: 'is_sum_department',           type: 'boolean', defaultValue: 1   },
      { name: 'version',                     type: 'string'   },
      { name: 'audit_updated_at',            type: 'datetime' },
      { name: 'audit_created_at',            type: 'datetime' },
      { name: 'audit_created_by',            type: 'string'   },
      { name: 'audit_updated_by',            type: 'string'   },
      { name: 'is_destroyed',                type: 'boolean'}
    ],

  idProperty: 'bts_id',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.Bts.create,
      read:    Omni.service.Bts.read,
      update:  Omni.service.Bts.update,
      destroy: Omni.service.Bts.destroy
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