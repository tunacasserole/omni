Ext.define('Omni.view.locations.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-locations-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      descriptionLabel:                           Omni.i18n.model.Location.description,
      short_nameLabel:                            Omni.i18n.model.Location.short_name,
      location_nbrLabel:                          Omni.i18n.model.Location.location_nbr,
      location_brandLabel:                        Omni.i18n.model.Location.location_brand,
      displayLabel:                               Omni.i18n.model.Location.display,
      line_1Label:                                Omni.i18n.model.Location.line_1,
      line_2Label:                                Omni.i18n.model.Location.line_2,
      line_3Label:                                Omni.i18n.model.Location.line_3,
      line_4Label:                                Omni.i18n.model.Location.line_4,
      cityLabel:                                  Omni.i18n.model.Location.city,
      state_codeLabel:                            Omni.i18n.model.Location.state_code,
      zipLabel:                                   Omni.i18n.model.Location.zip,
      countryLabel:                               Omni.i18n.model.Location.country,
      latitudeLabel:                              Omni.i18n.model.Location.latitude,
      longitudeLabel:                             Omni.i18n.model.Location.longitude,
      phoneLabel:                                 Omni.i18n.model.Location.phone,
      faxLabel:                                   Omni.i18n.model.Location.fax,
      is_ownedLabel:                              Omni.i18n.model.Location.is_owned,
      is_storeLabel:                              Omni.i18n.model.Location.is_store,
      is_temporary_storeLabel:                    Omni.i18n.model.Location.is_temporary_store,
      is_webstoreLabel:                           Omni.i18n.model.Location.is_webstore,
      is_factoryLabel:                            Omni.i18n.model.Location.is_factory,
      is_warehouseLabel:                          Omni.i18n.model.Location.is_warehouse,
      open_dateLabel:                             Omni.i18n.model.Location.open_date,
      close_dateLabel:                            Omni.i18n.model.Location.close_date,
      parent_location_idLabel:                    Omni.i18n.model.Location.parent_location_id,
      district_idLabel:                           Omni.i18n.model.Location.district_id,
      price_book_idLabel:                         Omni.i18n.model.Location.price_book_id,
      promo_price_book_idLabel:                   Omni.i18n.model.Location.promo_price_book_id,
      selling_square_feetLabel:                   Omni.i18n.model.Location.selling_square_feet,
      storage_square_feetLabel:                   Omni.i18n.model.Location.storage_square_feet,
      location_urlLabel:                          Omni.i18n.model.Location.location_url,
      is_enabledLabel:                            Omni.i18n.model.Location.is_enabled,
      time_zoneLabel:                             Omni.i18n.model.Location.time_zone,
      sunday_open_timeLabel:                      Omni.i18n.model.Location.sunday_open_time,
      sunday_close_timeLabel:                     Omni.i18n.model.Location.sunday_close_time,
      monday_open_timeLabel:                      Omni.i18n.model.Location.monday_open_time,
      monday_close_timeLabel:                     Omni.i18n.model.Location.monday_close_time,
      tuesday_open_timeLabel:                     Omni.i18n.model.Location.tuesday_open_time,
      tuesday_close_timeLabel:                    Omni.i18n.model.Location.tuesday_close_time,
      wednesday_open_timeLabel:                   Omni.i18n.model.Location.wednesday_open_time,
      wednesday_close_timeLabel:                  Omni.i18n.model.Location.wednesday_close_time,
      thursday_open_timeLabel:                    Omni.i18n.model.Location.thursday_open_time,
      thursday_close_timeLabel:                   Omni.i18n.model.Location.thursday_close_time,
      friday_open_timeLabel:                      Omni.i18n.model.Location.friday_open_time,
      friday_close_timeLabel:                     Omni.i18n.model.Location.friday_close_time,
      saturday_open_timeLabel:                    Omni.i18n.model.Location.saturday_open_time,
      saturday_close_timeLabel:                   Omni.i18n.model.Location.saturday_close_time,
      merchant_identifierLabel:                   Omni.i18n.model.Location.merchant_identifier,
      merchant_nameLabel:                         Omni.i18n.model.Location.merchant_name,
      merchant_time_zoneLabel:                    Omni.i18n.model.Location.merchant_time_zone,
      merchant_locationLabel:                     Omni.i18n.model.Location.merchant_location,
      merchant_sicLabel:                          Omni.i18n.model.Location.merchant_sic,
      merchant_industryLabel:                     Omni.i18n.model.Location.merchant_industry,
      merchant_acquirer_binLabel:                 Omni.i18n.model.Location.merchant_acquirer_bin,
      merchant_agentLabel:                        Omni.i18n.model.Location.merchant_agent,
      merchant_chainLabel:                        Omni.i18n.model.Location.merchant_chain,
      merchant_storeLabel:                        Omni.i18n.model.Location.merchant_store,
      merchant_terminalLabel:                     Omni.i18n.model.Location.merchant_terminal,
      merchant_v_numberLabel:                     Omni.i18n.model.Location.merchant_v_number,
      merchant_pri_auth_phoneLabel:               Omni.i18n.model.Location.merchant_pri_auth_phone,
      merchant_sec_auth_phoneLabel:               Omni.i18n.model.Location.merchant_sec_auth_phone,
      merchant_pri_settle_phoneLabel:             Omni.i18n.model.Location.merchant_pri_settle_phone,
      merchant_sec_settle_phoneLabel:             Omni.i18n.model.Location.merchant_sec_settle_phone,
      merchant_amex_identifierLabel:              Omni.i18n.model.Location.merchant_amex_identifier,
      merchant_discover_identifierLabel:          Omni.i18n.model.Location.merchant_discover_identifier,
      merchant_diners_identifierLabel:            Omni.i18n.model.Location.merchant_diners_identifier,
      merchant_sharing_groupsLabel:               Omni.i18n.model.Location.merchant_sharing_groups,
      merchant_reimbursementLabel:                Omni.i18n.model.Location.merchant_reimbursement,
      merchant_settle_agentLabel:                 Omni.i18n.model.Location.merchant_settle_agent,
      merchant_bank_abaLabel:                     Omni.i18n.model.Location.merchant_bank_aba
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
            { name: 'display',                        fieldLabel: this.displayLabel,                    allowBlank: false,  disabled: false,    xtype: 'textfield'        },
            { name: 'description',                    fieldLabel: this.descriptionLabel,                allowBlank: true,   disabled: false,    xtype: 'textarea'         },
            { name: 'short_name',                     fieldLabel: this.short_nameLabel,                 allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'location_nbr',                   fieldLabel: this.location_nbrLabel,               allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { xtype: 'buildit-Lookup',
              name: 'location_brand',
              fieldLabel: this.locationBrandLabel,
              allowBlank: true,
              category:   'LOCATION_BRAND'
            }

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
              fieldLabel: this.stateCodeLabel,
              allowBlank: true,
              category:   'STATE_CODE'
            },
            { name: 'zip',                            fieldLabel: this.zipLabel,                        allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'country',                        fieldLabel: this.countryLabel,                    allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'latitude',                       fieldLabel: this.latitudeLabel,                   allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'longitude',                      fieldLabel: this.longitudeLabel,                  allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'phone',                          fieldLabel: this.phoneLabel,                      allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'fax',                            fieldLabel: this.faxLabel,                        allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Location Attributes',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'is_owned',                       fieldLabel: this.is_ownedLabel,                   allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_store',                       fieldLabel: this.is_storeLabel,                   allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_temporary_store',             fieldLabel: this.is_temporary_storeLabel,         allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_webstore',                    fieldLabel: this.is_webstoreLabel,                allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_factory',                     fieldLabel: this.is_factoryLabel,                 allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_warehouse',                   fieldLabel: this.is_warehouseLabel,               allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'open_date',                      fieldLabel: this.open_dateLabel,                  allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'close_date',                     fieldLabel: this.close_dateLabel,                 allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'parent_location_id',             fieldLabel: this.parent_location_idLabel,         allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Location',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'location_id', itemTpl:'{display}' },
            { name: 'district_id',                    fieldLabel: this.district_idLabel,                allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.District',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'district_id', itemTpl:'{display}' },
            { name: 'price_book_id',                  fieldLabel: this.price_book_idLabel,              allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.PriceBook',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'price_book_id', itemTpl:'{display}' },
            { name: 'promo_price_book_id',            fieldLabel: this.promo_price_book_idLabel,        allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.PriceBook',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'price_book_id', itemTpl:'{display}' },
            { name: 'selling_square_feet',            fieldLabel: this.selling_square_feetLabel,        allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'storage_square_feet',            fieldLabel: this.storage_square_feetLabel,        allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'location_url',                   fieldLabel: this.location_urlLabel,               allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'is_enabled',                     fieldLabel: this.is_enabledLabel,                 allowBlank: true,   disabled: false,    xtype: 'checkbox'         }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Hours of Operation',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { xtype: 'buildit-Lookup',
              name: 'time_zone',
              fieldLabel: this.timeZoneLabel,
              allowBlank: true,
              category:   'TIME_ZONE'
            },
            { xtype: 'buildit-Lookup',
              name: 'sunday_open_time',
              fieldLabel: this.sundayOpenTimeLabel,
              allowBlank: true,
              category:   'CLOCK_TIME'
            },
            { xtype: 'buildit-Lookup',
              name: 'sunday_close_time',
              fieldLabel: this.sundayCloseTimeLabel,
              allowBlank: true,
              category:   'CLOCK_TIME'
            },
            { xtype: 'buildit-Lookup',
              name: 'monday_open_time',
              fieldLabel: this.mondayOpenTimeLabel,
              allowBlank: true,
              category:   'CLOCK_TIME'
            },
            { xtype: 'buildit-Lookup',
              name: 'monday_close_time',
              fieldLabel: this.mondayCloseTimeLabel,
              allowBlank: true,
              category:   'CLOCK_TIME'
            },
            { xtype: 'buildit-Lookup',
              name: 'tuesday_open_time',
              fieldLabel: this.tuesdayOpenTimeLabel,
              allowBlank: true,
              category:   'CLOCK_TIME'
            },
            { xtype: 'buildit-Lookup',
              name: 'tuesday_close_time',
              fieldLabel: this.tuesdayCloseTimeLabel,
              allowBlank: true,
              category:   'CLOCK_TIME'
            },

            { xtype: 'buildit-Lookup',
              name: 'wednesday_open_time',
              fieldLabel: this.wednesdayOpenTimeLabel,
              allowBlank: true,
              category:   'CLOCK_TIME'
            },
            { xtype: 'buildit-Lookup',
              name: 'wednesday_close_time',
              fieldLabel: this.wednesdayCloseTimeLabel,
              allowBlank: true,
              category:   'CLOCK_TIME'
            },

            { xtype: 'buildit-Lookup',
              name: 'thursday_open_time',
              fieldLabel: this.thursdayOpenTimeLabel,
              allowBlank: true,
              category:   'CLOCK_TIME'
            },
            { xtype: 'buildit-Lookup',
              name: 'thursday_close_time',
              fieldLabel: this.thursdayCloseTimeLabel,
              allowBlank: true,
              category:   'CLOCK_TIME'
            },

            { xtype: 'buildit-Lookup',
              name: 'friday_open_time',
              fieldLabel: this.fridayOpenTimeLabel,
              allowBlank: true,
              category:   'CLOCK_TIME'
            },
            { xtype: 'buildit-Lookup',
              name: 'friday_close_time',
              fieldLabel: this.fridayCloseTimeLabel,
              allowBlank: true,
              category:   'CLOCK_TIME'
            },

            { xtype: 'buildit-Lookup',
              name: 'saturday_open_time',
              fieldLabel: this.saturdayOpenTimeLabel,
              allowBlank: true,
              category:   'CLOCK_TIME'
            },
            { xtype: 'buildit-Lookup',
              name: 'saturday_close_time',
              fieldLabel: this.saturdayCloseTimeLabel,
              allowBlank: true,
              category:   'CLOCK_TIME'
            }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Merchant Card Services',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          disabled: true,
          layout: 'anchor',
          items:[
            { name: 'merchant_identifier',            fieldLabel: this.merchant_identifierLabel,        allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'merchant_name',                  fieldLabel: this.merchant_nameLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'merchant_time_zone',             fieldLabel: this.merchant_time_zoneLabel,         allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'merchant_location',              fieldLabel: this.merchant_locationLabel,          allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'merchant_sic',                   fieldLabel: this.merchant_sicLabel,               allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'merchant_industry',              fieldLabel: this.merchant_industryLabel,          allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'merchant_acquirer_bin',          fieldLabel: this.merchant_acquirer_binLabel,      allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'merchant_agent',                 fieldLabel: this.merchant_agentLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'merchant_chain',                 fieldLabel: this.merchant_chainLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'merchant_store',                 fieldLabel: this.merchant_storeLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'merchant_terminal',              fieldLabel: this.merchant_terminalLabel,          allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'merchant_v_number',              fieldLabel: this.merchant_v_numberLabel,          allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'merchant_pri_auth_phone',        fieldLabel: this.merchant_pri_auth_phoneLabel,    allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'merchant_sec_auth_phone',        fieldLabel: this.merchant_sec_auth_phoneLabel,    allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'merchant_pri_settle_phone',      fieldLabel: this.merchant_pri_settle_phoneLabel,  allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'merchant_sec_settle_phone',      fieldLabel: this.merchant_sec_settle_phoneLabel,  allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'merchant_amex_identifier',       fieldLabel: this.merchant_amex_identifierLabel,   allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'merchant_discover_identifier',   fieldLabel: this.merchant_discover_identifierLabel,allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'merchant_diners_identifier',     fieldLabel: this.merchant_diners_identifierLabel, allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'merchant_sharing_groups',        fieldLabel: this.merchant_sharing_groupsLabel,    allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'merchant_reimbursement',         fieldLabel: this.merchant_reimbursementLabel,     allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'merchant_settle_agent',          fieldLabel: this.merchant_settle_agentLabel,      allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'merchant_bank_aba',              fieldLabel: this.merchant_bank_abaLabel,          allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
