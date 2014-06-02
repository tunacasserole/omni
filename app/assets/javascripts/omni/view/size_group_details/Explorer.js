Ext.define('Omni.view.size_group_details.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.omni-size_group_details-Explorer',

  initComponent: function() {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.SizeGroupDetail'),

      contextMenuConfig: {
        xtype: 'omni-app-ExplorerContextMenu'
      },

      newForms: [{
        xtype: 'omni-size_group_details-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-size_group_details-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      size_group_displayLabel: Omni.i18n.model.SizeGroupDetail.size_group_display,
      size_displayLabel: Omni.i18n.model.SizeGroupDetail.size_display,
      display_orderLabel: Omni.i18n.model.SizeGroupDetail.display_order,
      is_enabledLabel: Omni.i18n.model.SizeGroupDetail.is_enabled
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [{
        header: this.size_group_displayLabel,
        dataIndex: 'size_group_display',
        flex: 1,
        sortable: false
      }, {
        header: this.size_displayLabel,
        dataIndex: 'size_display',
        flex: 1,
        sortable: false
      }, {
        header: this.display_orderLabel,
        dataIndex: 'display_order',
        flex: 1,
        sortable: false
      }, {
        header: this.is_enabledLabel,
        dataIndex: 'is_enabled',
        flex: 1,
        sortable: false
      }, ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title: 'Size Group Detail',
      subtitle: 'Each size/variance combination in a size group'
    });
    // TITLES (End)



    this.callParent();
  }

});
