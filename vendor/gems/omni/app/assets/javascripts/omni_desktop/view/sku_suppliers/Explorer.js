Ext.define('Omni.view.sku_suppliers.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-sku_suppliers-Explorer',


    // EXPLORER CONFIG (Start) ===============================================================
  allowFind:      true,

  store:          Ext.create('Omni.store.SkuSupplier'),

  contextMenuConfig:{
    xtype:        'omni-sku_suppliers-ExplorerContextMenu',
  },

  inspectorConfig: {
    xtype:        'omni-sku_suppliers-Inspector'
  },

  newForms:[{
    xtype:        'omni-sku_suppliers-Form',
    windowConfig: {}
  }],
  // EXPLORER CONFIG (End)

    // LABELS (Start) ======================================================================
  sku_displayLabel:                         Omni.i18n.model.SkuSupplier.sku_display,
  supplier_displayLabel:                    Omni.i18n.model.SkuSupplier.supplier_display,
  supplier_item_identifierLabel:            Omni.i18n.model.SkuSupplier.supplier_item_identifier,
  is_primary_supplierLabel:                 Omni.i18n.model.SkuSupplier.is_primary_supplier,
  supplier_costLabel:                       Omni.i18n.model.SkuSupplier.supplier_cost,
  // LABELS (End)

    // TITLES (Start) ======================================================================
  title:     'Sku Supplier',
  subtitle:  'All of the suppliers for a product',
  // TITLES (End)



  initComponent:function () {

    var me = this;


    // EXPLORER PRE-INIT (Start) =============================================================
    // EXPLORER PRE-INIT (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.sku_displayLabel,                                 dataIndex: 'sku_display',                        flex: 1,   sortable: true  },
        { header: this.supplier_displayLabel,                            dataIndex: 'supplier_display',                   flex: 1,   sortable: true  },
        { header: this.supplier_item_identifierLabel,                    dataIndex: 'supplier_item_identifier',           flex: 1,   sortable: true  },
        { header: this.is_primary_supplierLabel,                         dataIndex: 'is_primary_supplier',                flex: 1,   sortable: true  },
        { header: this.supplier_costLabel,                               dataIndex: 'supplier_cost',                      flex: 1,   sortable: true  }
      ]
    });
    // COLUMNS (End)


    this.callParent();


    // EXPLORER POST-INIT (Start) ============================================================

    // EXPLORER POST-INIT (End)

  }

});
