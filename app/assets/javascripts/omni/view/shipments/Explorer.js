Ext.define('Omni.view.shipments.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.omni-shipments-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  contextMenuConfig: {
    xtype: 'omni-app-ExplorerContextMenu'
  },

  newForms: [{
    xtype: 'omni-shipments-Form'
  }],

  inspectorConfig: {
    xtype: 'omni-shipments-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  shipment_idLabel: Omni.i18n.model.Shipment.shipment_id,
  displayLabel: Omni.i18n.model.Shipment.display,
  stateLabel: Omni.i18n.model.Shipment.state,
  shipment_nbrLabel: Omni.i18n.model.Shipment.shipment_nbr,
  location_idLabel: Omni.i18n.model.Shipment.location_id,
  shippable_typeLabel: Omni.i18n.model.Shipment.shippable_type,
  shippable_idLabel: Omni.i18n.model.Shipment.shippable_id,
  supplier_idLabel: Omni.i18n.model.Shipment.supplier_id,
  cancel_user_idLabel: Omni.i18n.model.Shipment.cancel_user_id,
  tracking_numberLabel: Omni.i18n.model.Shipment.tracking_number,
  create_dateLabel: Omni.i18n.model.Shipment.create_date,
  ship_dateLabel: Omni.i18n.model.Shipment.ship_date,
  receipt_dateLabel: Omni.i18n.model.Shipment.receipt_date,
  cancel_dateLabel: Omni.i18n.model.Shipment.cancel_date,
  estimated_delivery_dateLabel: Omni.i18n.model.Shipment.estimated_delivery_date,
  shipping_costLabel: Omni.i18n.model.Shipment.shipping_cost,
  ship_nameLabel: Omni.i18n.model.Shipment.ship_name,
  ship_line_1Label: Omni.i18n.model.Shipment.ship_line_1,
  ship_line_2Label: Omni.i18n.model.Shipment.ship_line_2,
  ship_line_3Label: Omni.i18n.model.Shipment.ship_line_3,
  ship_line_4Label: Omni.i18n.model.Shipment.ship_line_4,
  ship_cityLabel: Omni.i18n.model.Shipment.ship_city,
  ship_state_codeLabel: Omni.i18n.model.Shipment.ship_state_code,
  ship_zipLabel: Omni.i18n.model.Shipment.ship_zip,
  ship_countryLabel: Omni.i18n.model.Shipment.ship_country,
  ship_latitudeLabel: Omni.i18n.model.Shipment.ship_latitude,
  ship_longitudeLabel: Omni.i18n.model.Shipment.ship_longitude,
  is_residentialLabel: Omni.i18n.model.Shipment.is_residential,
  is_commercialLabel: Omni.i18n.model.Shipment.is_commercial,
  phoneLabel: Omni.i18n.model.Shipment.phone,
  email_addressLabel: Omni.i18n.model.Shipment.email_address,
  is_destroyedLabel: Omni.i18n.model.Shipment.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title: 'Shipments',
  subtitle: 'Create and maintain Shipments',
  // TITLES (End)

  initComponent: function() {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store: Ext.create('Omni.store.Shipment')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(me, {
      columns: [
        // {
        //   header       : me.displayLabel,
        //   dataIndex    : 'display',
        //   flex         : 1
        // },
        {
          header: me.shipment_nbrLabel,
          dataIndex: 'shipment_nbr',
          flex: 1
        }, {
          header: me.location_idLabel,
          dataIndex: 'location_display',
          flex: 2
        }, {

          // {
          //   header       : me.shippable_typeLabel,
          //   dataIndex    : 'shippable_type',
          //   flex         : 1
          // },
          // {
          //   header       : me.shippable_idLabel,
          //   dataIndex    : 'shippable_id',
          //   flex         : 1
          // },
          header: me.supplier_idLabel,
          dataIndex: 'supplier_display',
          flex: 2
        },
        // {
        //   header       : me.cancel_user_idLabel,
        //   dataIndex    : 'cancel_user_display',
        //   flex         : 1
        // },
        {
          header: me.tracking_numberLabel,
          dataIndex: 'tracking_number',
          flex: 1
          // }, {
          //   header: me.create_dateLabel,
          //   dataIndex: 'create_date',
          //   flex: 1
        },
        // {
        //   header       : me.ship_dateLabel,
        //   dataIndex    : 'ship_date',
        //   flex         : 1
        // },
        // {
        //   header       : me.receipt_dateLabel,
        //   dataIndex    : 'receipt_date',
        //   flex         : 1
        // },
        // {
        //   header       : me.cancel_dateLabel,
        //   dataIndex    : 'cancel_date',
        //   flex         : 1
        // },
        // {
        //   header       : me.estimated_delivery_dateLabel,
        //   dataIndex    : 'estimated_delivery_date',
        //   flex         : 1
        // },
        // {
        //   header       : me.shipping_costLabel,
        //   dataIndex    : 'shipping_cost',
        //   flex         : 1
        // },
        {
          header: me.ship_nameLabel,
          dataIndex: 'ship_name',
          flex: 2
        }, {
          header: me.ship_line_1Label,
          dataIndex: 'ship_line_1',
          flex: 2
        },
        // {
        //   header       : me.ship_line_2Label,
        //   dataIndex    : 'ship_line_2',
        //   flex         : 1
        // },
        // {
        //   header       : me.ship_line_3Label,
        //   dataIndex    : 'ship_line_3',
        //   flex         : 1
        // },
        // {
        //   header       : me.ship_line_4Label,
        //   dataIndex    : 'ship_line_4',
        //   flex         : 1
        // },
        // {
        //   header       : me.ship_cityLabel,
        //   dataIndex    : 'ship_city',
        //   flex         : 1
        // },
        // {
        //   header       : me.ship_state_codeLabel,
        //   dataIndex    : 'ship_state_code',
        //   flex         : 1
        // },
        // {
        //   header       : me.ship_zipLabel,
        //   dataIndex    : 'ship_zip',
        //   flex         : 1
        // },
        // {
        //   header       : me.ship_countryLabel,
        //   dataIndex    : 'ship_country',
        //   flex         : 1
        // },
        // {
        //   header       : me.ship_latitudeLabel,
        //   dataIndex    : 'ship_latitude',
        //   flex         : 1
        // },
        // {
        //   header       : me.ship_longitudeLabel,
        //   dataIndex    : 'ship_longitude',
        //   flex         : 1
        // },
        // {
        //   xtype        : 'checkcolumn',
        //   header       : me.is_residentialLabel,
        //   dataIndex    : 'is_residential',
        //   flex         : 1
        // },
        // {
        //   xtype        : 'checkcolumn',
        //   header       : me.is_commercialLabel,
        //   dataIndex    : 'is_commercial',
        //   flex         : 1
        // },
        {
          header: me.phoneLabel,
          dataIndex: 'phone',
          flex: 1
        }, {
          header: me.email_addressLabel,
          dataIndex: 'email_address',
          flex: 2
        }, {
          header: me.stateLabel,
          dataIndex: 'state',
          flex: 1
        }
      ]
    });
    // COLUMNS (End)


    me.callParent();
  }

});
