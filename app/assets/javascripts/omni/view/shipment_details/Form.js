Ext.define('Omni.view.shipment_details.Form', {

  extend: 'Buildit.ux.Form',
  alias: 'widget.omni-shipment_details-Form',

  // LABELS (Start) =======================================================================
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


  initComponent: function() {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property: 'shipment_detail_id',
      value: this.record.get('shipment_detail_id')
    };
    // FILTER (End)



    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [{
          xtype: 'fieldset',
          title: 'General Information',
          collapsible: true,
          defaultType: 'textfield',
          layout: 'anchor',
          items: [{
            name: 'pick_id',
            fieldLabel: this.pick_idLabel,
            allowBlank: true,
            disabled: false,
            xtype: 'buildit-Locator',
            store: Ext.create('Omni.store.Pick', {
              pageSize: 10
            }),
            displayField: 'display',
            queryField: 'display',
            valueField: 'pick_id',
            itemTpl: '{display}',
            gotoTarget: 'omni-picks-Inspector'
          }, {
            xtype: 'numberfield',
            name: 'ship_units',
            fieldLabel: me.ship_unitsLabel,
            maxLength: 100,
            minLength: 0,
            allowBlank: true
          }, {
            xtype: 'numberfield',
            name: 'box_number',
            fieldLabel: me.box_numberLabel,
            maxLength: 200,
            minLength: 0,
            allowBlank: true
          }, {
            xtype: 'numberfield',
            name: 'received_units',
            fieldLabel: me.received_unitsLabel,
            maxLength: 100,
            minLength: 0,
            allowBlank: true
          }, {
          name: 'container_id',
            fieldLabel: this.container_idLabel,
            allowBlank: true,
            disabled: false,
            xtype: 'buildit-Locator',
            store: Ext.create('Omni.store.Container', {
              pageSize: 10
            }),
            displayField: 'display',
            queryField: 'display',
            valueField: 'container_id',
            itemTpl: '{display}',
            gotoTarget: 'omni-containers-Inspector'
          }]
        }
        /*,
        {
          xtype        : 'fieldset',
          title        : 'Additional Information',
          collapsible  : true,
          defaultType  : 'textfield',
          layout       : 'anchor',
          items        : [
          ]
        }*/
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Shipment Detail',
      subtitle: 'Edit Shipment Detail'
    });
    // TITLES (End)

    this.callParent();

  } // initComponent

}); // Ext.define('Omni.view.shipment_details.Form'
