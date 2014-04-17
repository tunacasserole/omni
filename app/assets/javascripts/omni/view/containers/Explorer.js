Ext.define('Omni.view.containers.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.omni-containers-Explorer',

  initComponent: function() {

    var me = this;

    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.Container'),

      contextMenuConfig: {
        xtype: 'buildit-explorer-ContextMenu'
      },

      newForms: [{
        xtype: 'omni-containers-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-containers-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      location_displayLabel: Omni.i18n.model.Container.location_display,
      stateLabel: Omni.i18n.model.Container.state,
      container_nbrLabel: Omni.i18n.model.Container.container_nbr,
      descriptionLabel: Omni.i18n.model.Container.description,
      container_typeLabel: Omni.i18n.model.Container.container_type,
      parent_container_displayLabel: Omni.i18n.model.Container.parent_container_display,
      barcode_nbrLabel: Omni.i18n.model.Container.barcode_nbr,
      bin_displayLabel: Omni.i18n.model.Container.bin_display
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [{
        header: this.container_nbrLabel,
        dataIndex: 'container_nbr',
        flex: 1,
        sortable: false
      }, {
        header: this.location_displayLabel,
        dataIndex: 'location_display',
        flex: 1,
        sortable: false
      }, {
        header: this.descriptionLabel,
        dataIndex: 'description',
        flex: 1,
        sortable: false
      }, {
        header: this.container_typeLabel,
        dataIndex: 'container_type',
        flex: 1,
        sortable: false
      }, {
        header: this.parent_container_displayLabel,
        dataIndex: 'parent_container_display',
        flex: 1,
        sortable: false
      }, {
        header: this.barcode_nbrLabel,
        dataIndex: 'barcode_nbr',
        flex: 1,
        sortable: false
      }, {
        header: this.bin_displayLabel,
        dataIndex: 'bin_display',
        flex: 1,
        sortable: false
      }, {
        header: this.stateLabel,
        dataIndex: 'state',
        flex: 1,
        sortable: false
      }]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title: 'Container',
      subtitle: 'All containers, including boxes, totes, pallets, trailers, etc'
    });
    // TITLES (End)



    this.callParent();
  }

});
