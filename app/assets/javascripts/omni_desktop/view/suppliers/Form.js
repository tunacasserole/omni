Ext.define('Omni.view.suppliers.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-suppliers-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      supplier_nameLabel:                         Omni.i18n.model.Supplier.supplier_name,
      supplier_nbrLabel:                          Omni.i18n.model.Supplier.supplier_nbr,
      supplier_ucc_prefixLabel:                   Omni.i18n.model.Supplier.supplier_ucc_prefix,
      descriptionLabel:                           Omni.i18n.model.Supplier.description,
      short_nameLabel:                            Omni.i18n.model.Supplier.short_name,
      legacy_supplier_codeLabel:                  Omni.i18n.model.Supplier.legacy_supplier_code,
      duns_numberLabel:                           Omni.i18n.model.Supplier.duns_number,
      line_1Label:                                Omni.i18n.model.Supplier.line_1,
      line_2Label:                                Omni.i18n.model.Supplier.line_2,
      line_3Label:                                Omni.i18n.model.Supplier.line_3,
      line_4Label:                                Omni.i18n.model.Supplier.line_4,
      cityLabel:                                  Omni.i18n.model.Supplier.city,
      state_codeLabel:                            Omni.i18n.model.Supplier.state_code,
      zipLabel:                                   Omni.i18n.model.Supplier.zip,
      countryLabel:                               Omni.i18n.model.Supplier.country,
      latitudeLabel:                              Omni.i18n.model.Supplier.latitude,
      longitudeLabel:                             Omni.i18n.model.Supplier.longitude,
      phoneLabel:                                 Omni.i18n.model.Supplier.phone,
      faxLabel:                                   Omni.i18n.model.Supplier.fax,
      supplier_urlLabel:                          Omni.i18n.model.Supplier.supplier_url,
      default_ship_thru_supplier_idLabel:         Omni.i18n.model.Supplier.default_ship_thru_supplier_id,
      shipping_pointLabel:                        Omni.i18n.model.Supplier.shipping_point,
      ship_viaLabel:                              Omni.i18n.model.Supplier.ship_via,
      freight_termLabel:                          Omni.i18n.model.Supplier.freight_term,
      minimum_order_costLabel:                    Omni.i18n.model.Supplier.minimum_order_cost,
      minimum_order_unitsLabel:                   Omni.i18n.model.Supplier.minimum_order_units,
      minimum_weightLabel:                        Omni.i18n.model.Supplier.minimum_weight,
      minimum_cubeLabel:                          Omni.i18n.model.Supplier.minimum_cube,
      is_ship_cancelLabel:                        Omni.i18n.model.Supplier.is_ship_cancel,
      return_policyLabel:                         Omni.i18n.model.Supplier.return_policy,
      lead_timeLabel:                             Omni.i18n.model.Supplier.lead_time,
      safety_stock_daysLabel:                     Omni.i18n.model.Supplier.safety_stock_days,
      is_calculated_lead_timeLabel:               Omni.i18n.model.Supplier.is_calculated_lead_time,
      replenishment_methodLabel:                  Omni.i18n.model.Supplier.replenishment_method,
      is_dynamic_safety_stockLabel:               Omni.i18n.model.Supplier.is_dynamic_safety_stock,
      default_pay_to_supplier_idLabel:            Omni.i18n.model.Supplier.default_pay_to_supplier_id,
      default_payment_termLabel:                  Omni.i18n.model.Supplier.default_payment_term,
      bank_nameLabel:                             Omni.i18n.model.Supplier.bank_name,
      bank_account_nameLabel:                     Omni.i18n.model.Supplier.bank_account_name,
      bank_account_typeLabel:                     Omni.i18n.model.Supplier.bank_account_type,
      bank_routing_nbrLabel:                      Omni.i18n.model.Supplier.bank_routing_nbr,
      bank_accountLabel:                          Omni.i18n.model.Supplier.bank_account,
      gl_account_idLabel:                         Omni.i18n.model.Supplier.gl_account_id,
      tax_identifierLabel:                        Omni.i18n.model.Supplier.tax_identifier,
      is_required_1099Label:                      Omni.i18n.model.Supplier.is_required_1099,
      is_edi_capableLabel:                        Omni.i18n.model.Supplier.is_edi_capable,
      is_one_timeLabel:                           Omni.i18n.model.Supplier.is_one_time,
      is_employeeLabel:                           Omni.i18n.model.Supplier.is_employee,
      is_payeeLabel:                              Omni.i18n.model.Supplier.is_payee,
      is_merchandiseLabel:                        Omni.i18n.model.Supplier.is_merchandise,
      is_supplyLabel:                             Omni.i18n.model.Supplier.is_supply,
      is_expenseLabel:                            Omni.i18n.model.Supplier.is_expense,
      is_creditorLabel:                           Omni.i18n.model.Supplier.is_creditor,
      is_freightLabel:                            Omni.i18n.model.Supplier.is_freight,
      is_factoryLabel:                            Omni.i18n.model.Supplier.is_factory,
      is_3plLabel:                                Omni.i18n.model.Supplier.is_3pl,
      is_agentLabel:                              Omni.i18n.model.Supplier.is_agent,
      is_outbound_shipperLabel:                   Omni.i18n.model.Supplier.is_outbound_shipper,
      is_on_payment_holdLabel:                    Omni.i18n.model.Supplier.is_on_payment_hold,
      is_enabledLabel:                            Omni.i18n.model.Supplier.is_enabled
    });
    // LABELS (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [
        {
          xtype: 'fieldset',
          title: 'Supplier Identifiers',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'supplier_name',                  fieldLabel: this.supplier_nameLabel,              allowBlank: false,  disabled: false,    xtype: 'textfield'        },
            { name: 'supplier_nbr',                   fieldLabel: this.supplier_nbrLabel,               allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'supplier_ucc_prefix',            fieldLabel: this.supplier_ucc_prefixLabel,        allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'description',                    fieldLabel: this.descriptionLabel,                allowBlank: true,   disabled: false,    xtype: 'textarea'         },
            { name: 'short_name',                     fieldLabel: this.short_nameLabel,                 allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'legacy_supplier_code',           fieldLabel: this.legacy_supplier_codeLabel,       allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'duns_number',                    fieldLabel: this.duns_numberLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Contact Information',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'line_1',                         fieldLabel: this.line_1Label,                     allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'line_2',                         fieldLabel: this.line_2Label,                     allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'line_3',                         fieldLabel: this.line_3Label,                     allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'line_4',                         fieldLabel: this.line_4Label,                     allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'city',                           fieldLabel: this.cityLabel,                       allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { xtype: 'buildit-Lookup',
              name: 'state_code',
              fieldLabel: this.state_codeLabel,
              allowBlank: true,
              category:   'STATE_CODE'
            },
            { name: 'zip',                            fieldLabel: this.zipLabel,                        allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'country',                        fieldLabel: this.countryLabel,                    allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'latitude',                       fieldLabel: this.latitudeLabel,                   allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'longitude',                      fieldLabel: this.longitudeLabel,                  allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'phone',                          fieldLabel: this.phoneLabel,                      allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'fax',                            fieldLabel: this.faxLabel,                        allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'supplier_url',                   fieldLabel: this.supplier_urlLabel,               allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Ordering Information',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'default_ship_thru_supplier_id',  fieldLabel: this.default_ship_thru_supplier_idLabel,allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Supplier',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'supplier_id', itemTpl:'{display}' },
            { name: 'shipping_point',                 fieldLabel: this.shipping_pointLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'ship_via',                       fieldLabel: this.ship_viaLabel,                   allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'freight_term',                   fieldLabel: this.freight_termLabel,               allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'FREIGHT_TERM' },
            { name: 'minimum_order_cost',             fieldLabel: this.minimum_order_costLabel,         allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'minimum_order_units',            fieldLabel: this.minimum_order_unitsLabel,        allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'minimum_weight',                 fieldLabel: this.minimum_weightLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'minimum_cube',                   fieldLabel: this.minimum_cubeLabel,               allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'is_ship_cancel',                 fieldLabel: this.is_ship_cancelLabel,             allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'return_policy',                  fieldLabel: this.return_policyLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'lead_time',                      fieldLabel: this.lead_timeLabel,                  allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'safety_stock_days',              fieldLabel: this.safety_stock_daysLabel,          allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'is_calculated_lead_time',        fieldLabel: this.is_calculated_lead_timeLabel,    allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'replenishment_method',           fieldLabel: this.replenishment_methodLabel,       allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category: 'REPLENISHMENT_METHOD' },
            { name: 'is_dynamic_safety_stock',        fieldLabel: this.is_dynamic_safety_stockLabel,    allowBlank: true,   disabled: false,    xtype: 'checkbox'         }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Payment Information',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'default_pay_to_supplier_id',     fieldLabel: this.default_pay_to_supplier_idLabel, allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Supplier',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'supplier_id', itemTpl:'{display}' },
            { name: 'default_payment_term',           fieldLabel: this.default_payment_termLabel,       allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category: 'PAYMENT_TERM' },
            { name: 'bank_name',                      fieldLabel: this.bank_nameLabel,                  allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'bank_account_name',              fieldLabel: this.bank_account_nameLabel,          allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'bank_account_type',              fieldLabel: this.bank_account_typeLabel,          allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',     category: 'BANK_ACCOUNT_TYPE' },
            { name: 'bank_routing_nbr',               fieldLabel: this.bank_routing_nbrLabel,           allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'bank_account',                   fieldLabel: this.bank_accountLabel,               allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'gl_account_id',                  fieldLabel: this.gl_account_idLabel,              allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.GlAccount',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'gl_account_id', itemTpl:'{display}' },
            { name: 'tax_identifier',                 fieldLabel: this.tax_identifierLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'is_required_1099',               fieldLabel: this.is_required_1099Label,           allowBlank: true,   disabled: false,    xtype: 'checkbox'         }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Miscellaneous Information',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'is_edi_capable',                 fieldLabel: this.is_edi_capableLabel,             allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_one_time',                    fieldLabel: this.is_one_timeLabel,                allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_employee',                    fieldLabel: this.is_employeeLabel,                allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_payee',                       fieldLabel: this.is_payeeLabel,                   allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_merchandise',                 fieldLabel: this.is_merchandiseLabel,             allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_supply',                      fieldLabel: this.is_supplyLabel,                  allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_expense',                     fieldLabel: this.is_expenseLabel,                 allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_creditor',                    fieldLabel: this.is_creditorLabel,                allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_freight',                     fieldLabel: this.is_freightLabel,                 allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_factory',                     fieldLabel: this.is_factoryLabel,                 allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_3pl',                         fieldLabel: this.is_3plLabel,                     allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_agent',                       fieldLabel: this.is_agentLabel,                   allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_outbound_shipper',            fieldLabel: this.is_outbound_shipperLabel,        allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_on_payment_hold',             fieldLabel: this.is_on_payment_holdLabel,         allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_enabled',                     fieldLabel: this.is_enabledLabel,                 allowBlank: true,   disabled: false,    xtype: 'checkbox'         }
          ]
        }
      ]
    });
    // FIELDSETS (End)

    // TITLES (Start) =======================================================================
    Ext.applyIf(this, {
      title:         'Supplier',
      subtitle:      'Any entity that supplies Parker with goods or services',
      newTitle:      'Supplier',
      newSubtitle:   undefined
    });
    // TITLES (End)



    this.callParent();
  }

});
