Ext.define('Omni.view.bin_skus.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-bin_skus-Explorer',

  

  initComponent:function () {

    var me = this;

    
    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.BinSku'),

      contextMenuConfig:{
        xtype:'omni-bin_skus-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-bin_skus-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-bin_skus-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      sku_alias_displayLabel: Omni.i18n.model.BinSku.sku_alias_display,
      last_activity_dateLabel: Omni.i18n.model.BinSku.last_activity_date
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.sku_alias_displayLabel, dataIndex: 'sku_alias_display',  flex: 1,  sortable: true  },
        { header: this.last_activity_dateLabel, dataIndex: 'last_activity_date',  flex: 1,  sortable: true , renderer: Ext.util.Format.dateRenderer('m/d/y') }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Bin Sku',
      subtitle:  'All of the SKUs in a bin'
    });
    // TITLES (End)



    this.callParent();
  }

});
