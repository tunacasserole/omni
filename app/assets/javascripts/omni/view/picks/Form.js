Ext.define('Omni.view.picks.Form', {

  extend: 'Buildit.ux.Form',
  alias: 'widget.omni-picks-Form',

  initComponent: function() {

    var me = this;

    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      stateLabel: Omni.i18n.model.Pick.state,
      pick_nbrLabel: Omni.i18n.model.Pick.pick_nbr,
      fulfillment_location_idLabel: Omni.i18n.model.Pick.fulfillment_location_id,
      job_idLabel: Omni.i18n.model.Pick.job_id,
      request_unitsLabel: Omni.i18n.model.Pick.request_units,
      complete_unitsLabel: Omni.i18n.model.Pick.complete_units,
      target_dateLabel: Omni.i18n.model.Pick.target_date,
      start_dateLabel: Omni.i18n.model.Pick.start_date,
      complete_dateLabel: Omni.i18n.model.Pick.complete_date,
      ship_dateLabel: Omni.i18n.model.Pick.ship_date
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
          name: 'pick_nbr',
          fieldLabel: this.pick_nbrLabel,
          allowBlank: true,
          disabled: true,
          xtype: 'textfield'
        }, {
          name: 'fulfillment_location_id',
          fieldLabel: this.fulfillment_location_idLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'buildit-Locator',
          store: Ext.create('Omni.store.Location', {
            pageSize: 10
          }),
          displayField: 'display',
          queryField: 'display',
          valueField: 'location_id',
          itemTpl: '{display}'
        }, {
          name: 'job_id',
          fieldLabel: this.job_idLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'buildit-Locator',
          store: Ext.create('Omni.store.Job', {
            pageSize: 10
          }),
          displayField: 'display',
          queryField: 'display',
          valueField: 'job_id',
          itemTpl: '{display}'
        }, {
          name: 'request_units',
          fieldLabel: this.request_unitsLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'numberfield'
        }, {
          name: 'complete_units',
          fieldLabel: this.complete_unitsLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'numberfield'
        }]
      }, {
        xtype: 'fieldset',
        title: 'Pick Tracking',
        collapsible: true,
        defaultType: 'textfield',
        defaults: {
          anchor: '70%'
        },
        layout: 'anchor',
        items: [{
          name: 'target_date',
          fieldLabel: this.target_dateLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'datefield'
        }, {
          name: 'start_date',
          fieldLabel: this.start_dateLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'datefield'
        }, {
          name: 'complete_date',
          fieldLabel: this.complete_dateLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'datefield'
        }, {
          name: 'ship_date',
          fieldLabel: this.ship_dateLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'datefield'
        }]
      }]
    });
    // FIELDSETS (End)

    // TITLES (Start) =======================================================================
    Ext.applyIf(this, {
      title: 'Pick',
      subtitle: 'An order to pick a product for shipment to a customer',
      newTitle: 'Pick',
      newSubtitle: undefined
    });
    // TITLES (End)

    // ACTIONS (Start) =====================================================================
    Ext.apply(this, {
      actions: [{
        tooltip: 'Release',
        xtype: 'button',
        iconCls: 'fa fa-share-square-o',
        listeners: {
          beforerender: this.prepareReleaseAction,
          click: this.onReleaseAction,
          scope: me
        }
      }, {
        tooltip: 'Start',
        iconCls: 'fa fa-magic',
        xtype: 'button',
        listeners: {
          beforerender: this.prepareStartAction,
          click: this.onStartAction,
          scope: me
        }
      }, {
        tooltip: 'Complete',
        iconCls: 'fa fa-pencil-square-o',
        xtype: 'button',
        listeners: {
          beforerender: this.prepareCompleteAction,
          click: this.onCompleteAction,
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
  onReleaseAction: function(action, eOpts) {
    this.processEventTransition('release', 'Pick was successfully released.', 'An error occurred releasing this pick.');
  }, // onAction

  /**
   *
   */
  onStartAction: function(action, eOpts) {
    this.processEventTransition('start', 'Pick was successfully started.', 'An error occurred starting this pick.');
  }, // onAction

  /**
   *
   */
  onCompleteAction: function(action, eOpts) {
    this.processEventTransition('complete', 'Pick was successfully completed.', 'An error occurred completing this pick.');
  }, // onAction

  /**
   *
   */
  onShipAction: function(action, eOpts) {
    this.processEventTransition('ship', 'Pick was successfully shipped.', 'An error occurred shipping this pick.');
  }, // onAction

  /**
   *
   */
  onCancelAction: function(action, eOpts) {
    this.processEventTransition('cancel', 'Pick was successfully cancelled.', 'An error occurred cancelling this pick.');
  }, // onAction

  /**
   *
   */
  prepareReleaseAction: function(action, eOpts) {
    var currentState = this.record.get('state');
    (this.record.phantom != true) && (currentState == 'draft') ? action.show() : action.hide();
  }, // prepareAction

  /**
   *
   */
  prepareStartAction: function(action, eOpts) {
    var currentState = this.record.get('state');
    (this.record.phantom != true) && (currentState == 'pending') ? action.show() : action.hide();
  }, // prepareAction

  /**
   *
   */
  prepareCompleteAction: function(action, eOpts) {
    var currentState = this.record.get('state');
    (this.record.phantom != true) && (currentState == 'open') ? action.show() : action.hide();
  }, // prepareAction

  /**
   *
   */
  prepareShipAction: function(action, eOpts) {
    var currentState = this.record.get('state');
    (this.record.phantom != true) && (currentState == 'complete') ? action.show() : action.hide();
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

    Omni.service.Pick.fireEvent({
        id: this.record.get('pick_id'),
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
