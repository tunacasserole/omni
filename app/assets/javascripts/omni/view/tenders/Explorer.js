Ext.define('Omni.view.tenders.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.omni-tenders-Explorer',



  initComponent: function() {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.Tender'),

      contextMenuConfig: {
        xtype: 'omni-app-ExplorerContextMenu'
      },

      newForms: [{
        xtype: 'omni-tenders-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-tenders-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      displayLabel: Omni.i18n.model.Tender.display,
      descriptionLabel: Omni.i18n.model.Tender.description,
      short_nameLabel: Omni.i18n.model.Tender.short_name,
      tender_typeLabel: Omni.i18n.model.Tender.tender_type,
      is_update_tillLabel: Omni.i18n.model.Tender.is_update_till,
      is_credit_cardLabel: Omni.i18n.model.Tender.is_credit_card,
      display_orderLabel: Omni.i18n.model.Tender.display_order
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [{
        header: this.displayLabel,
        dataIndex: 'display',
        flex: 1,
        sortable: false
      }, {
        header: this.descriptionLabel,
        dataIndex: 'description',
        flex: 1,
        sortable: false
      }, {
        header: this.short_nameLabel,
        dataIndex: 'short_name',
        flex: 1,
        sortable: false
      }, {
        header: this.tender_typeLabel,
        dataIndex: 'tender_type',
        flex: 1,
        sortable: false
      }, {
        header: this.is_update_tillLabel,
        dataIndex: 'is_update_till',
        flex: 1,
        sortable: false
      }, {
        header: this.is_credit_cardLabel,
        dataIndex: 'is_credit_card',
        flex: 1,
        sortable: false
      }, {
        header: this.display_orderLabel,
        dataIndex: 'display_order',
        flex: 1,
        sortable: false
      }]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title: 'Tender',
      subtitle: 'A form of payment such as cash, check, etc'
    });
    // TITLES (End)



    this.callParent();
  }

});
