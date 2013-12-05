Ext.define('Omni.view.transfers.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-transfers-Form',



  initComponent:function () {

    var me = this;


    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      stateLabel:                                 Omni.i18n.model.Transfer.state,
      transfer_nbrLabel:                          Omni.i18n.model.Transfer.transfer_nbr,
      requesting_location_idLabel:                Omni.i18n.model.Transfer.requesting_location_id,
      fulfillment_location_idLabel:               Omni.i18n.model.Transfer.fulfillment_location_id,
      descriptionLabel:                           Omni.i18n.model.Transfer.description,
      sku_idLabel:                                Omni.i18n.model.Transfer.sku_id,
      transfer_reason_idLabel:                    Omni.i18n.model.Transfer.transfer_reason_id,
      request_unitsLabel:                         Omni.i18n.model.Transfer.request_units,
      request_dateLabel:                          Omni.i18n.model.Transfer.request_date,
      request_user_idLabel:                       Omni.i18n.model.Transfer.request_user_id,
      ship_dateLabel:                             Omni.i18n.model.Transfer.ship_date,
      cancel_dateLabel:                           Omni.i18n.model.Transfer.cancel_date,
      cancel_user_idLabel:                        Omni.i18n.model.Transfer.cancel_user_id
    });
    // LABELS (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [
        {
          xtype: 'fieldset',
          title: 'General',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'state',                          fieldLabel: this.stateLabel,                      allowBlank: true,   disabled: true,    xtype: 'textfield'        },
            { name: 'transfer_nbr',                   fieldLabel: this.transfer_nbrLabel,               allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'requesting_location_id',         fieldLabel: this.requesting_location_idLabel,     allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Location',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'location_id', itemTpl:'{display}' },
            { name: 'fulfillment_location_id',        fieldLabel: this.fulfillment_location_idLabel,    allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Location',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'location_id', itemTpl:'{display}' },
            { name: 'description',                    fieldLabel: this.descriptionLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'sku_id',                         fieldLabel: this.sku_idLabel,                     allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Sku',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'sku_id', itemTpl:'{display}' },
            { name: 'transfer_reason_id',             fieldLabel: this.transfer_reason_idLabel,         allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.TransferReason',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'transfer_reason_id', itemTpl:'{display}' },
            { name: 'request_units',                  fieldLabel: this.request_unitsLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Tracking',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'request_date',                   fieldLabel: this.request_dateLabel,               allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'request_user_id',                fieldLabel: this.request_user_idLabel,            allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Buildit.store.User',{pageSize: 10}), displayField: 'full_name', queryField: 'full_name', valueField: 'user_id', itemTpl:'{last_name}, {first_name}' },
            { name: 'ship_date',                      fieldLabel: this.ship_dateLabel,                  allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'cancel_date',                    fieldLabel: this.cancel_dateLabel,                allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'cancel_user_id',                 fieldLabel: this.cancel_user_idLabel,             allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Buildit.store.User',{pageSize: 10}), displayField: 'full_name', queryField: 'full_name', valueField: 'user_id', itemTpl:'{last_name}, {first_name}' }
          ]
        }
      ]
    });
    // FIELDSETS (End)

    // TITLES (Start) =======================================================================
    Ext.applyIf(this, {
      title:         'Transfer',
      subtitle:      'A request to send merchandise from one location to another',
      newTitle:      'Transfer',
      newSubtitle:   undefined
    });
    // TITLES (End)



    this.callParent();
  }

});
