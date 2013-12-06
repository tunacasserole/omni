Ext.define('Omni.view.purchase_details.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-purchase_details-Form',

  initComponent:function () {

    var me = this;

    var disabled = this.record.get('state') != 'draft' ? true : false;
    if (this.record.phantom){
      disabled = false
    };

    var supplier_id = this.association.get('supplier_id');
    // console.log(supplier_id);
    // var association = this.association;
    // console.log(association);
    // var supplier = (Buildit.context.roles.indexOf("BUYER") >= 0 ? true : false)

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'purchase_detail_id',
      value:      this.record.get('purchase_detail_id')
    };
    // FILTER (End)


    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      purchase_detail_idLabel:                Omni.i18n.model.PurchaseDetail.purchase_detail_id,
      purchase_displayLabel:                  Omni.i18n.model.PurchaseDetail.purchase_display,
      purchase_idLabel:                       Omni.i18n.model.PurchaseDetail.purchase_id,
      displayLabel:                           Omni.i18n.model.PurchaseDetail.display,
      stateLabel:                             Omni.i18n.model.PurchaseDetail.state,
      purchase_line_nbrLabel:                 Omni.i18n.model.PurchaseDetail.purchase_line_nbr,
      sku_idLabel:                            Omni.i18n.model.PurchaseDetail.sku_id,
      descriptionLabel:                       Omni.i18n.model.PurchaseDetail.description,
      supplier_item_identifierLabel:          Omni.i18n.model.PurchaseDetail.supplier_item_identifier,
      sku_supplier_idLabel:                   Omni.i18n.model.PurchaseDetail.sku_supplier_id,
      color_nameLabel:                        Omni.i18n.model.PurchaseDetail.color_name,
      size_nameLabel:                         Omni.i18n.model.PurchaseDetail.size_name,
      sku_aliasLabel:                         Omni.i18n.model.PurchaseDetail.sku_alias,
      allocation_profile_idLabel:             Omni.i18n.model.PurchaseDetail.allocation_profile_id,
      units_orderedLabel:                     Omni.i18n.model.PurchaseDetail.units_ordered,
      order_pack_sizeLabel:                   Omni.i18n.model.PurchaseDetail.order_pack_size,
      order_pack_typeLabel:                   Omni.i18n.model.PurchaseDetail.order_pack_type,
      order_cost_unitsLabel:                  Omni.i18n.model.PurchaseDetail.order_cost_units,
      order_multiple_typeLabel:               Omni.i18n.model.PurchaseDetail.order_multiple_type,
      order_multipleLabel:                    Omni.i18n.model.PurchaseDetail.order_multiple,
      selling_units_approvedLabel:            Omni.i18n.model.PurchaseDetail.selling_units_approved,
      selling_units_receivedLabel:            Omni.i18n.model.PurchaseDetail.selling_units_received,
      selling_units_cancelledLabel:           Omni.i18n.model.PurchaseDetail.selling_units_cancelled,
      open_unitsLabel:                        Omni.i18n.model.PurchaseDetail.open_units,
      supplier_costLabel:                     Omni.i18n.model.PurchaseDetail.supplier_cost,
      invoice_costLabel:                      Omni.i18n.model.PurchaseDetail.invoice_cost,
      inventory_costLabel:                    Omni.i18n.model.PurchaseDetail.inventory_cost,
      extra_costLabel:                        Omni.i18n.model.PurchaseDetail.extra_cost,
      is_destroyedLabel:                      Omni.i18n.model.PurchaseDetail.is_destroyed
    });
    // LABELS (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [
        {
          xtype:        'fieldset',
          title:        'Product Information',
          scheme:       'fieldset_scheme_styles',
          collapsible:  true,
          defaultType:  'textfield',
          defaults:     {anchor: '95%'},
          layout:       'anchor',
          items:[

            // { xtype: 'textfield', name: 'purchase_detail_id',             fieldLabel: this.purchase_detail_idLabel          , allowBlank: true },
            { xtype: 'textfield',
              name: 'purchase_display',
              fieldLabel: this.purchase_displayLabel,
              allowBlank: true,
              disabled: true
            }
            // { xtype: 'textfield', name: 'display', fieldLabel: this.displayLabel, allowBlank: true, disabled: true },
           ,{ xtype: 'textfield',
              name: 'purchase_line_nbr',
              fieldLabel: this.purchase_line_nbrLabel,
              allowBlank: true,
              disabled: true
            }
           ,{ xtype: 'textfield',
              name: 'state',
              fieldLabel: this.stateLabel,
              allowBlank: true,
              disabled: true
            },
           ,{ xtype: 'buildit-Locator',
              name: 'sku_supplier_id',
              fieldLabel: this.sku_supplier_idLabel,
              allowBlank: false,
              store: Ext.create('Omni.store.SkuSupplier', {
                pageSize: 10
              }),
              displayField: 'display',
              queryField: 'display',
              valueField: 'sku_supplier_id',
              itemTpl:'{display}',
              emptyText: 'skus sold by the supplier for this purchase.',
              defaultSearch: {
                with: { supplier_id: { equal_to: supplier_id } }
              },
              disabled: disabled
            }
            ,{ xtype: 'numberfield',
              name: 'units_ordered',
              fieldLabel: this.units_orderedLabel,
              minValue: 0,
              allowBlank: false,
              disabled: disabled
            }
            ,{ xtype: 'numberfield',
              name: 'open_units',
              fieldLabel: this.open_unitsLabel,
              allowBlank: true,
              disabled: true
            }
           ,{ xtype: 'textfield',
              name: 'supplier_item_identifier',
              fieldLabel: this.supplier_item_identifierLabel,
              allowBlank: true
            }
           ,{ xtype: 'textarea',
              name: 'description',
              fieldLabel: this.descriptionLabel,
              allowBlank: true
            }
           ,{ xtype: 'textfield',
              name: 'color_name',
              fieldLabel: this.color_nameLabel,
              allowBlank: true
            }
           ,{ xtype: 'textfield',
              name: 'size_name',
              fieldLabel: this.size_nameLabel,
              allowBlank: true
             }
           ,{ xtype: 'textfield',
              name: 'sku_alias',
              fieldLabel: this.sku_aliasLabel,
              allowBlank: true
             }
            ,{ xtype            : 'buildit-Locator',
              name              : 'allocation_profile_id',
              fieldLabel        : this.allocation_profile_idLabel,
              allowBlank        : true,
              store             : Ext.create('Omni.store.AllocationProfile',{pageSize: 50}),
              displayField      : 'display',
              queryField        : 'display',
              valueField        : 'allocation_profile_id',
              itemTpl           : '{display}'
            }

            // { xtype: 'textfield', name: 'is_destroyed',                   fieldLabel: this.is_destroyedLabel                , allowBlank: true }
          ]
        }
        ,{
          xtype: 'fieldset',
          title: 'Order Details',
          scheme: 'fieldset_scheme_1',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
           ,{ xtype: 'textfield',
              name: 'selling_units_approved',
              fieldLabel: this.selling_units_approvedLabel,
              disabled: true,
              allowBlank: true
            }
           ,{ xtype: 'textfield',
              name: 'selling_units_received',
              fieldLabel: this.selling_units_receivedLabel,
              disabled: true,
              allowBlank: true
            }
           ,{ xtype: 'textfield',
              name: 'selling_units_cancelled',
              fieldLabel: this.selling_units_cancelledLabel,
              disabled: true,
              allowBlank: true
            }
           ,{ xtype: 'textfield',
              name: 'order_pack_size',
              fieldLabel: this.order_pack_sizeLabel,
              allowBlank: true,
              disabled: disabled
            }
           ,{ xtype: 'buildit-Lookup',
              name: 'order_pack_type',
              fieldLabel: this.order_pack_typeLabel,
              allowBlank: true,
              category:   'PACK_TYPE'
            }
           ,{ xtype: 'buildit-Lookup',
              name: 'order_multiple_type',
              fieldLabel: this.order_multiple_typeLabel,
              allowBlank: true,
              category:   'ORDER_MULTIPLE_TYPE'
            }
           ,{ xtype: 'textfield',
              name: 'order_multiple',
              fieldLabel: this.order_multipleLabel,
              allowBlank: true
            }
          ]
        }
        ,{
          xtype: 'fieldset',
          title: 'Cost Details',
          scheme: 'fieldset_scheme_1',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { xtype: 'numberfield',
              name: 'supplier_cost',
              fieldLabel: this.supplier_costLabel,
              xtype: 'currencyfield',
              currencySymbol: null,
              allowBlank: true,
              disabled: disabled
            }
           ,{ xtype: 'numberfield',
              name: 'order_cost_units',
              fieldLabel: this.order_cost_unitsLabel,
              // minValue: 1,
              // xtype: 'currencyfield',
              // currencySymbol: null,
              disabled: disabled
            }
           // ,{ xtype: 'buildit-Locator',
           //    name: 'cost_id',
           //    fieldLabel: this.cost_idLabel,
           //    allowBlank: true,
           //    store: Ext.create('Omni.store.Cost',{pageSize: 10}),
           //    displayField: 'display',
           //    queryField: 'display',
           //    valueField: 'cost_id',
           //    itemTpl: '{display}'
           //  }
//           ,{ xtype: 'textfield',
//              name: 'invoice_cost',
//              fieldLabel: this.invoice_costLabel,
//              disabled: true,
//              decimalPrecision: 2,
//              allowBlank: true
//            }
           ,{ xtype: 'textfield',
              name: 'inventory_cost',
              fieldLabel: this.inventory_costLabel,
              disabled: true,
              xtype: 'currencyfield',
              currencySymbol: null,
              allowBlank: true
            }
           ,{ xtype: 'textfield',
              name: 'extra_cost',
              fieldLabel: this.extra_costLabel,
              allowBlank: true,
              xtype: 'currencyfield',
              currencySymbol: null,

            }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Purchase Details',
      newTitle: 'New Purchase Detail',
      newSubtitle: 'Complete the following to create a new Purchase Detail'
    });
    // TITLES (End)
    // ACTIONS (Start) =====================================================================
    Ext.apply(this, {
      actions: [
        {
          xtype      : 'button',
          iconCls    : 'icon-arrow-down',
          tooltip    : 'Receive Allocation',
          listeners  : {
            beforerender  : this.prepareReceiveAction,
            click         : this.onReceiveAction,
            scope         : me
          }
        },
        {
          xtype      : 'button',
          iconCls    : 'icon-arrow-up',
          tooltip    : 'Release Allocation',
          listeners  : {
            beforerender  : this.prepareReleaseAction,
            click         : this.onReleaseAction,
            scope         : me
          }
        },
        {
          xtype      : 'button',
          iconCls    : 'icon-thumbs-up',
          tooltip    : 'Approve',
          listeners  : {
            beforerender  : this.prepareApproveAction,
            click         : this.onApproveAction,
            scope         : me
          }
        },
        {
          xtype      : 'button',
          iconCls    : 'icon-sitemap',
          tooltip    : 'Allocate',
          listeners  : {
            beforerender  : this.prepareAllocateAction,
            click         : this.onAllocateAction,
            scope         : me
          }
        },
         {
          xtype      : 'button',
          cls        : 'close',
          tooltip    : 'Cancel',
          listeners  : {
            beforerender  : this.prepareCancelAction,
            click         : this.onCancelAction,
            scope         : me
          }
        }
      ]
    });
    // ACTIONS (End)

    // LISTENERS (Start) ===================================================================
    // LISTENERS (End)

    this.callParent();

    // me.purchaseSupplierStore.on('beforeload',me.setupsupplierfilter, me);
  },

  // setupsupplierfilter: function()
  //    {
  //     var me=this;

  //     var purchase_id = me.association.get('purchase_id');

  //     var purchaseStore = new Omni.store.Purchase();
  //     purchaseStore.filter('purchase_id',purchase_id);
  //     purchaseStore.load(function(records,operation,success){
  //       var record=records[0];
  //       if (record) {
  //         var supplier_id = record.get('supplier_id');
  //         me.purchaseSupplierStore.proxy.extraParams.search = {
  //           with: {supplier_id: {equal_to: supplier_id}}
  //         }
  //       }
  //    });
  //    },

  onReceiveAction : function(action, eOpts){
    this.processEventTransition('receive', 'Purchase Detail was successfully received.', 'An error occurred receiving this purchase detail.');
  }, // onBuildAction

  onReleaseAction : function(action, eOpts){
    this.processEventTransition('release', 'Allocation was successfully released for this purchase detail.', 'An error occurred releasing the allocation for this purchase detail.');
  }, // onBuildAction

  onCancelAction : function(action, eOpts){
    this.processEventTransition('cancel', 'Purchase detail was successfully cancelled.', 'An error occurred releasing this purchase detail.');
  }, // onBuildAction

  onAllocateAction : function(action, eOpts){
    this.processEventTransition('allocate', 'Purchase detail was successfully allocated.', 'An error occurred allocated this purchase detail.');
  }, // onBuildAction

  onApproveAction : function(action, eOpts){
    this.processEventTransition('approve', 'Purchase detail was successfully approved.', 'An error occurred approving this purchase detail.');
  }, // onBuildAction

  prepareReceiveAction : function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'open' || currentState === 'partial' ? action.show() : action.hide();
  },

  prepareReleaseAction : function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'complete' ? action.show() : action.hide();
  },

  prepareApproveAction : function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'draft' ? action.show() : action.hide();
  },

  prepareAllocateAction : function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'draft' || currentState === 'open' ? action.show() : action.hide();
  },

  prepareCancelAction : function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'open' || currentState === 'partial' ? action.show() : action.hide();
  },

  processEventTransition : function(eventName, successMsg, failureMsg){
    var me = this;

    Omni.service.PurchaseDetail.fireEvent({
        id      : this.record.get('purchase_detail_id'),
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

  // HANDLERS (End)

});



