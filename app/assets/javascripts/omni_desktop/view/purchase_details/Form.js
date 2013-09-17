Ext.define('Omni.view.purchase_details.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-purchase_details-Form',


  initComponent:function () {

    var me = this;

    var disabled = this.record.get('state') != 'draft' ? true : false;
    if (this.record.phantom){
      disabled = false
    };

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
      cost_idLabel:                           Omni.i18n.model.PurchaseDetail.cost_id,
      descriptionLabel:                       Omni.i18n.model.PurchaseDetail.description,
      supplier_costLabel:                     Omni.i18n.model.PurchaseDetail.supplier_cost,
      invoice_costLabel:                      Omni.i18n.model.PurchaseDetail.invoice_cost,
      inventory_costLabel:                    Omni.i18n.model.PurchaseDetail.inventory_cost,
      extra_costLabel:                        Omni.i18n.model.PurchaseDetail.extra_cost,
      supplier_item_identifierLabel:          Omni.i18n.model.PurchaseDetail.supplier_item_identifier,
      sku_supplier_idLabel:                   Omni.i18n.model.PurchaseDetail.sku_supplier_id,
      color_nameLabel:                        Omni.i18n.model.PurchaseDetail.color_name,
      size_nameLabel:                         Omni.i18n.model.PurchaseDetail.size_name,
      sku_aliasLabel:                         Omni.i18n.model.PurchaseDetail.sku_alias,
      units_orderedLabel:                     Omni.i18n.model.PurchaseDetail.units_ordered,
      order_pack_sizeLabel:                   Omni.i18n.model.PurchaseDetail.order_pack_size,
      order_pack_typeLabel:                   Omni.i18n.model.PurchaseDetail.order_pack_type,
      order_cost_unitsLabel:                  Omni.i18n.model.PurchaseDetail.order_cost_units,
      order_multiple_typeLabel:               Omni.i18n.model.PurchaseDetail.order_multiple_type,
      order_multipleLabel:                    Omni.i18n.model.PurchaseDetail.order_multiple,
      units_approvedLabel:                    Omni.i18n.model.PurchaseDetail.units_approved,
      units_cancelledLabel:                   Omni.i18n.model.PurchaseDetail.units_cancelled,
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
              // store: Ext.create(
              //   'Omni.store.SkuSupplier',
              //   {
              //     pageSize: 30,
              //     filters: [{
              //       property: 'supplier_id',
              //       value: me.association.get('supplier_id')
                  // }]
              store: me.purchaseSupplierStore = Ext.create('Omni.store.SkuSupplier', {pageSize: 30}),
              displayField: 'display',
              queryField: 'display',
              valueField: 'sku_supplier_id',
              itemTpl:'{display}',
              disabled: disabled
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
            // { xtype: 'textfield', name: 'is_destroyed',                   fieldLabel: this.is_destroyedLabel                , allowBlank: true }
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
              minValue: 0,
              decimalPrecision: 2,
              allowBlank: true,
              disabled: disabled
            }
           ,{ xtype: 'numberfield',
              name: 'order_cost_units',
              fieldLabel: this.order_cost_unitsLabel,
              minValue: 1,
              decimalPrecision: 0,
              allowBlank: true,
              disabled: disabled
            }
           ,{ xtype: 'buildit-Locator',
              name: 'cost_id',
              fieldLabel: this.cost_idLabel,
              allowBlank: true,
              store: Ext.create('Omni.store.Cost',{pageSize: 10}),
              displayField: 'display',
              queryField: 'display',
              valueField: 'cost_id',
              itemTpl: '{display}'
            }
           ,{ xtype: 'textfield',
              name: 'invoice_cost',
              fieldLabel: this.invoice_costLabel,
              disabled: true,
              decimalPrecision: 2,
              allowBlank: true
            }
           ,{ xtype: 'textfield',
              name: 'inventory_cost',
              fieldLabel: this.inventory_costLabel,
              disabled: true,
              decimalPrecision: 2,
              allowBlank: true
            }
           ,{ xtype: 'textfield',
              name: 'extra_cost',
              fieldLabel: this.extra_costLabel,
              allowBlank: true
            }
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
            { xtype: 'numberfield',
              name: 'units_ordered',
              fieldLabel: this.units_orderedLabel,
              minValue: 0,
              allowBlank: false,
              disabled: disabled
            }
           ,{ xtype: 'textfield',
              name: 'units_approved',
              fieldLabel: this.units_approvedLabel,
              disabled: true,
              allowBlank: true
            }
           ,{ xtype: 'textfield',
              name: 'units_cancelled',
              fieldLabel: this.units_cancelledLabel,
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
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit PurchaseDetails',
      newTitle: 'New Purchase Detail',
      newSubtitle: 'Complete the following to create a new Purchase Detail'
    });
    // TITLES (End)

    this.callParent();

    me.purchaseSupplierStore.on('beforeload',me.setupsupplierfilter, me);
  },

  setupsupplierfilter: function()
     {
      var me=this;

      var purchase_id = me.association.get('purchase_id');

      var purchaseStore = new Omni.store.Purchase();
      purchaseStore.filter('purchase_id',purchase_id);
      purchaseStore.load(function(records,operation,success){
        var record=records[0];
        if (record) {
          var supplier_id = record.get('supplier_id');
          me.purchaseSupplierStore.proxy.extraParams.search = {
            with: {supplier_id: {equal_to: supplier_id}}
          }
        }
     });
     }
});



