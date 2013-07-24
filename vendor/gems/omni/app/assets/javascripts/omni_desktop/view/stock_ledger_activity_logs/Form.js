Ext.define('Omni.view.stock_ledger_activity_logs.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-stock_ledger_activity_logs-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      stock_ledger_activity_idLabel:              Omni.i18n.model.StockLedgerActivityLog.stock_ledger_activity_id,
      activity_log_nbrLabel:                      Omni.i18n.model.StockLedgerActivityLog.activity_log_nbr,
      model_meta_idLabel:                         Omni.i18n.model.StockLedgerActivityLog.model_meta_id,
      attribute_meta_idLabel:                     Omni.i18n.model.StockLedgerActivityLog.attribute_meta_id,
      row_idLabel:                                Omni.i18n.model.StockLedgerActivityLog.row_id,
      rule_actionLabel:                           Omni.i18n.model.StockLedgerActivityLog.rule_action
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
            { name: 'stock_ledger_activity_id',       fieldLabel: this.stock_ledger_activity_idLabel,   allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.StockLedgerActivity',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'stock_ledger_activity_id', itemTpl:'{display}' },
            { name: 'activity_log_nbr',               fieldLabel: this.activity_log_nbrLabel,           allowBlank: false,  disabled: false,    xtype: 'textfield'        },
            { name: 'model_meta_id',                  fieldLabel: this.model_meta_idLabel,              allowBlank: false,  disabled: false,    xtype: 'textfield'        },
            { name: 'attribute_meta_id',              fieldLabel: this.attribute_meta_idLabel,          allowBlank: false,  disabled: false,    xtype: 'textfield'        },
            { name: 'row_id',                         fieldLabel: this.row_idLabel,                     allowBlank: false,  disabled: false,    xtype: 'textfield'        },
            { name: 'rule_action',                    fieldLabel: this.rule_actionLabel,                allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'RULE_ACTION' }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
