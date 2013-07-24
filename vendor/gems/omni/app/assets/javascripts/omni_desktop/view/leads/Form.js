Ext.define('Omni.view.leads.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-leads-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'lead_id',
      value:      this.record.get('lead_id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      lead_idLabel:                           Omni.i18n.model.Lead.lead_id,    
      is_destroyedLabel:                      Omni.i18n.model.Lead.is_destroyed,    
      master_record_idLabel:                  Omni.i18n.model.Lead.master_record_id,    
      salutationLabel:                        Omni.i18n.model.Lead.salutation,    
      first_nameLabel:                        Omni.i18n.model.Lead.first_name,    
      last_nameLabel:                         Omni.i18n.model.Lead.last_name,    
      titleLabel:                             Omni.i18n.model.Lead.title,    
      companyLabel:                           Omni.i18n.model.Lead.company,    
      streetLabel:                            Omni.i18n.model.Lead.street,    
      cityLabel:                              Omni.i18n.model.Lead.city,    
      state_provinceLabel:                    Omni.i18n.model.Lead.state_province,    
      postal_codeLabel:                       Omni.i18n.model.Lead.postal_code,    
      countryLabel:                           Omni.i18n.model.Lead.country,    
      latitudeLabel:                          Omni.i18n.model.Lead.latitude,    
      longitudeLabel:                         Omni.i18n.model.Lead.longitude,    
      phoneLabel:                             Omni.i18n.model.Lead.phone,    
      mobile_phoneLabel:                      Omni.i18n.model.Lead.mobile_phone,    
      faxLabel:                               Omni.i18n.model.Lead.fax,    
      emailLabel:                             Omni.i18n.model.Lead.email,    
      websiteLabel:                           Omni.i18n.model.Lead.website,    
      descriptionLabel:                       Omni.i18n.model.Lead.description,    
      lead_sourceLabel:                       Omni.i18n.model.Lead.lead_source,    
      stateLabel:                             Omni.i18n.model.Lead.state,    
      industryLabel:                          Omni.i18n.model.Lead.industry,    
      ratingLabel:                            Omni.i18n.model.Lead.rating,    
      annual_revenueLabel:                    Omni.i18n.model.Lead.annual_revenue,    
      employeesLabel:                         Omni.i18n.model.Lead.employees,    
      owner_idLabel:                          Omni.i18n.model.Lead.owner_id,    
      is_opted_out_emailLabel:                Omni.i18n.model.Lead.is_opted_out_email,    
      is_convertedLabel:                      Omni.i18n.model.Lead.is_converted,    
      converted_dateLabel:                    Omni.i18n.model.Lead.converted_date,    
      converted_account_idLabel:              Omni.i18n.model.Lead.converted_account_id,    
      converted_contact_idLabel:              Omni.i18n.model.Lead.converted_contact_id,    
      converted_opportunity_idLabel:          Omni.i18n.model.Lead.converted_opportunity_id,    
      is_unread_by_ownerLabel:                Omni.i18n.model.Lead.is_unread_by_owner,    
      created_dateLabel:                      Omni.i18n.model.Lead.created_date,    
      created_by_idLabel:                     Omni.i18n.model.Lead.created_by_id,    
      last_modified_dateLabel:                Omni.i18n.model.Lead.last_modified_date,    
      last_modified_by_idLabel:               Omni.i18n.model.Lead.last_modified_by_id,    
      system_mod_dateLabel:                   Omni.i18n.model.Lead.system_mod_date,    
      last_activity_dateLabel:                Omni.i18n.model.Lead.last_activity_date,    
      is_do_not_callLabel:                    Omni.i18n.model.Lead.is_do_not_call,    
      is_opted_out_faxLabel:                  Omni.i18n.model.Lead.is_opted_out_fax,    
      last_transfer_dateLabel:                Omni.i18n.model.Lead.last_transfer_date,    
      jigsawLabel:                            Omni.i18n.model.Lead.jigsaw,    
      jigsaw_contact_idLabel:                 Omni.i18n.model.Lead.jigsaw_contact_id,    
      email_bounce_reasonLabel:               Omni.i18n.model.Lead.email_bounce_reason,    
      email_bounce_dateLabel:                 Omni.i18n.model.Lead.email_bounce_date,    
      correlation_idLabel:                    Omni.i18n.model.Lead.correlation_id,    
      correlation_dataLabel:                  Omni.i18n.model.Lead.correlation_data,    
      web_sourceLabel:                        Omni.i18n.model.Lead.web_source,    
      low_gradeLabel:                         Omni.i18n.model.Lead.low_grade,    
      high_gradeLabel:                        Omni.i18n.model.Lead.high_grade,    
      enrollmentLabel:                        Omni.i18n.model.Lead.enrollment,    
      current_vendorLabel:                    Omni.i18n.model.Lead.current_vendor,    
      denominationLabel:                      Omni.i18n.model.Lead.denomination,    
      territoryLabel:                         Omni.i18n.model.Lead.territory,    
      sales_repLabel:                         Omni.i18n.model.Lead.sales_rep,    
      countyLabel:                            Omni.i18n.model.Lead.county,    
      contract_termLabel:                     Omni.i18n.model.Lead.contract_term,    
      expiration_dateLabel:                   Omni.i18n.model.Lead.expiration_date,    
      plaidLabel:                             Omni.i18n.model.Lead.plaid,    
      notesLabel:                             Omni.i18n.model.Lead.notes,    
      samplesLabel:                           Omni.i18n.model.Lead.samples,    
      date_last_verifiedLabel:                Omni.i18n.model.Lead.date_last_verified,    
      lead_typeLabel:                         Omni.i18n.model.Lead.lead_type,    
      charter_numberLabel:                    Omni.i18n.model.Lead.charter_number,    
      districtLabel:                          Omni.i18n.model.Lead.district,    
      regionLabel:                            Omni.i18n.model.Lead.region    
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

            { xtype: 'textfield', name: 'lead_id',                        fieldLabel: this.lead_idLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'is_destroyed',                   fieldLabel: this.is_destroyedLabel                , allowBlank: false },    
            { xtype: 'textfield', name: 'master_record_id',               fieldLabel: this.master_record_idLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'salutation',                     fieldLabel: this.salutationLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'first_name',                     fieldLabel: this.first_nameLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'last_name',                      fieldLabel: this.last_nameLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'title',                          fieldLabel: this.titleLabel                       , allowBlank: false },    
            { xtype: 'textfield', name: 'company',                        fieldLabel: this.companyLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'street',                         fieldLabel: this.streetLabel                      , allowBlank: false },    
            { xtype: 'textfield', name: 'city',                           fieldLabel: this.cityLabel                        , allowBlank: false },    
            { xtype: 'textfield', name: 'state_province',                 fieldLabel: this.state_provinceLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'postal_code',                    fieldLabel: this.postal_codeLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'country',                        fieldLabel: this.countryLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'latitude',                       fieldLabel: this.latitudeLabel                    , allowBlank: false },    
            { xtype: 'textfield', name: 'longitude',                      fieldLabel: this.longitudeLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'phone',                          fieldLabel: this.phoneLabel                       , allowBlank: false },    
            { xtype: 'textfield', name: 'mobile_phone',                   fieldLabel: this.mobile_phoneLabel                , allowBlank: false },    
            { xtype: 'textfield', name: 'fax',                            fieldLabel: this.faxLabel                         , allowBlank: false },    
            { xtype: 'textfield', name: 'email',                          fieldLabel: this.emailLabel                       , allowBlank: false },    
            { xtype: 'textfield', name: 'website',                        fieldLabel: this.websiteLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'description',                    fieldLabel: this.descriptionLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'lead_source',                    fieldLabel: this.lead_sourceLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'state',                          fieldLabel: this.stateLabel                       , allowBlank: false },    
            { xtype: 'textfield', name: 'industry',                       fieldLabel: this.industryLabel                    , allowBlank: false },    
            { xtype: 'textfield', name: 'rating',                         fieldLabel: this.ratingLabel                      , allowBlank: false },    
            { xtype: 'textfield', name: 'annual_revenue',                 fieldLabel: this.annual_revenueLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'employees',                      fieldLabel: this.employeesLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'owner_id',                       fieldLabel: this.owner_idLabel                    , allowBlank: false },    
            { xtype: 'textfield', name: 'is_opted_out_email',             fieldLabel: this.is_opted_out_emailLabel          , allowBlank: false },    
            { xtype: 'textfield', name: 'is_converted',                   fieldLabel: this.is_convertedLabel                , allowBlank: false },    
            { xtype: 'textfield', name: 'converted_date',                 fieldLabel: this.converted_dateLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'converted_account_id',           fieldLabel: this.converted_account_idLabel        , allowBlank: false },    
            { xtype: 'textfield', name: 'converted_contact_id',           fieldLabel: this.converted_contact_idLabel        , allowBlank: false },    
            { xtype: 'textfield', name: 'converted_opportunity_id',       fieldLabel: this.converted_opportunity_idLabel    , allowBlank: false },    
            { xtype: 'textfield', name: 'is_unread_by_owner',             fieldLabel: this.is_unread_by_ownerLabel          , allowBlank: false },    
            { xtype: 'textfield', name: 'created_date',                   fieldLabel: this.created_dateLabel                , allowBlank: false },    
            { xtype: 'textfield', name: 'created_by_id',                  fieldLabel: this.created_by_idLabel               , allowBlank: false },    
            { xtype: 'textfield', name: 'last_modified_date',             fieldLabel: this.last_modified_dateLabel          , allowBlank: false },    
            { xtype: 'textfield', name: 'last_modified_by_id',            fieldLabel: this.last_modified_by_idLabel         , allowBlank: false },    
            { xtype: 'textfield', name: 'system_mod_date',                fieldLabel: this.system_mod_dateLabel             , allowBlank: false },    
            { xtype: 'textfield', name: 'last_activity_date',             fieldLabel: this.last_activity_dateLabel          , allowBlank: false },    
            { xtype: 'textfield', name: 'is_do_not_call',                 fieldLabel: this.is_do_not_callLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'is_opted_out_fax',               fieldLabel: this.is_opted_out_faxLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'last_transfer_date',             fieldLabel: this.last_transfer_dateLabel          , allowBlank: false },    
            { xtype: 'textfield', name: 'jigsaw',                         fieldLabel: this.jigsawLabel                      , allowBlank: false },    
            { xtype: 'textfield', name: 'jigsaw_contact_id',              fieldLabel: this.jigsaw_contact_idLabel           , allowBlank: false },    
            { xtype: 'textfield', name: 'email_bounce_reason',            fieldLabel: this.email_bounce_reasonLabel         , allowBlank: false },    
            { xtype: 'textfield', name: 'email_bounce_date',              fieldLabel: this.email_bounce_dateLabel           , allowBlank: false },    
            { xtype: 'textfield', name: 'correlation_id',                 fieldLabel: this.correlation_idLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'correlation_data',               fieldLabel: this.correlation_dataLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'web_source',                     fieldLabel: this.web_sourceLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'low_grade',                      fieldLabel: this.low_gradeLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'high_grade',                     fieldLabel: this.high_gradeLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'enrollment',                     fieldLabel: this.enrollmentLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'current_vendor',                 fieldLabel: this.current_vendorLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'denomination',                   fieldLabel: this.denominationLabel                , allowBlank: false },    
            { xtype: 'textfield', name: 'territory',                      fieldLabel: this.territoryLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'sales_rep',                      fieldLabel: this.sales_repLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'county',                         fieldLabel: this.countyLabel                      , allowBlank: false },    
            { xtype: 'textfield', name: 'contract_term',                  fieldLabel: this.contract_termLabel               , allowBlank: false },    
            { xtype: 'textfield', name: 'expiration_date',                fieldLabel: this.expiration_dateLabel             , allowBlank: false },    
            { xtype: 'textfield', name: 'plaid',                          fieldLabel: this.plaidLabel                       , allowBlank: false },    
            { xtype: 'textfield', name: 'notes',                          fieldLabel: this.notesLabel                       , allowBlank: false },    
            { xtype: 'textfield', name: 'samples',                        fieldLabel: this.samplesLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'date_last_verified',             fieldLabel: this.date_last_verifiedLabel          , allowBlank: false },    
            { xtype: 'textfield', name: 'lead_type',                      fieldLabel: this.lead_typeLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'charter_number',                 fieldLabel: this.charter_numberLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'district',                       fieldLabel: this.districtLabel                    , allowBlank: false },    
            { xtype: 'textfield', name: 'region',                         fieldLabel: this.regionLabel                      , allowBlank: false }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Leads',
      newTitle: 'New Lead',
      newSubtitle: 'Complete the following to create a new Lead'
    });
    // TITLES (End)

    this.callParent();
    
  }

});