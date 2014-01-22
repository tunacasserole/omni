Ext.define('Omni.view.style_colors.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-style_colors-Explorer',


  initComponent:function () {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: false,

      store: Ext.create('Omni.store.StyleColor'),

      contextMenuConfig:{
        xtype:'omni-style_colors-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-style_colors-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-style_colors-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      style_displayLabel: Omni.i18n.model.StyleColor.style_display,
      stateLabel: Omni.i18n.model.StyleColor.state,
      color_displayLabel: Omni.i18n.model.StyleColor.color_display,
      short_nameLabel: Omni.i18n.model.StyleColor.short_name,
      fabric_contentLabel: Omni.i18n.model.StyleColor.fabric_content,
      initial_retail_priceLabel: Omni.i18n.model.StyleColor.initial_retail_price,
      concatenated_nameLabel: Omni.i18n.model.StyleColor.concatenated_name
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.style_displayLabel, dataIndex: 'style_display',  flex: 1,  sortable: true  },
        { header: this.stateLabel, dataIndex: 'state', flex: 1,   sortable: true  },
        { header: this.color_displayLabel, dataIndex: 'color_display',  flex: 1,  sortable: true  },
        { header: this.short_nameLabel, dataIndex: 'short_name',  flex: 1,  sortable: true  },
        { header: this.fabric_contentLabel, dataIndex: 'fabric_content',  flex: 1,  sortable: true  },
        { header: this.inital_retail_priceLabel, dataIndex: 'inital_retail_price',  flex: 1,  sortable: true  },
        { header: this.concatenated_nameLabel, dataIndex: 'concatenated_name',  flex: 1,  sortable: true  }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Style Color',
      subtitle:  'All of the colors available for a style'
    });
    // TITLES (End)



    this.callParent();
  }

});
