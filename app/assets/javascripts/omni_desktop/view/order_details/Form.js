Ext.define('Omni.view.order_details.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-order_details-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      order_idLabel:                              Omni.i18n.model.OrderDetail.order_id,
      order_line_nbrLabel:                        Omni.i18n.model.OrderDetail.order_line_nbr,
      sku_idLabel:                                Omni.i18n.model.OrderDetail.sku_id,
      sku_alias_idLabel:                          Omni.i18n.model.OrderDetail.sku_alias_id,
      delivery_methodLabel:                       Omni.i18n.model.OrderDetail.delivery_method,
      pickup_location_idLabel:                    Omni.i18n.model.OrderDetail.pickup_location_id,
      ship_to_nameLabel:                          Omni.i18n.model.OrderDetail.ship_to_name,
      site_idLabel:                               Omni.i18n.model.OrderDetail.site_id,
      grade_idLabel:                              Omni.i18n.model.OrderDetail.grade_id,
      genderLabel:                                Omni.i18n.model.OrderDetail.gender,
      sales_user_idLabel:                         Omni.i18n.model.OrderDetail.sales_user_id,
      promised_dateLabel:                         Omni.i18n.model.OrderDetail.promised_date,
      stateLabel:                                 Omni.i18n.model.OrderDetail.state,
      ship_line_1Label:                           Omni.i18n.model.OrderDetail.ship_line_1,
      ship_line_2Label:                           Omni.i18n.model.OrderDetail.ship_line_2,
      ship_line_3Label:                           Omni.i18n.model.OrderDetail.ship_line_3,
      ship_line_4Label:                           Omni.i18n.model.OrderDetail.ship_line_4,
      ship_cityLabel:                             Omni.i18n.model.OrderDetail.ship_city,
      ship_state_codeLabel:                       Omni.i18n.model.OrderDetail.ship_state_code,
      ship_zipLabel:                              Omni.i18n.model.OrderDetail.ship_zip,
      ship_countryLabel:                          Omni.i18n.model.OrderDetail.ship_country,
      ship_latitudeLabel:                         Omni.i18n.model.OrderDetail.ship_latitude,
      ship_longitudeLabel:                        Omni.i18n.model.OrderDetail.ship_longitude,
      is_residentialLabel:                        Omni.i18n.model.OrderDetail.is_residential,
      is_commercialLabel:                         Omni.i18n.model.OrderDetail.is_commercial,
      phoneLabel:                                 Omni.i18n.model.OrderDetail.phone,
      email_addressLabel:                         Omni.i18n.model.OrderDetail.email_address,
      serial_numberLabel:                         Omni.i18n.model.OrderDetail.serial_number,
      order_unitsLabel:                           Omni.i18n.model.OrderDetail.order_units,
      retail_priceLabel:                          Omni.i18n.model.OrderDetail.retail_price,
      sale_priceLabel:                            Omni.i18n.model.OrderDetail.sale_price,
      sales_tax_rateLabel:                        Omni.i18n.model.OrderDetail.sales_tax_rate,
      price_typeLabel:                            Omni.i18n.model.OrderDetail.price_type,
      is_taxable_productLabel:                    Omni.i18n.model.OrderDetail.is_taxable_product,
      is_tax_chargedLabel:                        Omni.i18n.model.OrderDetail.is_tax_charged,
      shipping_amountLabel:                       Omni.i18n.model.OrderDetail.shipping_amount,
      discount_percentLabel:                      Omni.i18n.model.OrderDetail.discount_percent,
      discount_amountLabel:                       Omni.i18n.model.OrderDetail.discount_amount,
      customer_discount_reasonLabel:              Omni.i18n.model.OrderDetail.customer_discount_reason,
      customer_return_reasonLabel:                Omni.i18n.model.OrderDetail.customer_return_reason,
      customer_cancel_reasonLabel:                Omni.i18n.model.OrderDetail.customer_cancel_reason,
      cancel_dateLabel:                           Omni.i18n.model.OrderDetail.cancel_date,
      reference_order_detail_idLabel:             Omni.i18n.model.OrderDetail.reference_order_detail_id,
      is_cancelledLabel:                          Omni.i18n.model.OrderDetail.is_cancelled,
      is_layawayLabel:                            Omni.i18n.model.OrderDetail.is_layaway
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
            { name: 'order_id',                       fieldLabel: this.order_idLabel,                   allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Order',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'order_id', itemTpl:'{display}' },
            { name: 'order_line_nbr',                 fieldLabel: this.order_line_nbrLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'sku_id',                         fieldLabel: this.sku_idLabel,                     allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Sku',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'sku_id', itemTpl:'{display}' },
            { name: 'sku_alias_id',                   fieldLabel: this.sku_alias_idLabel,               allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.SkuAlias',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'sku_alias_id', itemTpl:'{display}' },
            { name: 'delivery_method',                fieldLabel: this.delivery_methodLabel,            allowBlank: false,  disabled: false,    xtype: 'textfield'        },
            { name: 'pickup_location_id',             fieldLabel: this.pickup_location_idLabel,         allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Location',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'location_id', itemTpl:'{display}' },
            { name: 'ship_to_name',                   fieldLabel: this.ship_to_nameLabel,               allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'site_id',                        fieldLabel: this.site_idLabel,                    allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Site',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'site_id', itemTpl:'{display}' },
            { name: 'grade_id',                       fieldLabel: this.grade_idLabel,                   allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Grade',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'grade_id', itemTpl:'{display}' },
            { name: 'gender',                         fieldLabel: this.genderLabel,                     allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'sales_user_id',                  fieldLabel: this.sales_user_idLabel,              allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Buildit.store.User',{pageSize: 10}), displayField: 'full_name', queryField: 'full_name', valueField: 'user_id', itemTpl:'{last_name}, {first_name}' },
            { name: 'promised_date',                  fieldLabel: this.promised_dateLabel,              allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'state',                          fieldLabel: this.stateLabel,                      allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Billing Address',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'ship_line_1',                    fieldLabel: this.ship_line_1Label,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'ship_line_2',                    fieldLabel: this.ship_line_2Label,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'ship_line_3',                    fieldLabel: this.ship_line_3Label,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'ship_line_4',                    fieldLabel: this.ship_line_4Label,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'ship_city',                      fieldLabel: this.ship_cityLabel,                  allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'ship_state_code',                fieldLabel: this.ship_state_codeLabel,            allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'ship_zip',                       fieldLabel: this.ship_zipLabel,                   allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'ship_country',                   fieldLabel: this.ship_countryLabel,               allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'ship_latitude',                  fieldLabel: this.ship_latitudeLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'ship_longitude',                 fieldLabel: this.ship_longitudeLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'is_residential',                 fieldLabel: this.is_residentialLabel,             allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_commercial',                  fieldLabel: this.is_commercialLabel,              allowBlank: true,   disabled: false,    xtype: 'checkbox'         }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Phone and Email',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'phone',                          fieldLabel: this.phoneLabel,                      allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'email_address',                  fieldLabel: this.email_addressLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Order Details',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'serial_number',                  fieldLabel: this.serial_numberLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'order_units',                    fieldLabel: this.order_unitsLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'retail_price',                   fieldLabel: this.retail_priceLabel,               allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'sale_price',                     fieldLabel: this.sale_priceLabel,                 allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Tax & Discount',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'sales_tax_rate',                 fieldLabel: this.sales_tax_rateLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'price_type',                     fieldLabel: this.price_typeLabel,                 allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'is_taxable_product',             fieldLabel: this.is_taxable_productLabel,         allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_tax_charged',                 fieldLabel: this.is_tax_chargedLabel,             allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'shipping_amount',                fieldLabel: this.shipping_amountLabel,            allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'discount_percent',               fieldLabel: this.discount_percentLabel,           allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'discount_amount',                fieldLabel: this.discount_amountLabel,            allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'customer_discount_reason',       fieldLabel: this.customer_discount_reasonLabel,   allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Return & Cancellation',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'customer_return_reason',         fieldLabel: this.customer_return_reasonLabel,     allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'customer_cancel_reason',         fieldLabel: this.customer_cancel_reasonLabel,     allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'cancel_date',                    fieldLabel: this.cancel_dateLabel,                allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'reference_order_detail_id',      fieldLabel: this.reference_order_detail_idLabel,  allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.OrderDetail',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'order_detail_id', itemTpl:'{display}' },
            { name: 'is_cancelled',                   fieldLabel: this.is_cancelledLabel,               allowBlank: true,   disabled: false,    xtype: 'checkbox'         }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Special Processing',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'is_layaway',                     fieldLabel: this.is_layawayLabel,                 allowBlank: true,   disabled: false,    xtype: 'checkbox'         }
          ]
        }
      ]
    });
    // FIELDSETS (End)

    // TITLES (Start) =======================================================================
    Ext.applyIf(this, {
      title:         'Order Detail',
      subtitle:      'Each product on a customer order',
      newTitle:      'Order Detail',
      newSubtitle:   undefined
    });
    // TITLES (End)



    this.callParent();
  }

});
