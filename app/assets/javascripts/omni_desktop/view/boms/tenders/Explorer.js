Ext.define('Omni.view.tenders.Explorer', {

  extend : 'Buildit.ux.explorer.Panel',
  alias  : 'widget.omni-tenders-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  store  : Ext.create('Omni.store.Tender'),

  contextMenuConfig : {
    xtype    : 'omni-tenders-ExplorerContextMenu'
  },

  newForms : [{
    xtype    : 'omni-tenders-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-tenders-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  tender_idLabel:                         Omni.i18n.model.Tender.tender_id,
  displayLabel:                           Omni.i18n.model.Tender.display,
  descriptionLabel:                       Omni.i18n.model.Tender.description,
  short_nameLabel:                        Omni.i18n.model.Tender.short_name,
  tender_typeLabel:                       Omni.i18n.model.Tender.tender_type,
  is_allow_over_tenderingLabel:           Omni.i18n.model.Tender.is_allow_over_tendering,
  is_open_cash_drawerLabel:               Omni.i18n.model.Tender.is_open_cash_drawer,
  is_required_signatureLabel:             Omni.i18n.model.Tender.is_required_signature,
  is_allow_multiple_entryLabel:           Omni.i18n.model.Tender.is_allow_multiple_entry,
  is_print_duplicate_receiptLabel:        Omni.i18n.model.Tender.is_print_duplicate_receipt,
  is_allow_cash_backLabel:                Omni.i18n.model.Tender.is_allow_cash_back,
  maximum_tender_amountLabel:             Omni.i18n.model.Tender.maximum_tender_amount,
  display_orderLabel:                     Omni.i18n.model.Tender.display_order,
  is_verify_via_edcLabel:                 Omni.i18n.model.Tender.is_verify_via_edc,
  cash_back_limitLabel:                   Omni.i18n.model.Tender.cash_back_limit,
  cash_back_feeLabel:                     Omni.i18n.model.Tender.cash_back_fee,
  gl_account_idLabel:                     Omni.i18n.model.Tender.gl_account_id,
  validation_maskLabel:                   Omni.i18n.model.Tender.validation_mask,
  is_credit_cardLabel:                    Omni.i18n.model.Tender.is_credit_card,
  is_required_account_holderLabel:        Omni.i18n.model.Tender.is_required_account_holder,
  is_required_account_numberLabel:        Omni.i18n.model.Tender.is_required_account_number,
  is_required_expiration_dateLabel:       Omni.i18n.model.Tender.is_required_expiration_date,
  is_required_ccv_codeLabel:              Omni.i18n.model.Tender.is_required_ccv_code,
  is_required_postal_codeLabel:           Omni.i18n.model.Tender.is_required_postal_code,
  is_required_serial_numberLabel:         Omni.i18n.model.Tender.is_required_serial_number,
  is_required_routing_numberLabel:        Omni.i18n.model.Tender.is_required_routing_number,
  is_required_stateLabel:                 Omni.i18n.model.Tender.is_required_state,
  is_required_license_numberLabel:        Omni.i18n.model.Tender.is_required_license_number,
  is_required_birth_dateLabel:            Omni.i18n.model.Tender.is_required_birth_date,
  is_required_avs_responseLabel:          Omni.i18n.model.Tender.is_required_avs_response,
  is_update_tillLabel:                    Omni.i18n.model.Tender.is_update_till,
  is_accept_business_credit_cardLabel:    Omni.i18n.model.Tender.is_accept_business_credit_card,
  is_enabled_for_webLabel:                Omni.i18n.model.Tender.is_enabled_for_web,
  is_enabled_for_posLabel:                Omni.i18n.model.Tender.is_enabled_for_pos,
  is_enabled_for_phoneLabel:              Omni.i18n.model.Tender.is_enabled_for_phone,
  is_destroyedLabel:                      Omni.i18n.model.Tender.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title:     'Tenders',
  subtitle:  'Create and maintain Tenders',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns      : [
        {
          header       : this.tender_idLabel,
          dataIndex    : 'tender_id',
          flex         : 1
        },
        {
          header       : this.displayLabel,
          dataIndex    : 'display',
          flex         : 1
        },
        {
          header       : this.descriptionLabel,
          dataIndex    : 'description',
          flex         : 1
        },
        {
          header       : this.short_nameLabel,
          dataIndex    : 'short_name',
          flex         : 1
        },
        {
          header       : this.tender_typeLabel,
          dataIndex    : 'tender_type',
          flex         : 1
        },
        {
          header       : this.is_allow_over_tenderingLabel,
          dataIndex    : 'is_allow_over_tendering',
          flex         : 1
        },
        {
          header       : this.is_open_cash_drawerLabel,
          dataIndex    : 'is_open_cash_drawer',
          flex         : 1
        },
        {
          header       : this.is_required_signatureLabel,
          dataIndex    : 'is_required_signature',
          flex         : 1
        },
        {
          header       : this.is_allow_multiple_entryLabel,
          dataIndex    : 'is_allow_multiple_entry',
          flex         : 1
        },
        {
          header       : this.is_print_duplicate_receiptLabel,
          dataIndex    : 'is_print_duplicate_receipt',
          flex         : 1
        },
        {
          header       : this.is_allow_cash_backLabel,
          dataIndex    : 'is_allow_cash_back',
          flex         : 1
        },
        {
          header       : this.maximum_tender_amountLabel,
          dataIndex    : 'maximum_tender_amount',
          flex         : 1
        },
        {
          header       : this.display_orderLabel,
          dataIndex    : 'display_order',
          flex         : 1
        },
        {
          header       : this.is_verify_via_edcLabel,
          dataIndex    : 'is_verify_via_edc',
          flex         : 1
        },
        {
          header       : this.cash_back_limitLabel,
          dataIndex    : 'cash_back_limit',
          flex         : 1
        },
        {
          header       : this.cash_back_feeLabel,
          dataIndex    : 'cash_back_fee',
          flex         : 1
        },
        {
          header       : this.gl_account_idLabel,
          dataIndex    : 'gl_account_id',
          flex         : 1
        },
        {
          header       : this.validation_maskLabel,
          dataIndex    : 'validation_mask',
          flex         : 1
        },
        {
          header       : this.is_credit_cardLabel,
          dataIndex    : 'is_credit_card',
          flex         : 1
        },
        {
          header       : this.is_required_account_holderLabel,
          dataIndex    : 'is_required_account_holder',
          flex         : 1
        },
        {
          header       : this.is_required_account_numberLabel,
          dataIndex    : 'is_required_account_number',
          flex         : 1
        },
        {
          header       : this.is_required_expiration_dateLabel,
          dataIndex    : 'is_required_expiration_date',
          flex         : 1
        },
        {
          header       : this.is_required_ccv_codeLabel,
          dataIndex    : 'is_required_ccv_code',
          flex         : 1
        },
        {
          header       : this.is_required_postal_codeLabel,
          dataIndex    : 'is_required_postal_code',
          flex         : 1
        },
        {
          header       : this.is_required_serial_numberLabel,
          dataIndex    : 'is_required_serial_number',
          flex         : 1
        },
        {
          header       : this.is_required_routing_numberLabel,
          dataIndex    : 'is_required_routing_number',
          flex         : 1
        },
        {
          header       : this.is_required_stateLabel,
          dataIndex    : 'is_required_state',
          flex         : 1
        },
        {
          header       : this.is_required_license_numberLabel,
          dataIndex    : 'is_required_license_number',
          flex         : 1
        },
        {
          header       : this.is_required_birth_dateLabel,
          dataIndex    : 'is_required_birth_date',
          flex         : 1
        },
        {
          header       : this.is_required_avs_responseLabel,
          dataIndex    : 'is_required_avs_response',
          flex         : 1
        },
        {
          header       : this.is_update_tillLabel,
          dataIndex    : 'is_update_till',
          flex         : 1
        },
        {
          header       : this.is_accept_business_credit_cardLabel,
          dataIndex    : 'is_accept_business_credit_card',
          flex         : 1
        },
        {
          header       : this.is_enabled_for_webLabel,
          dataIndex    : 'is_enabled_for_web',
          flex         : 1
        },
        {
          header       : this.is_enabled_for_posLabel,
          dataIndex    : 'is_enabled_for_pos',
          flex         : 1
        },
        {
          header       : this.is_enabled_for_phoneLabel,
          dataIndex    : 'is_enabled_for_phone',
          flex         : 1
        },
        {
          header       : this.is_destroyedLabel,
          dataIndex    : 'is_destroyed',
          flex         : 1
        }
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});