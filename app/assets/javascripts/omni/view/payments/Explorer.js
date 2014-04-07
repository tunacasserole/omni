Ext.define('Omni.view.payments.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-payments-Explorer',


    // LABELS (Start) ======================================================================
  order_displayLabel:                       Omni.i18n.model.Payment.order_display,
  customer_displayLabel:                    Omni.i18n.model.Payment.customer_display,
  terminal_displayLabel:                    Omni.i18n.model.Payment.terminal_display,
  location_displayLabel:                    Omni.i18n.model.Payment.location_display,
  tender_displayLabel:                      Omni.i18n.model.Payment.tender_display,
  // LABELS (End)

    // TITLES (Start) ======================================================================
  title:     'Payment',
  subtitle:  'A customer payment for an order or on account',
  // TITLES (End)


    // EXPLORER CONFIG (Start) ===============================================================
  allowFind:      true,

  store:          Ext.create('Omni.store.Payment'),

  contextMenuConfig:{
    xtype:        'omni-payments-ExplorerContextMenu',
  },

  inspectorConfig: {
    xtype:        'omni-payments-Inspector'
  },

  newForms:[{
    xtype:        'omni-payments-Form',
    windowConfig: {}
  }],
  // EXPLORER CONFIG (End)


  initComponent:function () {

    var me = this;


    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.order_displayLabel,                               dataIndex: 'order_display',                      flex: 1,   sortable: false  },
        { header: this.customer_displayLabel,                            dataIndex: 'customer_display',                   flex: 1,   sortable: false  },
        { header: this.terminal_displayLabel,                            dataIndex: 'terminal_display',                   flex: 1,   sortable: false  },
        { header: this.location_displayLabel,                            dataIndex: 'location_display',                   flex: 1,   sortable: false  },
        { header: this.tender_displayLabel,                              dataIndex: 'tender_display',                     flex: 1,   sortable: false  }
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
