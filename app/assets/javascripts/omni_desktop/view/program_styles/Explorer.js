Ext.define('Omni.view.program_styles.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-program_styles-Explorer',

  

  initComponent:function () {

    var me = this;

    
    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.ProgramStyle'),

      contextMenuConfig:{
        xtype:'omni-program_styles-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-program_styles-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-program_styles-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      style_displayLabel: Omni.i18n.model.ProgramStyle.style_display,
      retail_priceLabel: Omni.i18n.model.ProgramStyle.retail_price
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.style_displayLabel, dataIndex: 'style_display',  flex: 1,  sortable: true  },
        { header: this.retail_priceLabel, dataIndex: 'retail_price',  flex: 1,  sortable: true  }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Program Style',
      subtitle:  'The styles that are in a particular program'
    });
    // TITLES (End)



    this.callParent();
  }

});
