Ext.define('Omni.view.sku_price_requests.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-sku_price_requests-Form',



  initComponent:function () {

    var me = this;


    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      stateLabel:                                 Omni.i18n.model.SkuPriceRequest.state,
      user_idLabel:                               Omni.i18n.model.SkuPriceRequest.user_id,
      request_dateLabel:                          Omni.i18n.model.SkuPriceRequest.request_date,
      sku_idLabel:                                Omni.i18n.model.SkuPriceRequest.sku_id,
      location_idLabel:                           Omni.i18n.model.SkuPriceRequest.location_id,
      customer_idLabel:                           Omni.i18n.model.SkuPriceRequest.customer_id,
      account_idLabel:                               Omni.i18n.model.SkuPriceRequest.account_id,
      request_price_book_idLabel:                 Omni.i18n.model.SkuPriceRequest.request_price_book_id,
      price_dateLabel:                            Omni.i18n.model.SkuPriceRequest.price_date,
      permanent_sku_retailLabel:                  Omni.i18n.model.SkuPriceRequest.permanent_sku_retail,
      permanent_unitsLabel:                       Omni.i18n.model.SkuPriceRequest.permanent_units,
      price_book_idLabel:                         Omni.i18n.model.SkuPriceRequest.price_book_id,
      sku_price_idLabel:                          Omni.i18n.model.SkuPriceRequest.sku_price_id,
      promo_sku_retailLabel:                      Omni.i18n.model.SkuPriceRequest.promo_sku_retail,
      promo_percentLabel:                         Omni.i18n.model.SkuPriceRequest.promo_percent,
      promo_amountLabel:                          Omni.i18n.model.SkuPriceRequest.promo_amount,
      promo_unitsLabel:                           Omni.i18n.model.SkuPriceRequest.promo_units,
      regular_unitsLabel:                         Omni.i18n.model.SkuPriceRequest.regular_units,
      maximum_promo_unitsLabel:                   Omni.i18n.model.SkuPriceRequest.maximum_promo_units,
      sku_promo_price_idLabel:                    Omni.i18n.model.SkuPriceRequest.sku_promo_price_id,
      sales_categoryLabel:                        Omni.i18n.model.SkuPriceRequest.sales_category,
      professional_discount_percentLabel:         Omni.i18n.model.SkuPriceRequest.professional_discount_percent,
      employee_discount_percentLabel:             Omni.i18n.model.SkuPriceRequest.employee_discount_percent,
      school_discount_percentLabel:               Omni.i18n.model.SkuPriceRequest.school_discount_percent
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
            { name: 'state',                          fieldLabel: this.stateLabel,                      allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'user_id',                        fieldLabel: this.user_idLabel,                    allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Buildit.store.User',{pageSize: 10}), displayField: 'full_name', queryField: 'full_name', valueField: 'user_id', itemTpl:'{last_name}, {first_name}' },
            { name: 'request_date',                   fieldLabel: this.request_dateLabel,               allowBlank: true,   disabled: false,    xtype: 'datefield'        }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Input Parameters',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'sku_id',                         fieldLabel: this.sku_idLabel,                     allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Sku',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'sku_id', itemTpl:'{display}' },
            { name: 'location_id',                    fieldLabel: this.location_idLabel,                allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Location',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'location_id', itemTpl:'{display}' },
            { name: 'customer_id',                    fieldLabel: this.customer_idLabel,                allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Customer',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'customer_id', itemTpl:'{display}' },
            { name: 'account_id',                        fieldLabel: this.account_idLabel,                    allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Account',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'account_id', itemTpl:'{display}' },
            { name: 'request_price_book_id',          fieldLabel: this.request_price_book_idLabel,      allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.PriceBook',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'price_book_id', itemTpl:'{display}' },
            { name: 'price_date',                     fieldLabel: this.price_dateLabel,                 allowBlank: true,   disabled: false,    xtype: 'datefield'        }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Output Parameters',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'permanent_sku_retail',           fieldLabel: this.permanent_sku_retailLabel,       allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'permanent_units',                fieldLabel: this.permanent_unitsLabel,            allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'price_book_id',                  fieldLabel: this.price_book_idLabel,              allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.PriceBook',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'price_book_id', itemTpl:'{display}' },
            { name: 'sku_price_id',                   fieldLabel: this.sku_price_idLabel,               allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.SkuPrice',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'sku_price_id', itemTpl:'{display}' },
            { name: 'promo_sku_retail',               fieldLabel: this.promo_sku_retailLabel,           allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'promo_percent',                  fieldLabel: this.promo_percentLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'promo_amount',                   fieldLabel: this.promo_amountLabel,               allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'promo_units',                    fieldLabel: this.promo_unitsLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'regular_units',                  fieldLabel: this.regular_unitsLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'maximum_promo_units',            fieldLabel: this.maximum_promo_unitsLabel,        allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'sku_promo_price_id',             fieldLabel: this.sku_promo_price_idLabel,         allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.SkuPromoPrice',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'sku_promo_price_id', itemTpl:'{display}' },
            { name: 'sales_category',                 fieldLabel: this.sales_categoryLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'professional_discount_percent',  fieldLabel: this.professional_discount_percentLabel,allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'employee_discount_percent',      fieldLabel: this.employee_discount_percentLabel,  allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'school_discount_percent',        fieldLabel: this.school_discount_percentLabel,    allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        }
      ]
    });
    // FIELDSETS (End)

    // TITLES (Start) =======================================================================
    Ext.applyIf(this, {
      title:         'Sku Price Request',
      subtitle:      'A request for the current price of a sku at a location.',
      newTitle:      'Sku Price Request',
      newSubtitle:   undefined
    });
    // TITLES (End)



    this.callParent();
  }

});
