Ext.define('Buildit.model.Event', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'event_id',                    type: 'string'   },
      { name: 'eventable_id',                type: 'string'   },
      { name: 'eventable_type',              type: 'string'   },
      { name: 'event_type',                  type: 'string'   },
      { name: 'user_id',                     type: 'string'   },
      { name: 'occurred_at',                 type: 'datetime' },
      { name: 'message',                     type: 'text'     },
      { name: 'revision_number',             type: 'integer'  },
      { name: 'is_destroyed',                type: 'boolean'  },
      { name: 'title',                       type: 'string'   }
    ],

  idProperty: 'event_id',

  proxy: {
    type: 'direct',
    api: {
      create:  Buildit.service.Event.create,
      read:    Buildit.service.Event.read,
      update:  Buildit.service.Event.update,
      destroy: Buildit.service.Event.destroy
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