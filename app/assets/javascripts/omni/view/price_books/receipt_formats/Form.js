Ext.define('Omni.view.receipt_formats.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-receipt_formats-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'receipt_format_id',
      value:      this.record.get('receipt_format_id')
    };
    // FILTER (End)


    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      receipt_format_idLabel:                 Omni.i18n.model.ReceiptFormat.receipt_format_id,
      displayLabel:                           Omni.i18n.model.ReceiptFormat.display,
      descriptionLabel:                       Omni.i18n.model.ReceiptFormat.description,
      icon_urlLabel:                          Omni.i18n.model.ReceiptFormat.icon_url,
      icon_widthLabel:                        Omni.i18n.model.ReceiptFormat.icon_width,
      paper_widthLabel:                       Omni.i18n.model.ReceiptFormat.paper_width,
      top_nameLabel:                          Omni.i18n.model.ReceiptFormat.top_name,
      feedback_messageLabel:                  Omni.i18n.model.ReceiptFormat.feedback_message,
      return_policyLabel:                     Omni.i18n.model.ReceiptFormat.return_policy,
      webaccount_messageLabel:                   Omni.i18n.model.ReceiptFormat.webaccount_message,
      promotional_messageLabel:               Omni.i18n.model.ReceiptFormat.promotional_message,
      message_separatorLabel:                 Omni.i18n.model.ReceiptFormat.message_separator,
      is_date_in_headerLabel:                 Omni.i18n.model.ReceiptFormat.is_date_in_header,
      is_time_in_headerLabel:                 Omni.i18n.model.ReceiptFormat.is_time_in_header,
      is_location_name_in_headerLabel:        Omni.i18n.model.ReceiptFormat.is_location_name_in_header,
      is_location_number_in_headerLabel:      Omni.i18n.model.ReceiptFormat.is_location_number_in_header,
      is_order_number_in_headerLabel:         Omni.i18n.model.ReceiptFormat.is_order_number_in_header,
      is_cashier_name_in_headerLabel:         Omni.i18n.model.ReceiptFormat.is_cashier_name_in_header,
      is_cashier_number_in_headerLabel:       Omni.i18n.model.ReceiptFormat.is_cashier_number_in_header,
      is_salesperson_name_in_headerLabel:     Omni.i18n.model.ReceiptFormat.is_salesperson_name_in_header,
      is_salesperson_number_in_headerLabel:   Omni.i18n.model.ReceiptFormat.is_salesperson_number_in_header,
      is_customer_name_in_headerLabel:        Omni.i18n.model.ReceiptFormat.is_customer_name_in_header,
      is_date_in_footerLabel:                 Omni.i18n.model.ReceiptFormat.is_date_in_footer,
      is_time_in_footerLabel:                 Omni.i18n.model.ReceiptFormat.is_time_in_footer,
      is_location_name_in_footerLabel:        Omni.i18n.model.ReceiptFormat.is_location_name_in_footer,
      is_location_number_in_footerLabel:      Omni.i18n.model.ReceiptFormat.is_location_number_in_footer,
      is_order_number_in_footerLabel:         Omni.i18n.model.ReceiptFormat.is_order_number_in_footer,
      is_cashier_name_in_footerLabel:         Omni.i18n.model.ReceiptFormat.is_cashier_name_in_footer,
      is_cashier_number_in_footerLabel:       Omni.i18n.model.ReceiptFormat.is_cashier_number_in_footer,
      is_salesperson_name_in_footerLabel:     Omni.i18n.model.ReceiptFormat.is_salesperson_name_in_footer,
      is_salesperson_number_in_footerLabel:   Omni.i18n.model.ReceiptFormat.is_salesperson_number_in_footer,
      is_customer_name_in_footerLabel:        Omni.i18n.model.ReceiptFormat.is_customer_name_in_footer,
      is_destroyedLabel:                      Omni.i18n.model.ReceiptFormat.is_destroyed
    });
    // LABELS (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [
        {
          xtype:        'fieldset',
          title:        'General Information',
          collapsible:  true,
          defaultType:  'textfield',
          defaults:     {anchor: '95%'},
          layout:       'anchor',
          items:[
          /*
            {
              xtype: 'buildit-Locator',
              store: Ext.create('MyApp.store.MyModel',{pageSize: 10}),
              displayField: 'name',
              queryField: 'name',
              valueField: 'value_field',
              itemTpl:'{name}',
              name: 'attribute_name',
              fieldLabel: this.attribute_nameLabel,
              allowBlank: true
            }
          */

            { xtype: 'textfield', name: 'receipt_format_id',              fieldLabel: this.receipt_format_idLabel           , allowBlank: false },
            { xtype: 'textfield', name: 'display',                        fieldLabel: this.displayLabel                     , allowBlank: false },
            { xtype: 'textfield', name: 'description',                    fieldLabel: this.descriptionLabel                 , allowBlank: false },
            { xtype: 'textfield', name: 'icon_url',                       fieldLabel: this.icon_urlLabel                    , allowBlank: false },
            { xtype: 'textfield', name: 'icon_width',                     fieldLabel: this.icon_widthLabel                  , allowBlank: false },
            { xtype: 'textfield', name: 'paper_width',                    fieldLabel: this.paper_widthLabel                 , allowBlank: false },
            { xtype: 'textfield', name: 'top_name',                       fieldLabel: this.top_nameLabel                    , allowBlank: false },
            { xtype: 'textfield', name: 'feedback_message',               fieldLabel: this.feedback_messageLabel            , allowBlank: false },
            { xtype: 'textfield', name: 'return_policy',                  fieldLabel: this.return_policyLabel               , allowBlank: false },
            { xtype: 'textfield', name: 'webaccount_message',                fieldLabel: this.webaccount_messageLabel             , allowBlank: false },
            { xtype: 'textfield', name: 'promotional_message',            fieldLabel: this.promotional_messageLabel         , allowBlank: false },
            { xtype: 'textfield', name: 'message_separator',              fieldLabel: this.message_separatorLabel           , allowBlank: false },
            { xtype: 'textfield', name: 'is_date_in_header',              fieldLabel: this.is_date_in_headerLabel           , allowBlank: false },
            { xtype: 'textfield', name: 'is_time_in_header',              fieldLabel: this.is_time_in_headerLabel           , allowBlank: false },
            { xtype: 'textfield', name: 'is_location_name_in_header',     fieldLabel: this.is_location_name_in_headerLabel  , allowBlank: false },
            { xtype: 'textfield', name: 'is_location_number_in_header',   fieldLabel: this.is_location_number_in_headerLabel, allowBlank: false },
            { xtype: 'textfield', name: 'is_order_number_in_header',      fieldLabel: this.is_order_number_in_headerLabel   , allowBlank: false },
            { xtype: 'textfield', name: 'is_cashier_name_in_header',      fieldLabel: this.is_cashier_name_in_headerLabel   , allowBlank: false },
            { xtype: 'textfield', name: 'is_cashier_number_in_header',    fieldLabel: this.is_cashier_number_in_headerLabel , allowBlank: false },
            { xtype: 'textfield', name: 'is_salesperson_name_in_header',  fieldLabel: this.is_salesperson_name_in_headerLabel, allowBlank: false },
            { xtype: 'textfield', name: 'is_salesperson_number_in_header',fieldLabel: this.is_salesperson_number_in_headerLabel, allowBlank: false },
            { xtype: 'textfield', name: 'is_customer_name_in_header',     fieldLabel: this.is_customer_name_in_headerLabel  , allowBlank: false },
            { xtype: 'textfield', name: 'is_date_in_footer',              fieldLabel: this.is_date_in_footerLabel           , allowBlank: false },
            { xtype: 'textfield', name: 'is_time_in_footer',              fieldLabel: this.is_time_in_footerLabel           , allowBlank: false },
            { xtype: 'textfield', name: 'is_location_name_in_footer',     fieldLabel: this.is_location_name_in_footerLabel  , allowBlank: false },
            { xtype: 'textfield', name: 'is_location_number_in_footer',   fieldLabel: this.is_location_number_in_footerLabel, allowBlank: false },
            { xtype: 'textfield', name: 'is_order_number_in_footer',      fieldLabel: this.is_order_number_in_footerLabel   , allowBlank: false },
            { xtype: 'textfield', name: 'is_cashier_name_in_footer',      fieldLabel: this.is_cashier_name_in_footerLabel   , allowBlank: false },
            { xtype: 'textfield', name: 'is_cashier_number_in_footer',    fieldLabel: this.is_cashier_number_in_footerLabel , allowBlank: false },
            { xtype: 'textfield', name: 'is_salesperson_name_in_footer',  fieldLabel: this.is_salesperson_name_in_footerLabel, allowBlank: false },
            { xtype: 'textfield', name: 'is_salesperson_number_in_footer',fieldLabel: this.is_salesperson_number_in_footerLabel, allowBlank: false },
            { xtype: 'textfield', name: 'is_customer_name_in_footer',     fieldLabel: this.is_customer_name_in_footerLabel  , allowBlank: false },
            { xtype: 'textfield', name: 'is_destroyed',                   fieldLabel: this.is_destroyedLabel                , allowBlank: false }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit ReceiptFormats',
      newTitle: 'New Receipt Format',
      newSubtitle: 'Complete the following to create a new Receipt Format'
    });
    // TITLES (End)

    this.callParent();

  }

});
