Ext.define('Omni.view.style_color_sizes.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.omni-style_color_sizes-Explorer',


  initComponent: function() {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: false,

      store: Ext.create('Omni.store.StyleColorSize'),

      contextMenuConfig: {
        xtype: 'buildit-explorer-ContextMenu'
      },

      newForms: [{
        xtype: 'omni-style_color_sizes-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-style_color_sizes-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      style_color_displayLabel: Omni.i18n.model.StyleColorSize.style_color_display,
      stateLabel: Omni.i18n.model.StyleColorSize.state,
      size_displayLabel: Omni.i18n.model.StyleColorSize.size_display,
      sku_displayLabel: Omni.i18n.model.StyleColorSize.sku_display,
      sku_nameLabel: Omni.i18n.model.StyleColorSize.sku_name,
      pos_nameLabel: Omni.i18n.model.StyleColorSize.pos_name
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [{
        header: this.style_color_displayLabel,
        dataIndex: 'style_color_display',
        flex: 1,
        sortable: false
      }, {
        header: this.stateLabel,
        dataIndex: 'state',
        flex: 1,
        sortable: false
      }, {
        header: this.size_displayLabel,
        dataIndex: 'size_display',
        flex: 1,
        sortable: false
      }, {
        header: this.sku_displayLabel,
        dataIndex: 'sku_display',
        flex: 1,
        sortable: false
      }, {
        header: this.sku_nameLabel,
        dataIndex: 'sku_name',
        flex: 1,
        sortable: false
      }, {
        header: this.pos_nameLabel,
        dataIndex: 'pos_name',
        flex: 1,
        sortable: false
      }]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title: 'Style Color Size',
      subtitle: 'All of the color, size, variance combinations for a style'
    });
    // TITLES (End)



    this.callParent();
  }

});
