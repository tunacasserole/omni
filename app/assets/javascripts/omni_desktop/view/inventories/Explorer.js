Ext.define('Omni.view.inventories.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-inventories-Explorer',

    // EXPLORER CONFIG (Start) ===============================================================
  allowFind:      true,

  store:          Ext.create('Omni.store.Inventory'),

  contextMenuConfig:{
    xtype:        'omni-inventories-ExplorerContextMenu',
  },

  newForms:[{
    xtype:        'omni-inventories-Form',
    windowConfig: {}
  }],

  inspectorConfig: {
    xtype:        'omni-inventories-Inspector'
  },

  // EXPLORER CONFIG (End)

  // LABELS (Start) ======================================================================
    sku_idLabel:                              Omni.i18n.model.Inventory.sku_id,
    location_idLabel:                         Omni.i18n.model.Inventory.location_id,
    on_hand_unitsLabel:                       Omni.i18n.model.Inventory.on_hand_units,
    in_transit_unitsLabel:                    Omni.i18n.model.Inventory.in_transit_units,
    non_sellable_unitsLabel:                  Omni.i18n.model.Inventory.non_sellable_units,
    allocated_unitsLabel:                     Omni.i18n.model.Inventory.allocated_units,
    work_in_process_unitsLabel:               Omni.i18n.model.Inventory.work_in_process_units,
    supplier_on_order_unitsLabel:             Omni.i18n.model.Inventory.supplier_on_order_units,
  // LABELS (End)

    // TITLES (Start) ======================================================================
  title:     'Inventory',
  subtitle:  'On-hand and on-order inventory balances by SKU and Location',
  // TITLES (End)



  initComponent:function () {

    var me = this;


    // EXPLORER PRE-INIT (Start) =============================================================
    // EXPLORER PRE-INIT (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.sku_idLabel,                                      dataIndex: 'sku_display',                        flex: 2,   sortable: true  },  
        { header: this.location_idLabel,                                 dataIndex: 'location_display',                   flex: 2,   sortable: true  },                              
        { header: this.on_hand_unitsLabel,                               dataIndex: 'on_hand_units',                      flex: 1,   sortable: true  },
        { header: this.supplier_on_order_unitsLabel,                     dataIndex: 'supplier_on_order_units',            flex: 1,   sortable: true  },           
        { header: this.work_in_process_unitsLabel,                       dataIndex: 'work_in_process_units',              flex: 1,   sortable: true  },
        { header: this.in_transit_unitsLabel,                            dataIndex: 'in_transit_units',                   flex: 1,   sortable: true  },
        { header: this.allocated_unitsLabel,                             dataIndex: 'allocated_units',                    flex: 1,   sortable: true  },
        { header: this.non_sellable_unitsLabel,                          dataIndex: 'non_sellable_units',                 flex: 1,   sortable: true  }
      ]
    });
    // COLUMNS (End)


    this.callParent();


    // EXPLORER POST-INIT (Start) ============================================================

    // EXPLORER POST-INIT (End)

  }

});
