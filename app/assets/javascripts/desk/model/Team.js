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
        name: 'backlog_count',
        type: 'integer'
    }, {
        name: 'draft_count',
        type: 'integer'
    }, {
        name: 'needs_approval_count',
        type: 'integer'
    }, {
        name: 'approved_to_activate_count',
        type: 'integer'
    }, {
        name: 'active_count',
        type: 'integer'
    }, {
        name: 'ready_to_close_count',
        type: 'integer'
    }, {
        name: 'closed_count',
        type: 'integer'
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
