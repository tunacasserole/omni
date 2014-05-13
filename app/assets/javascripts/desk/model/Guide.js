Ext.define('Desk.model.Guide', {
    extend: 'Ext.data.Model',

    fields: [{
        name: 'guide_id',
        type: 'string'
    }, {
        name: 'owner_id',
        type: 'string'
    }, {
        name: 'guideable_id',
        type: 'string'
    }, {
        name: 'guideable_type',
        type: 'string'
    }, {
        name: 'guide_nbr',
        type: 'string'
    }, {
        name: 'guide_name',
        type: 'string'
    }, {
        name: 'description',
        type: 'string'
    }, {
        name: 'guide_location',
        type: 'string'
    }, {
        name: 'gem_name',
        type: 'string'
    }, {
        name: 'owner_display',
        type: 'string'
    }, {
        name: 'display_as',
        type: 'string'
    }],

    idProperty: 'guide_id',

    proxy: {
        type: 'direct',
        api: {
            create: Desk.service.Guide.create,
            read: Desk.service.Guide.read,
            update: Desk.service.Guide.update,
            destroy: Desk.service.Guide.destroy
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

}); // Ext.define('Desk.model.Guide'
