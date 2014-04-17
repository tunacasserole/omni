Ext.define('Omni.view.receipts.Form', {

  extend: 'Buildit.ux.Form',
  alias: 'widget.omni-receipts-Form',


  initComponent: function() {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property: 'receipt_id',
      value: this.record.get('receipt_id')
    };
    // FILTER (End)


    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      receipt_idLabel: Omni.i18n.model.Receipt.receipt_id,
      receipt_nbrLabel: Omni.i18n.model.Receipt.receipt_nbr,
      carrier_supplier_idLabel: Omni.i18n.model.Receipt.carrier_supplier_id,
      location_idLabel: Omni.i18n.model.Receipt.location_id,
      allocation_profile_idLabel: Omni.i18n.model.Receipt.allocation_profile_id,
      displayLabel: Omni.i18n.model.Receipt.display,
      stateLabel: Omni.i18n.model.Receipt.state,
      create_dateLabel: Omni.i18n.model.Receipt.create_date,
      ship_dateLabel: Omni.i18n.model.Receipt.ship_date,
      appointment_dateLabel: Omni.i18n.model.Receipt.appointment_date,
      appointment_durationLabel: Omni.i18n.model.Receipt.appointment_duration,
      start_dateLabel: Omni.i18n.model.Receipt.start_date,
      accept_dateLabel: Omni.i18n.model.Receipt.accept_date,
      complete_dateLabel: Omni.i18n.model.Receipt.complete_date,
      completed_by_user_idLabel: Omni.i18n.model.Receipt.completed_by_user_id,
      accepted_by_user_idLabel: Omni.i18n.model.Receipt.accepted_by_user_id,
      pro_numberLabel: Omni.i18n.model.Receipt.pro_number,
      bill_of_lading_numberLabel: Omni.i18n.model.Receipt.bill_of_lading_number,
      packing_slip_numberLabel: Omni.i18n.model.Receipt.packing_slip_number,
      seal_1_numberLabel: Omni.i18n.model.Receipt.seal_1_number,
      seal_2_numberLabel: Omni.i18n.model.Receipt.seal_2_number,
      seal_3_numberLabel: Omni.i18n.model.Receipt.seal_3_number,
      trailer_identifierLabel: Omni.i18n.model.Receipt.trailer_identifier,
      asn_numberLabel: Omni.i18n.model.Receipt.asn_number,
      standard_carrier_alpha_codeLabel: Omni.i18n.model.Receipt.standard_carrier_alpha_code,
      ship_pointLabel: Omni.i18n.model.Receipt.ship_point,
      ship_viaLabel: Omni.i18n.model.Receipt.ship_via,
      freight_termsLabel: Omni.i18n.model.Receipt.freight_terms,
      invoice_numberLabel: Omni.i18n.model.Receipt.invoice_number,
      is_expected_asnLabel: Omni.i18n.model.Receipt.is_expected_asn,
      is_destroyedLabel: Omni.i18n.model.Receipt.is_destroyed
    });
    // LABELS (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [{
        xtype: 'fieldset',
        title: 'General Information',
        collapsible: true,
        defaultType: 'textfield',
        defaults: {
          anchor: '95%'
        },
        layout: 'anchor',
        items: [{
            xtype: 'textfield',
            name: 'state',
            fieldLabel: this.stateLabel,
            allowBlank: true,
            disabled: true
          },
          // { xtype: 'textfield', name: 'display',                        fieldLabel: this.displayLabel                     , allowBlank: true },
          {
            xtype: 'textfield',
            name: 'receipt_nbr',
            fieldLabel: this.receipt_nbrLabel,
            allowBlank: true,
            disabled: true
          }, {
            xtype: 'buildit-Locator',
            name: 'location_id',
            fieldLabel: this.location_idLabel,
            allowBlank: false,
            disabled: false,
            store: Ext.create('Omni.store.Location', {
              pageSize: 10
            }),
            displayField: 'display',
            queryField: 'display',
            valueField: 'location_id',
            itemTpl: '{display}'
          }, {
            xtype: 'buildit-Locator',
            name: 'carrier_supplier_id',
            fieldLabel: this.carrier_supplier_idLabel,
            allowBlank: true,
            disabled: false,
            store: Ext.create('Omni.store.Supplier', {
              pageSize: 10
            }),
            displayField: 'display',
            queryField: 'display',
            valueField: 'supplier_id',
            itemTpl: '{display}'
          }, {
            xtype: 'datefield',
            name: 'create_date',
            fieldLabel: this.create_dateLabel,
            allowBlank: true,
            disabled: true
          }, {
            xtype: 'datefield',
            name: 'ship_date',
            fieldLabel: this.ship_dateLabel,
            allowBlank: true
          }, {
            xtype: 'datefield',
            name: 'appointment_date',
            fieldLabel: this.appointment_dateLabel,
            allowBlank: true
          }, {
            xtype: 'textfield',
            name: 'appointment_duration',
            fieldLabel: this.appointment_durationLabel,
            allowBlank: true
          }, {
            xtype: 'label',
            text: 'length of appointment in minutes.',
            iconCls: 'instruction'
          }, {
            xtype: 'datefield',
            name: 'start_date',
            fieldLabel: this.start_dateLabel,
            allowBlank: true,
            disabled: true
          }, {
            xtype: 'datefield',
            name: 'accept_date',
            fieldLabel: this.accept_dateLabel,
            allowBlank: true,
            disabled: true
          }, {
            xtype: 'buildit-Locator',
            store: Ext.create('Buildit.store.User', {
              pageSize: 20
            }),
            displayField: 'full_name',
            queryField: 'full_name',
            valueField: 'user_id',
            itemTpl: '{full_name}',
            name: 'completed_by_user_id',
            fieldLabel: this.completed_by_user_idLabel,
            allowBlank: true,
            disabled: true
          }, {
            xtype: 'datefield',
            name: 'complete_date',
            fieldLabel: this.complete_dateLabel,
            allowBlank: true,
            disabled: true
          }, {
            xtype: 'buildit-Locator',
            store: Ext.create('Buildit.store.User', {
              pageSize: 20
            }),
            displayField: 'full_name',
            queryField: 'full_name',
            valueField: 'user_id',
            itemTpl: '{full_name}',
            name: 'accepted_by_user_id',
            fieldLabel: this.accepted_by_user_idLabel,
            allowBlank: true,
            disabled: true
          }, {
            xtype: 'buildit-Locator',
            name: 'allocation_profile_id',
            fieldLabel: this.allocation_profile_idLabel,
            allowBlank: true,
            disabled: false,
            store: Ext.create('Omni.store.AllocationProfile', {
              pageSize: 10
            }),
            displayField: 'display',
            queryField: 'display',
            valueField: 'allocation_profile_id',
            itemTpl: '{display}'
          }
        ]
      }, {
        xtype: 'fieldset',
        title: 'Shipment Information',
        collapsible: true,
        defaultType: 'textfield',
        defaults: {
          anchor: '95%'
        },
        layout: 'anchor',
        items: [{
          xtype: 'textfield',
          name: 'trailer_identifier',
          fieldLabel: this.trailer_identifierLabel,
          allowBlank: true
        }, {
          xtype: 'textfield',
          name: 'pro_number',
          fieldLabel: this.pro_numberLabel,
          allowBlank: true
        }, {
          xtype: 'textfield',
          name: 'bill_of_lading_number',
          fieldLabel: this.bill_of_lading_numberLabel,
          allowBlank: true
        }, {
          xtype: 'textfield',
          name: 'packing_slip_number',
          fieldLabel: this.packing_slip_numberLabel,
          allowBlank: true
        }, {
          xtype: 'textfield',
          name: 'seal_1_number',
          fieldLabel: this.seal_1_numberLabel,
          allowBlank: true
        }, {
          xtype: 'textfield',
          name: 'seal_2_number',
          fieldLabel: this.seal_2_numberLabel,
          allowBlank: true
        }, {
          xtype: 'textfield',
          name: 'seal_3_number',
          fieldLabel: this.seal_3_numberLabel,
          allowBlank: true
        }, {
          xtype: 'textfield',
          name: 'asn_number',
          fieldLabel: this.asn_numberLabel,
          allowBlank: true
        }, {
          xtype: 'checkbox',
          name: 'is_expected_asn',
          fieldLabel: this.is_expected_asnLabel,
          allowBlank: true
        }, {
          xtype: 'textfield',
          name: 'standard_carrier_alpha_code',
          fieldLabel: this.standard_carrier_alpha_codeLabel,
          allowBlank: true
        }, {
          xtype: 'textfield',
          name: 'ship_point',
          fieldLabel: this.ship_pointLabel,
          allowBlank: true
        }, {
          xtype: 'textfield',
          name: 'ship_via',
          fieldLabel: this.ship_viaLabel,
          allowBlank: true
        }, {
          xtype: 'buildit-Lookup',
          name: 'freight_terms',
          fieldLabel: this.freight_termsLabel,
          allowBlank: true,
          category: 'FREIGHT_TERM'
        }, {
          xtype: 'textfield',
          name: 'invoice_number',
          fieldLabel: this.invoice_numberLabel,
          allowBlank: true
        }, ]
      }]
    });
    // FIELDSETS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Receipts',
      newTitle: 'New Receipt',
      newSubtitle: 'Complete the following to create a new Receipt'
    });
    // TITLES (End)

    // ACTIONS (Start) =====================================================================
    Ext.apply(this, {
      actions: [{
          tooltip: 'Upload',
          iconCls: 'fa fa-cloud-upload',
          xtype: 'button',
          listeners: {
            beforerender: this.prepareUploadAction,
            click: this.onUploadAction,
            scope: me
          }
        }, {
          tooltip: 'Accept',
          iconCls: 'fa fa-arrow-circle-o-down',
          xtype: 'button',
          listeners: {
            beforerender: this.prepareAcceptAction,
            click: this.onAcceptAction,
            scope: me
          }
        }, {
          tooltip: 'Start',
          iconCls: 'fa fa-caret-square-o-right',
          xtype: 'button',
          listeners: {
            beforerender: this.prepareStartAction,
            click: this.onStartAction,
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
          tooltip: 'Complete',
          iconCls: 'fa fa-pencil-square-o',
          xtype: 'button',
          listeners: {
            beforerender: this.prepareCompleteAction,
            click: this.onCompleteAction,
            scope: me
          }
        }, {
          tooltip: 'Print',
          iconCls: 'fa fa-print',
          xtype: 'button',
          listeners: {
            beforerender: this.preparePrintAction,
            click: me.onPrintAction,
            scope: me
          }
        }, {
          tooltip: 'Copy Units',
          iconCls: 'fa fa-files-o',
          xtype: 'button',
          listeners: {
            beforerender: this.prepareCopyUnitsAction,
            click: me.onCopyUnitsAction,
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

  onUploadAction: function(action, eOpts) {
    this.processEventTransition('upload', 'Packing list was successfully uploaded.', 'An error occurred uploading this packing list.');
  }, // onBuildAction

  onStartAction: function(action, eOpts) {
    this.processEventTransition('start', 'Receipt was successfully started.', 'An error occurred starting this receipt.');
  }, // onBuildAction

  onReceiveAction: function(action, eOpts) {
    this.processEventTransition('receive', 'Receipt was successfully received.', 'An error occurred receiving this receipt.');
  }, // onBuildAction

  onPrintAction: function(action, eOpts) {
    this.processEventTransition('print', 'Count sheet was successfully printed.', 'An error occurred printing this receipt.');
  },

  onAcceptAction: function(action, eOpts) {
    this.processEventTransition('accept', 'Receipt was successfully accepted.', 'An error occurred accepting this receipt.');
  }, // onBuildAction

  onCompleteAction: function(action, eOpts) {
    this.processEventTransition('complete', 'Receipt was successfully completed.', 'An error occurred completing this receipt.');
  }, // onBuildAction

  onCopyUnitsAction: function(action, eOpts) {
    this.processEventTransition('copy_units', 'Open units on this receipt were successfully copied.', 'An error occurred copying open units on this receipt.');
  }, // onBuildAction


  prepareUploadAction: function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'draft' || currentState === 'scheduled' || currentState === 'processing' ? action.show() : action.hide();
  },

  prepareStartAction: function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'draft' || currentState === 'scheduled' ? action.show() : action.hide();
  },

  prepareReceiveAction: function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'draft' || currentState === 'scheduled' || currentState === 'processing' ? action.show() : action.hide();
  },

  preparePrintAction: function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'draft' || currentState === 'scheduled' || currentState === 'processing' ? action.show() : action.hide();
  },

  prepareAcceptAction: function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'draft' || currentState === 'scheduled' || currentState === 'processing' ? action.show() : action.hide();
  },

  prepareCopyUnitsAction: function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'draft' || currentState === 'scheduled' || currentState === 'processing' ? action.show() : action.hide();
  },

  prepareCompleteAction: function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'accepted' ? action.show() : action.hide();
  },

  processEventTransition: function(eventName, successMsg, failureMsg) {
    var me = this;

    Omni.service.Receipt.fireEvent({
        id: this.record.get('receipt_id'),
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
