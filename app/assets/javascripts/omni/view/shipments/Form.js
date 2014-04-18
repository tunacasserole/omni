Ext.define('Omni.view.shipments.Form', {

  extend: 'Buildit.ux.Form',
  alias: 'widget.omni-shipments-Form',

  initComponent: function() {

    var me = this;

    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      stateLabel: Omni.i18n.model.Shipment.state,
      shipment_nbrLabel: Omni.i18n.model.Shipment.shipment_nbr,
      location_idLabel: Omni.i18n.model.Shipment.location_id,
      supplier_idLabel: Omni.i18n.model.Shipment.supplier_id,
      tracking_numberLabel: Omni.i18n.model.Shipment.tracking_number,
      create_dateLabel: Omni.i18n.model.Shipment.create_date,
      ship_dateLabel: Omni.i18n.model.Shipment.ship_date,
      receipt_dateLabel: Omni.i18n.model.Shipment.receipt_date,
      estimated_delivery_dateLabel: Omni.i18n.model.Shipment.estimated_delivery_date,
      shipping_costLabel: Omni.i18n.model.Shipment.shipping_cost,
      ship_nameLabel: Omni.i18n.model.Shipment.ship_name,
      ship_line_1Label: Omni.i18n.model.Shipment.ship_line_1,
      ship_line_2Label: Omni.i18n.model.Shipment.ship_line_2,
      ship_line_3Label: Omni.i18n.model.Shipment.ship_line_3,
      ship_line_4Label: Omni.i18n.model.Shipment.ship_line_4,
      ship_cityLabel: Omni.i18n.model.Shipment.ship_city,
      ship_state_codeLabel: Omni.i18n.model.Shipment.ship_state_code,
      ship_zipLabel: Omni.i18n.model.Shipment.ship_zip,
      ship_countryLabel: Omni.i18n.model.Shipment.ship_country,
      ship_latitudeLabel: Omni.i18n.model.Shipment.ship_latitude,
      ship_longitudeLabel: Omni.i18n.model.Shipment.ship_longitude,
      is_residentialLabel: Omni.i18n.model.Shipment.is_residential,
      is_commercialLabel: Omni.i18n.model.Shipment.is_commercial,
      phoneLabel: Omni.i18n.model.Shipment.phone,
      email_addressLabel: Omni.i18n.model.Shipment.email_address
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
          name: 'state',
          fieldLabel: this.stateLabel,
          allowBlank: true,
          disabled: true,
          xtype: 'textfield'
        }, {
          name: 'shipment_nbr',
          fieldLabel: this.shipment_nbrLabel,
          allowBlank: true,
          disabled: true,
          xtype: 'textfield'
        }, {
          name: 'location_id',
          fieldLabel: this.location_idLabel,
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
          name: 'ship_name',
          fieldLabel: this.ship_nameLabel,
          allowBlank: false,
          disabled: false,
          xtype: 'textfield'
        }]
      }, {
        xtype: 'fieldset',
        title: 'Shipment Tracking',
        collapsible: true,
        defaultType: 'textfield',
        defaults: {
          anchor: '70%'
        },
        layout: 'anchor',
        items: [{
          name: 'supplier_id',
          fieldLabel: this.supplier_idLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'buildit-Locator',
          store: Ext.create('Omni.store.Supplier', {
            pageSize: 10
          }),
          displayField: 'display',
          queryField: 'display',
          valueField: 'supplier_id',
          itemTpl: '{display}',
          gotoTarget: 'omni-suppliers-Inspector'
        }, {
          name: 'tracking_number',
          fieldLabel: this.tracking_numberLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'textfield'
        }, {
          name: 'create_date',
          fieldLabel: this.create_dateLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'datefield'
        }, {
          name: 'ship_date',
          fieldLabel: this.ship_dateLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'datefield'
        }, {
          name: 'receipt_date',
          fieldLabel: this.receipt_dateLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'datefield'
        }, {
          name: 'estimated_delivery_date',
          fieldLabel: this.estimated_delivery_dateLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'datefield'
        }, {
          name: 'shipping_cost',
          fieldLabel: this.shipping_costLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'currencyfield',
          currencySymbol: null
        }]
      }, {
        xtype: 'fieldset',
        title: 'Ship To Information',
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
          category: 'STATE_CODE'
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
        }, {
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
      }]
    });
    // FIELDSETS (End)

    // TITLES (Start) =======================================================================
    Ext.applyIf(this, {
      title: 'Shipment',
      subtitle: 'A shipment to a customer or another location',
      newTitle: 'Shipment',
      newSubtitle: undefined
    });
    // TITLES (End)

    // ACTIONS (Start) =====================================================================
    Ext.apply(this, {
      actions: [{
        xtype: 'button',
        iconCls: 'fa fa-plane',
        tooltip: 'Ship',
        listeners: {
          beforerender: this.prepareShipAction,
          click: this.onShipAction,
          scope: me
        }
      }, {
        xtype: 'button',
        iconCls: 'fa fa-arrow-circle-down',
        tooltip: 'Receive',
        listeners: {
          beforerender: this.prepareReceiveAction,
          click: this.onReceiveAction,
          scope: me
        }
      }, {
        xtype: 'button',
        iconCls: 'fa fa-times-circle-o',
        tooltip: 'Cancel',
        listeners: {
          beforerender: this.prepareCancelAction,
          click: this.onCancelAction,
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
  onShipAction: function(action, eOpts) {
    this.processEventTransition('ship', 'Shipment was successfully shipped.', 'An error occurred shipping this shipment.');
  }, // onAction

  /**
   *
   */
  onReceiveAction: function(action, eOpts) {
    this.processEventTransition('receive', 'Shipment was successfully received.', 'An error occurred receiving this shipment.');
  }, // onAction

  /**
   *
   */
  onCancelAction: function(action, eOpts) {
    this.processEventTransition('cancel', 'Shipment was successfully cancelled.', 'An error occurred cancelling this shipment.');
  }, // onAction

  /**
   *
   */
  prepareShipAction: function(action, eOpts) {
    var currentState = this.record.get('state');
    (this.record.phantom != true) && (currentState == 'draft') ? action.show() : action.hide();
  }, // prepareAction

  /**
   *
   */
  prepareReceiveAction: function(action, eOpts) {
    var currentState = this.record.get('state');
    (this.record.phantom != true) && (currentState == 'draft') || (currentState == 'shipped') ? action.show() : action.hide();
  }, // prepareAction

  /**
   *
   */
  prepareCancelAction: function(action, eOpts) {
    var currentState = this.record.get('state');
    (this.record.phantom != true) && (currentState == 'draft') ? action.show() : action.hide();
  }, // prepareAction

  /**
   *
   */
  processEventTransition: function(eventName, successMsg, failureMsg) {
    var me = this;

    Omni.service.Shipment.fireEvent({
        id: this.record.get('shipment_id'),
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
