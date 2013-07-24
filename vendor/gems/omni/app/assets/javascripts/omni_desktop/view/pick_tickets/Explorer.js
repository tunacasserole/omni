Ext.define('Omni.view.pick_tickets.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-pick_tickets-Explorer',


    // LABELS (Start) ======================================================================
  stateLabel:                               Omni.i18n.model.PickTicket.state,
  pick_ticket_nbrLabel:                     Omni.i18n.model.PickTicket.pick_ticket_nbr,
  pickable_idLabel:                         Omni.i18n.model.PickTicket.pickable_id,
  pickable_typeLabel:                       Omni.i18n.model.PickTicket.pickable_type,
  fulfillment_location_displayLabel:        Omni.i18n.model.PickTicket.fulfillment_location_display,
  work_order_displayLabel:                  Omni.i18n.model.PickTicket.work_order_display,
  request_unitsLabel:                       Omni.i18n.model.PickTicket.request_units,
  // LABELS (End)

    // TITLES (Start) ======================================================================
  title:     'Pick Ticket',
  subtitle:  'An order to pick a product for shipment to a customer',
  // TITLES (End)


    // EXPLORER CONFIG (Start) ===============================================================
  allowFind:      true,

  store:          Ext.create('Omni.store.PickTicket'),

  contextMenuConfig:{
    xtype:        'omni-pick_tickets-ExplorerContextMenu',
  },

  inspectorConfig: {
    xtype:        'omni-pick_tickets-Inspector'
  },

  newForms:[{
    xtype:        'omni-pick_tickets-Form',
    windowConfig: {}
  }],
  // EXPLORER CONFIG (End)


  initComponent:function () {

    var me = this;


    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.stateLabel,                                       dataIndex: 'state',                              flex: 1,   sortable: true  },
        { header: this.pick_ticket_nbrLabel,                             dataIndex: 'pick_ticket_nbr',                    flex: 1,   sortable: true  },
        { header: this.pickable_idLabel,                                 dataIndex: 'pickable_id',                        flex: 1,   sortable: true  },
        { header: this.pickable_typeLabel,                               dataIndex: 'pickable_type',                      flex: 1,   sortable: true  },
        { header: this.fulfillment_location_displayLabel,                dataIndex: 'fulfillment_location_display',       flex: 1,   sortable: true  },
        { header: this.work_order_displayLabel,                          dataIndex: 'work_order_display',                 flex: 1,   sortable: true  },
        { header: this.request_unitsLabel,                               dataIndex: 'request_units',                      flex: 1,   sortable: true  }
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
