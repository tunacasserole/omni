Ext.define('Omni.model.PurchaseOption', {
    extend: 'Ext.data.Model',

    fields: [ {name: 'purchase_option_id',type: 'string'},
{name: 'display',type: 'string'},
{name: 'approver_1_id',type: 'string'},
{name: 'approver_1_display',type: 'string'},
{name: 'approver_2_id',type: 'string'},
{name: 'approver_2_display',type: 'string'},
{name: 'approver_3_id',type: 'string'},
{name: 'approver_3_display',type: 'string'},
{name: 'approver_1_limit',type: 'integer'},
{name: 'approver_2_limit',type: 'integer'},
{name: 'approver_3_limit',type: 'integer'},
{name: 'is_destroyed',type: 'boolean',useNull: true},
{name: 'display_as',type: 'string'} ],

    idProperty: 'purchase_option_id',

    proxy: {
        type: 'direct',
        api: {
            create: Omni.service.PurchaseOption.create,
            read: Omni.service.PurchaseOption.read,
            update: Omni.service.PurchaseOption.update,
            destroy: Omni.service.PurchaseOption.destroy
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

}); // Ext.define('Omni.model.PurchaseOption'
