Ext.define('Omni.view.terminals.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-terminals-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      location_idLabel:                           Omni.i18n.model.Terminal.location_id,
      terminal_nbrLabel:                          Omni.i18n.model.Terminal.terminal_nbr,
      mac_addressLabel:                           Omni.i18n.model.Terminal.mac_address,
      local_server_ipLabel:                       Omni.i18n.model.Terminal.local_server_ip,
      hq_server_urlLabel:                         Omni.i18n.model.Terminal.hq_server_url,
      override_sale_dateLabel:                    Omni.i18n.model.Terminal.override_sale_date,
      receipt_printer_urlLabel:                   Omni.i18n.model.Terminal.receipt_printer_url,
      receipt_printer_ipLabel:                    Omni.i18n.model.Terminal.receipt_printer_ip,
      receipt_format_idLabel:                     Omni.i18n.model.Terminal.receipt_format_id,
      tag_printer_urlLabel:                       Omni.i18n.model.Terminal.tag_printer_url,
      tag_printer_ipLabel:                        Omni.i18n.model.Terminal.tag_printer_ip,
      pin_pad_portLabel:                          Omni.i18n.model.Terminal.pin_pad_port,
      is_net_display_enabledLabel:                Omni.i18n.model.Terminal.is_net_display_enabled,
      is_login_per_transactionLabel:              Omni.i18n.model.Terminal.is_login_per_transaction
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
            { name: 'location_id',                    fieldLabel: this.location_idLabel,                allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Location',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'location_id', itemTpl:'{display}' },
            { name: 'terminal_nbr',                   fieldLabel: this.terminal_nbrLabel,               allowBlank: false,  disabled: false,    xtype: 'textfield'        },
            { name: 'mac_address',                    fieldLabel: this.mac_addressLabel,                allowBlank: false,  disabled: false,    xtype: 'textfield'        },
            { name: 'local_server_ip',                fieldLabel: this.local_server_ipLabel,            allowBlank: false,  disabled: false,    xtype: 'textfield'        },
            { name: 'hq_server_url',                  fieldLabel: this.hq_server_urlLabel,              allowBlank: false,  disabled: false,    xtype: 'textfield'        },
            { name: 'override_sale_date',             fieldLabel: this.override_sale_dateLabel,         allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'receipt_printer_url',            fieldLabel: this.receipt_printer_urlLabel,        allowBlank: false,  disabled: false,    xtype: 'textfield'        },
            { name: 'receipt_printer_ip',             fieldLabel: this.receipt_printer_ipLabel,         allowBlank: false,  disabled: false,    xtype: 'textfield'        },
            { name: 'receipt_format_id',              fieldLabel: this.receipt_format_idLabel,          allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.ReceiptFormat',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'receipt_format_id', itemTpl:'{display}' },
            { name: 'tag_printer_url',                fieldLabel: this.tag_printer_urlLabel,            allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'tag_printer_ip',                 fieldLabel: this.tag_printer_ipLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'pin_pad_port',                   fieldLabel: this.pin_pad_portLabel,               allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'is_net_display_enabled',         fieldLabel: this.is_net_display_enabledLabel,     allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_login_per_transaction',       fieldLabel: this.is_login_per_transactionLabel,   allowBlank: true,   disabled: false,    xtype: 'checkbox'         }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
