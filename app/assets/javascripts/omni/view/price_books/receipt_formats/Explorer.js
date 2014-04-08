Ext.define('Omni.view.receipt_formats.Explorer', {

  extend : 'Buildit.ux.explorer.Panel',
  alias  : 'widget.omni-receipt_formats-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  store  : Ext.create('Omni.store.ReceiptFormat'),

  contextMenuConfig : {
    xtype: 'buildit-explorer-ContextMenu'
  },

  newForms : [{
    xtype    : 'omni-receipt_formats-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-receipt_formats-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
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
  is_destroyedLabel:                      Omni.i18n.model.ReceiptFormat.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title:     'ReceiptFormats',
  subtitle:  'Create and maintain ReceiptFormats',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns      : [
        {
          header       : this.receipt_format_idLabel,
          dataIndex    : 'receipt_format_id',
          flex         : 1
        },
        {
          header       : this.displayLabel,
          dataIndex    : 'display',
          flex         : 1
        },
        {
          header       : this.descriptionLabel,
          dataIndex    : 'description',
          flex         : 1
        },
        {
          header       : this.icon_urlLabel,
          dataIndex    : 'icon_url',
          flex         : 1
        },
        {
          header       : this.icon_widthLabel,
          dataIndex    : 'icon_width',
          flex         : 1
        },
        {
          header       : this.paper_widthLabel,
          dataIndex    : 'paper_width',
          flex         : 1
        },
        {
          header       : this.top_nameLabel,
          dataIndex    : 'top_name',
          flex         : 1
        },
        {
          header       : this.feedback_messageLabel,
          dataIndex    : 'feedback_message',
          flex         : 1
        },
        {
          header       : this.return_policyLabel,
          dataIndex    : 'return_policy',
          flex         : 1
        },
        {
          header       : this.webaccount_messageLabel,
          dataIndex    : 'webaccount_message',
          flex         : 1
        },
        {
          header       : this.promotional_messageLabel,
          dataIndex    : 'promotional_message',
          flex         : 1
        },
        {
          header       : this.message_separatorLabel,
          dataIndex    : 'message_separator',
          flex         : 1
        },
        {
          header       : this.is_date_in_headerLabel,
          dataIndex    : 'is_date_in_header',
          flex         : 1
        },
        {
          header       : this.is_time_in_headerLabel,
          dataIndex    : 'is_time_in_header',
          flex         : 1
        },
        {
          header       : this.is_location_name_in_headerLabel,
          dataIndex    : 'is_location_name_in_header',
          flex         : 1
        },
        {
          header       : this.is_location_number_in_headerLabel,
          dataIndex    : 'is_location_number_in_header',
          flex         : 1
        },
        {
          header       : this.is_order_number_in_headerLabel,
          dataIndex    : 'is_order_number_in_header',
          flex         : 1
        },
        {
          header       : this.is_cashier_name_in_headerLabel,
          dataIndex    : 'is_cashier_name_in_header',
          flex         : 1
        },
        {
          header       : this.is_cashier_number_in_headerLabel,
          dataIndex    : 'is_cashier_number_in_header',
          flex         : 1
        },
        {
          header       : this.is_salesperson_name_in_headerLabel,
          dataIndex    : 'is_salesperson_name_in_header',
          flex         : 1
        },
        {
          header       : this.is_salesperson_number_in_headerLabel,
          dataIndex    : 'is_salesperson_number_in_header',
          flex         : 1
        },
        {
          header       : this.is_customer_name_in_headerLabel,
          dataIndex    : 'is_customer_name_in_header',
          flex         : 1
        },
        {
          header       : this.is_date_in_footerLabel,
          dataIndex    : 'is_date_in_footer',
          flex         : 1
        },
        {
          header       : this.is_time_in_footerLabel,
          dataIndex    : 'is_time_in_footer',
          flex         : 1
        },
        {
          header       : this.is_location_name_in_footerLabel,
          dataIndex    : 'is_location_name_in_footer',
          flex         : 1
        },
        {
          header       : this.is_location_number_in_footerLabel,
          dataIndex    : 'is_location_number_in_footer',
          flex         : 1
        },
        {
          header       : this.is_order_number_in_footerLabel,
          dataIndex    : 'is_order_number_in_footer',
          flex         : 1
        },
        {
          header       : this.is_cashier_name_in_footerLabel,
          dataIndex    : 'is_cashier_name_in_footer',
          flex         : 1
        },
        {
          header       : this.is_cashier_number_in_footerLabel,
          dataIndex    : 'is_cashier_number_in_footer',
          flex         : 1
        },
        {
          header       : this.is_salesperson_name_in_footerLabel,
          dataIndex    : 'is_salesperson_name_in_footer',
          flex         : 1
        },
        {
          header       : this.is_salesperson_number_in_footerLabel,
          dataIndex    : 'is_salesperson_number_in_footer',
          flex         : 1
        },
        {
          header       : this.is_customer_name_in_footerLabel,
          dataIndex    : 'is_customer_name_in_footer',
          flex         : 1
        },
        {
          header       : this.is_destroyedLabel,
          dataIndex    : 'is_destroyed',
          flex         : 1
        }
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});
