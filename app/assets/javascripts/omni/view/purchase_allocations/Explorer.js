Ext.define('Omni.view.purchase_allocations.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.omni-purchase_allocations-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  allowFind: false,

  store: Ext.create('Omni.store.PurchaseAllocation'),

  contextMenuConfig: {
    xtype: 'omni-app-ExplorerContextMenu',
  },

  newForms: [{
    xtype: 'omni-purchase_allocations-Form'
  }],

  inspectorConfig: {
    xtype: 'omni-purchase_allocations-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  purchase_allocation_idLabel: Omni.i18n.model.PurchaseAllocation.purchase_allocation_id,
  purchase_detail_idLabel: Omni.i18n.model.PurchaseAllocation.purchase_detail_id,
  allocation_idLabel: Omni.i18n.model.PurchaseAllocation.allocation_id,
  location_idLabel: Omni.i18n.model.PurchaseAllocation.location_id,
  displayLabel: Omni.i18n.model.PurchaseAllocation.display,
  purchase_allocation_nbrLabel: Omni.i18n.model.PurchaseAllocation.purchase_allocation_nbr,
  stateLabel: Omni.i18n.model.PurchaseAllocation.state,
  units_neededLabel: Omni.i18n.model.PurchaseAllocation.units_needed,
  units_allocatedLabel: Omni.i18n.model.PurchaseAllocation.units_allocated,
  units_shippedLabel: Omni.i18n.model.PurchaseAllocation.units_shipped,
  is_destroyedLabel: Omni.i18n.model.PurchaseAllocation.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title: 'Purchase Allocations',
  subtitle: 'Create and Maintain Purchase Allocations',
  // TITLES (End)

  initComponent: function() {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [{
        header: this.purchase_allocation_nbrLabel,
        dataIndex: 'purchase_allocation_nbr',
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
      }, ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});
