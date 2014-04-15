Ext.define('Omni.view.payments.Form', {

  extend: 'Buildit.ux.Form',
  alias: 'widget.omni-payments-Form',

  initComponent: function() {

    var me = this;

    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      payment_nbrLabel: Omni.i18n.model.Payment.payment_nbr,
      order_idLabel: Omni.i18n.model.Payment.order_id,
      customer_idLabel: Omni.i18n.model.Payment.customer_id,
      terminal_idLabel: Omni.i18n.model.Payment.terminal_id,
      location_idLabel: Omni.i18n.model.Payment.location_id,
      tender_idLabel: Omni.i18n.model.Payment.tender_id,
      voucher_idLabel: Omni.i18n.model.Payment.voucher_id,
      stateLabel: Omni.i18n.model.Payment.state,
      payment_dateLabel: Omni.i18n.model.Payment.payment_date,
      payment_amountLabel: Omni.i18n.model.Payment.payment_amount,
      layaway_deposit_amountLabel: Omni.i18n.model.Payment.layaway_deposit_amount,
      account_holderLabel: Omni.i18n.model.Payment.account_holder,
      account_numberLabel: Omni.i18n.model.Payment.account_number,
      expiration_dateLabel: Omni.i18n.model.Payment.expiration_date,
      ccv_codeLabel: Omni.i18n.model.Payment.ccv_code,
      serial_numberLabel: Omni.i18n.model.Payment.serial_number,
      routing_numberLabel: Omni.i18n.model.Payment.routing_number,
      state_codeLabel: Omni.i18n.model.Payment.state_code,
      license_numberLabel: Omni.i18n.model.Payment.license_number,
      birth_dateLabel: Omni.i18n.model.Payment.birth_date,
      is_prior_authorized_captureLabel: Omni.i18n.model.Payment.is_prior_authorized_capture,
      payment_authorization_codeLabel: Omni.i18n.model.Payment.payment_authorization_code,
      avs_responseLabel: Omni.i18n.model.Payment.avs_response
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
        items: [{
          name: 'payment_nbr',
          fieldLabel: this.payment_nbrLabel,
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
          name: 'order_id',
          fieldLabel: this.order_idLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'buildit-Locator',
          store: Ext.create('Omni.store.Order', {
            pageSize: 10
          }),
          displayField: 'display',
          queryField: 'display',
          valueField: 'order_id',
          itemTpl: '{display}',
          gotoTarget: 'omni-orders-Inspector'
        }, {
          name: 'customer_id',
          fieldLabel: this.customer_idLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'buildit-Locator',
          store: Ext.create('Omni.store.Customer', {
            pageSize: 10
          }),
          displayField: 'display',
          queryField: 'display',
          valueField: 'customer_id',
          itemTpl: '{display}',
          gotoTarget: 'omni-customers-Inspector'
        }, {
          name: 'terminal_id',
          fieldLabel: this.terminal_idLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'buildit-Locator',
          store: Ext.create('Omni.store.Terminal', {
            pageSize: 10
          }),
          displayField: 'display',
          queryField: 'display',
          valueField: 'terminal_id',
          itemTpl: '{display}',
          gotoTarget: 'omni-terminals-Inspector'
        }, {
          name: 'location_id',
          fieldLabel: this.location_idLabel,
          allowBlank: true,
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
          name: 'tender_id',
          fieldLabel: this.tender_idLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'buildit-Locator',
          store: Ext.create('Omni.store.Tender', {
            pageSize: 10
          }),
          displayField: 'display',
          queryField: 'display',
          valueField: 'tender_id',
          itemTpl: '{display}',
          gotoTarget: 'omni-tenders-Inspector'
        }, {
          name: 'voucher_id',
          fieldLabel: this.voucher_idLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'buildit-Locator',
          store: Ext.create('Omni.store.Voucher', {
            pageSize: 10
          }),
          displayField: 'display',
          queryField: 'display',
          valueField: 'voucher_id',
          itemTpl: '{display}',
          gotoTarget: 'omni-vouchers-Inspector'
        }, ]
      }, {
        xtype: 'fieldset',
        title: 'Payment Detail',
        collapsible: true,
        defaultType: 'textfield',
        defaults: {
          anchor: '70%'
        },
        layout: 'anchor',
        items: [{
          name: 'payment_date',
          fieldLabel: this.payment_dateLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'datefield'
        }, {
          name: 'payment_amount',
          fieldLabel: this.payment_amountLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'currencyfield',
          currencySymbol: null
        }, {
          name: 'layaway_deposit_amount',
          fieldLabel: this.layaway_deposit_amountLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'currencyfield',
          currencySymbol: null
        }, {
          name: 'account_holder',
          fieldLabel: this.account_holderLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'textfield'
        }, {
          name: 'account_number',
          fieldLabel: this.account_numberLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'textfield'
        }, {
          name: 'expiration_date',
          fieldLabel: this.expiration_dateLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'datefield'
        }, {
          name: 'ccv_code',
          fieldLabel: this.ccv_codeLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'textfield'
        }, {
          name: 'serial_number',
          fieldLabel: this.serial_numberLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'textfield'
        }, {
          name: 'routing_number',
          fieldLabel: this.routing_numberLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'textfield'
        }, {
          name: 'state_code',
          fieldLabel: this.state_codeLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'buildit-Lookup',
          category: 'STATE_CODE'
        }, {
          name: 'license_number',
          fieldLabel: this.license_numberLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'textfield'
        }, {
          name: 'birth_date',
          fieldLabel: this.birth_dateLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'datefield'
        }, {
          name: 'is_prior_authorized_capture',
          fieldLabel: this.is_prior_authorized_captureLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'checkbox'
        }, {
          name: 'payment_authorization_code',
          fieldLabel: this.payment_authorization_codeLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'textfield'
        }, {
          name: 'avs_response',
          fieldLabel: this.avs_responseLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'textfield'
        }]
      }]
    });
    // FIELDSETS (End)

    // TITLES (Start) =======================================================================
    Ext.applyIf(this, {
      title: 'Payment',
      subtitle: 'A customer payment for an order or on account',
      newTitle: 'Payment',
      newSubtitle: undefined
    });
    // TITLES (End)

    // ACTIONS (Start) =====================================================================
    Ext.apply(this, {
      actions: [{
        xtype: 'button',
        iconCls: 'fa fa-credit-card',
        tooltip: 'Charge',
        listeners: {
          beforerender: this.prepareAuthorizeAction,
          click: this.onAuthorizeAction,
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
  onAuthorizeAction: function(action, eOpts) {
    this.processEventTransition('charge', 'Payment was successfully charged.', 'An error occurred charging this payment.');
  }, // onAction

  /**
   *
   */
  prepareAuthorizeAction: function(action, eOpts) {
    var currentState = this.record.get('state');
    // console.log(this.record);
    (this.record.phantom != true) && (currentState == 'draft') ? action.show() : action.hide();
  }, // prepareAction

  /**
   *
   */
  processEventTransition: function(eventName, successMsg, failureMsg) {
    var me = this;

    Omni.service.Payment.fireEvent({
        id: this.record.get('payment_id'),
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
