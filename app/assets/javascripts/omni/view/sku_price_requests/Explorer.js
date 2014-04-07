Ext.define('Omni.view.sku_price_requests.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-sku_price_requests-Explorer',

    // LABELS (Start) ======================================================================
  stateLabel:                               Omni.i18n.model.SkuPriceRequest.state,
  user_displayLabel:                        Omni.i18n.model.SkuPriceRequest.user_display,
  request_dateLabel:                        Omni.i18n.model.SkuPriceRequest.request_date,
  sku_displayLabel:                         Omni.i18n.model.SkuPriceRequest.sku_display,
  location_displayLabel:                    Omni.i18n.model.SkuPriceRequest.location_display,
  customer_displayLabel:                    Omni.i18n.model.SkuPriceRequest.customer_display,
  account_displayLabel:                        Omni.i18n.model.SkuPriceRequest.account_display,
  // LABELS (End)

    // TITLES (Start) ======================================================================
  title:     'Sku Price Request',
  subtitle:  'A request for the current price of a sku at a location.',
  // TITLES (End)


    // EXPLORER CONFIG (Start) ===============================================================
  allowFind:      false,

  store:          Ext.create('Omni.store.SkuPriceRequest'),

  contextMenuConfig:{
    xtype:        'omni-sku_price_requests-ExplorerContextMenu',
  },

  inspectorConfig: {
    xtype:        'omni-sku_price_requests-Inspector'
  },

  newForms:[{
    xtype:        'omni-sku_price_requests-Form',
    windowConfig: {}
  }],
  // EXPLORER CONFIG (End)


  initComponent:function () {

    var me = this;


    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.stateLabel,                                       dataIndex: 'state',                              flex: 1,   sortable: false  },
        { header: this.user_displayLabel,                                dataIndex: 'user_display',                       flex: 1,   sortable: false  },
        { header: this.request_dateLabel,                                dataIndex: 'request_date',                       flex: 1,   sortable: false,   renderer: Ext.util.Format.dateRenderer('m/d/y') },
        { header: this.sku_displayLabel,                                 dataIndex: 'sku_display',                        flex: 1,   sortable: false  },
        { header: this.location_displayLabel,                            dataIndex: 'location_display',                   flex: 1,   sortable: false  },
        { header: this.customer_displayLabel,                            dataIndex: 'customer_display',                   flex: 1,   sortable: false  },
        { header: this.account_displayLabel,                                dataIndex: 'account_display',                       flex: 1,   sortable: false  }
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
