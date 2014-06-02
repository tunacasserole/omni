Ext.define('Omni.view.transfer_reasons.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.omni-transfer_reasons-Explorer',



  initComponent: function() {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.TransferReason'),

      contextMenuConfig: {
        xtype: 'omni-app-ExplorerContextMenu'
      },

      newForms: [{
        xtype: 'omni-transfer_reasons-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-transfer_reasons-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      displayLabel: Omni.i18n.model.TransferReason.display,
      descriptionLabel: Omni.i18n.model.TransferReason.description,
      short_nameLabel: Omni.i18n.model.TransferReason.short_name
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
      }]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title: 'Transfer Reason',
      subtitle: 'Transfer reason codes'
    });
    // TITLES (End)



    this.callParent();
  }

});
