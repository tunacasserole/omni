Ext.define('Omni.view.system_options.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-system_options-Form',



  initComponent:function () {

    var me = this;


    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      displayLabel:                               Omni.i18n.model.SystemOption.display,
      price_book_idLabel:                         Omni.i18n.model.SystemOption.price_book_id,
      professional_discount_percentLabel:         Omni.i18n.model.SystemOption.professional_discount_percent,
      employee_discount_percentLabel:             Omni.i18n.model.SystemOption.employee_discount_percent,
      regular_sale_ruleset_idLabel:               Omni.i18n.model.SystemOption.regular_sale_ruleset_id,
      promo_sale_ruleset_idLabel:                 Omni.i18n.model.SystemOption.promo_sale_ruleset_id,
      clearance_sale_ruleset_idLabel:             Omni.i18n.model.SystemOption.clearance_sale_ruleset_id,
      transfer_request_ruleset_idLabel:           Omni.i18n.model.SystemOption.transfer_request_ruleset_id,
      transfer_ship_ruleset_idLabel:              Omni.i18n.model.SystemOption.transfer_ship_ruleset_id,
      transfer_transit_ruleset_idLabel:           Omni.i18n.model.SystemOption.transfer_transit_ruleset_id,
      transfer_receive_ruleset_idLabel:           Omni.i18n.model.SystemOption.transfer_receive_ruleset_id,
      transfer_close_ruleset_idLabel:             Omni.i18n.model.SystemOption.transfer_close_ruleset_id,
      transfer_cancel_ruleset_idLabel:            Omni.i18n.model.SystemOption.transfer_cancel_ruleset_id,
      is_charge_ship_locationLabel:               Omni.i18n.model.SystemOption.is_charge_ship_location,
      transfer_gl_account_idLabel:                Omni.i18n.model.SystemOption.transfer_gl_account_id,
      discrepancy_gl_account_idLabel:             Omni.i18n.model.SystemOption.discrepancy_gl_account_id,
      overage_gl_account_idLabel:                 Omni.i18n.model.SystemOption.overage_gl_account_id,
      shortage_gl_account_idLabel:                Omni.i18n.model.SystemOption.shortage_gl_account_id,
      sales_tax_gl_account_idLabel:               Omni.i18n.model.SystemOption.sales_tax_gl_account_id,
      purchase_approval_1_maximum_amountLabel:    Omni.i18n.model.SystemOption.purchase_approval_1_maximum_amount,
      purchase_approval_2_maximum_amountLabel:    Omni.i18n.model.SystemOption.purchase_approval_2_maximum_amount,
      consecutive_invalid_login_attemptsLabel:    Omni.i18n.model.SystemOption.consecutive_invalid_login_attempts
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
            { name: 'display',                        fieldLabel: this.displayLabel,                    allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'price_book_id',                  fieldLabel: this.price_book_idLabel,              allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.PriceBook',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'price_book_id', itemTpl:'{display}' },
            { name: 'professional_discount_percent',  fieldLabel: this.professional_discount_percentLabel,allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'employee_discount_percent',      fieldLabel: this.employee_discount_percentLabel,  allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'regular_sale_ruleset_id',        fieldLabel: this.regular_sale_ruleset_idLabel,    allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Ruleset',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'ruleset_id', itemTpl:'{display}' },
            { name: 'promo_sale_ruleset_id',          fieldLabel: this.promo_sale_ruleset_idLabel,      allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Ruleset',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'ruleset_id', itemTpl:'{display}' },
            { name: 'clearance_sale_ruleset_id',      fieldLabel: this.clearance_sale_ruleset_idLabel,  allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Ruleset',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'ruleset_id', itemTpl:'{display}' },
            { name: 'transfer_request_ruleset_id',    fieldLabel: this.transfer_request_ruleset_idLabel,allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Ruleset',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'ruleset_id', itemTpl:'{display}' },
            { name: 'transfer_ship_ruleset_id',       fieldLabel: this.transfer_ship_ruleset_idLabel,   allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Ruleset',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'ruleset_id', itemTpl:'{display}' },
            { name: 'transfer_transit_ruleset_id',    fieldLabel: this.transfer_transit_ruleset_idLabel,allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Ruleset',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'ruleset_id', itemTpl:'{display}' },
            { name: 'transfer_receive_ruleset_id',    fieldLabel: this.transfer_receive_ruleset_idLabel,allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Ruleset',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'ruleset_id', itemTpl:'{display}' },
            { name: 'transfer_close_ruleset_id',      fieldLabel: this.transfer_close_ruleset_idLabel,  allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Ruleset',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'ruleset_id', itemTpl:'{display}' },
            { name: 'transfer_cancel_ruleset_id',     fieldLabel: this.transfer_cancel_ruleset_idLabel, allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Ruleset',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'ruleset_id', itemTpl:'{display}' },
            { name: 'is_charge_ship_location',        fieldLabel: this.is_charge_ship_locationLabel,    allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'transfer_gl_account_id',         fieldLabel: this.transfer_gl_account_idLabel,     allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.GlAccount',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'gl_account_id', itemTpl:'{display}' },
            { name: 'discrepancy_gl_account_id',      fieldLabel: this.discrepancy_gl_account_idLabel,  allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.GlAccount',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'gl_account_id', itemTpl:'{display}' },
            { name: 'overage_gl_account_id',          fieldLabel: this.overage_gl_account_idLabel,      allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.GlAccount',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'gl_account_id', itemTpl:'{display}' },
            { name: 'shortage_gl_account_id',         fieldLabel: this.shortage_gl_account_idLabel,     allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.GlAccount',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'gl_account_id', itemTpl:'{display}' },
            { name: 'sales_tax_gl_account_id',        fieldLabel: this.sales_tax_gl_account_idLabel,    allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.GlAccount',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'gl_account_id', itemTpl:'{display}' },
            { name: 'consecutive_invalid_login_attempts' ,fieldLabel: this.consecutive_invalid_login_attemptsLabel, allowBlank: true,   disabled: false,    xtype: 'numberfield'        },
            { name: 'purchase_approval_1_maximum_amount' ,fieldLabel: this.purchase_approval_1_maximum_amountLabel, allowBlank: true,   disabled: false,    xtype: 'numberfield'        },
            { name: 'purchase_approval_2_maximum_amount' ,fieldLabel: this.purchase_approval_2_maximum_amountLabel, allowBlank: true,   disabled: false,    xtype: 'numberfield'        }
          ]
        }
      ]
    });
    // FIELDSETS (End)

    // TITLES (Start) =======================================================================
    Ext.applyIf(this, {
      title:         'System Option',
      subtitle:      'All system options',
      newTitle:      'System Option',
      newSubtitle:   'Complete the following to create a new'
    });
    // TITLES (End)

   // ACTIONS (Start) =====================================================================
    Ext.apply(this, {
      actions: [
        {
          xtype      : 'button',
          iconCls    : 'fa fa-accountmap',
          tooltip    : 'Allocate',
        },
        {
          xtype      : 'button',
          iconCls    : 'fa fa-hand-up',
          tooltip    : 'Accept',
        },
        {
          xtype      : 'button',
          iconCls    : 'fa fa-thumbs-up',
          tooltip    : 'Accept',
        },
        {
          xtype      : 'button',
          iconCls    : 'fa fa-certificate',
          tooltip    : 'Approve',
        },
        {
          xtype      : 'button',
          iconCls    : 'fa fa-star',
          tooltip    : 'Approve',
        },
        {
          xtype      : 'button',
          iconCls    : 'fa fa-check',
          tooltip    : 'Approve',
        },
        {
          xtype      : 'button',
          iconCls    : 'fa fa-wrench',
          tooltip    : 'Calculate',
        },
        {
          xtype      : 'button',
          iconCls    : 'fa fa-stop',
          tooltip    : 'Cancel',
        },
        {
          xtype      : 'button',
          iconCls    : 'fa fa-eject',
          tooltip    : 'Cancel',
        },
        {
          xtype      : 'button',
          iconCls    : 'fa fa-ok-circle-o',
          tooltip    : 'Complete',
        },
        {
          xtype      : 'button',
          iconCls    : 'fa fa-legal',
          tooltip    : 'Complete',
        },
        {
          xtype      : 'button',
          iconCls    : 'fa fa-check-sign',
          tooltip    : 'Complete',
        },
        {
          xtype      : 'button',
          iconCls    : 'fa fa-cogs',
          tooltip    : 'Mass Update',
        },
        {
          xtype      : 'button',
          iconCls    : 'fa fa-paper-clip',
          tooltip    : 'Print',
        },
        {
          xtype      : 'button',
          iconCls    : 'fa fa-print',
          tooltip    : 'Print',
        },
        {
          xtype      : 'button',
          iconCls    : 'fa fa-external-link',
          tooltip    : 'Release',
        },
        {
          xtype      : 'button',
          iconCls    : 'fa fa-circle-arrow-o-up',
          tooltip    : 'Release',
        },
        {
          xtype      : 'button',
          iconCls    : 'fa fa-cloud-upload',
          tooltip    : 'Release',
        },
        {
          xtype      : 'button',
          iconCls    : 'fa fa-circle-arrow-o-down',
          tooltip    : 'Receive',
        },
        {
          xtype      : 'button',
          iconCls    : 'fa fa-truck',
          tooltip    : 'Receive',
        },
        {
          xtype      : 'button',
          iconCls    : 'fa fa-plane',
          tooltip    : 'Ship',
        },
        {
          xtype      : 'button',
          iconCls    : 'fa fa-globe',
          tooltip    : 'Ship',
        },
      ]
    });

    // ACTIONS (End)

    this.callParent();
  }

});
