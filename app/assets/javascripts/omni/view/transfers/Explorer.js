Ext.define('Omni.view.transfers.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-transfers-Explorer',


    // LABELS (Start) ======================================================================
  stateLabel:                               Omni.i18n.model.Transfer.state,
  transfer_nbrLabel:                        Omni.i18n.model.Transfer.transfer_nbr,
  requesting_location_displayLabel:         Omni.i18n.model.Transfer.requesting_location_display,
  fulfillment_location_displayLabel:        Omni.i18n.model.Transfer.fulfillment_location_display,
  sku_displayLabel:                         Omni.i18n.model.Transfer.sku_display,
  transfer_reason_displayLabel:             Omni.i18n.model.Transfer.transfer_reason_display,
  request_dateLabel:                        Omni.i18n.model.Transfer.request_date,
  // LABELS (End)

    // TITLES (Start) ======================================================================
  title:     'Transfer',
  subtitle:  'A request to send merchandise from one location to another',
  // TITLES (End)


    // EXPLORER CONFIG (Start) ===============================================================
  allowFind:      true,

  store:          Ext.create('Omni.store.Transfer'),

  contextMenuConfig:{
    xtype    : 'buildit-explorer-ContextMenu'
  },

  inspectorConfig: {
    xtype:        'omni-transfers-Inspector'
  },

  newForms:[{
    xtype:        'omni-transfers-Form',
    windowConfig: {}
  }],
  // EXPLORER CONFIG (End)


  initComponent:function () {

    var me = this;


    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.transfer_nbrLabel,                                dataIndex: 'transfer_nbr',                       flex: 1,   sortable: false  },
        { header: this.sku_displayLabel,                                 dataIndex: 'sku_display',                        flex: 3,   sortable: false  },
        { header: this.requesting_location_displayLabel,                 dataIndex: 'requesting_location_display',        flex: 2,   sortable: false  },
        { header: this.fulfillment_location_displayLabel,                dataIndex: 'fulfillment_location_display',       flex: 2,   sortable: false  },
        { header: this.transfer_reason_displayLabel,                     dataIndex: 'transfer_reason_display',            flex: 1,   sortable: false  },
        { header: this.request_dateLabel,                                dataIndex: 'request_date',                       flex: 1,   sortable: false,   renderer: Ext.util.Format.dateRenderer('m/d/y') },
        { header: this.stateLabel,                                       dataIndex: 'state',                              flex: 1,   sortable: false  },
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
