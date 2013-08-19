Ext.define('Omni.model.BtsDetail', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'bts_detail_id',               type: 'string'   },
      { name: 'bts_id',                      type: 'string'   },
      { name: 'sku_display',                 type: 'string' },
      { name: 'sku_id',                      type: 'string' },
      { name: 'location_display',            type: 'string' },
      { name: 'location_id',                 type: 'string' },
      { name: 'mark_stock',                  type: 'string' },       
      { name: 'mark_size',                   type: 'string' },      
      { name: 'data_source',                 type: 'string'   },
      { name: 'on_hand',                     type: 'integer'  },
      { name: 'work_ip',                     type: 'integer'  },
      { name: 'purchase_ip',                 type: 'integer'  },
      { name: 'wip',                         type: 'integer'  },
      { name: 'allocated',                   type: 'integer'  },
      { name: 'in_transit',                  type: 'integer'  },
      { name: 'ytd',                         type: 'integer'  },
      { name: 'py1',                         type: 'integer'  },
      { name: 'py2',                         type: 'integer'  },
      { name: 'projected',                   type: 'integer'  },
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