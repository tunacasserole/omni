Ext.define('Omni.view.purchases.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-purchases-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'purchase_id',
      value:      this.record.get('purchase_id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
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
      is_destroyedLabel:                      Omni.i18n.model.Purchase.is_destroyed    
    });
    // LABELS (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [
        {
          xtype:        'fieldset',
          title:        'General Information',
          collapsible:  true,
          defaultType:  'textfield',
          defaults:     {anchor: '95%'},
          layout:       'anchor',
          items:[

            // { xtype: 'textfield', name: 'purchase_id',                    fieldLabel: this.purchase_idLabel                 , allowBlank: true },    
            { xtype: 'textfield', name: 'display',                        fieldLabel: this.displayLabel                     , allowBlank: true },    
            { xtype: 'textfield', name: 'purchase_order_nbr',             fieldLabel: this.purchase_order_nbrLabel          , allowBlank: true },    
            { xtype: 'buildit-Locator',   name: 'supplier_id',          fieldLabel: this.supplier_idLabel                 , allowBlank: true,  store:   Ext.create('Omni.store.Supplier',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'supplier_id', itemTpl:'{display}' },
            { xtype: 'buildit-Locator',   name: 'location_id',          fieldLabel: this.location_idLabel                 , allowBlank: true,  store:   Ext.create('Omni.store.Location',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'location_id', itemTpl:'{display}' },
            { xtype: 'buildit-Lookup', name: 'purchase_type',               fieldLabel: this.purchase_typeLabel         , allowBlank: true, category:   'PURCHASE_TYPE' },            
            { xtype: 'buildit-Lookup', name: 'purchase_source',               fieldLabel: this.purchase_sourceLabel         , allowBlank: true, category:   'PURCHASE_SOURCE' },            
            { xtype: 'textfield', name: 'state',                          fieldLabel: this.stateLabel                       , allowBlank: true, disabled: true },    
            { xtype: 'textfield', name: 'order_date',                     fieldLabel: this.order_dateLabel                  , allowBlank: true },    
            { xtype: 'buildit-Locator',   name: 'ordered_by_user_id',          fieldLabel: this.ordered_by_user_idLabel                 , allowBlank: true,  store:   Ext.create('Buildit.store.User',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'ordered_by_user_id', itemTpl:'{display}' },
            { xtype: 'datefield', name: 'ship_date',                      fieldLabel: this.ship_dateLabel                   , allowBlank: true },    
            { xtype: 'datefield', name: 'delivery_date',                  fieldLabel: this.delivery_dateLabel               , allowBlank: true },    
            { xtype: 'datefield', name: 'cancel_not_shipped_by_date',     fieldLabel: this.cancel_not_shipped_by_dateLabel  , allowBlank: true },    
            { xtype: 'datefield', name: 'cancel_not_received_by_date',    fieldLabel: this.cancel_not_received_by_dateLabel , allowBlank: true },    
            { xtype: 'datefield', name: 'approval_date',                  fieldLabel: this.approval_dateLabel               , allowBlank: true },    
            { xtype: 'datefield', name: 'first_receipt_date',             fieldLabel: this.first_receipt_dateLabel          , allowBlank: true },    
            { xtype: 'datefield', name: 'cancelled_date',                 fieldLabel: this.cancelled_dateLabel              , allowBlank: true },    
            { xtype: 'buildit-Lookup', name: 'payment_term',               fieldLabel: this.payment_termLabel         , allowBlank: true, category:   'PAYMENT_TERM' },            
            { xtype: 'buildit-Lookup', name: 'freight_term',               fieldLabel: this.freight_termLabel         , allowBlank: true, category:   'FREIGHT_TERM' },            
            { xtype: 'buildit-Lookup', name: 'fob_point',               fieldLabel: this.fob_pointLabel         , allowBlank: true, category:   'FOB_POINT' },            
            { xtype: 'textfield', name: 'ship_via',                       fieldLabel: this.ship_viaLabel                    , allowBlank: true },    
            { xtype: 'checkbox', name: 'is_phone_order',                 fieldLabel: this.is_phone_orderLabel              , allowBlank: true },    
            { xtype: 'buildit-Locator',   name: 'confirmed_by_user_id',          fieldLabel: this.confirmed_by_user_idLabel                 , allowBlank: true,  store:   Ext.create('Buildit.store.User',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'confirmed_by_user_id', itemTpl:'{display}' },
            { xtype: 'buildit-Locator',   name: 'master_purchase_id',          fieldLabel: this.master_purchase_idLabel                 , allowBlank: true,  store:   Ext.create('Omni.store.Purchase',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'master_purchase_id', itemTpl:'{display}' },
            { xtype: 'buildit-Locator',   name: 'carrier_supplier_id',          fieldLabel: this.carrier_supplier_idLabel                 , allowBlank: true,  store:   Ext.create('Omni.store.Supplier',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'carrier_supplier_id', itemTpl:'{display}' }, 
            { xtype: 'checkbox', name: 'is_special_order',               fieldLabel: this.is_special_orderLabel            , allowBlank: true },    
            { xtype: 'checkbox', name: 'is_ship_cancel',                 fieldLabel: this.is_ship_cancelLabel              , allowBlank: true },    
            { xtype: 'textfield', name: 'estimated_lead_time_days',       fieldLabel: this.estimated_lead_time_daysLabel    , allowBlank: true },    
            { xtype: 'textfield', name: 'lead_time',                      fieldLabel: this.lead_timeLabel                   , allowBlank: true },    
            // { xtype: 'textfield', name: 'is_destroyed',                   fieldLabel: this.is_destroyedLabel                , allowBlank: true }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Purchases',
      newTitle: 'New Purchase',
      newSubtitle: 'Complete the following to create a new Purchase'
    });
    // TITLES (End)

    this.callParent();
    
  }

});