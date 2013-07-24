Ext.define('Omni.view.sites.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-sites-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      site_nameLabel:                             Omni.i18n.model.Site.site_name,
      parent_site_idLabel:                        Omni.i18n.model.Site.parent_site_id,
      school_nbrLabel:                            Omni.i18n.model.Site.school_nbr,
      descriptionLabel:                           Omni.i18n.model.Site.description,
      short_nameLabel:                            Omni.i18n.model.Site.short_name,
      concatenated_nameLabel:                     Omni.i18n.model.Site.concatenated_name,
      site_typeLabel:                             Omni.i18n.model.Site.site_type,
      location_idLabel:                           Omni.i18n.model.Site.location_id,
      is_on_webLabel:                             Omni.i18n.model.Site.is_on_web,
      gradesetLabel:                              Omni.i18n.model.Site.gradeset,
      site_genderLabel:                           Omni.i18n.model.Site.site_gender,
      line_1Label:                                Omni.i18n.model.Site.line_1,
      line_2Label:                                Omni.i18n.model.Site.line_2,
      line_3Label:                                Omni.i18n.model.Site.line_3,
      line_4Label:                                Omni.i18n.model.Site.line_4,
      cityLabel:                                  Omni.i18n.model.Site.city,
      state_codeLabel:                            Omni.i18n.model.Site.state_code,
      zipLabel:                                   Omni.i18n.model.Site.zip,
      countryLabel:                               Omni.i18n.model.Site.country,
      latitudeLabel:                              Omni.i18n.model.Site.latitude,
      longitudeLabel:                             Omni.i18n.model.Site.longitude,
      phoneLabel:                                 Omni.i18n.model.Site.phone,
      faxLabel:                                   Omni.i18n.model.Site.fax
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
            { name: 'site_name',                      fieldLabel: this.site_nameLabel,                  allowBlank: false,  disabled: false,    xtype: 'textfield'        },
            { name: 'parent_site_id',                 fieldLabel: this.parent_site_idLabel,             allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Site',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'site_id', itemTpl:'{display}' },
            { name: 'school_nbr',                     fieldLabel: this.school_nbrLabel,                 allowBlank: false,  disabled: false,    xtype: 'textfield'        },
            { name: 'description',                    fieldLabel: this.descriptionLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'short_name',                     fieldLabel: this.short_nameLabel,                 allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'concatenated_name',              fieldLabel: this.concatenated_nameLabel,          allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'site_type',                      fieldLabel: this.site_typeLabel,                  allowBlank: false,  disabled: false,    xtype: 'buildit-Lookup',      category:   'SITE_TYPE' },
            { name: 'location_id',                    fieldLabel: this.location_idLabel,                allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Location',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'location_id', itemTpl:'{display}' },
            { name: 'is_on_web',                      fieldLabel: this.is_on_webLabel,                  allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'gradeset',                       fieldLabel: this.gradesetLabel,                   allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'GRADESET' },
            { name: 'site_gender',                    fieldLabel: this.site_genderLabel,                allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'SITE_GENDER' }
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
            { name: 'state_code',                     fieldLabel: this.state_codeLabel,                 allowBlank: true,   disabled: true,     xtype: 'buildit-Lookup',      category:   'STATE_CODE' },
            { name: 'zip',                            fieldLabel: this.zipLabel,                        allowBlank: false,  disabled: false,    xtype: 'textfield'        },
            { name: 'country',                        fieldLabel: this.countryLabel,                    allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'latitude',                       fieldLabel: this.latitudeLabel,                   allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'longitude',                      fieldLabel: this.longitudeLabel,                  allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'phone',                          fieldLabel: this.phoneLabel,                      allowBlank: false,  disabled: false,    xtype: 'textfield'        },
            { name: 'fax',                            fieldLabel: this.faxLabel,                        allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
