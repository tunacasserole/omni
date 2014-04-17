Ext.define('Omni.view.adjustments.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-adjustments-Form',

  initComponent:function () {

    var me = this;

    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      adjustment_nbrLabel:                        Omni.i18n.model.Adjustment.adjustment_nbr,
      stateLabel:                                 Omni.i18n.model.Adjustment.state,
      location_idLabel:                           Omni.i18n.model.Adjustment.location_id,
      sku_idLabel:                                Omni.i18n.model.Adjustment.sku_id,
      bin_idLabel:                                Omni.i18n.model.Adjustment.bin_id,
      descriptionLabel:                           Omni.i18n.model.Adjustment.description,
      request_dateLabel:                          Omni.i18n.model.Adjustment.request_date,
      request_user_idLabel:                       Omni.i18n.model.Adjustment.request_user_id,
      post_dateLabel:                             Omni.i18n.model.Adjustment.post_date,
      post_user_idLabel:                          Omni.i18n.model.Adjustment.post_user_id,
      cancel_dateLabel:                           Omni.i18n.model.Adjustment.cancel_date,
      cancel_user_idLabel:                        Omni.i18n.model.Adjustment.cancel_user_id,
      adjustment_reason_idLabel:                  Omni.i18n.model.Adjustment.adjustment_reason_id,
      adjustment_unitsLabel:                      Omni.i18n.model.Adjustment.adjustment_units,
      adjustment_costLabel:                       Omni.i18n.model.Adjustment.adjustment_cost
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
            { name: 'adjustment_nbr',                 fieldLabel: this.adjustment_nbrLabel,             allowBlank: true,  disabled: true,    xtype: 'textfield'        },
            { name: 'state',                          fieldLabel: this.stateLabel,                      allowBlank: true,   disabled: true,    xtype: 'textfield'        },
            { name: 'location_id',                    fieldLabel: this.location_idLabel,                allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Location',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'location_id', itemTpl:'{display}', gotoTarget: 'omni-locations-Inspector' },
            { name: 'sku_id',                         fieldLabel: this.sku_idLabel,                     allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Sku',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'sku_id', itemTpl:'{display}', gotoTarget: 'omni-skus-Inspector' },
            { name: 'adjustment_reason_id',           fieldLabel: this.adjustment_reason_idLabel,       allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.AdjustmentReason',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'adjustment_reason_id', itemTpl:'{display}', gotoTarget: 'omni-adjustment_reasons-Inspector' },
            { name: 'bin_id',                         fieldLabel: this.bin_idLabel,                     allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Bin',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'bin_id', itemTpl:'{display}', gotoTarget: 'omni-bins-Inspector' },
            { name: 'description',                    fieldLabel: this.descriptionLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'request_date',                   fieldLabel: this.request_dateLabel,               allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'request_user_id',                fieldLabel: this.request_user_idLabel,            allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Buildit.store.User',{pageSize: 10}), displayField: 'full_name', queryField: 'full_name', valueField: 'user_id', itemTpl:'{last_name}, {first_name}' },
            { name: 'post_date',                      fieldLabel: this.post_dateLabel,                  allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'post_user_id',                   fieldLabel: this.post_user_idLabel,               allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Buildit.store.User',{pageSize: 10}), displayField: 'full_name', queryField: 'full_name', valueField: 'user_id', itemTpl:'{last_name}, {first_name}' },
            { name: 'cancel_date',                    fieldLabel: this.cancel_dateLabel,                allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'cancel_user_id',                 fieldLabel: this.cancel_user_idLabel,             allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Buildit.store.User',{pageSize: 10}), displayField: 'full_name', queryField: 'full_name', valueField: 'user_id', itemTpl:'{last_name}, {first_name}' },
            { name: 'adjustment_units',               fieldLabel: this.adjustment_unitsLabel,           allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'adjustment_cost',                fieldLabel: this.adjustment_costLabel,            allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        }
      ]
    });
    // FIELDSETS (End)

    // TITLES (Start) =======================================================================
    Ext.applyIf(this, {
      title:         'Adjustment',
      subtitle:      'A request to adjustment the unit or cost value of inventory',
      newTitle:      'Adjustment',
      newSubtitle:   undefined
    });
    // TITLES (End)
    // ACTIONS (Start) =====================================================================
    Ext.apply(this, {
      actions: [{
          xtype: 'button',
          iconCls: 'fa fa-share-square-o',
          tooltip: 'Release',
          listeners: {
            beforerender: this.prepareReleaseAction,
            click: this.onReleaseAction,
            scope: me
          }
        }, {
          xtype: 'button',
          iconCls: 'fa fa-thumbs-up',
          tooltip: 'Approve',
          listeners: {
            beforerender: this.prepareApproveAction,
            click: this.onApproveAction,
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
        }
      ]
    });

    // ACTIONS (End)

    // LISTENERS (Start) ===================================================================

    // LISTENERS (End)


    this.callParent();

  },

  // HANDLERS (Start) ======================================================================

  onApproveAction: function(action, eOpts) {
    this.processEventTransition('approve', 'Adjustment Order was successfully approved.', 'An error occurred approving this adjustment order.');
  }, // onBuildAction

  onCancelAction: function(action, eOpts) {
    this.processEventTransition('cancel', 'Adjustment Order was successfully cancelled.', 'An error occurred releasing this adjustment order.');
  }, // onBuildAction

  prepareApproveAction: function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'pending_approval' ? action.show() : action.hide();
  },

  prepareCancelAction: function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'open' || currentState === 'partial' ? action.show() : action.hide();
  },

  processEventTransition: function(eventName, successMsg, failureMsg) {
    var me = this;

    Omni.service.Adjustment.fireEvent({
        id: this.record.get('adjustment_id'),
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

  },

  // HANDLERS (End)

});
