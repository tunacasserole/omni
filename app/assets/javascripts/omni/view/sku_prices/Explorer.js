Ext.define('Omni.view.sku_prices.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.omni-sku_prices-Explorer',

  initComponent: function() {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: false,

      store: Ext.create('Omni.store.SkuPrice'),

      contextMenuConfig: {
        xtype: 'buildit-explorer-ContextMenu'
      },

      newForms: [{
        xtype: 'omni-sku_prices-Form',
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
      price_book_displayLabel: Omni.i18n.model.SkuPrice.price_book_display
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [{
          header: this.effective_dateLabel,
          dataIndex: 'effective_date',
          flex: 1,
          sortable: false,
          renderer: Ext.util.Format.dateRenderer('m/d/y')
        }, {
          header: this.retail_priceLabel,
          dataIndex: 'retail_price',
          flex: 1,
          sortable: false
        }, {
          header: this.price_unitsLabel,
          dataIndex: 'price_units',
          flex: 1,
          sortable: false
        }, {
          header: this.sales_categoryLabel,
          dataIndex: 'sales_category',
          flex: 1,
          sortable: false,
          renderer: Buildit.util.Format.lookupRenderer('SALES_CATEGORY')
        },
        // { header: this.price_book_displayLabel, dataIndex: 'price_book_display',  flex: 1,  sortable: false  }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title: 'Sku Price',
      subtitle: 'Retail permanent prices'
    });
    // TITLES (End)



    this.callParent();
  }

});
