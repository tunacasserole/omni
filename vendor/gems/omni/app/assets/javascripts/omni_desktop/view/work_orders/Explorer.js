Ext.define('Omni.view.work_orders.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-work_orders-Explorer',


  // EXPLORER CONFIG (Start) ===============================================================
  allowFind:      true,

  store:          Ext.create('Omni.store.WorkOrder'),

  contextMenuConfig:{
    xtype:        'omni-work_orders-ExplorerContextMenu',
  },

  inspectorConfig: {
    xtype:        'omni-work_orders-Inspector'
  },

  newForms:[{
    xtype:        'omni-work_orders-Form',
    windowConfig: {}
  }],
  // EXPLORER CONFIG (End)

  // TITLES (Start) ======================================================================
  title:     'Work Order',
  subtitle:  'An order to perform a conversion, alteration or special cut',
  // TITLES (End)

  initComponent:function () {

    var me = this;

    // EXPLORER PRE-INIT (Start) =============================================================
    // EXPLORER PRE-INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      stateLabel:                               Omni.i18n.model.WorkOrder.state,
      work_order_nbrLabel:                      Omni.i18n.model.WorkOrder.work_order_nbr,
      workable_idLabel:                         Omni.i18n.model.WorkOrder.workable_id,
      workable_typeLabel:                       Omni.i18n.model.WorkOrder.workable_type,
      production_location_displayLabel:         Omni.i18n.model.WorkOrder.production_location_display,
      supplier_displayLabel:                    Omni.i18n.model.WorkOrder.supplier_display,
      work_order_typeLabel:                     Omni.i18n.model.WorkOrder.work_order_type,
      sku_displayLabel:                         Omni.i18n.model.WorkOrder.sku_display,
    });
  // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.stateLabel,                                       dataIndex: 'state',                              flex: 1,   sortable: true  },
        { header: this.work_order_nbrLabel,                              dataIndex: 'work_order_nbr',                     flex: 1,   sortable: true  },
        { header: this.workable_idLabel,                                 dataIndex: 'workable_id',                        flex: 1,   sortable: true  },
        { header: this.workable_typeLabel,                               dataIndex: 'workable_type',                      flex: 1,   sortable: true  },
        { header: this.production_location_displayLabel,                 dataIndex: 'production_location_display',        flex: 1,   sortable: true  },
        { header: this.supplier_displayLabel,                            dataIndex: 'supplier_display',                   flex: 1,   sortable: true  },
        { header: this.work_order_typeLabel,                             dataIndex: 'work_order_type',                    flex: 1,   sortable: true  },
        { header: this.sku_displayLabel,                                 dataIndex: 'sku_display',                        flex: 1,   sortable: true  }
      ]
    });
    // COLUMNS (End)


    this.callParent();


    // EXPLORER POST-INIT (Start) ============================================================

    // EXPLORER POST-INIT (End)

  }

});
