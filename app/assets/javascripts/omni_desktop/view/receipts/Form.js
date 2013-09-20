Ext.define('Omni.view.receipts.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-receipts-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'receipt_id',
      value:      this.record.get('receipt_id')
    };
    // FILTER (End)


    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      receipt_idLabel:                        Omni.i18n.model.Receipt.receipt_id,
      displayLabel:                           Omni.i18n.model.Receipt.display,
      receipt_nbrLabel:                       Omni.i18n.model.Receipt.receipt_nbr,
      location_idLabel:                       Omni.i18n.model.Receipt.location_id,
      carrier_supplier_idLabel:               Omni.i18n.model.Receipt.carrier_supplier_id,
      trailer_identifierLabel:                Omni.i18n.model.Receipt.trailer_identifier,
      create_dateLabel:                       Omni.i18n.model.Receipt.create_date,
      ship_dateLabel:                         Omni.i18n.model.Receipt.ship_date,
      appointment_dateLabel:                  Omni.i18n.model.Receipt.appointment_date,
      appointment_durationLabel:              Omni.i18n.model.Receipt.appointment_duration,
      start_dateLabel:                        Omni.i18n.model.Receipt.start_date,
      complete_dateLabel:                     Omni.i18n.model.Receipt.complete_date,
      completed_by_user_idLabel:              Omni.i18n.model.Receipt.completed_by_user_id,
      pro_numberLabel:                        Omni.i18n.model.Receipt.pro_number,
      bill_of_lading_numberLabel:             Omni.i18n.model.Receipt.bill_of_lading_number,
      packing_slip_numberLabel:               Omni.i18n.model.Receipt.packing_slip_number,
      seal_1_numberLabel:                     Omni.i18n.model.Receipt.seal_1_number,
      seal_2_numberLabel:                     Omni.i18n.model.Receipt.seal_2_number,
      seal_3_numberLabel:                     Omni.i18n.model.Receipt.seal_3_number,
      asn_numberLabel:                        Omni.i18n.model.Receipt.asn_number,
      is_expected_asnLabel:                   Omni.i18n.model.Receipt.is_expected_asn,
      standard_carrier_alpha_codeLabel:       Omni.i18n.model.Receipt.standard_carrier_alpha_code,
      ship_pointLabel:                        Omni.i18n.model.Receipt.ship_point,
      ship_viaLabel:                          Omni.i18n.model.Receipt.ship_via,
      freight_termsLabel:                     Omni.i18n.model.Receipt.freight_terms,
      invoice_numberLabel:                    Omni.i18n.model.Receipt.invoice_number,
      stateLabel:                             Omni.i18n.model.Receipt.state,
      is_destroyedLabel:                      Omni.i18n.model.Receipt.is_destroyed
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
          /*
            {
              xtype: 'buildit-Locator',
              store: Ext.create('MyApp.store.MyModel',{pageSize: 10}),
              displayField: 'name',
              queryField: 'name',
              valueField: 'value_field',
              itemTpl:'{name}',
              name: 'attribute_name',
              fieldLabel: this.attribute_nameLabel,
              allowBlank: true
            }
          */

            // { xtype: 'textfield', name: 'receipt_id',                     fieldLabel: this.receipt_idLabel                  , allowBlank: true },
            { xtype: 'textfield', name: 'display',                        fieldLabel: this.displayLabel                     , allowBlank: true },
            { xtype: 'textfield', name: 'receipt_nbr',                    fieldLabel: this.receipt_nbrLabel                 , allowBlank: true },
            { xtype: 'buildit-Locator', name: 'location_id',              fieldLabel: this.location_idLabel                 , allowBlank: true,   disabled: false,  store: Ext.create('Omni.store.Location',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'location_id', itemTpl:'{display}' },
            { xtype: 'buildit-Locator', name: 'carrier_supplier_id',      fieldLabel: this.carrier_supplier_idLabel          , allowBlank: true,   disabled: false,  store: Ext.create('Omni.store.Supplier',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'supplier_id', itemTpl:'{display}' },
            { xtype: 'textfield', name: 'trailer_identifier',             fieldLabel: this.trailer_identifierLabel          , allowBlank: true },
            { xtype: 'datefield', name: 'create_date',                    fieldLabel: this.create_dateLabel                 , allowBlank: true },
            { xtype: 'datefield', name: 'ship_date',                      fieldLabel: this.ship_dateLabel                   , allowBlank: true },
            { xtype: 'datefield', name: 'appointment_date',               fieldLabel: this.appointment_dateLabel            , allowBlank: true },
            { xtype: 'textfield', name: 'appointment_duration',           fieldLabel: this.appointment_durationLabel        , allowBlank: true },
            { xtype: 'datefield', name: 'start_date',                     fieldLabel: this.start_dateLabel                  , allowBlank: true },
            { xtype: 'datefield', name: 'complete_date',                  fieldLabel: this.complete_dateLabel               , allowBlank: true },
            { xtype             : 'buildit-Locator',
              store             : Ext.create('Buildit.store.User',{pageSize: 20}),
              displayField      : 'full_name',
              queryField        : 'full_name',
              valueField        : 'user_id',
              itemTpl           : '{full_name}',
              name              : 'completed_by_user_id',
              fieldLabel        : this.completed_by_user_idLabel,
              allowBlank        : true
            },
            { xtype: 'textfield', name: 'pro_number',                     fieldLabel: this.pro_numberLabel                  , allowBlank: true },
            { xtype: 'textfield', name: 'bill_of_lading_number',          fieldLabel: this.bill_of_lading_numberLabel       , allowBlank: true },
            { xtype: 'textfield', name: 'packing_slip_number',            fieldLabel: this.packing_slip_numberLabel         , allowBlank: true },
            { xtype: 'textfield', name: 'seal_1_number',                  fieldLabel: this.seal_1_numberLabel               , allowBlank: true },
            { xtype: 'textfield', name: 'seal_2_number',                  fieldLabel: this.seal_2_numberLabel               , allowBlank: true },
            { xtype: 'textfield', name: 'seal_3_number',                  fieldLabel: this.seal_3_numberLabel               , allowBlank: true },
            { xtype: 'textfield', name: 'asn_number',                     fieldLabel: this.asn_numberLabel                  , allowBlank: true },
            { xtype: 'checkbox', name: 'is_expected_asn',                 fieldLabel: this.is_expected_asnLabel             , allowBlank: true },
            { xtype: 'textfield', name: 'standard_carrier_alpha_code',    fieldLabel: this.standard_carrier_alpha_codeLabel , allowBlank: true },
            { xtype: 'textfield', name: 'ship_point',                     fieldLabel: this.ship_pointLabel                  , allowBlank: true },
            { xtype: 'textfield', name: 'ship_via',                       fieldLabel: this.ship_viaLabel                    , allowBlank: true },
            { xtype: 'buildit-Lookup', name: 'freight_terms',             fieldLabel: this.freight_termsLabel,                           allowBlank: true,   disabled: false,     category:   'FREIGHT_TERM' },
            { xtype: 'textfield', name: 'invoice_number',                 fieldLabel: this.invoice_numberLabel              , allowBlank: true },
            { xtype: 'textfield', name: 'state',                          fieldLabel: this.stateLabel                       , allowBlank: true, disabled: true },
            // { xtype: 'textfield', name: 'is_destroyed',                   fieldLabel: this.is_destroyedLabel                , allowBlank: true }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Receipts',
      newTitle: 'New Receipt',
      newSubtitle: 'Complete the following to create a new Receipt'
    });
    // TITLES (End)

    this.callParent();

  }

});