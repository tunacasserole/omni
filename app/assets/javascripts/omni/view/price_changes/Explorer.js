Ext.define('Omni.view.price_changes.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-price_changes-Explorer',



  initComponent:function () {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.PriceChange'),

      contextMenuConfig:{
        xtype:'omni-price_changes-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-projects-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-projects-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      displayLabel: Omni.i18n.model.PriceChange.display
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.displayLabel, dataIndex: 'display',  flex: 1,  sortable: false  }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Price Change',
      subtitle:  ''
    });
    // TITLES (End)



    this.callParent();
  }

});
