Ext.define('Omni.view.sku_promo_prices.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.omni-sku_promo_prices-Explorer',


  initComponent: function() {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: false,

      store: Ext.create('Omni.store.SkuPromoPrice'),

      contextMenuConfig: {
        xtype: 'omni-app-ExplorerContextMenu'
      },

      newForms: [{
        xtype: 'omni-sku_promo_prices-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-sku_promo_prices-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      effective_dateLabel: Omni.i18n.model.SkuPromoPrice.effective_date,
      end_dateLabel: Omni.i18n.model.SkuPromoPrice.end_date,
      promo_unitsLabel: Omni.i18n.model.SkuPromoPrice.promo_units,
      promo_percentLabel: Omni.i18n.model.SkuPromoPrice.promo_percent,
      promo_amountLabel: Omni.i18n.model.SkuPromoPrice.promo_amount,
      promo_priceLabel: Omni.i18n.model.SkuPromoPrice.promo_price
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
        header: this.end_dateLabel,
        dataIndex: 'end_date',
        flex: 1,
        sortable: false,
        renderer: Ext.util.Format.dateRenderer('m/d/y')
      }, {
        header: this.promo_unitsLabel,
        dataIndex: 'promo_units',
        flex: 1,
        sortable: false
      }, {
        header: this.promo_percentLabel,
        dataIndex: 'promo_percent',
        flex: 1,
        sortable: false
      }, {
        header: this.promo_amountLabel,
        dataIndex: 'promo_amount',
        flex: 1,
        sortable: false
      }, {
        header: this.promo_priceLabel,
        dataIndex: 'promo_price',
        flex: 1,
        sortable: false
      }]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title: 'Sku Promo Price',
      subtitle: 'Retail promotional prices'
    });
    // TITLES (End)



    this.callParent();
  }

});
