Ext.define('Desk.model.Team', {
    extend: 'Ext.data.Model',

    fields: [{
        name: 'team_id',
        type: 'string'
    }, {
        name: 'teamable_id',
        type: 'string'
    }, {
        name: 'teamable_type',
        type: 'string'
    }, {
        name: 'user_id',
        type: 'string'
    }, {
        name: 'user_display',
        type: 'string'
    }, {
        name: 'display_as',
        type: 'string'
    }],

    idProperty: 'team_id',

    proxy: {
        type: 'direct',
        api: {
            create: Desk.service.Team.create,
            read: Desk.service.Team.read,
            update: Desk.service.Team.update,
            destroy: Desk.service.Team.destroy
        },
        reader: {
            type: 'json',
            root: 'records',
            totalProperty: 'total',
            successProperty: 'success'
        }
    },


    validations: [

    ]

}); // Ext.define('Desk.model.Team'
