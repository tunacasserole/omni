Ext.define('Omni.view.receipt_formats.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-receipt_formats-Explorer',



  initComponent:function () {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.ReceiptFormat'),

      contextMenuConfig:{
        xtype:'omni-receipt_formats-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-receipt_formats-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-receipt_formats-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      displayLabel: Omni.i18n.model.ReceiptFormat.display,
      descriptionLabel: Omni.i18n.model.ReceiptFormat.description,
      paper_widthLabel: Omni.i18n.model.ReceiptFormat.paper_width,
      icon_urlLabel: Omni.i18n.model.ReceiptFormat.icon_url,
      icon_widthLabel: Omni.i18n.model.ReceiptFormat.icon_width
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.displayLabel, dataIndex: 'display',  flex: 1,  sortable: false  },
        { header: this.descriptionLabel, dataIndex: 'description',  flex: 1,  sortable: false  },
        { header: this.paper_widthLabel, dataIndex: 'paper_width',  flex: 1,  sortable: false  },
        { header: this.icon_urlLabel, dataIndex: 'icon_url',  flex: 1,  sortable: false  },
        { header: this.icon_widthLabel, dataIndex: 'icon_width',  flex: 1,  sortable: false  }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Receipt Format',
      subtitle:  'Format of receipt'
    });
    // TITLES (End)



    this.callParent();
  }

});
