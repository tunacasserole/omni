Ext.define('Omni.view.product_types.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-product_types-Explorer',

  

  initComponent:function () {

    var me = this;

    
    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.ProductType'),

      contextMenuConfig:{
        xtype:'omni-product_types-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-product_types-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-product_types-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      displayLabel: Omni.i18n.model.ProductType.display,
      is_fabricLabel: Omni.i18n.model.ProductType.is_fabric,
      is_trimLabel: Omni.i18n.model.ProductType.is_trim,
      is_convertedLabel: Omni.i18n.model.ProductType.is_converted,
      is_laborLabel: Omni.i18n.model.ProductType.is_labor,
      is_shippingLabel: Omni.i18n.model.ProductType.is_shipping
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.displayLabel, dataIndex: 'display',  flex: 1,  sortable: true  },
        { header: this.is_fabricLabel, dataIndex: 'is_fabric',  flex: 1,  sortable: true  },
        { header: this.is_trimLabel, dataIndex: 'is_trim',  flex: 1,  sortable: true  },
        { header: this.is_convertedLabel, dataIndex: 'is_converted',  flex: 1,  sortable: true  },
        { header: this.is_laborLabel, dataIndex: 'is_labor',  flex: 1,  sortable: true  },
        { header: this.is_shippingLabel, dataIndex: 'is_shipping',  flex: 1,  sortable: true  }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Product Type',
      subtitle:  'Different types of products, such as fabric, trim, accessory'
    });
    // TITLES (End)



    this.callParent();
  }

});
