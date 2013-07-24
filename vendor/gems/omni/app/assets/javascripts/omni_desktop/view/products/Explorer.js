Ext.define('Omni.view.products.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-products-Explorer',


    // EXPLORER CONFIG (Start) ===============================================================
  allowFind:      true,

  store:          Ext.create('Omni.store.Product'),

  contextMenuConfig:{
    xtype:        'omni-products-ExplorerContextMenu',
  },

  inspectorConfig: {
    xtype:        'omni-products-Inspector'
  },

  newForms:[{
    xtype:        'omni-products-Form',
    windowConfig: {}
  }],
  // EXPLORER CONFIG (End)

    // LABELS (Start) ======================================================================
  displayLabel:                             Omni.i18n.model.Product.display,
  product_nbrLabel:                         Omni.i18n.model.Product.product_nbr,
  category_displayLabel:                    Omni.i18n.model.Product.category_display,
  // LABELS (End)

    // TITLES (Start) ======================================================================
  title:     'Product',
  subtitle:  'Web shopping products',
  // TITLES (End)



  initComponent:function () {

    var me = this;


    // EXPLORER PRE-INIT (Start) =============================================================
    // EXPLORER PRE-INIT (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.displayLabel,                                     dataIndex: 'display',                            flex: 1,   sortable: true  },
        { header: this.product_nbrLabel,                                 dataIndex: 'product_nbr',                        flex: 1,   sortable: true  },
        { header: this.category_displayLabel,                            dataIndex: 'category_display',                   flex: 1,   sortable: true  }
      ]
    });
    // COLUMNS (End)


    this.callParent();


    // EXPLORER POST-INIT (Start) ============================================================

    // EXPLORER POST-INIT (End)

  }

});
