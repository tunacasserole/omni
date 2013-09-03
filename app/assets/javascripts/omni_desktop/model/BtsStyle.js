Ext.define('Omni.model.BtsStyle', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'bts_style_id',                type: 'string'   },
      { name: 'bts_id',                      type: 'string'   },
      { name: 'style_id',                    type: 'string'   },
      { name: 'style_display',               type: 'string'   },
      { name: 'location_id',                 type: 'string'   },
      { name: 'data_source',                 type: 'string'   },
      { name: 'on_hand',                     type: 'integer'  },
      { name: 'wip',                         type: 'integer'  },
      { name: 'allocated',                   type: 'integer'  },
      { name: 'transit',                     type: 'integer'  },
      { name: 'ytd',                         type: 'integer'  },
      { name: 'py1',                         type: 'integer'  },
      { name: 'py2',                         type: 'integer'  },
      { name: 'projection',                  type: 'integer'  },
      { name: 'projection_total',            type: 'integer'  },
      { name: 'projection_dev',              type: 'integer'  },
      { name: 'projection_dev_pct',          type: 'integer'  },
      { name: 'projection_smooth',           type: 'integer'  },
      { name: 'converted_need',              type: 'integer'  },
      { name: 'generic_need',                type: 'integer'  },
      { name: 'need',                        type: 'integer'  },
      { name: 'useable_oh',                  type: 'integer'  },
      { name: 'unuseable_oh',                type: 'integer'  },
      { name: 'total_oh',                    type: 'integer'  },
      { name: 'complete_oo',                 type: 'integer'  },
      { name: 'complete_coverage',           type: 'integer'  },
      { name: 'version',                     type: 'string'   },
      { name: 'audit_updated_at',            type: 'datetime' },
      { name: 'audit_created_at',            type: 'datetime' },
      { name: 'audit_created_by',            type: 'string'   },
      { name: 'audit_updated_by',            type: 'string'   },
      { name: 'is_destroyed',                type: 'boolean'  }
    ],

  idProperty: 'bts_style_id',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.BtsStyle.create,
      read:    Omni.service.BtsStyle.read,
      update:  Omni.service.BtsStyle.update,
      destroy: Omni.service.BtsStyle.destroy
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