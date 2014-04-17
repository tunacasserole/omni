Ext.define('Omni.view.transfers.Form', {

  extend: 'Buildit.ux.Form',
  alias: 'widget.omni-transfers-Form',

  initComponent: function() {

    var me = this;

    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      stateLabel: Omni.i18n.model.Transfer.state,
      transfer_nbrLabel: Omni.i18n.model.Transfer.transfer_nbr,
      requesting_location_idLabel: Omni.i18n.model.Transfer.requesting_location_id,
      fulfillment_location_idLabel: Omni.i18n.model.Transfer.fulfillment_location_id,
      descriptionLabel: Omni.i18n.model.Transfer.description,
      sku_idLabel: Omni.i18n.model.Transfer.sku_id,
      transfer_reason_idLabel: Omni.i18n.model.Transfer.transfer_reason_id,
      request_unitsLabel: Omni.i18n.model.Transfer.request_units,
      request_dateLabel: Omni.i18n.model.Transfer.request_date,
      request_user_idLabel: Omni.i18n.model.Transfer.request_user_id,
      ship_dateLabel: Omni.i18n.model.Transfer.ship_date,
      cancel_dateLabel: Omni.i18n.model.Transfer.cancel_date,
      cancel_user_idLabel: Omni.i18n.model.Transfer.cancel_user_id
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
          name: 'transfer_nbr',
          fieldLabel: this.transfer_nbrLabel,
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
        }, {
          name: 'requesting_location_id',
          fieldLabel: this.requesting_location_idLabel,
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
          name: 'fulfillment_location_id',
          fieldLabel: this.fulfillment_location_idLabel,
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
          name: 'transfer_reason_id',
          fieldLabel: this.transfer_reason_idLabel,
          allowBlank: false,
          disabled: false,
          xtype: 'buildit-Locator',
          store: Ext.create('Omni.store.TransferReason', {
            pageSize: 10
          }),
          displayField: 'display',
          queryField: 'display',
          valueField: 'transfer_reason_id',
          itemTpl: '{display}',
          gotoTarget: 'omni-transfers_reasons-Inspector'
        }, {
          name: 'request_units',
          fieldLabel: this.request_unitsLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'numberfield'
        }, {
          name: 'description',
          fieldLabel: this.descriptionLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'textarea'
        }, ]
      }, {
        xtype: 'fieldset',
        title: 'Tracking',
        collapsible: true,
        defaultType: 'textfield',
        defaults: {
          anchor: '70%'
        },
        layout: 'anchor',
        items: [{
          name: 'request_date',
          fieldLabel: this.request_dateLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'datefield'
        }, {
          name: 'request_user_id',
          fieldLabel: this.request_user_idLabel,
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
          name: 'ship_date',
          fieldLabel: this.ship_dateLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'datefield'
        }, {
          name: 'cancel_date',
          fieldLabel: this.cancel_dateLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'datefield'
        }, {
          name: 'cancel_user_id',
          fieldLabel: this.cancel_user_idLabel,
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
        }]
      }]
    });
    // FIELDSETS (End)

    // TITLES (Start) =======================================================================
    Ext.applyIf(this, {
      title: 'Transfer',
      subtitle: 'A request to send merchandise from one location to another',
      newTitle: 'Transfer',
      newSubtitle: undefined
    });
    // TITLES (End)
    // TITLES (Start) =======================================================================
    Ext.applyIf(this, {
      title: 'Transfer',
      subtitle: 'An order to transfer a product for shipment to a customer',
      newTitle: 'Transfer',
      newSubtitle: undefined
    });
    // TITLES (End)

    // ACTIONS (Start) =====================================================================
    Ext.apply(this, {
      actions: [{
        tooltip: 'Approve',
        xtype: 'button',
        iconCls: 'fa fa-thumbs-up',
        listeners: {
          beforerender: this.prepareApproveAction,
          click: this.onApproveAction,
          scope: me
        }
      }, {
        tooltip: 'Ship',
        xtype: 'button',
        iconCls: 'fa fa-plane',
        listeners: {
          beforerender: this.prepareShipAction,
          click: this.onShipAction,
          scope: me
        }
      }, {
        tooltip: 'Receive',
        iconCls: 'fa fa-arrow-circle-down',
        xtype: 'button',
        listeners: {
          beforerender: this.prepareReceiveAction,
          click: this.onReceiveAction,
          scope: me
        }
      }, {
        tooltip: 'Cancel',
        xtype: 'button',
        iconCls: 'fa fa-times-circle-o',
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
  onApproveAction: function(action, eOpts) {
    this.processEventTransition('approve', 'Transfer was successfully approved.', 'An error occurred approving this transfer.');
  }, // onAction

  /**
   *
   */
  onShipAction: function(action, eOpts) {
    this.processEventTransition('ship', 'Transfer was successfully shipped.', 'An error occurred shipping this transfer.');
  }, // onAction

  /**
   *
   */
  onReceiveAction: function(action, eOpts) {
    this.processEventTransition('receive', 'Transfer was successfully received.', 'An error occurred receiving this transfer.');
  }, // onAction

  /**
   *
   */
  onCancelAction: function(action, eOpts) {
    this.processEventTransition('cancel', 'Transfer was successfully cancelled.', 'An error occurred cancelling this transfer.');
  }, // onAction

  /**
   *
   */
  prepareApproveAction: function(action, eOpts) {
    var currentState = this.record.get('state');
    (this.record.phantom != true) && (currentState == 'draft') ? action.show() : action.hide();
  }, // prepareAction

  /**
   *
   */
  prepareShipAction: function(action, eOpts) {
    var currentState = this.record.get('state');
    (this.record.phantom != true) && (currentState == 'pending') ? action.show() : action.hide();
  }, // prepareAction

  /**
   *
   */
  prepareReceiveAction: function(action, eOpts) {
    var currentState = this.record.get('state');
    (this.record.phantom != true) && (currentState == 'shipped') ? action.show() : action.hide();
  }, // prepareAction

  /**
   *
   */
  prepareCancelAction: function(action, eOpts) {
    var currentState = this.record.get('state');
    (this.record.phantom != true) && ((currentState == 'draft') || (currentState == 'pending')) ? action.show() : action.hide();
  }, // prepareAction

  /**
   *
   */
  processEventTransition: function(eventName, successMsg, failureMsg) {
    var me = this;

    Omni.service.Transfer.fireEvent({
        id: this.record.get('transfer_id'),
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
