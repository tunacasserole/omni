Ext.define('Omni.model.Piece', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'piece_id',                    type: 'string'   },
      { name: 'project_id',                  type: 'string'   },
      { name: 'piece_nbr',                   type: 'string'   },
      { name: 'piece_type',                  type: 'string'   },
      { name: 'state',                       type: 'string'   },
      { name: 'display',                     type: 'string'   },
      { name: 'description',                 type: 'string'   },
      { name: 'importance',                  type: 'string'   },
      { name: 'points',                      type: 'integer'  },
      { name: 'assignee_id',                 type: 'string'   },
      { name: 'creator_id',                  type: 'string'   },
      { name: 'target_release',              type: 'date'     },
      { name: 'actual_release',              type: 'date'     },
      { name: 'is_destroyed',                type: 'boolean'  }
    ],

  idProperty: 'piece_id',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.Piece.create,
      read:    Omni.service.Piece.read,
      update:  Omni.service.Piece.update,
      destroy: Omni.service.Piece.destroy
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