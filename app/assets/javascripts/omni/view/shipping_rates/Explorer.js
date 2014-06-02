Ext.define('Omni.view.shipping_rates.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.omni-shipping_rates-Explorer',



  initComponent: function() {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.ShippingRate'),

      contextMenuConfig: {
        xtype: 'omni-app-ExplorerContextMenu'
      },

      newForms: [{
        xtype: 'omni-shipping_rates-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-shipping_rates-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      supplier_displayLabel: Omni.i18n.model.ShippingRate.supplier_display,
      shipping_chargeLabel: Omni.i18n.model.ShippingRate.shipping_charge,
      minimum_saleLabel: Omni.i18n.model.ShippingRate.minimum_sale,
      maximum_saleLabel: Omni.i18n.model.ShippingRate.maximum_sale
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [{
        header: this.supplier_displayLabel,
        dataIndex: 'supplier_display',
        flex: 1,
        sortable: false
      }, {
        header: this.shipping_chargeLabel,
        dataIndex: 'shipping_charge',
        flex: 1,
        sortable: false
      }, {
        header: this.minimum_saleLabel,
        dataIndex: 'minimum_sale',
        flex: 1,
        sortable: false
      }, {
        header: this.maximum_saleLabel,
        dataIndex: 'maximum_sale',
        flex: 1,
        sortable: false
      }]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title: 'Shipping Rate',
      subtitle: 'Rates for shipping products to customers'
    });
    // TITLES (End)



    this.callParent();
  }

});
