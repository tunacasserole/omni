Ext.define('Omni.view.purchases.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-purchases-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  allowFind: true,

  store: Ext.create('Omni.store.Purchase'),

  contextMenuConfig: {
    xtype: 'omni-purchases-ExplorerContextMenu'
  },

  newForms:[{
    xtype: 'omni-purchases-Form'
  }],

  inspectorConfig: {
    xtype: 'omni-purchases-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  purchase_idLabel:                       Omni.i18n.model.Purchase.purchase_id,
  displayLabel:                           Omni.i18n.model.Purchase.display,
  purchase_order_nbrLabel:                Omni.i18n.model.Purchase.purchase_order_nbr,
  supplier_idLabel:                       Omni.i18n.model.Purchase.supplier_id,
  location_idLabel:                       Omni.i18n.model.Purchase.location_id,
  purchase_typeLabel:                     Omni.i18n.model.Purchase.purchase_type,
  purchase_sourceLabel:                   Omni.i18n.model.Purchase.purchase_source,
  stateLabel:                             Omni.i18n.model.Purchase.state,
  order_dateLabel:                        Omni.i18n.model.Purchase.order_date,
  ordered_by_user_idLabel:                Omni.i18n.model.Purchase.ordered_by_user_id,
  ship_dateLabel:                         Omni.i18n.model.Purchase.ship_date,
  delivery_dateLabel:                     Omni.i18n.model.Purchase.delivery_date,
  cancel_not_shipped_by_dateLabel:        Omni.i18n.model.Purchase.cancel_not_shipped_by_date,
  cancel_not_received_by_dateLabel:       Omni.i18n.model.Purchase.cancel_not_received_by_date,
  approval_dateLabel:                     Omni.i18n.model.Purchase.approval_date,
  first_receipt_dateLabel:                Omni.i18n.model.Purchase.first_receipt_date,
  cancelled_dateLabel:                    Omni.i18n.model.Purchase.cancelled_date,
  payment_termLabel:                      Omni.i18n.model.Purchase.payment_term,
  freight_termLabel:                      Omni.i18n.model.Purchase.freight_term,
  fob_pointLabel:                         Omni.i18n.model.Purchase.fob_point,
  ship_viaLabel:                          Omni.i18n.model.Purchase.ship_via,
  is_phone_orderLabel:                    Omni.i18n.model.Purchase.is_phone_order,
  confirmed_by_user_idLabel:              Omni.i18n.model.Purchase.confirmed_by_user_id,
  master_purchase_idLabel:                Omni.i18n.model.Purchase.master_purchase_id,
  carrier_supplier_idLabel:               Omni.i18n.model.Purchase.carrier_supplier_id,
  is_special_orderLabel:                  Omni.i18n.model.Purchase.is_special_order,
  is_ship_cancelLabel:                    Omni.i18n.model.Purchase.is_ship_cancel,
  estimated_lead_time_daysLabel:          Omni.i18n.model.Purchase.estimated_lead_time_days,
  lead_timeLabel:                         Omni.i18n.model.Purchase.lead_time,
  is_destroyedLabel:                      Omni.i18n.model.Purchase.is_destroyed,
  // LABELS (End)
  
  // TITLES (Start) ======================================================================
  title:     'Purchases',
  subtitle:  'Create and maintain Purchases',
  // TITLES (End)

  initComponent:function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        // { header: this.purchase_idLabel,                   dataIndex: 'purchase_id',                 flex: 1 },    
        // { header: this.displayLabel,                       dataIndex: 'display',                     flex: 1 },    
        { header: this.purchase_order_nbrLabel,            dataIndex: 'purchase_order_nbr',          flex: 1 },    
        { header: this.supplier_idLabel,                   dataIndex: 'supplier_display',            flex: 1 },    
        { header: this.location_idLabel,                   dataIndex: 'location_display',            flex: 1 },    
        // { header: this.purchase_typeLabel,                 dataIndex: 'purchase_type',               flex: 1 },    
        // { header: this.purchase_sourceLabel,               dataIndex: 'purchase_source',             flex: 1 },    
        { header: this.stateLabel,                         dataIndex: 'state',                       flex: 1 },
        { header: 'Total Order Cost',                      dataIndex: 'total_order_cost',            flex: 1 },
        { header: this.order_dateLabel,                    dataIndex: 'order_date',                  flex: 1,  renderer: Ext.util.Format.dateRenderer('m/d/y') },
        // { header: this.ordered_by_user_idLabel,            dataIndex: 'ordered_by_user_id',          flex: 1 },    
        { header: this.ship_dateLabel,                     dataIndex: 'ship_date',                   flex: 1,  renderer: Ext.util.Format.dateRenderer('m/d/y') },    
        { header: this.delivery_dateLabel,                 dataIndex: 'delivery_date',               flex: 1,  renderer: Ext.util.Format.dateRenderer('m/d/y') }
        // { header: this.cancel_not_shipped_by_dateLabel,    dataIndex: 'cancel_not_shipped_by_date',  flex: 1 },    
        // { header: this.cancel_not_received_by_dateLabel,   dataIndex: 'cancel_not_received_by_date', flex: 1 },    
        // { header: this.approval_dateLabel,                 dataIndex: 'approval_date',               flex: 1 },    
        // { header: this.first_receipt_dateLabel,            dataIndex: 'first_receipt_date',          flex: 1 },    
        // { header: this.cancelled_dateLabel,                dataIndex: 'cancelled_date',              flex: 1 },    
        // { header: this.payment_termLabel,                  dataIndex: 'payment_term',                flex: 1 },    
        // { header: this.freight_termLabel,                  dataIndex: 'freight_term',                flex: 1 },    
        // { header: this.fob_pointLabel,                     dataIndex: 'fob_point',                   flex: 1 },    
        // { header: this.ship_viaLabel,                      dataIndex: 'ship_via',                    flex: 1 },    
        // { header: this.is_phone_orderLabel,                dataIndex: 'is_phone_order',              flex: 1 },    
        // { header: this.confirmed_by_user_idLabel,          dataIndex: 'confirmed_by_user_id',        flex: 1 },    
        // { header: this.master_purchase_idLabel,            dataIndex: 'master_purchase_id',          flex: 1 },    
        // { header: this.carrier_supplier_idLabel,           dataIndex: 'carrier_supplier_id',         flex: 1 },    
        // { header: this.is_special_orderLabel,              dataIndex: 'is_special_order',            flex: 1 },    
        // { header: this.is_ship_cancelLabel,                dataIndex: 'is_ship_cancel',              flex: 1 },    
        // { header: this.estimated_lead_time_daysLabel,      dataIndex: 'estimated_lead_time_days',    flex: 1 },    
        // { header: this.lead_timeLabel,                     dataIndex: 'lead_time',                   flex: 1 },    
        // { header: this.is_destroyedLabel,                  dataIndex: 'is_destroyed',                flex: 1 }    
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});