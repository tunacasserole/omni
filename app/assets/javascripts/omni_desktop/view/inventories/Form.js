Ext.define('Omni.view.inventories.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-inventories-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      sku_idLabel:                                Omni.i18n.model.Inventory.sku_id,
      location_idLabel:                           Omni.i18n.model.Inventory.location_id,
      on_hand_unitsLabel:                         Omni.i18n.model.Inventory.on_hand_units,
      in_transit_unitsLabel:                      Omni.i18n.model.Inventory.in_transit_units,
      non_sellable_unitsLabel:                    Omni.i18n.model.Inventory.non_sellable_units,
      allocated_unitsLabel:                       Omni.i18n.model.Inventory.allocated_units,
      reserved_unitsLabel:                        Omni.i18n.model.Inventory.reserved_units,
      shipping_unitsLabel:                        Omni.i18n.model.Inventory.shipping_units,
      work_in_process_unitsLabel:                 Omni.i18n.model.Inventory.work_in_process_units,
      requested_unitsLabel:                       Omni.i18n.model.Inventory.requested_units,
      frozen_unitsLabel:                          Omni.i18n.model.Inventory.frozen_units,
      supplier_on_order_unitsLabel:               Omni.i18n.model.Inventory.supplier_on_order_units,
      warehouse_on_order_unitsLabel:              Omni.i18n.model.Inventory.warehouse_on_order_units,
      cost_poolLabel:                             Omni.i18n.model.Inventory.cost_pool,
      retail_poolLabel:                           Omni.i18n.model.Inventory.retail_pool,
      boy_unitsLabel:                             Omni.i18n.model.Inventory.boy_units,
      boy_costLabel:                              Omni.i18n.model.Inventory.boy_cost,
      boy_retailLabel:                            Omni.i18n.model.Inventory.boy_retail,
      last_inventory_unitsLabel:                  Omni.i18n.model.Inventory.last_inventory_units,
      last_inventory_costLabel:                   Omni.i18n.model.Inventory.last_inventory_cost,
      last_inventory_retailLabel:                 Omni.i18n.model.Inventory.last_inventory_retail,
      reserve_end_dateLabel:                      Omni.i18n.model.Inventory.reserve_end_date,
      first_receipt_dateLabel:                    Omni.i18n.model.Inventory.first_receipt_date,
      last_receipt_dateLabel:                     Omni.i18n.model.Inventory.last_receipt_date,
      first_sale_dateLabel:                       Omni.i18n.model.Inventory.first_sale_date,
      last_sale_dateLabel:                        Omni.i18n.model.Inventory.last_sale_date,
      last_inventory_dateLabel:                   Omni.i18n.model.Inventory.last_inventory_date
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
            { name: 'sku_id',                         fieldLabel: this.sku_idLabel,                     allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Sku',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'sku_id', itemTpl:'{display}' },
            { name: 'location_id',                    fieldLabel: this.location_idLabel,                allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Location',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'location_id', itemTpl:'{display}' },
            { name: 'on_hand_units',                  fieldLabel: this.on_hand_unitsLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'in_transit_units',               fieldLabel: this.in_transit_unitsLabel,           allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'non_sellable_units',             fieldLabel: this.non_sellable_unitsLabel,         allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'allocated_units',                fieldLabel: this.allocated_unitsLabel,            allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'reserved_units',                 fieldLabel: this.reserved_unitsLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'shipping_units',                 fieldLabel: this.shipping_unitsLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'work_in_process_units',          fieldLabel: this.work_in_process_unitsLabel,      allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'requested_units',                fieldLabel: this.requested_unitsLabel,            allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'frozen_units',                   fieldLabel: this.frozen_unitsLabel,               allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'supplier_on_order_units',        fieldLabel: this.supplier_on_order_unitsLabel,    allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'warehouse_on_order_units',       fieldLabel: this.warehouse_on_order_unitsLabel,   allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'cost_pool',                      fieldLabel: this.cost_poolLabel,                  allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'retail_pool',                    fieldLabel: this.retail_poolLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'boy_units',                      fieldLabel: this.boy_unitsLabel,                  allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'boy_cost',                       fieldLabel: this.boy_costLabel,                   allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'boy_retail',                     fieldLabel: this.boy_retailLabel,                 allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'last_inventory_units',           fieldLabel: this.last_inventory_unitsLabel,       allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'last_inventory_cost',            fieldLabel: this.last_inventory_costLabel,        allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'last_inventory_retail',          fieldLabel: this.last_inventory_retailLabel,      allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'reserve_end_date',               fieldLabel: this.reserve_end_dateLabel,           allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'first_receipt_date',             fieldLabel: this.first_receipt_dateLabel,         allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'last_receipt_date',              fieldLabel: this.last_receipt_dateLabel,          allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'first_sale_date',                fieldLabel: this.first_sale_dateLabel,            allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'last_sale_date',                 fieldLabel: this.last_sale_dateLabel,             allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'last_inventory_date',            fieldLabel: this.last_inventory_dateLabel,        allowBlank: true,   disabled: false,    xtype: 'datefield'        }
          ]
        }
      ]
    });
    // FIELDSETS (End)

    // TITLES (Start) =======================================================================
    Ext.applyIf(this, {
      title:         'Inventory',
      subtitle:      'On-hand and on-order inventory balances by SKU and Location',
      newTitle:      'Inventory',
      newSubtitle:   undefined
    });
    // TITLES (End)

    this.callParent();
  }

});
