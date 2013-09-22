Ext.define('Omni.view.receipts.Explorer', {

  extend : 'Buildit.ux.explorer.Panel',
  alias  : 'widget.omni-receipts-Explorer',
  allowFind  : true,
  
  // EXPLORER INIT (Start) ===============================================================
  store  : Ext.create('Omni.store.Receipt'),

  contextMenuConfig : {
    xtype    : 'omni-receipts-ExplorerContextMenu'
  },

  newForms : [{
    xtype    : 'omni-receipts-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-receipts-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
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
  is_destroyedLabel:                      Omni.i18n.model.Receipt.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title:     'Receipts',
  subtitle:  'Create and maintain Receipts',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns      : [
        // {
        //   header       : this.receipt_idLabel,
        //   dataIndex    : 'receipt_id',
        //   flex         : 1
        // },
        {
          header       : this.displayLabel,
          dataIndex    : 'display',
          flex         : 1
        },
        {
          header       : this.receipt_nbrLabel,
          dataIndex    : 'receipt_nbr',
          flex         : 1
        },
        {
          header       : this.location_idLabel,
          dataIndex    : 'location_display',
          flex         : 1
        },
        {
          header       : this.carrier_supplier_idLabel,
          dataIndex    : 'carrier_supplier_display',
          flex         : 1
        },
        {
          header       : this.trailer_identifierLabel,
          dataIndex    : 'trailer_identifier',
          flex         : 1
        },
        {
          header       : this.create_dateLabel,
          dataIndex    : 'create_date',
          flex         : 1
        },
        {
          header       : this.ship_dateLabel,
          dataIndex    : 'ship_date',
          flex         : 1
        },
        // {
        //   header       : this.appointment_dateLabel,
        //   dataIndex    : 'appointment_date',
        //   flex         : 1
        // },
        // {
        //   header       : this.appointment_durationLabel,
        //   dataIndex    : 'appointment_duration',
        //   flex         : 1
        // },
        // {
        //   header       : this.start_dateLabel,
        //   dataIndex    : 'start_date',
        //   flex         : 1
        // },
        // {
        //   header       : this.complete_dateLabel,
        //   dataIndex    : 'complete_date',
        //   flex         : 1
        // },
        // {
        //   header       : this.completed_by_user_idLabel,
        //   dataIndex    : 'completed_by_user_id',
        //   flex         : 1
        // },
        // {
        //   header       : this.pro_numberLabel,
        //   dataIndex    : 'pro_number',
        //   flex         : 1
        // },
        // {
        //   header       : this.bill_of_lading_numberLabel,
        //   dataIndex    : 'bill_of_lading_number',
        //   flex         : 1
        // },
        // {
        //   header       : this.packing_slip_numberLabel,
        //   dataIndex    : 'packing_slip_number',
        //   flex         : 1
        // },
        // {
        //   header       : this.seal_1_numberLabel,
        //   dataIndex    : 'seal_1_number',
        //   flex         : 1
        // },
        // {
        //   header       : this.seal_2_numberLabel,
        //   dataIndex    : 'seal_2_number',
        //   flex         : 1
        // },
        // {
        //   header       : this.seal_3_numberLabel,
        //   dataIndex    : 'seal_3_number',
        //   flex         : 1
        // },
        // {
        //   header       : this.asn_numberLabel,
        //   dataIndex    : 'asn_number',
        //   flex         : 1
        // },
        // {
        //   header       : this.is_expected_asnLabel,
        //   dataIndex    : 'is_expected_asn',
        //   flex         : 1
        // },
        // {
        //   header       : this.standard_carrier_alpha_codeLabel,
        //   dataIndex    : 'standard_carrier_alpha_code',
        //   flex         : 1
        // },
        // {
        //   header       : this.ship_pointLabel,
        //   dataIndex    : 'ship_point',
        //   flex         : 1
        // },
        // {
        //   header       : this.ship_viaLabel,
        //   dataIndex    : 'ship_via',
        //   flex         : 1
        // },
        // {
        //   header       : this.freight_termsLabel,
        //   dataIndex    : 'freight_terms',
        //   flex         : 1
        // },
        // {
        //   header       : this.invoice_numberLabel,
        //   dataIndex    : 'invoice_number',
        //   flex         : 1
        // },
        {
          header       : this.stateLabel,
          dataIndex    : 'state',
          flex         : 1
        },
        // {
        //   header       : this.is_destroyedLabel,
        //   dataIndex    : 'is_destroyed',
        //   flex         : 1
        // }
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});