Ext.define('Omni.view.orders.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-orders-Explorer',


    // LABELS (Start) ======================================================================
  location_displayLabel:                    Omni.i18n.model.Order.location_display,
  terminal_displayLabel:                    Omni.i18n.model.Order.terminal_display,
  order_nbrLabel:                  Omni.i18n.model.Order.order_nbr,
  customer_displayLabel:                    Omni.i18n.model.Order.customer_display,
  order_start_dateLabel:                    Omni.i18n.model.Order.order_start_date,
  order_dateLabel:                          Omni.i18n.model.Order.order_date,
  user_displayLabel:                        Omni.i18n.model.Order.user_display,
  order_sourceLabel:                        Omni.i18n.model.Order.order_source,
  // LABELS (End)

    // TITLES (Start) ======================================================================
  title:     'Order',
  subtitle:  'A customer order',
  // TITLES (End)


    // EXPLORER CONFIG (Start) ===============================================================
  allowFind:      true,

  store:          Ext.create('Omni.store.Order'),

  contextMenuConfig:{
    xtype:        'omni-orders-ExplorerContextMenu',
  },

  inspectorConfig: {
    xtype:        'omni-orders-Inspector'
  },

  newForms:[{
    xtype:        'omni-orders-Form',
    windowConfig: {}
  }],
  // EXPLORER CONFIG (End)


  initComponent:function () {

    var me = this;


    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.location_displayLabel,                            dataIndex: 'location_display',                   flex: 1,   sortable: false  },
        { header: this.terminal_displayLabel,                            dataIndex: 'terminal_display',                   flex: 1,   sortable: false  },
        { header: this.order_nbrLabel,                          dataIndex: 'order_nbr',                 flex: 1,   sortable: false  },
        { header: this.customer_displayLabel,                            dataIndex: 'customer_display',                   flex: 1,   sortable: false  },
        { header: this.order_start_dateLabel,                            dataIndex: 'order_start_date',                   flex: 1,   sortable: false,   renderer: Ext.util.Format.dateRenderer('m/d/y') },
        { header: this.order_dateLabel,                                  dataIndex: 'order_date',                         flex: 1,   sortable: false,   renderer: Ext.util.Format.dateRenderer('m/d/y') },
        { header: this.user_displayLabel,                                dataIndex: 'user_display',                       flex: 1,   sortable: false  },
        { header: this.order_sourceLabel,                                dataIndex: 'order_source',                       flex: 1,   sortable: false  }
      ]
    });
    // COLUMNS (End)

    // EXPLORER PRE-INIT (Start) =============================================================
    // EXPLORER PRE-INIT (End)


    this.callParent();


    // EXPLORER POST-INIT (Start) ============================================================

    // EXPLORER POST-INIT (End)

  }

});
