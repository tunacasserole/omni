Ext.define('Omni.view.sku_locations.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-sku_locations-Explorer',

  

  initComponent:function () {

    var me = this;

    
    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.SkuLocation'),

      contextMenuConfig:{
        xtype:'omni-sku_locations-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-sku_locations-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-sku_locations-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      sku_displayLabel: Omni.i18n.model.SkuLocation.sku_display,
      location_displayLabel: Omni.i18n.model.SkuLocation.location_display,
      is_authorizedLabel: Omni.i18n.model.SkuLocation.is_authorized,
      is_taxableLabel: Omni.i18n.model.SkuLocation.is_taxable,
      is_special_orderLabel: Omni.i18n.model.SkuLocation.is_special_order,
      is_discontinuedLabel: Omni.i18n.model.SkuLocation.is_discontinued
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.sku_displayLabel, dataIndex: 'sku_display',  flex: 1,  sortable: true  },
        { header: this.location_displayLabel, dataIndex: 'location_display',  flex: 1,  sortable: true  },
        { header: this.is_authorizedLabel, dataIndex: 'is_authorized',  flex: 1,  sortable: true  },
        { header: this.is_taxableLabel, dataIndex: 'is_taxable',  flex: 1,  sortable: true  },
        { header: this.is_special_orderLabel, dataIndex: 'is_special_order',  flex: 1,  sortable: true  },
        { header: this.is_discontinuedLabel, dataIndex: 'is_discontinued',  flex: 1,  sortable: true  }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Sku Location',
      subtitle:  'All stores, warehouses and web sites that stock or sell a SKU'
    });
    // TITLES (End)



    this.callParent();
  }

});
