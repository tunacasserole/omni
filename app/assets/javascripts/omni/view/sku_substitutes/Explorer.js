Ext.define('Omni.view.sku_substitutes.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.omni-sku_substitutes-Explorer',


  initComponent: function() {

    var me = this;

    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: false,

      store: Ext.create('Omni.store.SkuSubstitute'),

      contextMenuConfig: {
        xtype: 'buildit-explorer-ContextMenu'
      },

      newForms: [{
        xtype: 'omni-sku_substitutes-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-sku_substitutes-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      sku_displayLabel: Omni.i18n.model.SkuSubstitute.sku_display,
      substitute_sku_displayLabel: Omni.i18n.model.SkuSubstitute.substitute_sku_display,
      sku_substitute_typeLabel: Omni.i18n.model.SkuSubstitute.sku_substitute_type,
      effective_dateLabel: Omni.i18n.model.SkuSubstitute.effective_date,
      end_dateLabel: Omni.i18n.model.SkuSubstitute.end_date,
      priorityLabel: Omni.i18n.model.SkuSubstitute.priority
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [{
        header: this.sku_displayLabel,
        dataIndex: 'sku_display',
        flex: 1,
        sortable: false
      }, {
        header: this.substitute_sku_displayLabel,
        dataIndex: 'substitute_sku_display',
        flex: 1,
        sortable: false
      }, {
        header: this.sku_substitute_typeLabel,
        dataIndex: 'sku_substitute_type',
        flex: 1,
        sortable: false,
        renderer: Buildit.util.Format.lookupRenderer('SKU_SUBSTITUTE_TYPE')
      }, {
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
        header: this.priorityLabel,
        dataIndex: 'priority',
        flex: 1,
        sortable: false
      }]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title: 'Sku Substitute',
      subtitle: 'Successors and predecessors of a SKU'
    });
    // TITLES (End)



    this.callParent();
  }

});
