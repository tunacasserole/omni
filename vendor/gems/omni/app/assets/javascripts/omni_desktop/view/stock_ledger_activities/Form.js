Ext.define('Omni.view.stock_ledger_activities.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-stock_ledger_activities-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      ruleset_idLabel:                            Omni.i18n.model.StockLedgerActivity.ruleset_id,
      sku_idLabel:                                Omni.i18n.model.StockLedgerActivity.sku_id,
      location_idLabel:                           Omni.i18n.model.StockLedgerActivity.location_id,
      supplier_idLabel:                           Omni.i18n.model.StockLedgerActivity.supplier_id,
      customer_idLabel:                           Omni.i18n.model.StockLedgerActivity.customer_id,
      site_idLabel:                               Omni.i18n.model.StockLedgerActivity.site_id,
      unitsLabel:                                 Omni.i18n.model.StockLedgerActivity.units,
      costLabel:                                  Omni.i18n.model.StockLedgerActivity.cost,
      retailLabel:                                Omni.i18n.model.StockLedgerActivity.retail,
      create_dateLabel:                           Omni.i18n.model.StockLedgerActivity.create_date,
      activity_dateLabel:                         Omni.i18n.model.StockLedgerActivity.activity_date,
      posted_dateLabel:                           Omni.i18n.model.StockLedgerActivity.posted_date
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
            { name: 'ruleset_id',                     fieldLabel: this.ruleset_idLabel,                 allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Ruleset',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'ruleset_id', itemTpl:'{display}' },
            { name: 'sku_id',                         fieldLabel: this.sku_idLabel,                     allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Sku',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'sku_id', itemTpl:'{display}' },
            { name: 'location_id',                    fieldLabel: this.location_idLabel,                allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Location',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'location_id', itemTpl:'{display}' },
            { name: 'supplier_id',                    fieldLabel: this.supplier_idLabel,                allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Supplier',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'supplier_id', itemTpl:'{display}' },
            { name: 'customer_id',                    fieldLabel: this.customer_idLabel,                allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Customer',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'customer_id', itemTpl:'{display}' },
            { name: 'site_id',                        fieldLabel: this.site_idLabel,                    allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Site',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'site_id', itemTpl:'{display}' },
            { name: 'units',                          fieldLabel: this.unitsLabel,                      allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'cost',                           fieldLabel: this.costLabel,                       allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'retail',                         fieldLabel: this.retailLabel,                     allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'create_date',                    fieldLabel: this.create_dateLabel,                allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'activity_date',                  fieldLabel: this.activity_dateLabel,              allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'posted_date',                    fieldLabel: this.posted_dateLabel,                allowBlank: true,   disabled: false,    xtype: 'datefield'        }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
