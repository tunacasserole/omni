Ext.define('Omni.view.purchases.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-purchases-Form',


  initComponent:function () {

    var me = this;

    var disabled = this.record.get('state') != ('draft' || 'pending_approval') ? true : false;
    if (this.record.phantom){
      disabled = false
    };

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'purchase_id',
      value:      this.record.get('purchase_id')
    };
    // FILTER (End)

    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      purchase_idLabel:                       Omni.i18n.model.Purchase.purchase_id,
      displayLabel:                           Omni.i18n.model.Purchase.display,
      purchase_order_nbrLabel:                Omni.i18n.model.Purchase.purchase_order_nbr,
      supplier_idLabel:                       Omni.i18n.model.Purchase.supplier_id,
      location_idLabel:                       Omni.i18n.model.Purchase.location_id,
      purchase_typeLabel:                     Omni.i18n.model.Purchase.purchase_type,
      purchase_sourceLabel:                   Omni.i18n.model.Purchase.purchase_source,
      stateLabel:                             Omni.i18n.model.Purchase.state,
      order_dateLabel:                        Omni.i18n.model.Purchase.order_date,
      ordered_by_user_idLabel:                Omni.i18n.model.Purchase.ordered_by_user_id,
      ship_dateLabel:                         Omni.i18n.model.Purchase.ship_date,
      delivery_dateLabel:                     Omni.i18n.model.Purchase.delivery_date,
      cancel_not_shipped_by_dateLabel:        Omni.i18n.model.Purchase.cancel_not_shipped_by_date,
      cancel_not_received_by_dateLabel:       Omni.i18n.model.Purchase.cancel_not_received_by_date,
      approval_1_dateLabel:                   Omni.i18n.model.Purchase.approval_1_date,
      approval_2_dateLabel:                   Omni.i18n.model.Purchase.approval_2_date,
      approval_3_dateLabel:                   Omni.i18n.model.Purchase.approval_3_date,
      first_receipt_dateLabel:                Omni.i18n.model.Purchase.first_receipt_date,
      cancelled_dateLabel:                    Omni.i18n.model.Purchase.cancelled_date,
      payment_termLabel:                      Omni.i18n.model.Purchase.payment_term,
      freight_termLabel:                      Omni.i18n.model.Purchase.freight_term,
      fob_pointLabel:                         Omni.i18n.model.Purchase.fob_point,
      ship_viaLabel:                          Omni.i18n.model.Purchase.ship_via,
      fob_pointLabel:                         Omni.i18n.model.Purchase.fob_point,
      is_phone_orderLabel:                    Omni.i18n.model.Purchase.is_phone_order,
      confirmed_by_user_idLabel:              Omni.i18n.model.Purchase.confirmed_by_user_id,
      master_purchase_idLabel:                Omni.i18n.model.Purchase.master_purchase_id,
      carrier_supplier_idLabel:               Omni.i18n.model.Purchase.carrier_supplier_id,
      is_special_orderLabel:                  Omni.i18n.model.Purchase.is_special_order,
      is_ship_cancelLabel:                    Omni.i18n.model.Purchase.is_ship_cancel,
      estimated_lead_time_daysLabel:          Omni.i18n.model.Purchase.estimated_lead_time_days,
      purchase_approver_1_user_idLabel:       Omni.i18n.model.Purchase.purchase_approver_1_user_id,
      purchase_approver_2_user_idLabel:       Omni.i18n.model.Purchase.purchase_approver_2_user_id,
      purchase_approver_3_user_idLabel:       Omni.i18n.model.Purchase.purchase_approver_3_user_id,
      last_receipt_dateLabel:                 Omni.i18n.model.Purchase.last_receipt_date,
      pay_to_supplier_idLabel:                Omni.i18n.model.Purchase.pay_to_supplier_id,
      ship_thru_supplier_idLabel:             Omni.i18n.model.Purchase.ship_thru_supplier_id,
      supplier_address_1Label:                Omni.i18n.model.Purchase.supplier_address_1,
      supplier_address_2Label:                Omni.i18n.model.Purchase.supplier_address_2,
      supplier_address_3Label:                Omni.i18n.model.Purchase.supplier_address_3,
      supplier_address_4Label:                Omni.i18n.model.Purchase.supplier_address_4,
      supplier_cityLabel:                     Omni.i18n.model.Purchase.supplier_city,
      supplier_state_codeLabel:               Omni.i18n.model.Purchase.supplier_state_code,
      supplier_zipLabel:                      Omni.i18n.model.Purchase.supplier_zip,
      supplier_countryLabel:                  Omni.i18n.model.Purchase.supplier_country,
      is_destroyedLabel:                      Omni.i18n.model.Purchase.is_destroyed,
      purchase_approver_1_location_user_idLabel: Omni.i18n.model.Purchase.purchase_approver_1_location_user_id,
      purchase_approver_2_location_user_idLabel: Omni.i18n.model.Purchase.purchase_approver_1_location_user_id,
      purchase_approver_3_location_user_idLabel: Omni.i18n.model.Purchase.purchase_approver_1_location_user_id,
      audit_created_byLabel:                  Omni.i18n.model.Purchase.audit_created_by,
      audit_updated_byLabel:                  Omni.i18n.model.Purchase.audit_updated_by,
      audit_created_atLabel:                  Omni.i18n.model.Purchase.audit_created_at,
      audit_updated_atLabel:                  Omni.i18n.model.Purchase.audit_updated_at,
      total_order_unitsLabel:                 Omni.i18n.model.Purchase.total_order_units,
      total_order_costLabel:                  Omni.i18n.model.Purchase.total_order_cost
    });
    // LABELS (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {

// make entire form read only based on state
      // disabled: disabled,
      items: [
        {
          xtype              : 'fieldset',
          title              : 'General Information',
          collapsible        : true,
          defaultType        : 'textfield',
          defaults           : {anchor: '95%'},
          layout             : 'anchor',
          // disabled:     disabled,     // disable fieldset if disabled var is true
          disabled           : disabled,
          items              :[

            { xtype             : 'textfield',
              name              : 'purchase_order_nbr',
              fieldLabel        : this.purchase_order_nbrLabel,
              allowBlank        : true
            },
            { xtype             : 'buildit-Locator',
              name              : 'supplier_id',
              fieldLabel        : this.supplier_idLabel,
              allowBlank        : true,
              store             : Ext.create('Omni.store.Supplier',{pageSize: 20}),
              displayField      : 'display',
              queryField        : 'display',
              valueField        : 'supplier_id',
              // initialValue      : this.record.get('display'), // gets Purchase.display, should be Supplier.display
              itemTpl           : '{display}'
            },
            { xtype             : 'buildit-Locator',
              name              : 'location_id',
              fieldLabel        : this.location_idLabel,
              allowBlank        : true,
              store             : Ext.create('Omni.store.Location',{pageSize: 50}),
              displayField      : 'display',
              queryField        : 'display',
              valueField        : 'location_id',
              itemTpl           : '{display}'
            },
            { xtype             : 'textfield',
              name              : 'state',
              fieldLabel        : this.stateLabel,
              allowBlank        : true,
              disabled          : true
            },
            { xtype             : 'numberfield',
              name              : 'total_order_units',
              disabled          : true,
              hideTrigger       : true,
              keyNavEnabled     : false,
              mouseWheelEnabled : false,
              decimalPrecision  : 2,
              fieldLabel        : 'Total Units Ordered'
            },
            { xtype             : 'numberfield',
              name              : 'total_order_cost',
              disabled          : true,
              hideTrigger       : true,
              keyNavEnabled     : false,
              mouseWheelEnabled : false,
              decimalPrecision  : 2,
              fieldLabel        : 'Total Order Cost'
            }
          ]
        }
       ,{
          xtype:        'fieldset',
          title:        'Purchase Order Dates',
          collapsible:  true,
          defaultType:  'textfield',
          defaults:     {anchor: '70%'},
          layout:       'anchor',
          items:[

            { xtype             : 'datefield',
              name              : 'order_date',
              fieldLabel        : this.order_dateLabel,
              value             : new Date(),
              allowBlank        : true
            },
            { xtype             : 'datefield',
              name              : 'ship_date',
              fieldLabel        : this.ship_dateLabel,
              allowBlank        : true,
              disabled          : false
            },
            { xtype             : 'datefield',
              name              : 'delivery_date',
              fieldLabel        : this.delivery_dateLabel,
              allowBlank        : true,
              disabled          : false
            },
            { xtype: 'datefield', name: 'cancel_not_shipped_by_date',     fieldLabel: this.cancel_not_shipped_by_dateLabel  , allowBlank: true, disabled: false },
            { xtype: 'datefield', name: 'cancel_not_received_by_date',    fieldLabel: this.cancel_not_received_by_dateLabel , allowBlank: true, disabled: false },
            { xtype: 'datefield', name: 'first_receipt_date',             fieldLabel: this.first_receipt_dateLabel          , allowBlank: true, disabled: true },
            { xtype: 'datefield', name: 'last_receipt_date',              fieldLabel: this.last_receipt_dateLabel           , allowBlank: true, disabled: true },
            { xtype: 'datefield', name: 'cancelled_date',                 fieldLabel: this.cancelled_dateLabel              , allowBlank: true, disabled: true },
          ]
        }
       ,{
          xtype               : 'fieldset',
          title               : 'Purchase Order Approvals',
          collapsible         : true,
          defaultType         : 'textfield',
          defaults            : {anchor: '70%'},
          layout              : 'anchor',
          disabled            : disabled,
          items               :[

            { xtype             : 'buildit-Locator',
              store             : Ext.create('Omni.store.LocationUser',
                                    {
                                      pageSize: 20,
                                      filters: [{
                                        property: 'is_purchase_approver_1',
                                        value:  true
                                      }]
                                    }),
              displayField      : 'user_display',
              queryField        : 'user_display',
              valueField        : 'user_id',
              itemTpl           : '{user_display}',
              name              : 'purchase_approver_1_location_user_id',
              fieldLabel        : this.purchase_approver_1_user_idLabel,
              allowBlank        : true
            }
           ,{ xtype             : 'datefield',
              name              : 'approval_1_date',
              fieldLabel        : this.approval_1_dateLabel,
              disabled          : true,
              allowBlank        : false
            }
           ,{ xtype             : 'buildit-Locator',
              store             : Ext.create('Buildit.store.User',{pageSize: 20}),
              displayField      : 'full_name',
              queryField        : 'full_name',
              valueField        : 'user_id',
              itemTpl           : '{full_name}',
              name              : 'purchase_approver_2_user_id',
              fieldLabel        : this.purchase_approver_2_user_idLabel,
              allowBlank        : true
            }
           ,{ xtype             : 'datefield',
              name              : 'approval_2_date',
              fieldLabel        : this.approval_2_dateLabel,
              disabled          : true,
              allowBlank        : false
            }
           ,{ xtype             : 'buildit-Locator',
              store             : Ext.create('Buildit.store.User',{pageSize: 20}),
              displayField      : 'full_name',
              queryField        : 'full_name',
              valueField        : 'user_id',
              itemTpl           : '{full_name}',
              name              : 'purchase_approver_3_user_id',
              fieldLabel        : this.purchase_approver_3_user_idLabel,
              allowBlank        : true
            }
           ,{ xtype             : 'datefield',
              name              : 'approval_3_date',
              fieldLabel        : this.approval_3_dateLabel,
              disabled          : true,
              allowBlank        : false
            }
          ]
        }
        ,{
          xtype: 'fieldset',
          title: 'Contact Information',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { xtype             : 'textfield',
              name              : 'supplier_address_1',
              fieldLabel        : this.supplier_address_1Label,
              allowBlank        : true,
              disabled          : false,
            },
            { xtype             : 'textfield',
              name              : 'supplier_address_2',
              fieldLabel        : this.supplier_address_2Label,
              allowBlank        : true,
              disabled          : false,
            },
            { xtype             : 'textfield',
              name              : 'supplier_address_3',
              fieldLabel        : this.supplier_address_3Label,
              allowBlank        : true,
              disabled          : false,
            },
            { xtype             : 'textfield',
              name              : 'supplier_address_4',
              fieldLabel        : this.supplier_address_4Label,
              allowBlank        : true,
              disabled          : false,
            },
            { xtype             : 'textfield',
              name              : 'supplier_city',
              fieldLabel        : this.supplier_cityLabel,
              allowBlank        : true,
              disabled          : false,
            },
            { xtype             : 'buildit-Lookup',
              name              : 'supplier_state_code',
              fieldLabel        : this.supplier_state_codeLabel,
              allowBlank        : true,
              category          : 'STATE_CODE'
            },
            { xtype             : 'textfield',
              name              : 'supplier_zip',
              fieldLabel        : this.supplier_zipLabel,
              allowBlank        : true,
              disabled          : false,
            },
            { xtype             : 'textfield',
              name              : 'supplier_country',
              fieldLabel        : this.supplier_countryLabel,
              allowBlank        : true,
              disabled          : false,
            }
          ]
        },
       ,{
          xtype:        'fieldset',
          title:        'Logistics Information',
          collapsible:  true,
          defaultType:  'textfield',
          defaults:     {anchor: '70%'},
          layout:       'anchor',
          items:[

            { xtype             : 'buildit-Lookup',
              name              : 'freight_term',
              fieldLabel        : this.freight_termLabel,
              allowBlank        : true,
              category          : 'FREIGHT_TERM'
            },
            { xtype             : 'buildit-Lookup',
              name              : 'fob_point',
              fieldLabel        : this.fob_pointLabel,
              allowBlank        : true,
              category          : 'FOB_POINT'
            },
            { xtype             : 'textfield',
              name              : 'ship_via',
              fieldLabel        : this.ship_viaLabel,
              allowBlank        : true
            },
            { xtype             : 'buildit-Locator',
              name              : 'carrier_supplier_id',
              fieldLabel        : this.carrier_supplier_idLabel,
              allowBlank        : true,
              store             : Ext.create('Omni.store.Supplier',{pageSize: 10}),
              displayField      : 'display',
              queryField        : 'display',
              valueField        : 'carrier_supplier_id',
              itemTpl           : '{display}'
            },
            { xtype             : 'textfield',
              name              : 'estimated_lead_time_days',
              fieldLabel        : this.estimated_lead_time_daysLabel,
              allowBlank        : true
            },
            { xtype             : 'buildit-Locator',
              name              : 'ship_thru_supplier_id',
              fieldLabel        : this.ship_thru_supplier_idLabel,
              allowBlank        : true,
              store             : Ext.create('Omni.store.Supplier',{pageSize: 10}),
              displayField      : 'display',
              queryField        : 'display',
              valueField        : 'carrier_supplier_id',
              itemTpl           : '{display}'
            },
            { xtype             : 'buildit-Locator',
              name              : 'master_purchase_id',
              fieldLabel        : this.master_purchase_idLabel,
              allowBlank        : true,
              store             : Ext.create('Omni.store.Purchase',{pageSize: 20}),
              displayField      : 'display',
              queryField        : 'display',
              valueField        : 'master_purchase_id',
              itemTpl           : '{display}'
            },
            { xtype             : 'checkbox',
              name              : 'is_special_order',
              fieldLabel        : this.is_special_orderLabel,
              allowBlank        : true
            }
          ]
        }

       ,{
          xtype:        'fieldset',
          title:        'Other Information',
          collapsible:  true,
          defaultType:  'textfield',
          defaults:     {anchor: '70%'},
          layout:       'anchor',
          items:[
            { xtype: 'buildit-Lookup',  name: 'purchase_type',        fieldLabel: this.purchase_typeLabel               , allowBlank: true, category:   'PURCHASE_TYPE' },
            { xtype: 'buildit-Lookup',  name: 'purchase_source',      fieldLabel: this.purchase_sourceLabel             , allowBlank: true, category:   'PURCHASE_SOURCE' },
            { xtype             : 'buildit-Lookup',
              name              : 'payment_term',
              fieldLabel        : this.payment_termLabel,
              allowBlank        : true,
              category          : 'PAYMENT_TERM'
            },
            { xtype             : 'buildit-Locator',
              name              : 'pay_to_supplier_id',
              fieldLabel        : this.pay_to_supplier_idLabel,
              allowBlank        : true,
              store             : Ext.create('Omni.store.Supplier',{pageSize: 10}),
              displayField      : 'display',
              queryField        : 'display',
              valueField        : 'pay_to_supplier_id',
              itemTpl           : '{display}'
            },
            { xtype             : 'buildit-Locator',
              store             : Ext.create('Buildit.store.User',{pageSize: 20}),
              displayField      : 'full_name',
              queryField        : 'full_name',
              valueField        : 'user_id',
              itemTpl           : '{full_name}',
              name              : 'ordered_by_user_id',
              fieldLabel        : this.ordered_by_user_idLabel,
              allowBlank        : true
            },
            { xtype             : 'checkbox',
              name              : 'is_phone_order',
              fieldLabel        : this.is_phone_orderLabel,
              allowBlank        : true
            },
            { xtype             : 'buildit-Locator',
              name              : 'confirmed_by_user_id',
              fieldLabel        : this.confirmed_by_user_idLabel,
              allowBlank        : true,
              store             :   Ext.create('Buildit.store.User',{pageSize: 20}),
              displayField      : 'full_name',
              queryField        : 'full_name',
              valueField        : 'confirmed_by_user_id',
              itemTpl           : '{full_name}'
            }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Purchases',
      newTitle: 'New Purchase',
      newSubtitle: 'Complete the following to create a new Purchase'
    });
    // TITLES (End)

    // ACTIONS (Start) =====================================================================
    Ext.apply(this, {
      actions: [
        {
          xtype      : 'button',
          cls        : 'submit',
          tooltip    : 'Release Purchase Order',
          listeners  : {
            beforerender  : this.prepareReleaseAction,
            click         : this.onReleaseAction,
            scope         : me
          }
        },
        {
          xtype      : 'button',
          cls        : 'approve',
          tooltip    : 'Approve Purchase Order',
          listeners  : {
            beforerender  : this.prepareApproveAction,
            click         : this.onApproveAction,
            scope         : me
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

  onReleaseAction : function(action, eOpts){
    this.processEventTransition('release', 'Purchase Order was successfully released.', 'An error occurred releasing this purchase order.');
  }, // onBuildAction

  onApproveAction : function(action, eOpts){
    this.processEventTransition('release', 'Purchase Order was successfully approved.', 'Approval was not completed.');
  }, // onBuildAction

  processEventTransition : function(eventName, successMsg, failureMsg){
    var me = this;

    Omni.service.Purchase.fireEvent({
        id      : this.record.get('purchase_id'),
        name    : eventName
      },
      function(result, e){
        me.getForm().clearInvalid();
        if(result && result.success == true){
          Buildit.infoMsg(successMsg);
          me.record.set(result);
          me.loadRecord(me.record);
          me.fireEvent('recordchanged', me, me.banner);
          me.doLayout();
        } else {
          var response = Ext.JSON.decode(e.xhr.responseText).result;

          if(response.errors)
            me.getForm().markInvalid(response.errors);

          var error_message = failureMsg;
          if(response.message)
            error_message = response.message;

          if(response.errors)
            error_message = error_message + '. Please fix the highlighted fields and try again.'

          Buildit.errorMsg(error_message);
        }
      }
    );

  },

  prepareReleaseAction : function(action, eOpts) {
    var currentState = this.record.get('state');
  },

  prepareApproveAction : function(action, eOpts) {
    var currentState = this.record.get('state');
  }

  // HANDLERS (End)

});