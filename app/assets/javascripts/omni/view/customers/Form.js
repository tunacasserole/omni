Ext.define('Omni.view.customers.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-customers-Form',

  initComponent:function () {

    var me = this;


    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      customer_nbrLabel:                          Omni.i18n.model.Customer.customer_nbr,
      registration_dateLabel:                     Omni.i18n.model.Customer.registration_date,
      user_idLabel:                               Omni.i18n.model.Customer.user_id,
      name_prefixLabel:                           Omni.i18n.model.Customer.name_prefix,
      first_nameLabel:                            Omni.i18n.model.Customer.first_name,
      middle_nameLabel:                           Omni.i18n.model.Customer.middle_name,
      last_nameLabel:                             Omni.i18n.model.Customer.last_name,
      name_suffixLabel:                           Omni.i18n.model.Customer.name_suffix,
      companyLabel:                               Omni.i18n.model.Customer.company,
      departmentLabel:                            Omni.i18n.model.Customer.department,
      job_titleLabel:                             Omni.i18n.model.Customer.job_title,
      is_tax_exemptLabel:                         Omni.i18n.model.Customer.is_tax_exempt,
      tax_exempt_stateLabel:                      Omni.i18n.model.Customer.tax_exempt_state,
      tax_exempt_certificateLabel:                Omni.i18n.model.Customer.tax_exempt_certificate,
      is_employeeLabel:                           Omni.i18n.model.Customer.is_employee,
      employee_nbrLabel:                          Omni.i18n.model.Customer.employee_nbr,
      is_contractorLabel:                         Omni.i18n.model.Customer.is_contractor,
      contractor_nbrLabel:                        Omni.i18n.model.Customer.contractor_nbr,
      is_studentLabel:                            Omni.i18n.model.Customer.is_student,
      birth_dateLabel:                            Omni.i18n.model.Customer.birth_date,
      genderLabel:                                Omni.i18n.model.Customer.gender,
      termsLabel:                                 Omni.i18n.model.Customer.terms,
      detailsLabel:                               Omni.i18n.model.Customer.details,
      line_1Label:                                Omni.i18n.model.Customer.line_1,
      line_2Label:                                Omni.i18n.model.Customer.line_2,
      line_3Label:                                Omni.i18n.model.Customer.line_3,
      line_4Label:                                Omni.i18n.model.Customer.line_4,
      cityLabel:                                  Omni.i18n.model.Customer.city,
      state_codeLabel:                            Omni.i18n.model.Customer.state_code,
      zipLabel:                                   Omni.i18n.model.Customer.zip,
      countryLabel:                               Omni.i18n.model.Customer.country,
      latitudeLabel:                              Omni.i18n.model.Customer.latitude,
      longitudeLabel:                             Omni.i18n.model.Customer.longitude,
      is_validatedLabel:                          Omni.i18n.model.Customer.is_validated,
      is_residentialLabel:                        Omni.i18n.model.Customer.is_residential,
      is_commercialLabel:                         Omni.i18n.model.Customer.is_commercial,
      is_do_not_mail_toLabel:                     Omni.i18n.model.Customer.is_do_not_mail_to,
      ship_line_1Label:                           Omni.i18n.model.Customer.ship_line_1,
      ship_line_2Label:                           Omni.i18n.model.Customer.ship_line_2,
      ship_line_3Label:                           Omni.i18n.model.Customer.ship_line_3,
      ship_line_4Label:                           Omni.i18n.model.Customer.ship_line_4,
      ship_cityLabel:                             Omni.i18n.model.Customer.ship_city,
      ship_state_codeLabel:                       Omni.i18n.model.Customer.ship_state_code,
      ship_zipLabel:                              Omni.i18n.model.Customer.ship_zip,
      ship_countryLabel:                          Omni.i18n.model.Customer.ship_country,
      ship_latitudeLabel:                         Omni.i18n.model.Customer.ship_latitude,
      ship_longitudeLabel:                        Omni.i18n.model.Customer.ship_longitude,
      phone_1Label:                               Omni.i18n.model.Customer.phone_1,
      phone_type_1Label:                          Omni.i18n.model.Customer.phone_type_1,
      phone_2Label:                               Omni.i18n.model.Customer.phone_2,
      phone_type_2Label:                          Omni.i18n.model.Customer.phone_type_2,
      phone_3Label:                               Omni.i18n.model.Customer.phone_3,
      phone_type_3Label:                          Omni.i18n.model.Customer.phone_type_3,
      // fax_1Label:                                 Omni.i18n.model.Customer.fax_1,
      // fax_2Label:                                 Omni.i18n.model.Customer.fax_2,
      is_do_not_callLabel:                        Omni.i18n.model.Customer.is_do_not_call,
      email_addressLabel:                         Omni.i18n.model.Customer.email_address,
      is_verifiedLabel:                           Omni.i18n.model.Customer.is_verified,
      is_do_not_emailLabel:                       Omni.i18n.model.Customer.is_do_not_email,
      customer_account_nbrLabel:                  Omni.i18n.model.Customer.customer_account_nbr,
      customer_account_typeLabel:                 Omni.i18n.model.Customer.customer_account_type,
      customer_account_nameLabel:                 Omni.i18n.model.Customer.customer_account_name,
      account_open_dateLabel:                     Omni.i18n.model.Customer.account_open_date,
      account_close_dateLabel:                    Omni.i18n.model.Customer.account_close_date,
      credit_limitLabel:                          Omni.i18n.model.Customer.credit_limit,
      is_on_holdLabel:                            Omni.i18n.model.Customer.is_on_hold
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
            { name: 'customer_nbr',                   fieldLabel: this.customer_nbrLabel,               allowBlank: true,  disabled: true,    xtype: 'textfield'        },
            { name: 'name_prefix',                    fieldLabel: this.name_prefixLabel,                allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'NAME_PREFIX' },
            { name: 'first_name',                     fieldLabel: this.first_nameLabel,                 allowBlank: false,   disabled: false,    xtype: 'textfield'        },
            { name: 'middle_name',                    fieldLabel: this.middle_nameLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'last_name',                      fieldLabel: this.last_nameLabel,                  allowBlank: false,  disabled: false,    xtype: 'textfield'        },
            { name: 'name_suffix',                    fieldLabel: this.name_suffixLabel,                allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'NAME_SUFFIX' },
            // { name: 'user_id',                        fieldLabel: this.user_idLabel,                    allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Buildit.store.User',{pageSize: 10}), displayField: 'full_name', queryField: 'full_name', valueField: 'user_id', itemTpl:'{last_name}, {first_name}' },
            { name: 'registration_date',              fieldLabel: this.registration_dateLabel,          allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'company',                        fieldLabel: this.companyLabel,                    allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'department',                     fieldLabel: this.departmentLabel,                 allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'job_title',                      fieldLabel: this.job_titleLabel,                  allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'is_tax_exempt',                  fieldLabel: this.is_tax_exemptLabel,              allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'tax_exempt_state',               fieldLabel: this.tax_exempt_stateLabel,           allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'STATE_CODE' },
            { name: 'tax_exempt_certificate',         fieldLabel: this.tax_exempt_certificateLabel,     allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'terms',                          fieldLabel: this.termsLabel,                      allowBlank: false,  disabled: false,    xtype: 'textfield'        },
            { name: 'details',                        fieldLabel: this.detailsLabel,                    allowBlank: false,  disabled: false,    xtype: 'textfield'        },
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Personal Information',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'gender',                         fieldLabel: this.genderLabel,                     allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'GENDER' },
            { name: 'is_employee',                    fieldLabel: this.is_employeeLabel,                allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'employee_nbr',                   fieldLabel: this.employee_nbrLabel,               allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'is_contractor',                  fieldLabel: this.is_contractorLabel,              allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'contractor_nbr',                 fieldLabel: this.contractor_nbrLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'is_student',                     fieldLabel: this.is_studentLabel,                 allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'birth_date',                     fieldLabel: this.birth_dateLabel,                 allowBlank: true,   disabled: false,    xtype: 'datefield'        },
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Billing Address',
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
            { name: 'state_code',                     fieldLabel: this.state_codeLabel,                 allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'STATE_CODE' },
            { name: 'zip',                            fieldLabel: this.zipLabel,                        allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'country',                        fieldLabel: this.countryLabel,                    allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'latitude',                       fieldLabel: this.latitudeLabel,                   allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'longitude',                      fieldLabel: this.longitudeLabel,                  allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'is_validated',                   fieldLabel: this.is_validatedLabel,               allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_residential',                 fieldLabel: this.is_residentialLabel,             allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_commercial',                  fieldLabel: this.is_commercialLabel,              allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_do_not_mail_to',              fieldLabel: this.is_do_not_mail_toLabel,          allowBlank: true,   disabled: false,    xtype: 'checkbox'         }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Shipping Address',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'ship_line_1',                    fieldLabel: this.ship_line_1Label,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'ship_line_2',                    fieldLabel: this.ship_line_2Label,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'ship_line_3',                    fieldLabel: this.ship_line_3Label,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'ship_line_4',                    fieldLabel: this.ship_line_4Label,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'ship_city',                      fieldLabel: this.ship_cityLabel,                  allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'ship_state_code',                fieldLabel: this.ship_state_codeLabel,            allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'STATE_CODE' },
            { name: 'ship_zip',                       fieldLabel: this.ship_zipLabel,                   allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'ship_country',                   fieldLabel: this.ship_countryLabel,               allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'ship_latitude',                  fieldLabel: this.ship_latitudeLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'ship_longitude',                 fieldLabel: this.ship_longitudeLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Phone and Email',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'phone_1',                        fieldLabel: this.phone_1Label,                    allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'phone_type_1',                   fieldLabel: this.phone_type_1Label,               allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'PHONE_TYPE' },
            { name: 'phone_2',                        fieldLabel: this.phone_2Label,                    allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'phone_type_2',                   fieldLabel: this.phone_type_2Label,               allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'PHONE_TYPE' },
            { name: 'phone_3',                        fieldLabel: this.phone_3Label,                    allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'phone_type_3',                   fieldLabel: this.phone_type_3Label,               allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'PHONE_TYPE' },
            // { name: 'fax_1',                          fieldLabel: this.fax_1Label,                      allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            // { name: 'fax_2',                          fieldLabel: this.fax_2Label,                      allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'is_do_not_call',                 fieldLabel: this.is_do_not_callLabel,             allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'email_address',                  fieldLabel: this.email_addressLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'is_verified',                    fieldLabel: this.is_verifiedLabel,                allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_do_not_email',                fieldLabel: this.is_do_not_emailLabel,            allowBlank: true,   disabled: false,    xtype: 'checkbox'         }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Customer Charge Account',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'customer_account_nbr',           fieldLabel: this.customer_account_nbrLabel,       allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'customer_account_type',          fieldLabel: this.customer_account_typeLabel,      allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'CUSTOMER_ACCOUNT_TYPE' },
            { name: 'customer_account_name',          fieldLabel: this.customer_account_nameLabel,      allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'account_open_date',              fieldLabel: this.account_open_dateLabel,          allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'account_close_date',             fieldLabel: this.account_close_dateLabel,         allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'credit_limit',                   fieldLabel: this.credit_limitLabel,               allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'is_on_hold',                     fieldLabel: this.is_on_holdLabel,                 allowBlank: true,   disabled: false,    xtype: 'checkbox'         }
          ]
        }
      ]
    });
    // FIELDSETS (End)

    // TITLES (Start) =======================================================================
    Ext.applyIf(this, {
      title:         'Customer',
      subtitle:      'A person or company that buys Parker products',
      newTitle:      'Customer',
      newSubtitle:   undefined
    });
    // TITLES (End)



    this.callParent();
  }

});
