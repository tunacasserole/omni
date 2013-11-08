Ext.define('Omni.view.purchases.AdvancedCreateForm', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-purchases-AdvancedCreateForm',


  initComponent:function () {

    var me = this;


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
      allocation_profile_idLabel:             Omni.i18n.model.Purchase.allocation_profile_id,
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
      total_order_costLabel:                  Omni.i18n.model.Purchase.total_order_cost,
      is_update_blank_detailsLabel:           Omni.i18n.model.Purchase.is_update_blank_details,
      is_update_all_detailsLabel:             Omni.i18n.model.Purchase.is_update_all_details,
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
          items               :[

            { xtype             : 'buildit-Locator',
              store             : Ext.create('Omni.store.User',
                                    {
                                      pageSize      : 20
                                      //defaultearch  : {with: {is_purchase_approver_1: {equal_to:  true}}}
                                      // filters: [{
                                      //   property: 'is_purchase_approver_1',
                                      //   value:  true
                                      // }]
                                    }),
              displayField      : 'full_name',
              queryField        : 'full_name  ',
              valueField        : 'user_id',
              itemTpl           : '{display}',
              name              : 'purchase_approver_1_user_id',
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

    // ACTIONS (End)

    // LISTENERS (Start) ===================================================================

    // LISTENERS (End)


    this.callParent();

  }


});