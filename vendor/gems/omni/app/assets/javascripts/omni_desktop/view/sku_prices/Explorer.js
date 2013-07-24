Ext.define('Omni.view.sku_prices.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-sku_prices-Explorer',

  

  initComponent:function () {

    var me = this;

    
    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.SkuPrice'),

      contextMenuConfig:{
        xtype:'omni-sku_prices-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-sku_prices-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-sku_prices-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      effective_dateLabel: Omni.i18n.model.SkuPrice.effective_date,
      retail_priceLabel: Omni.i18n.model.SkuPrice.retail_price,
      price_unitsLabel: Omni.i18n.model.SkuPrice.price_units,
      sales_categoryLabel: Omni.i18n.model.SkuPrice.sales_category,
      price_change_displayLabel: Omni.i18n.model.SkuPrice.price_change_display
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.effective_dateLabel, dataIndex: 'effective_date',  flex: 1,  sortable: true , renderer: Ext.util.Format.dateRenderer('m/d/y') },
        { header: this.retail_priceLabel, dataIndex: 'retail_price',  flex: 1,  sortable: true  },
        { header: this.price_unitsLabel, dataIndex: 'price_units',  flex: 1,  sortable: true  },
        { header: this.sales_categoryLabel, dataIndex: 'sales_category',  flex: 1,  sortable: true , renderer: Buildit.util.Format.lookupRenderer('SALES_CATEGORY') },
        { header: this.price_change_displayLabel, dataIndex: 'price_change_display',  flex: 1,  sortable: true  }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Sku Price',
      subtitle:  'Retail permanent prices'
    });
    // TITLES (End)



    this.callParent();
  }

});
