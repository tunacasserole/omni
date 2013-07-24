Ext.define('Omni.view.companies.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-companies-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      displayLabel:                               Omni.i18n.model.Company.display,
      company_nbrLabel:                           Omni.i18n.model.Company.company_nbr,
      descriptionLabel:                           Omni.i18n.model.Company.description,
      short_nameLabel:                            Omni.i18n.model.Company.short_name,
      company_urlLabel:                           Omni.i18n.model.Company.company_url,
      line_1Label:                                Omni.i18n.model.Company.line_1,
      line_2Label:                                Omni.i18n.model.Company.line_2,
      line_3Label:                                Omni.i18n.model.Company.line_3,
      line_4Label:                                Omni.i18n.model.Company.line_4,
      cityLabel:                                  Omni.i18n.model.Company.city,
      state_codeLabel:                            Omni.i18n.model.Company.state_code,
      zipLabel:                                   Omni.i18n.model.Company.zip,
      countryLabel:                               Omni.i18n.model.Company.country,
      latitudeLabel:                              Omni.i18n.model.Company.latitude,
      longitudeLabel:                             Omni.i18n.model.Company.longitude,
      phoneLabel:                                 Omni.i18n.model.Company.phone,
      faxLabel:                                   Omni.i18n.model.Company.fax,
      beta_factorLabel:                           Omni.i18n.model.Company.beta_factor,
      demand_filterLabel:                         Omni.i18n.model.Company.demand_filter,
      tracking_signalLabel:                       Omni.i18n.model.Company.tracking_signal,
      purchase_order_header_costLabel:            Omni.i18n.model.Company.purchase_order_header_cost,
      carrying_cost_percentLabel:                 Omni.i18n.model.Company.carrying_cost_percent
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
            { name: 'display',                        fieldLabel: this.displayLabel,                    allowBlank: false,  disabled: true,     xtype: 'textfield'        },
            { name: 'company_nbr',                    fieldLabel: this.company_nbrLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'description',                    fieldLabel: this.descriptionLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'short_name',                     fieldLabel: this.short_nameLabel,                 allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'company_url',                    fieldLabel: this.company_urlLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        }
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
            { name: 'line_1',                         fieldLabel: this.line_1Label,                     allowBlank: false,  disabled: false,    xtype: 'textfield'        },
            { name: 'line_2',                         fieldLabel: this.line_2Label,                     allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'line_3',                         fieldLabel: this.line_3Label,                     allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'line_4',                         fieldLabel: this.line_4Label,                     allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'city',                           fieldLabel: this.cityLabel,                       allowBlank: false,  disabled: false,    xtype: 'textfield'        },
            { name: 'state_code',                     fieldLabel: this.state_codeLabel,                 allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'zip',                            fieldLabel: this.zipLabel,                        allowBlank: false,  disabled: false,    xtype: 'textfield'        },
            { name: 'country',                        fieldLabel: this.countryLabel,                    allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'latitude',                       fieldLabel: this.latitudeLabel,                   allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'longitude',                      fieldLabel: this.longitudeLabel,                  allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'phone',                          fieldLabel: this.phoneLabel,                      allowBlank: false,  disabled: false,    xtype: 'textfield'        },
            { name: 'fax',                            fieldLabel: this.faxLabel,                        allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'EOQ Calculation Attributes',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'beta_factor',                    fieldLabel: this.beta_factorLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'demand_filter',                  fieldLabel: this.demand_filterLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'tracking_signal',                fieldLabel: this.tracking_signalLabel,            allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'purchase_order_header_cost',     fieldLabel: this.purchase_order_header_costLabel, allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'carrying_cost_percent',          fieldLabel: this.carrying_cost_percentLabel,      allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
