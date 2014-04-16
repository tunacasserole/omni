Ext.define('Omni.view.till_details.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.omni-till_details-Explorer',



  initComponent: function() {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.TillDetail'),

      contextMenuConfig: {
        xtype: 'buildit-explorer-ContextMenu'
      },

      newForms: [{
        xtype: 'omni-till_details-Form',
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
      tender_displayLabel: Omni.i18n.model.TillDetail.tender_display,
      tender_amountLabel: Omni.i18n.model.TillDetail.tender_amount,
      tender_countLabel: Omni.i18n.model.TillDetail.tender_count
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [{
        header: this.till_displayLabel,
        dataIndex: 'till_display',
        flex: 1,
        sortable: false
      }, {
        header: this.tender_displayLabel,
        dataIndex: 'tender_display',
        flex: 1,
        sortable: false
      }, {
        header: this.tender_amountLabel,
        dataIndex: 'tender_amount',
        flex: 1,
        sortable: false
      }, {
        header: this.tender_countLabel,
        dataIndex: 'tender_count',
        flex: 1,
        sortable: false
      }]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title: 'Till Detail',
      subtitle: 'Current balance of each tender type in a till'
    });
    // TITLES (End)



    this.callParent();
  }

});
