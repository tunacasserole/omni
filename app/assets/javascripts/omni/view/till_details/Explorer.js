Ext.define('Omni.view.till_details.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-till_details-Explorer',



  initComponent:function () {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.TillDetail'),

      contextMenuConfig:{
        xtype:'omni-till_details-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-till_details-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-till_details-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      till_displayLabel: Omni.i18n.model.TillDetail.till_display,
      tender_displayLabel: Omni.i18n.model.TillDetail.tender_display
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.till_displayLabel, dataIndex: 'till_display',  flex: 1,  sortable: false  },
        { header: this.tender_displayLabel, dataIndex: 'tender_display',  flex: 1,  sortable: false  }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Till Detail',
      subtitle:  'Current balance of each tender type in a till'
    });
    // TITLES (End)



    this.callParent();
  }

});
