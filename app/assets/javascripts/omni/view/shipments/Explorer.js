Ext.define('Omni.view.shipments.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-shipments-Explorer',


    // LABELS (Start) ======================================================================
  stateLabel:                               Omni.i18n.model.Shipment.state,
  shipment_nbrLabel:                        Omni.i18n.model.Shipment.shipment_nbr,
  location_displayLabel:                    Omni.i18n.model.Shipment.location_display,
  shippable_typeLabel:                      Omni.i18n.model.Shipment.shippable_type,
  shippable_idLabel:                        Omni.i18n.model.Shipment.shippable_id,
  supplier_displayLabel:                    Omni.i18n.model.Shipment.supplier_display,
  tracking_numberLabel:                     Omni.i18n.model.Shipment.tracking_number,
  ship_nameLabel:                           Omni.i18n.model.Shipment.ship_name,
  // LABELS (End)

    // TITLES (Start) ======================================================================
  title:     'Shipment',
  subtitle:  'A shipment to a customer or another location',
  // TITLES (End)


    // EXPLORER CONFIG (Start) ===============================================================
  allowFind:      true,

  store:          Ext.create('Omni.store.Shipment'),

  contextMenuConfig:{
    xtype:        'omni-shipments-ExplorerContextMenu',
  },

  inspectorConfig: {
    xtype:        'omni-shipments-Inspector'
  },

  newForms:[{
    xtype:        'omni-shipments-Form',
    windowConfig: {}
  }],
  // EXPLORER CONFIG (End)


  initComponent:function () {

    var me = this;


    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.stateLabel,                                       dataIndex: 'state',                              flex: 1,   sortable: false  },
        { header: this.shipment_nbrLabel,                                dataIndex: 'shipment_nbr',                       flex: 1,   sortable: false  },
        { header: this.location_displayLabel,                            dataIndex: 'location_display',                   flex: 1,   sortable: false  },
        { header: this.shippable_typeLabel,                              dataIndex: 'shippable_type',                     flex: 1,   sortable: false  },
        { header: this.shippable_idLabel,                                dataIndex: 'shippable_id',                       flex: 1,   sortable: false  },
        { header: this.supplier_displayLabel,                            dataIndex: 'supplier_display',                   flex: 1,   sortable: false  },
        { header: this.tracking_numberLabel,                             dataIndex: 'tracking_number',                    flex: 1,   sortable: false  },
        { header: this.ship_nameLabel,                                   dataIndex: 'ship_name',                          flex: 1,   sortable: false  }
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
