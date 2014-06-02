Ext.define('Omni.view.style_supplier_colors.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.omni-style_supplier_colors-Explorer',

  initComponent: function() {

    var me = this;

    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: false,
      allowNew: true,
      allowInspect: false,

      store: Ext.create('Omni.store.StyleSupplierColor'),

      contextMenuConfig: {
        xtype: 'omni-app-ExplorerContextMenu'
      },

      newForms: [{
        xtype: 'omni-style_supplier_colors-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-style_supplier_colors-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      style_supplier_displayLabel: Omni.i18n.model.StyleSupplierColor.style_supplier_display,
      style_color_displayLabel: Omni.i18n.model.StyleSupplierColor.style_color_display
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [{
        header: this.style_supplier_displayLabel,
        dataIndex: 'style_supplier_display',
        flex: 1,
        sortable: false
      }, {
        header: this.style_color_displayLabel,
        dataIndex: 'style_color_display',
        flex: 1,
        sortable: false
      }]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title: 'Style Supplier Color',
      subtitle: 'All of the colors that a vendor supplies for a style'
    });
    // TITLES (End)



    this.callParent();
  }

});
