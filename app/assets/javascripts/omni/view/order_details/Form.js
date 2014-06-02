Ext.define('Omni.view.order_details.Form', {

  extend: 'Buildit.ux.Form',
  alias: 'widget.omni-order_details-Form',

  initComponent: function() {

    var me = this;

    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      order_detail_idLabel: Omni.i18n.model.OrderDetail.order_detail_id,
      order_detail_detail_nbrLabel: Omni.i18n.model.OrderDetail.order_detail_detail_nbr,
      sku_idLabel: Omni.i18n.model.OrderDetail.sku_id,
      sku_alias_idLabel: Omni.i18n.model.OrderDetail.sku_alias_id,
      delivery_methodLabel: Omni.i18n.model.OrderDetail.delivery_method,
      pickup_location_idLabel: Omni.i18n.model.OrderDetail.pickup_location_id,
      ship_to_nameLabel: Omni.i18n.model.OrderDetail.ship_to_name,
      account_idLabel: Omni.i18n.model.OrderDetail.account_id,
      grade_idLabel: Omni.i18n.model.OrderDetail.grade_id,
      genderLabel: Omni.i18n.model.OrderDetail.gender,
      sales_user_idLabel: Omni.i18n.model.OrderDetail.sales_user_id,
      promised_dateLabel: Omni.i18n.model.OrderDetail.promised_date,
      stateLabel: Omni.i18n.model.OrderDetail.state,
      ship_line_1Label: Omni.i18n.model.OrderDetail.ship_line_1,
      ship_line_2Label: Omni.i18n.model.OrderDetail.ship_line_2,
      ship_line_3Label: Omni.i18n.model.OrderDetail.ship_line_3,
      ship_line_4Label: Omni.i18n.model.OrderDetail.ship_line_4,
      ship_cityLabel: Omni.i18n.model.OrderDetail.ship_city,
      ship_state_codeLabel: Omni.i18n.model.OrderDetail.ship_state_code,
      ship_zipLabel: Omni.i18n.model.OrderDetail.ship_zip,
      ship_countryLabel: Omni.i18n.model.OrderDetail.ship_country,
      ship_latitudeLabel: Omni.i18n.model.OrderDetail.ship_latitude,
      ship_longitudeLabel: Omni.i18n.model.OrderDetail.ship_longitude,
      is_residentialLabel: Omni.i18n.model.OrderDetail.is_residential,
      is_commercialLabel: Omni.i18n.model.OrderDetail.is_commercial,
      phoneLabel: Omni.i18n.model.OrderDetail.phone,
      email_addressLabel: Omni.i18n.model.OrderDetail.email_address,
      serial_numberLabel: Omni.i18n.model.OrderDetail.serial_number,
      order_detail_unitsLabel: Omni.i18n.model.OrderDetail.order_detail_units,
      retail_priceLabel: Omni.i18n.model.OrderDetail.retail_price,
      sale_priceLabel: Omni.i18n.model.OrderDetail.sale_price,
      sales_tax_rateLabel: Omni.i18n.model.OrderDetail.sales_tax_rate,
      price_typeLabel: Omni.i18n.model.OrderDetail.price_type,
      is_taxable_productLabel: Omni.i18n.model.OrderDetail.is_taxable_product,
      is_tax_chargedLabel: Omni.i18n.model.OrderDetail.is_tax_charged,
      shipping_amountLabel: Omni.i18n.model.OrderDetail.shipping_amount,
      discount_percentLabel: Omni.i18n.model.OrderDetail.discount_percent,
      discount_amountLabel: Omni.i18n.model.OrderDetail.discount_amount,
      customer_discount_reasonLabel: Omni.i18n.model.OrderDetail.customer_discount_reason,
      customer_return_reasonLabel: Omni.i18n.model.OrderDetail.customer_return_reason,
      customer_cancel_reasonLabel: Omni.i18n.model.OrderDetail.customer_cancel_reason,
      cancel_dateLabel: Omni.i18n.model.OrderDetail.cancel_date,
      reference_order_detail_detail_idLabel: Omni.i18n.model.OrderDetail.reference_order_detail_detail_id,
      is_cancelledLabel: Omni.i18n.model.OrderDetail.is_cancelled,
      is_layawayLabel: Omni.i18n.model.OrderDetail.is_layaway
    });
    // LABELS (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [{
        xtype: 'fieldset',
        title: 'General',
        collapsible: true,
        defaultType: 'textfield',
        defaults: {
          anchor: '70%'
        },
        layout: 'anchor',
        items: [
          // { name: 'order_detail_id',                       fieldLabel: this.order_detail_idLabel,                   allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.OrderDetail',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'order_detail_id', itemTpl:'{display}' },
          {
            name: 'order_detail_detail_nbr',
            fieldLabel: this.order_detail_detail_nbrLabel,
            allowBlank: true,
            disabled: true,
            xtype: 'textfield'
          }, {
            name: 'state',
            fieldLabel: this.stateLabel,
            allowBlank: true,
            disabled: true,
            xtype: 'textfield'
          }, {
            name: 'sku_id',
            fieldLabel: this.sku_idLabel,
            allowBlank: false,
            disabled: false,
            xtype: 'buildit-Locator',
            store: Ext.create('Omni.store.Sku', {
              pageSize: 10
            }),
            displayField: 'display',
            queryField: 'display',
            valueField: 'sku_id',
            itemTpl: '{display}',
            gotoTarget: 'omni-skus-Inspector'
          },
          // { name: 'sku_alias_id',                   fieldLabel: this.sku_alias_idLabel,               allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.SkuAlias',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'sku_alias_id', itemTpl:'{display}' },
          {
            name: 'delivery_method',
            fieldLabel: this.delivery_methodLabel,
            allowBlank: false,
            disabled: false,
            xtype: 'buildit-Lookup',
            category: 'DELIVERY_METHOD'
          }, {
            name: 'pickup_location_id',
            fieldLabel: this.pickup_location_idLabel,
            allowBlank: false,
            disabled: false,
            xtype: 'buildit-Locator',
            store: Ext.create('Omni.store.Location', {
              pageSize: 10
            }),
            displayField: 'display',
            queryField: 'display',
            valueField: 'location_id',
            itemTpl: '{display}',
            gotoTarget: 'omni-locations-Inspector'
          }, {
            name: 'ship_to_name',
            fieldLabel: this.ship_to_nameLabel,
            allowBlank: true,
            disabled: false,
            xtype: 'textfield'
          }, {
            name: 'account_id',
            fieldLabel: this.account_idLabel,
            allowBlank: true,
            disabled: false,
            xtype: 'buildit-Locator',
            store: Ext.create('Omni.store.Account', {
              pageSize: 10
            }),
            displayField: 'display',
            queryField: 'display',
            valueField: 'account_id',
            itemTpl: '{display}',
            gotoTarget: 'omni-accounts-Inspector'
          }, {
            name: 'grade_id',
            fieldLabel: this.grade_idLabel,
            allowBlank: true,
            disabled: false,
            xtype: 'buildit-Locator',
            store: Ext.create('Omni.store.Grade', {
              pageSize: 10
            }),
            displayField: 'display',
            queryField: 'display',
            valueField: 'grade_id',
            itemTpl: '{display}'
          }, {
            name: 'gender',
            fieldLabel: this.genderLabel,
            allowBlank: true,
            disabled: false,
            xtype: 'buildit-Lookup',
            category: 'GENDER'
          }, {
            name: 'sales_user_id',
            fieldLabel: this.sales_user_idLabel,
            allowBlank: true,
            disabled: false,
            xtype: 'buildit-Locator',
            store: Ext.create('Buildit.store.User', {
              pageSize: 10
            }),
            displayField: 'full_name',
            queryField: 'full_name',
            valueField: 'user_id',
            itemTpl: '{last_name}, {first_name}'
          }, {
            name: 'promised_date',
            fieldLabel: this.promised_dateLabel,
            allowBlank: true,
            disabled: false,
            xtype: 'datefield'
          },
        ]
      }, {
        xtype: 'fieldset',
        title: 'OrderDetail Details',
        collapsible: true,
        defaultType: 'textfield',
        defaults: {
          anchor: '70%'
        },
        layout: 'anchor',
        items: [{
          name: 'serial_number',
          fieldLabel: this.serial_numberLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'textfield'
        }, {
          name: 'order_detail_units',
          fieldLabel: this.order_detail_unitsLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'numberfield'
        }, {
          name: 'retail_price',
          fieldLabel: this.retail_priceLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'currencyfield',
          currencySymbol: null,
        }, {
          name: 'sale_price',
          fieldLabel: this.sale_priceLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'currencyfield',
          currencySymbol: null,
        }]
      }, {
        xtype: 'fieldset',
        title: 'Billing Address',
        collapsible: true,
        defaultType: 'textfield',
        defaults: {
          anchor: '70%'
        },
        layout: 'anchor',
        items: [{
          name: 'ship_line_1',
          fieldLabel: this.ship_line_1Label,
          allowBlank: true,
          disabled: false,
          xtype: 'textfield'
        }, {
          name: 'ship_line_2',
          fieldLabel: this.ship_line_2Label,
          allowBlank: true,
          disabled: false,
          xtype: 'textfield'
        }, {
          name: 'ship_line_3',
          fieldLabel: this.ship_line_3Label,
          allowBlank: true,
          disabled: false,
          xtype: 'textfield'
        }, {
          name: 'ship_line_4',
          fieldLabel: this.ship_line_4Label,
          allowBlank: true,
          disabled: false,
          xtype: 'textfield'
        }, {
          name: 'ship_city',
          fieldLabel: this.ship_cityLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'textfield'
        }, {
          name: 'ship_state_code',
          fieldLabel: this.ship_state_codeLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'buildit-Lookup',
          category: 'SHIP_STATE_CODE'
        }, {
          name: 'ship_zip',
          fieldLabel: this.ship_zipLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'textfield'
        }, {
          name: 'ship_country',
          fieldLabel: this.ship_countryLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'textfield'
        }, {
          name: 'ship_latitude',
          fieldLabel: this.ship_latitudeLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'textfield'
        }, {
          name: 'ship_longitude',
          fieldLabel: this.ship_longitudeLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'textfield'
        }, {
          name: 'is_residential',
          fieldLabel: this.is_residentialLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'checkbox'
        }, {
          name: 'is_commercial',
          fieldLabel: this.is_commercialLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'checkbox'
        }]
      }, {
        xtype: 'fieldset',
        title: 'Phone and Email',
        collapsible: true,
        defaultType: 'textfield',
        defaults: {
          anchor: '70%'
        },
        layout: 'anchor',
        items: [{
          name: 'phone',
          fieldLabel: this.phoneLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'textfield'
        }, {
          name: 'email_address',
          fieldLabel: this.email_addressLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'textfield'
        }]
      }, {
        xtype: 'fieldset',
        title: 'Tax & Discount',
        collapsible: true,
        defaultType: 'textfield',
        defaults: {
          anchor: '70%'
        },
        layout: 'anchor',
        items: [{
          name: 'sales_tax_rate',
          fieldLabel: this.sales_tax_rateLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'textfield'
        }, {
          name: 'price_type',
          fieldLabel: this.price_typeLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'buildit-Lookup',
          category: 'PRICE_TYPE'
        }, {
          name: 'is_taxable_product',
          fieldLabel: this.is_taxable_productLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'checkbox'
        }, {
          name: 'is_tax_charged',
          fieldLabel: this.is_tax_chargedLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'checkbox'
        }, {
          name: 'shipping_amount',
          fieldLabel: this.shipping_amountLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'currencyfield',
          currencySymbol: null
        }, {
          name: 'discount_percent',
          fieldLabel: this.discount_percentLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'currencyfield',
          currencySymbol: null
        }, {
          name: 'discount_amount',
          fieldLabel: this.discount_amountLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'currencyfield',
          currencySymbol: null
        }, {
          name: 'customer_discount_reason',
          fieldLabel: this.customer_discount_reasonLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'buildit-Lookup',
          category: 'CUSTOMER_DISCOUNT_REASON'
        }]
      }, {
        xtype: 'fieldset',
        title: 'Return & Cancellation',
        collapsible: true,
        defaultType: 'textfield',
        defaults: {
          anchor: '70%'
        },
        layout: 'anchor',
        items: [{
          name: 'customer_return_reason',
          fieldLabel: this.customer_return_reasonLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'buildit-Lookup',
          category: 'CUSTOMER_RETURN_REASON'
        }, {
          name: 'customer_cancel_reason',
          fieldLabel: this.customer_cancel_reasonLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'buildit-Lookup',
          category: 'CUSTOMER_CANCEL_REASON'
        }, {
          name: 'cancel_date',
          fieldLabel: this.cancel_dateLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'datefield'
        }, {
          name: 'reference_order_detail_detail_id',
          fieldLabel: this.reference_order_detail_detail_idLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'buildit-Locator',
          store: Ext.create('Omni.store.OrderDetail', {
            pageSize: 10
          }),
          displayField: 'display',
          queryField: 'display',
          valueField: 'order_detail_detail_id',
          itemTpl: '{display}'
        }, {
          name: 'is_cancelled',
          fieldLabel: this.is_cancelledLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'checkbox'
        }]
      }, {
        xtype: 'fieldset',
        title: 'Special Processing',
        collapsible: true,
        defaultType: 'textfield',
        defaults: {
          anchor: '70%'
        },
        layout: 'anchor',
        items: [{
          name: 'is_layaway',
          fieldLabel: this.is_layawayLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'checkbox'
        }]
      }]
    });
    // FIELDSETS (End)

    // TITLES (Start) =======================================================================
    Ext.applyIf(this, {
      title: 'OrderDetail Detail',
      subtitle: 'Each product on a customer order_detail',
      newTitle: 'OrderDetail Detail',
      newSubtitle: undefined
    });
    // TITLES (End)

    // ACTIONS (Start) =====================================================================
    Ext.apply(this, {
      actions: [{
        xtype: 'button',
        iconCls: 'fa fa-pencil-square-o',
        tooltip: 'Finalize',
        listeners: {
          beforerender: this.prepareFinalizeAction,
          click: this.onFinalizeAction,
          scope: me
        }
      }]
    });

    // ACTIONS (End)

    // LISTENERS (Start) ===================================================================
    // LISTENERS (End)

    this.callParent();

  }, // initComponent

  // HANDLERS (Start) ======================================================================

  /**
   *
   */
  onFinalizeAction: function(action, eOpts) {
    this.processEventTransition('finalize', 'Order detail was successfully finalized.', 'An error occurred finalizing this order detail.');
  }, // onAction

  /**
   *
   */
  prepareFinalizeAction: function(action, eOpts) {
    var currentState = this.record.get('state');
    (this.record.phantom != true) && (currentState == 'draft') ? action.show() : action.hide();
  }, // prepareAction

  /**
   *
   */
  processEventTransition: function(eventName, successMsg, failureMsg) {
    var me = this;

    Omni.service.OrderDetail.fireEvent({
        id: this.record.get('order_detail_id'),
        name: eventName
      },
      function(result, e) {
        me.getForm().clearInvalid();
        if (result && result.success == true) {
          Buildit.infoMsg(successMsg);
          me.record.set(result);
          me.loadRecord(me.record);
          me.fireEvent('recordchanged', me, me.banner);
          me.doLayout();
        } else {
          var response = Ext.JSON.decode(e.xhr.responseText).result;

          if (response.errors)
            me.getForm().markInvalid(response.errors);

          var error_message = failureMsg;
          if (response.message)
            error_message = response.message;

          if (response.errors)
            error_message = error_message + '. Please fix the highlighted fields and try again.'

          Buildit.errorMsg(error_message);
        }
      }
    );

  }, // processEventTransition
  // HANDLERS (End)
});
