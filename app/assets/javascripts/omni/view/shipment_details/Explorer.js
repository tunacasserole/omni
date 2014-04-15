Ext.define('Omni.view.shipment_details.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.omni-shipment_details-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  contextMenuConfig: {
    xtype: 'buildit-explorer-ContextMenu'
  },

  newForms: [{
    xtype: 'omni-shipment_details-Form'
  }],

  inspectorConfig: {
    xtype: 'omni-shipment_details-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  shipment_detail_idLabel: Omni.i18n.model.ShipmentDetail.shipment_detail_id,
  displayLabel: Omni.i18n.model.ShipmentDetail.display,
  shipment_idLabel: Omni.i18n.model.ShipmentDetail.shipment_id,
  pick_idLabel: Omni.i18n.model.ShipmentDetail.pick_id,
  ship_unitsLabel: Omni.i18n.model.ShipmentDetail.ship_units,
  box_numberLabel: Omni.i18n.model.ShipmentDetail.box_number,
  received_unitsLabel: Omni.i18n.model.ShipmentDetail.received_units,
  container_idLabel: Omni.i18n.model.ShipmentDetail.container_id,
  is_destroyedLabel: Omni.i18n.model.ShipmentDetail.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title: 'Shipment Details',
  subtitle: 'Create and maintain Shipment Details',
  // TITLES (End)

  initComponent: function() {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store: Ext.create('Omni.store.ShipmentDetail')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(me, {
      columns: [{
        header: me.pick_idLabel,
        dataIndex: 'pick_display',
        flex: 1
      }, {
        header: me.ship_unitsLabel,
        dataIndex: 'ship_units',
        flex: 1
      }, {
        header: me.box_numberLabel,
        dataIndex: 'box_number',
        flex: 1
      }, {
        header: me.received_unitsLabel,
        dataIndex: 'received_units',
        flex: 1
      }]
    });
    // COLUMNS (End)


    me.callParent();
  }

});
