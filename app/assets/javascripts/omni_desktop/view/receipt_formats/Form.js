Ext.define('Omni.view.receipt_formats.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-receipt_formats-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      displayLabel:                               Omni.i18n.model.ReceiptFormat.display,
      descriptionLabel:                           Omni.i18n.model.ReceiptFormat.description,
      icon_urlLabel:                              Omni.i18n.model.ReceiptFormat.icon_url,
      icon_widthLabel:                            Omni.i18n.model.ReceiptFormat.icon_width,
      paper_widthLabel:                           Omni.i18n.model.ReceiptFormat.paper_width,
      top_nameLabel:                              Omni.i18n.model.ReceiptFormat.top_name,
      feedback_messageLabel:                      Omni.i18n.model.ReceiptFormat.feedback_message,
      return_policyLabel:                         Omni.i18n.model.ReceiptFormat.return_policy,
      website_messageLabel:                       Omni.i18n.model.ReceiptFormat.website_message,
      promotional_messageLabel:                   Omni.i18n.model.ReceiptFormat.promotional_message,
      message_separatorLabel:                     Omni.i18n.model.ReceiptFormat.message_separator,
      is_date_in_headerLabel:                     Omni.i18n.model.ReceiptFormat.is_date_in_header,
      is_time_in_headerLabel:                     Omni.i18n.model.ReceiptFormat.is_time_in_header,
      is_location_name_in_headerLabel:            Omni.i18n.model.ReceiptFormat.is_location_name_in_header,
      is_location_number_in_headerLabel:          Omni.i18n.model.ReceiptFormat.is_location_number_in_header,
      is_order_number_in_headerLabel:             Omni.i18n.model.ReceiptFormat.is_order_number_in_header,
      is_cashier_name_in_headerLabel:             Omni.i18n.model.ReceiptFormat.is_cashier_name_in_header,
      is_cashier_number_in_headerLabel:           Omni.i18n.model.ReceiptFormat.is_cashier_number_in_header,
      is_salesperson_name_in_headerLabel:         Omni.i18n.model.ReceiptFormat.is_salesperson_name_in_header,
      is_salesperson_number_in_headerLabel:       Omni.i18n.model.ReceiptFormat.is_salesperson_number_in_header,
      is_customer_name_in_headerLabel:            Omni.i18n.model.ReceiptFormat.is_customer_name_in_header,
      is_date_in_footerLabel:                     Omni.i18n.model.ReceiptFormat.is_date_in_footer,
      is_time_in_footerLabel:                     Omni.i18n.model.ReceiptFormat.is_time_in_footer,
      is_location_name_in_footerLabel:            Omni.i18n.model.ReceiptFormat.is_location_name_in_footer,
      is_location_number_in_footerLabel:          Omni.i18n.model.ReceiptFormat.is_location_number_in_footer,
      is_order_number_in_footerLabel:             Omni.i18n.model.ReceiptFormat.is_order_number_in_footer,
      is_cashier_name_in_footerLabel:             Omni.i18n.model.ReceiptFormat.is_cashier_name_in_footer,
      is_cashier_number_in_footerLabel:           Omni.i18n.model.ReceiptFormat.is_cashier_number_in_footer,
      is_salesperson_name_in_footerLabel:         Omni.i18n.model.ReceiptFormat.is_salesperson_name_in_footer,
      is_salesperson_number_in_footerLabel:       Omni.i18n.model.ReceiptFormat.is_salesperson_number_in_footer,
      is_customer_name_in_footerLabel:            Omni.i18n.model.ReceiptFormat.is_customer_name_in_footer
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
            { name: 'display',                        fieldLabel: this.displayLabel,                    allowBlank: false,  disabled: true,     xtype: 'textfield'        },
            { name: 'description',                    fieldLabel: this.descriptionLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'icon_url',                       fieldLabel: this.icon_urlLabel,                   allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'icon_width',                     fieldLabel: this.icon_widthLabel,                 allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'paper_width',                    fieldLabel: this.paper_widthLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'top_name',                       fieldLabel: this.top_nameLabel,                   allowBlank: true,   disabled: true,     xtype: 'textfield'        },
            { name: 'feedback_message',               fieldLabel: this.feedback_messageLabel,           allowBlank: true,   disabled: false,    xtype: 'textarea'         },
            { name: 'return_policy',                  fieldLabel: this.return_policyLabel,              allowBlank: true,   disabled: false,    xtype: 'textarea'         },
            { name: 'website_message',                fieldLabel: this.website_messageLabel,            allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'promotional_message',            fieldLabel: this.promotional_messageLabel,        allowBlank: true,   disabled: false,    xtype: 'textarea'         },
            { name: 'message_separator',              fieldLabel: this.message_separatorLabel,          allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Processing Flags',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'is_date_in_header',              fieldLabel: this.is_date_in_headerLabel,          allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_time_in_header',              fieldLabel: this.is_time_in_headerLabel,          allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_location_name_in_header',     fieldLabel: this.is_location_name_in_headerLabel, allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_location_number_in_header',   fieldLabel: this.is_location_number_in_headerLabel,allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_order_number_in_header',      fieldLabel: this.is_order_number_in_headerLabel,  allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_cashier_name_in_header',      fieldLabel: this.is_cashier_name_in_headerLabel,  allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_cashier_number_in_header',    fieldLabel: this.is_cashier_number_in_headerLabel,allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_salesperson_name_in_header',  fieldLabel: this.is_salesperson_name_in_headerLabel,allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_salesperson_number_in_header',fieldLabel: this.is_salesperson_number_in_headerLabel,allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_customer_name_in_header',     fieldLabel: this.is_customer_name_in_headerLabel, allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_date_in_footer',              fieldLabel: this.is_date_in_footerLabel,          allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_time_in_footer',              fieldLabel: this.is_time_in_footerLabel,          allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_location_name_in_footer',     fieldLabel: this.is_location_name_in_footerLabel, allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_location_number_in_footer',   fieldLabel: this.is_location_number_in_footerLabel,allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_order_number_in_footer',      fieldLabel: this.is_order_number_in_footerLabel,  allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_cashier_name_in_footer',      fieldLabel: this.is_cashier_name_in_footerLabel,  allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_cashier_number_in_footer',    fieldLabel: this.is_cashier_number_in_footerLabel,allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_salesperson_name_in_footer',  fieldLabel: this.is_salesperson_name_in_footerLabel,allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_salesperson_number_in_footer',fieldLabel: this.is_salesperson_number_in_footerLabel,allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_customer_name_in_footer',     fieldLabel: this.is_customer_name_in_footerLabel, allowBlank: true,   disabled: false,    xtype: 'checkbox'         }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
