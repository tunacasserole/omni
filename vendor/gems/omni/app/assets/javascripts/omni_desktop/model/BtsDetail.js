Ext.define('Omni.model.BtsDetail', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'bts_detail_id',               type: 'string'   },
      { name: 'bts_id',                      type: 'string'   },
      { name: 'sku_id',                      type: 'string'   },
      { name: 'sku_display',                 type: 'string'   },      
      { name: 'style_id',                      type: 'string'   },
      { name: 'style_display',                 type: 'string'   },      
      { name: 'location_id',                 type: 'string'   },
      { name: 'data_source',                 type: 'string'   },
      { name: 'mark_stock',                  type: 'string'   },
      { name: 'mark_size',                   type: 'string'   },
      { name: 'on_hand',                     type: 'integer'  },            
      { name: 'wip',                         type: 'integer'  },
      { name: 'allocated',                   type: 'integer'  },
      { name: 'in_transit',                  type: 'integer'  },
      { name: 'ytd',                         type: 'integer'  },
      { name: 'py1',                         type: 'integer'  },
      { name: 'py2',                         type: 'integer'  },
      { name: 'projection',                  type: 'integer'  },
      { name: 'projection_total',            type: 'integer'  },
      { name: 'projection_dev',              type: 'integer'  },
      { name: 'projection_dev_pct',          type: 'integer'  },
      { name: 'projection_smoothed',         type: 'integer'  },
      { name: 'converted_need',              type: 'integer'  },
      { name: 'generic_need',                type: 'integer'  },
      { name: 'need',                        type: 'integer'  },
      { name: 'useable_on_hand',             type: 'integer'  },
      { name: 'unuseable_on_hand',           type: 'integer'  },
      { name: 'total_on_hand',               type: 'integer'  },
      { name: 'complete_oo',                 type: 'integer'  },
      { name: 'complete_coverage',           type: 'integer'  },
      { name: 'version',                     type: 'string'   },
      { name: 'audit_updated_at',            type: 'datetime' },
      { name: 'audit_created_at',            type: 'datetime' },
      { name: 'audit_created_by',            type: 'string'   },
      { name: 'audit_updated_by',            type: 'string'   },
      { name: 'is_destroyed',                type: 'boolean'  }
    ],

  idProperty: 'bts_detail_id',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.BtsDetail.create,
      read:    Omni.service.BtsDetail.read,
      update:  Omni.service.BtsDetail.update,
      destroy: Omni.service.BtsDetail.destroy
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