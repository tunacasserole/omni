Ext.define('Omni.view.tenders.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-tenders-Form',



  initComponent:function () {

    var me = this;


    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      displayLabel:                               Omni.i18n.model.Tender.display,
      descriptionLabel:                           Omni.i18n.model.Tender.description,
      short_nameLabel:                            Omni.i18n.model.Tender.short_name,
      tender_typeLabel:                           Omni.i18n.model.Tender.tender_type,
      is_allow_over_tenderingLabel:               Omni.i18n.model.Tender.is_allow_over_tendering,
      is_open_cash_drawerLabel:                   Omni.i18n.model.Tender.is_open_cash_drawer,
      is_required_signatureLabel:                 Omni.i18n.model.Tender.is_required_signature,
      is_allow_multiple_entryLabel:               Omni.i18n.model.Tender.is_allow_multiple_entry,
      is_print_duplicate_receiptLabel:            Omni.i18n.model.Tender.is_print_duplicate_receipt,
      is_allow_cash_backLabel:                    Omni.i18n.model.Tender.is_allow_cash_back,
      maximum_tender_amountLabel:                 Omni.i18n.model.Tender.maximum_tender_amount,
      display_orderLabel:                         Omni.i18n.model.Tender.display_order,
      is_verify_via_edcLabel:                     Omni.i18n.model.Tender.is_verify_via_edc,
      cash_back_limitLabel:                       Omni.i18n.model.Tender.cash_back_limit,
      cash_back_feeLabel:                         Omni.i18n.model.Tender.cash_back_fee,
      gl_account_idLabel:                         Omni.i18n.model.Tender.gl_account_id,
      validation_maskLabel:                       Omni.i18n.model.Tender.validation_mask,
      is_credit_cardLabel:                        Omni.i18n.model.Tender.is_credit_card,
      is_required_account_holderLabel:            Omni.i18n.model.Tender.is_required_account_holder,
      is_required_account_numberLabel:            Omni.i18n.model.Tender.is_required_account_number,
      is_required_expiration_dateLabel:           Omni.i18n.model.Tender.is_required_expiration_date,
      is_required_ccv_codeLabel:                  Omni.i18n.model.Tender.is_required_ccv_code,
      is_required_postal_codeLabel:               Omni.i18n.model.Tender.is_required_postal_code,
      is_required_serial_numberLabel:             Omni.i18n.model.Tender.is_required_serial_number,
      is_required_routing_numberLabel:            Omni.i18n.model.Tender.is_required_routing_number,
      is_required_stateLabel:                     Omni.i18n.model.Tender.is_required_state,
      is_required_license_numberLabel:            Omni.i18n.model.Tender.is_required_license_number,
      is_required_birth_dateLabel:                Omni.i18n.model.Tender.is_required_birth_date,
      is_required_avs_responseLabel:              Omni.i18n.model.Tender.is_required_avs_response,
      is_update_tillLabel:                        Omni.i18n.model.Tender.is_update_till,
      is_accept_business_credit_cardLabel:        Omni.i18n.model.Tender.is_accept_business_credit_card,
      is_enabled_for_webLabel:                    Omni.i18n.model.Tender.is_enabled_for_web,
      is_enabled_for_posLabel:                    Omni.i18n.model.Tender.is_enabled_for_pos,
      is_enabled_for_phoneLabel:                  Omni.i18n.model.Tender.is_enabled_for_phone
    });
    // LABELS (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [
        {
          xtype: 'fieldset',
          title: 'General',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'display',                        fieldLabel: this.displayLabel,                    allowBlank: false,  disabled: false,     xtype: 'textfield'        },
            { name: 'description',                    fieldLabel: this.descriptionLabel,                allowBlank: true,  disabled: false,    xtype: 'textfield'        },
            { name: 'short_name',                     fieldLabel: this.short_nameLabel,                 allowBlank: true,  disabled: false,    xtype: 'textfield'        },
            { name: 'tender_type',                    fieldLabel: this.tender_typeLabel,                allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'TENDER_TYPE' },
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Tender Processing',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'is_allow_over_tendering',        fieldLabel: this.is_allow_over_tenderingLabel,    allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_open_cash_drawer',            fieldLabel: this.is_open_cash_drawerLabel,        allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_required_signature',          fieldLabel: this.is_required_signatureLabel,      allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_allow_multiple_entry',        fieldLabel: this.is_allow_multiple_entryLabel,    allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_print_duplicate_receipt',     fieldLabel: this.is_print_duplicate_receiptLabel, allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_allow_cash_back',             fieldLabel: this.is_allow_cash_backLabel,         allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'maximum_tender_amount',          fieldLabel: this.maximum_tender_amountLabel,      allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'display_order',                  fieldLabel: this.display_orderLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'is_verify_via_edc',              fieldLabel: this.is_verify_via_edcLabel,          allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'cash_back_limit',                fieldLabel: this.cash_back_limitLabel,            allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'cash_back_fee',                  fieldLabel: this.cash_back_feeLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'gl_account_id',                  fieldLabel: this.gl_account_idLabel,              allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.GlAccount',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'gl_account_id', itemTpl:'{display}' },
            { name: 'validation_mask',                fieldLabel: this.validation_maskLabel,            allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'is_credit_card',                 fieldLabel: this.is_credit_cardLabel,             allowBlank: true,   disabled: false,    xtype: 'checkbox'         }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Tender Validation',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'is_required_account_holder',     fieldLabel: this.is_required_account_holderLabel, allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_required_account_number',     fieldLabel: this.is_required_account_numberLabel, allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_required_expiration_date',    fieldLabel: this.is_required_expiration_dateLabel,allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_required_ccv_code',           fieldLabel: this.is_required_ccv_codeLabel,       allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_required_postal_code',        fieldLabel: this.is_required_postal_codeLabel,    allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_required_serial_number',      fieldLabel: this.is_required_serial_numberLabel,  allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_required_routing_number',     fieldLabel: this.is_required_routing_numberLabel, allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_required_state',              fieldLabel: this.is_required_stateLabel,          allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_required_license_number',     fieldLabel: this.is_required_license_numberLabel, allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_required_birth_date',         fieldLabel: this.is_required_birth_dateLabel,     allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_required_avs_response',       fieldLabel: this.is_required_avs_responseLabel,   allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_update_till',                 fieldLabel: this.is_update_tillLabel,             allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_accept_business_credit_card', fieldLabel: this.is_accept_business_credit_cardLabel,allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_enabled_for_web',             fieldLabel: this.is_enabled_for_webLabel,         allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_enabled_for_pos',             fieldLabel: this.is_enabled_for_posLabel,         allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_enabled_for_phone',           fieldLabel: this.is_enabled_for_phoneLabel,       allowBlank: true,   disabled: false,    xtype: 'checkbox'         }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
