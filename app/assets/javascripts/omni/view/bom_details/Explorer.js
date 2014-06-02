Ext.define('Omni.view.bom_details.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.omni-bom_details-Explorer',



  initComponent: function() {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.BomDetail'),

      contextMenuConfig: {
        xtype: 'omni-app-ExplorerContextMenu'
      },

      newForms: [{
        xtype: 'omni-bom_details-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-bom_details-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      bom_displayLabel: Omni.i18n.model.BomDetail.bom_display,
      color_displayLabel: Omni.i18n.model.BomDetail.color_display,
      sku_displayLabel: Omni.i18n.model.BomDetail.sku_display,
      quantityLabel: Omni.i18n.model.BomDetail.quantity,
      waste_percentLabel: Omni.i18n.model.BomDetail.waste_percent,
      uom_codeLabel: Omni.i18n.model.BomDetail.uom_code
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [{
        header: this.bom_displayLabel,
        dataIndex: 'bom_display',
        flex: 1,
        sortable: false
      }, {
        header: this.color_displayLabel,
        dataIndex: 'color_display',
        flex: 1,
        sortable: false
      }, {
        header: this.sku_displayLabel,
        dataIndex: 'sku_display',
        flex: 1,
        sortable: false
      }, {
        header: this.quantityLabel,
        dataIndex: 'quantity',
        flex: 1,
        sortable: false
      }, {
        header: this.waste_percentLabel,
        dataIndex: 'waste_percent',
        flex: 1,
        sortable: false
      }, {
        header: this.uom_codeLabel,
        dataIndex: 'uom_code',
        flex: 1,
        sortable: false,
        renderer: Buildit.util.Format.lookupRenderer('UOM_CODE')
      }]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title: 'Bom Detail',
      subtitle: 'Products and quantities needed to make each style/SKU'
    });
    // TITLES (End)



    this.callParent();
  }

});
