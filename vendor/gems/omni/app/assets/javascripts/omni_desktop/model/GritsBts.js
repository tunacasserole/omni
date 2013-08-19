Ext.define('Omni.model.GritsBts', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'tg_sku_id',                   type: 'integer'  },
      { name: 'qoh_60',                      type: 'integer'  },
      { name: 'qoh_61',                      type: 'integer'  },
      { name: 'qoh_62',                      type: 'integer'  },
      { name: 'qoh_63',                      type: 'integer'  },
      { name: 'qoh_64',                      type: 'integer'  },
      { name: 'qoh_65',                      type: 'integer'  },
      { name: 'qoh_66',                      type: 'integer'  },
      { name: 'qoo_60',                      type: 'integer'  },
      { name: 'qoo_61',                      type: 'integer'  },
      { name: 'qoo_62',                      type: 'integer'  },
      { name: 'qoo_63',                      type: 'integer'  },
      { name: 'qoo_64',                      type: 'integer'  },
      { name: 'qoo_65',                      type: 'integer'  },
      { name: 'qoo_66',                      type: 'integer'  },
      { name: 'sold_60',                     type: 'integer'  },
      { name: 'sold_61',                     type: 'integer'  },
      { name: 'sold_62',                     type: 'integer'  },
      { name: 'sold_63',                     type: 'integer'  },
      { name: 'sold_64',                     type: 'integer'  },
      { name: 'sold_65',                     type: 'integer'  },
      { name: 'sold_66',                     type: 'integer'  },
      { name: 'projected_60',                type: 'integer'  },
      { name: 'projected_61',                type: 'integer'  },
      { name: 'projected_62',                type: 'integer'  },
      { name: 'projected_63',                type: 'integer'  },
      { name: 'projected_64',                type: 'integer'  },
      { name: 'projected_65',                type: 'integer'  },
      { name: 'projected_66',                type: 'integer'  }
    ],

  idProperty: 'tg_sku_id',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.GritsBts.create,
      read:    Omni.service.GritsBts.read,
      update:  Omni.service.GritsBts.update,
      destroy: Omni.service.GritsBts.destroy
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