Ext.define('Omni.view.orders.Explorer', {

  extend   : 'Buildit.ux.explorer.Panel',
  alias    : 'widget.omni-orders-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  contextMenuConfig : {
    xtype    : 'buildit-explorer-ContextMenu'
  },

  newForms : [{
    xtype    : 'omni-orders-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-orders-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  order_idLabel                           : Omni.i18n.model.Order.order_id,
  displayLabel                            : Omni.i18n.model.Order.display,
  location_idLabel                        : Omni.i18n.model.Order.location_id,
  terminal_idLabel                        : Omni.i18n.model.Order.terminal_id,
  order_nbrLabel                          : Omni.i18n.model.Order.order_nbr,
  customer_idLabel                        : Omni.i18n.model.Order.customer_id,
  order_start_dateLabel                   : Omni.i18n.model.Order.order_start_date,
  order_dateLabel                         : Omni.i18n.model.Order.order_date,
  price_lookup_dateLabel                  : Omni.i18n.model.Order.price_lookup_date,
  user_idLabel                            : Omni.i18n.model.Order.user_id,
  order_sourceLabel                       : Omni.i18n.model.Order.order_source,
  is_tax_exempt_dateLabel                 : Omni.i18n.model.Order.is_tax_exempt_date,
  is_tax_exempt_customerLabel             : Omni.i18n.model.Order.is_tax_exempt_customer,
  is_trade_discount_orderLabel            : Omni.i18n.model.Order.is_trade_discount_order,
  order_totalLabel                        : Omni.i18n.model.Order.order_total,
  stateLabel                              : Omni.i18n.model.Order.state,
  is_destroyedLabel                       : Omni.i18n.model.Order.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title    : 'Orders',
  subtitle : 'Create and maintain Orders',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store        : Ext.create('Omni.store.Order')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(me, {
      columns      : [
    {
      header       : me.order_nbrLabel,
      dataIndex    : 'order_nbr',
      flex         : 1
    },
    {
      header       : me.location_idLabel,
      dataIndex    : 'location_display',
      flex         : 1
    },
    {
      header       : me.terminal_idLabel,
      dataIndex    : 'terminal_display',
      flex         : 1
    },
    {
      header       : me.customer_idLabel,
      dataIndex    : 'customer_display',
      flex         : 1
    },
    {
      header       : me.order_totalLabel,
      dataIndex    : 'order_total',
      flex         : 1
    }
      ]
    });
    // COLUMNS (End)


    me.callParent();
  }

});
