Ext.define('Omni.view.orders.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-orders-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      location_idLabel:                           Omni.i18n.model.Order.location_id,
      terminal_idLabel:                           Omni.i18n.model.Order.terminal_id,
      customer_order_nbrLabel:                    Omni.i18n.model.Order.customer_order_nbr,
      customer_idLabel:                           Omni.i18n.model.Order.customer_id,
      order_start_dateLabel:                      Omni.i18n.model.Order.order_start_date,
      order_dateLabel:                            Omni.i18n.model.Order.order_date,
      price_lookup_dateLabel:                     Omni.i18n.model.Order.price_lookup_date,
      user_idLabel:                               Omni.i18n.model.Order.user_id,
      order_sourceLabel:                          Omni.i18n.model.Order.order_source,
      is_tax_exempt_dateLabel:                    Omni.i18n.model.Order.is_tax_exempt_date,
      is_tax_exempt_customerLabel:                Omni.i18n.model.Order.is_tax_exempt_customer,
      is_trade_discount_orderLabel:               Omni.i18n.model.Order.is_trade_discount_order,
      order_totalLabel:                           Omni.i18n.model.Order.order_total,
      stateLabel:                                 Omni.i18n.model.Order.state
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
            { name: 'location_id',                    fieldLabel: this.location_idLabel,                allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Location',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'location_id', itemTpl:'{display}' },
            { name: 'terminal_id',                    fieldLabel: this.terminal_idLabel,                allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Terminal',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'terminal_id', itemTpl:'{display}' },
            { name: 'customer_order_nbr',             fieldLabel: this.customer_order_nbrLabel,         allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'customer_id',                    fieldLabel: this.customer_idLabel,                allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Customer',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'customer_id', itemTpl:'{display}' },
            { name: 'order_start_date',               fieldLabel: this.order_start_dateLabel,           allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'order_date',                     fieldLabel: this.order_dateLabel,                 allowBlank: false,  disabled: false,    xtype: 'datefield'        },
            { name: 'price_lookup_date',              fieldLabel: this.price_lookup_dateLabel,          allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'user_id',                        fieldLabel: this.user_idLabel,                    allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Buildit.store.User',{pageSize: 10}), displayField: 'full_name', queryField: 'full_name', valueField: 'user_id', itemTpl:'{last_name}, {first_name}' },
            { name: 'order_source',                   fieldLabel: this.order_sourceLabel,               allowBlank: false,  disabled: false,    xtype: 'textfield'        },
            { name: 'is_tax_exempt_date',             fieldLabel: this.is_tax_exempt_dateLabel,         allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_tax_exempt_customer',         fieldLabel: this.is_tax_exempt_customerLabel,     allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_trade_discount_order',        fieldLabel: this.is_trade_discount_orderLabel,    allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'order_total',                    fieldLabel: this.order_totalLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'state',                          fieldLabel: this.stateLabel,                      allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        }
      ]
    });
    // FIELDSETS (End)

    // TITLES (Start) =======================================================================
    Ext.applyIf(this, {
      title:         'Order',
      subtitle:      'A customer order',
      newTitle:      'Order',
      newSubtitle:   undefined
    });
    // TITLES (End)



    this.callParent();
  }

});
