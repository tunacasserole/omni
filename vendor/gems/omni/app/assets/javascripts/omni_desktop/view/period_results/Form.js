Ext.define('Omni.view.period_results.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-period_results-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      sku_idLabel:                                Omni.i18n.model.PeriodResult.sku_id,
      location_idLabel:                           Omni.i18n.model.PeriodResult.location_id,
      period_idLabel:                             Omni.i18n.model.PeriodResult.period_id,
      adjusted_costLabel:                         Omni.i18n.model.PeriodResult.adjusted_cost,
      adjusted_retailLabel:                       Omni.i18n.model.PeriodResult.adjusted_retail,
      adjusted_unitsLabel:                        Omni.i18n.model.PeriodResult.adjusted_units,
      backorder_costLabel:                        Omni.i18n.model.PeriodResult.backorder_cost,
      backorder_retailLabel:                      Omni.i18n.model.PeriodResult.backorder_retail,
      backorder_unitsLabel:                       Omni.i18n.model.PeriodResult.backorder_units,
      clearance_sale_costLabel:                   Omni.i18n.model.PeriodResult.clearance_sale_cost,
      clearance_sale_retailLabel:                 Omni.i18n.model.PeriodResult.clearance_sale_retail,
      clearance_sale_unitsLabel:                  Omni.i18n.model.PeriodResult.clearance_sale_units,
      consumed_costLabel:                         Omni.i18n.model.PeriodResult.consumed_cost,
      consumed_retailLabel:                       Omni.i18n.model.PeriodResult.consumed_retail,
      consumed_unitsLabel:                        Omni.i18n.model.PeriodResult.consumed_units,
      net_inventory_costLabel:                    Omni.i18n.model.PeriodResult.net_inventory_cost,
      net_inventory_retailLabel:                  Omni.i18n.model.PeriodResult.net_inventory_retail,
      net_inventory_unitsLabel:                   Omni.i18n.model.PeriodResult.net_inventory_units,
      net_sale_costLabel:                         Omni.i18n.model.PeriodResult.net_sale_cost,
      net_sale_retailLabel:                       Omni.i18n.model.PeriodResult.net_sale_retail,
      net_sale_unitsLabel:                        Omni.i18n.model.PeriodResult.net_sale_units,
      produced_costLabel:                         Omni.i18n.model.PeriodResult.produced_cost,
      produced_retailLabel:                       Omni.i18n.model.PeriodResult.produced_retail,
      produced_unitsLabel:                        Omni.i18n.model.PeriodResult.produced_units,
      promo_sale_costLabel:                       Omni.i18n.model.PeriodResult.promo_sale_cost,
      promo_sale_retailLabel:                     Omni.i18n.model.PeriodResult.promo_sale_retail,
      promo_sale_unitsLabel:                      Omni.i18n.model.PeriodResult.promo_sale_units,
      purchased_costLabel:                        Omni.i18n.model.PeriodResult.purchased_cost,
      purchased_retailLabel:                      Omni.i18n.model.PeriodResult.purchased_retail,
      purchased_unitsLabel:                       Omni.i18n.model.PeriodResult.purchased_units,
      received_costLabel:                         Omni.i18n.model.PeriodResult.received_cost,
      received_retailLabel:                       Omni.i18n.model.PeriodResult.received_retail,
      received_unitsLabel:                        Omni.i18n.model.PeriodResult.received_units,
      requested_costLabel:                        Omni.i18n.model.PeriodResult.requested_cost,
      requested_retailLabel:                      Omni.i18n.model.PeriodResult.requested_retail,
      requested_unitsLabel:                       Omni.i18n.model.PeriodResult.requested_units,
      return_sale_costLabel:                      Omni.i18n.model.PeriodResult.return_sale_cost,
      return_sale_retailLabel:                    Omni.i18n.model.PeriodResult.return_sale_retail,
      return_sale_unitsLabel:                     Omni.i18n.model.PeriodResult.return_sale_units,
      shipped_costLabel:                          Omni.i18n.model.PeriodResult.shipped_cost,
      shipped_retailLabel:                        Omni.i18n.model.PeriodResult.shipped_retail,
      shipped_unitsLabel:                         Omni.i18n.model.PeriodResult.shipped_units,
      work_in_process_costLabel:                  Omni.i18n.model.PeriodResult.work_in_process_cost,
      work_in_process_retailLabel:                Omni.i18n.model.PeriodResult.work_in_process_retail,
      work_in_process_unitsLabel:                 Omni.i18n.model.PeriodResult.work_in_process_units,
      professional_discount_costLabel:            Omni.i18n.model.PeriodResult.professional_discount_cost,
      employee_discount_costLabel:                Omni.i18n.model.PeriodResult.employee_discount_cost,
      manager_discount_costLabel:                 Omni.i18n.model.PeriodResult.manager_discount_cost,
      ending_inventory_costLabel:                 Omni.i18n.model.PeriodResult.ending_inventory_cost,
      ending_inventory_retailLabel:               Omni.i18n.model.PeriodResult.ending_inventory_retail,
      ending_inventory_unitsLabel:                Omni.i18n.model.PeriodResult.ending_inventory_units
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
            { name: 'period_id',                      fieldLabel: this.period_idLabel,                  allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Period',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'period_id', itemTpl:'{display}' },
            { name: 'adjusted_cost',                  fieldLabel: this.adjusted_costLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'adjusted_retail',                fieldLabel: this.adjusted_retailLabel,            allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'adjusted_units',                 fieldLabel: this.adjusted_unitsLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'backorder_cost',                 fieldLabel: this.backorder_costLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'backorder_retail',               fieldLabel: this.backorder_retailLabel,           allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'backorder_units',                fieldLabel: this.backorder_unitsLabel,            allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'clearance_sale_cost',            fieldLabel: this.clearance_sale_costLabel,        allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'clearance_sale_retail',          fieldLabel: this.clearance_sale_retailLabel,      allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'clearance_sale_units',           fieldLabel: this.clearance_sale_unitsLabel,       allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'consumed_cost',                  fieldLabel: this.consumed_costLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'consumed_retail',                fieldLabel: this.consumed_retailLabel,            allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'consumed_units',                 fieldLabel: this.consumed_unitsLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'net_inventory_cost',             fieldLabel: this.net_inventory_costLabel,         allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'net_inventory_retail',           fieldLabel: this.net_inventory_retailLabel,       allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'net_inventory_units',            fieldLabel: this.net_inventory_unitsLabel,        allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'net_sale_cost',                  fieldLabel: this.net_sale_costLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'net_sale_retail',                fieldLabel: this.net_sale_retailLabel,            allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'net_sale_units',                 fieldLabel: this.net_sale_unitsLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'produced_cost',                  fieldLabel: this.produced_costLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'produced_retail',                fieldLabel: this.produced_retailLabel,            allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'produced_units',                 fieldLabel: this.produced_unitsLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'promo_sale_cost',                fieldLabel: this.promo_sale_costLabel,            allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'promo_sale_retail',              fieldLabel: this.promo_sale_retailLabel,          allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'promo_sale_units',               fieldLabel: this.promo_sale_unitsLabel,           allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'purchased_cost',                 fieldLabel: this.purchased_costLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'purchased_retail',               fieldLabel: this.purchased_retailLabel,           allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'purchased_units',                fieldLabel: this.purchased_unitsLabel,            allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'received_cost',                  fieldLabel: this.received_costLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'received_retail',                fieldLabel: this.received_retailLabel,            allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'received_units',                 fieldLabel: this.received_unitsLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'requested_cost',                 fieldLabel: this.requested_costLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'requested_retail',               fieldLabel: this.requested_retailLabel,           allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'requested_units',                fieldLabel: this.requested_unitsLabel,            allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'return_sale_cost',               fieldLabel: this.return_sale_costLabel,           allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'return_sale_retail',             fieldLabel: this.return_sale_retailLabel,         allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'return_sale_units',              fieldLabel: this.return_sale_unitsLabel,          allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'shipped_cost',                   fieldLabel: this.shipped_costLabel,               allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'shipped_retail',                 fieldLabel: this.shipped_retailLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'shipped_units',                  fieldLabel: this.shipped_unitsLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'work_in_process_cost',           fieldLabel: this.work_in_process_costLabel,       allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'work_in_process_retail',         fieldLabel: this.work_in_process_retailLabel,     allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'work_in_process_units',          fieldLabel: this.work_in_process_unitsLabel,      allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'professional_discount_cost',     fieldLabel: this.professional_discount_costLabel, allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'employee_discount_cost',         fieldLabel: this.employee_discount_costLabel,     allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'manager_discount_cost',          fieldLabel: this.manager_discount_costLabel,      allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'ending_inventory_cost',          fieldLabel: this.ending_inventory_costLabel,      allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'ending_inventory_retail',        fieldLabel: this.ending_inventory_retailLabel,    allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'ending_inventory_units',         fieldLabel: this.ending_inventory_unitsLabel,     allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
