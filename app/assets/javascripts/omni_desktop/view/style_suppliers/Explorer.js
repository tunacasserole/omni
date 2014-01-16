Ext.define('Omni.view.style_suppliers.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-style_suppliers-Explorer',

    // LABELS (Start) ======================================================================
  style_displayLabel:                       Omni.i18n.model.StyleSupplier.style_display,
  stateLabel:                               Omni.i18n.model.StyleSupplier.state,
  supplier_displayLabel:                    Omni.i18n.model.StyleSupplier.supplier_display,
  is_primary_supplierLabel:                 Omni.i18n.model.StyleSupplier.is_primary_supplier,
  is_manufacturerLabel:                     Omni.i18n.model.StyleSupplier.is_manufacturer,
  // LABELS (End)

    // TITLES (Start) ======================================================================
  title:     'Style Supplier',
  subtitle:  'All of the vendors that supply a style',
  // TITLES (End)


    // EXPLORER CONFIG (Start) ===============================================================
  allowFind:      false,

  store:          Ext.create('Omni.store.StyleSupplier'),

  contextMenuConfig:{
    xtype:        'omni-style_suppliers-ExplorerContextMenu',
  },

  inspectorConfig: {
    xtype:        'omni-style_suppliers-Inspector'
  },

  newForms:[{
    xtype:        'omni-style_suppliers-Form',
    windowConfig: {}
  }],
  // EXPLORER CONFIG (End)


  initComponent:function () {

    var me = this;


    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.style_displayLabel,                               dataIndex: 'style_display',                      flex: 1,   sortable: true  },
        { header: this.stateLabel, dataIndex: 'state', flex: 1,   sortable: true  },
        { header: this.supplier_displayLabel,                            dataIndex: 'supplier_display',                   flex: 1,   sortable: true  },
        { header: this.is_primary_supplierLabel,                         dataIndex: 'is_primary_supplier',                flex: 1,   sortable: true  },
        { header: this.is_manufacturerLabel,                             dataIndex: 'is_manufacturer',                    flex: 1,   sortable: true  }
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
