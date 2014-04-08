Ext.define('Omni.view.allocation_details.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.omni-allocation_details-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  store: Ext.create('Omni.store.AllocationDetail'),

  contextMenuConfig: {
    xtype: 'buildit-explorer-ContextMenu'
  },

  newForms: [{
    xtype: 'omni-allocation_details-Form'
  }],

  inspectorConfig: {
    xtype: 'omni-allocation_details-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  location_idLabel: Omni.i18n.model.AllocationDetail.location_id,
  allocation_idLabel: Omni.i18n.model.AllocationDetail.allocation_id,
  allocation_detail_nbrLabel: Omni.i18n.model.AllocationDetail.allocation_detail_nbr,
  stateLabel: Omni.i18n.model.AllocationDetail.state,
  units_neededLabel: Omni.i18n.model.AllocationDetail.units_needed,
  units_allocatedLabel: Omni.i18n.model.AllocationDetail.units_allocated,
  units_shippedLabel: Omni.i18n.model.AllocationDetail.units_shipped,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title: 'Allocation Details',
  subtitle: 'Create and maintain Allocation Details',
  // TITLES (End)

  initComponent: function() {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [{
        header: this.allocation_detail_nbrLabel,
        dataIndex: 'allocation_detail_nbr',
        flex: 1
      }, {
        header: this.location_idLabel,
        dataIndex: 'location_display',
        flex: 1
      }, {
        header: this.stateLabel,
        dataIndex: 'state',
        flex: 1
      }, {
        header: this.units_neededLabel,
        dataIndex: 'units_needed',
        flex: 1
      }, {
        header: this.units_allocatedLabel,
        dataIndex: 'units_allocated',
        flex: 1
      }, {
        header: this.units_shippedLabel,
        dataIndex: 'units_shipped',
        flex: 1
      }]
    });
    // COLUMNS (End)


    this.callParent();
  }

});
