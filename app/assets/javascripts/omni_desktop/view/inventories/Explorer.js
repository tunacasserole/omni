Ext.define('Omni.view.inventories.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-inventories-Explorer',

  initComponent:function () {

    var me = this;

    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

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
      }
      });

  // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      sku_idLabel:                                          Omni.i18n.model.Inventory.sku_id,
      location_idLabel:                                    Omni.i18n.model.Inventory.location_id,
      on_hand_unitsLabel:                             Omni.i18n.model.Inventory.on_hand_units,
      in_transit_unitsLabel:                          Omni.i18n.model.Inventory.in_transit_units,
      non_sellable_unitsLabel:                     Omni.i18n.model.Inventory.non_sellable_units,
      allocated_unitsLabel:                           Omni.i18n.model.Inventory.allocated_units,
      work_in_process_unitsLabel:               Omni.i18n.model.Inventory.work_in_process_units,
      supplier_on_order_unitsLabel:             Omni.i18n.model.Inventory.supplier_on_order_units,
      sourceLabel:                                         Omni.i18n.model.Inventory.source,
      source_idLabel:                                    Omni.i18n.model.Inventory.source_id,
     });
    // LABELS (End)

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
        { header: this.sourceLabel,                                    dataIndex: 'source',                 flex: 1,   sortable: true  },
        { header: this.source_id,                                    dataIndex: 'source_id',                 flex: 1,   sortable: true  },
      ]
    });
   // COLUMNS (End)

  // TITLES (Start) ======================================================================
  Ext.apply(this, {
    title:     'Inventory',
    subtitle:  'On-hand and on-order inventory balances by SKU and Location',
  });
  // TITLES (End)

    this.callParent();
  }

});
