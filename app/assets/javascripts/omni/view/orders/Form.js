Ext.define('Omni.view.orders.Form', {

  extend: 'Buildit.ux.Form',
  alias: 'widget.omni-orders-Form',


  // LABELS (Start) =======================================================================
  order_idLabel: Omni.i18n.model.Order.order_id,
  displayLabel: Omni.i18n.model.Order.display,
  location_idLabel: Omni.i18n.model.Order.location_id,
  terminal_idLabel: Omni.i18n.model.Order.terminal_id,
  order_nbrLabel: Omni.i18n.model.Order.order_nbr,
  customer_idLabel: Omni.i18n.model.Order.customer_id,
  order_start_dateLabel: Omni.i18n.model.Order.order_start_date,
  order_dateLabel: Omni.i18n.model.Order.order_date,
  price_lookup_dateLabel: Omni.i18n.model.Order.price_lookup_date,
  user_idLabel: Omni.i18n.model.Order.user_id,
  order_sourceLabel: Omni.i18n.model.Order.order_source,
  is_tax_exempt_dateLabel: Omni.i18n.model.Order.is_tax_exempt_date,
  is_tax_exempt_customerLabel: Omni.i18n.model.Order.is_tax_exempt_customer,
  is_trade_discount_orderLabel: Omni.i18n.model.Order.is_trade_discount_order,
  order_totalLabel: Omni.i18n.model.Order.order_total,
  stateLabel: Omni.i18n.model.Order.state,
  is_destroyedLabel: Omni.i18n.model.Order.is_destroyed,
  // LABELS (End)


  initComponent: function() {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property: 'order_id',
      value: this.record.get('order_id')
    };
    // FILTER (End)



    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [{
          xtype: 'fieldset',
          title: 'General Information',
          collapsible: true,
          defaultType: 'textfield',
          layout: 'anchor',
          items: [
            // {
            //   xtype        : 'textfield',
            //   name         : 'display',
            //   fieldLabel   : me.displayLabel,
            //   maxLength    : 300,
            //   minLength    : 0,
            //   allowBlank   : false
            // },
            {
              xtype: 'textfield',
              name: 'order_nbr',
              fieldLabel: me.order_nbrLabel,
              allowBlank: true,
              disabled: true
            }, {
              xtype: 'textfield',
              name: 'state',
              fieldLabel: me.stateLabel,
              allowBlank: true,
              disabled: true

            }, {
              xtype: 'buildit-Locator',
              store: Ext.create('Omni.store.Customer', {
                pageSize: 10
              }),
              displayField: 'display',
              queryField: 'display',
              itemTpl: '{display}',
              name: 'customer_id',
              fieldLabel: me.customer_idLabel,
              // valueField: customer_id,
              allowBlank: false,
              disabled: false,
              gotoTarget: 'omni-customers-Inspector'

            }, {
              name: 'location_id',
              fieldLabel: this.location_idLabel,
              allowBlank: false,
              disabled: false,
              xtype: 'buildit-Locator',
              store: Ext.create('Omni.store.Location', {
                pageSize: 25
              }),
              displayField: 'display',
              queryField: 'display',
              valueField: 'location_id',
              itemTpl: '{display}',
              gotoTarget: 'omni-locations-Inspector'

            }, {
              name: 'terminal_id',
              xtype: 'buildit-Locator',
              fieldLabel: me.terminal_idLabel,
              store: Ext.create('Omni.store.Terminal', {
                pageSize: 10
              }),
              displayField: 'display',
              queryField: 'display',
              itemTpl: '{display}',
              valueField: 'terminal_id',
              allowBlank: true,
              gotoTarget: 'omni-terminals-Inspector'

            }, {
              xtype: 'datefield',
              name: 'order_start_date',
              fieldLabel: me.order_start_dateLabel,
              allowBlank: true
            }, {
              xtype: 'datefield',
              name: 'order_date',
              fieldLabel: me.order_dateLabel,
              allowBlank: true
            }, {
              xtype: 'datefield',
              name: 'price_lookup_date',
              fieldLabel: me.price_lookup_dateLabel,
              allowBlank: true
            }, {
              xtype: 'buildit-Locator',
              store: Ext.create('Buildit.store.User', {
                pageSize: 10
              }),
              displayField: 'display_as',
              itemTpl: '{display_as}',
              name: 'user_id',
              fieldLabel: me.user_idLabel,
              initialValue: me.record.get('display_as'),
              allowBlank: true
            }, {
              xtype: 'buildit-Lookup',
              name: 'order_source',
              fieldLabel: me.order_sourceLabel,
              category: 'ORDER_SOURCE',
              lkp: 'code',
              allowBlank: true
            }, {
              xtype: 'checkbox',
              name: 'is_tax_exempt_date',
              fieldLabel: me.is_tax_exempt_dateLabel
            }, {
              xtype: 'checkbox',
              name: 'is_tax_exempt_customer',
              fieldLabel: me.is_tax_exempt_customerLabel
            }, {
              xtype: 'checkbox',
              name: 'is_trade_discount_order',
              fieldLabel: me.is_trade_discount_orderLabel
            }, {
              xtype: 'currencyfield',
              name: 'order_total',
              fieldLabel: me.order_totalLabel,
              allowBlank: true,
              currencySymbol: null,
              disabled: true
            }
          ]
        }
        /*,
        {
          xtype        : 'fieldset',
          title        : 'Additional Information',
          collapsible  : true,
          defaultType  : 'textfield',
          layout       : 'anchor',
          items        : [
          ]
        }*/
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Order',
      subtitle: 'Edit Order'
    });
    // TITLES (End)

    this.callParent();

  } // initComponent

}); // Ext.define('Omni.view.orders.Form'
