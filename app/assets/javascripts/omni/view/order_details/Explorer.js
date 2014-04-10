Ext.define('Omni.view.order_details.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-order_details-Explorer',


    // LABELS (Start) ======================================================================
  order_detail_nbrLabel:                      Omni.i18n.model.OrderDetail.order_detail_nbr,
  sku_displayLabel:                         Omni.i18n.model.OrderDetail.sku_display,
  sku_alias_displayLabel:                   Omni.i18n.model.OrderDetail.sku_alias_display,
  delivery_methodLabel:                     Omni.i18n.model.OrderDetail.delivery_method,
  pickup_location_displayLabel:             Omni.i18n.model.OrderDetail.pickup_location_display,
  account_displayLabel:                        Omni.i18n.model.OrderDetail.account_display,
  grade_displayLabel:                       Omni.i18n.model.OrderDetail.grade_display,
  genderLabel:                              Omni.i18n.model.OrderDetail.gender,
  // LABELS (End)

    // TITLES (Start) ======================================================================
  title:     'Order Detail',
  subtitle:  'Each product on a customer order',
  // TITLES (End)


    // EXPLORER CONFIG (Start) ===============================================================
  allowFind:      true,

  store:          Ext.create('Omni.store.OrderDetail'),

  contextMenuConfig:{
    xtype:        'omni-order_details-ExplorerContextMenu',
  },

  inspectorConfig: {
    xtype:        'omni-order_details-Inspector'
  },

  newForms:[{
    xtype:        'omni-order_details-Form',
    windowConfig: {}
  }],
  // EXPLORER CONFIG (End)


  initComponent:function () {

    var me = this;


    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.order_detail_nbrLabel,                            dataIndex: 'order_detail_nbr',                   flex: 1,   sortable: false  },
        { header: this.sku_displayLabel,                                 dataIndex: 'sku_display',                        flex: 1,   sortable: false  },
        { header: this.delivery_methodLabel,                             dataIndex: 'delivery_method',                    flex: 1,   sortable: false  },
        { header: this.pickup_location_displayLabel,                     dataIndex: 'pickup_location_display',            flex: 1,   sortable: false  },
      ]
    });
    // COLUMNS (End)

    // EXPLORER PRE-INIT (Start) =============================================================
    // EXPLORER PRE-INIT (End)


    this.callParent();


    // EXPLORER POST-INIT (Start) ============================================================

    // EXPLORER POST-INIT (End)

  }

});
