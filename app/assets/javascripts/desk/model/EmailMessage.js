Ext.define('Desk.model.EmailMessage', {
    extend: 'Ext.data.Model',

    fields: [{
        name: 'email_message_id',
        type: 'string'
    }, {
        name: 'to',
        type: 'string'
    }, {
        name: 'cc',
        type: 'string'
    }, {
        name: 'subject',
        type: 'string'
    }, {
        name: 'body',
        type: 'string'
    }, {
        name: 'state',
        type: 'string'
    }, {
        name: 'sent_date',
        type: 'date'
    }, {
        name: 'display_as',
        type: 'string'
    }],

    idProperty: 'email_message_id',

    proxy: {
        type: 'direct',
        api: {
            create: Desk.service.EmailMessage.create,
            read: Desk.service.EmailMessage.read,
            update: Desk.service.EmailMessage.update,
            destroy: Desk.service.EmailMessage.destroy
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

}); // Ext.define('Desk.model.EmailMessage'
